import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import MemoryStore from "memorystore";

const SessionStore = MemoryStore(session);

export async function registerRoutes(app: Express): Promise<Server> {
  // Session setup
  app.use(session({
    store: new SessionStore({
      checkPeriod: 86400000 // Prune expired entries every 24h
    }),
    secret: process.env.SESSION_SECRET || 'worksta-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' }
  }));

  // Passport setup
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        return done(null, false, { message: "Invalid credentials" });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));

  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    }, async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await storage.getUserByEmail(profile.emails?.[0]?.value);
        
        if (!user) {
          user = await storage.createUser({
            username: profile.emails?.[0]?.value?.split('@')[0] || '',
            email: profile.emails?.[0]?.value || '',
            name: profile.displayName,
            password: '', // Google auth doesn't need password
            userType: 'worker' // Default type, can be updated later
          });
        }
        
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }));
  }

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Auth routes
  app.post("/api/users/register", async (req, res) => {
    try {
      const userData = req.body;
      const user = await storage.createUser(userData);
      
      const { password, ...userResponse } = user;
      res.status(201).json(userResponse);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  });

  app.post("/api/users/login", passport.authenticate('local'), (req, res) => {
    const { password, ...user } = req.user as any;
    res.json(user);
  });

  app.get("/auth/google", passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get("/auth/google/callback", 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.post("/api/users/logout", (req, res) => {
    req.logout(() => {
      res.json({ message: "Logged out successfully" });
    });
  });

  // Protected route example
  app.get("/api/me", (req, res) => {
    if (!req.user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const { password, ...user } = req.user as any;
    res.json(user);
  });

  // Mock data routes
  app.get("/api/shifts", async (req, res) => {
    res.json([
      {
        id: 1,
        businessId: 1,
        businessName: "Clos Pasoh",
        businessType: "French Restaurant",
        location: "Outram Park",
        role: "Server",
        hourlyRate: 16,
        shifts: 10,
        imageUrl: "https://images.unsplash.com/photo-1559305616-3f99cd43e353",
        logoUrl: "https://www.staffie.app/static/clos-pasoh-aa7138b998ada3b2496745db10302698.jpg",
        rating: 4.5,
        distance: "1.2 km",
        date: "Sat, Apr 20",
        requirements: ["Black uniform", "Prior experience"],
        featured: true,
        perks: ["Free meals", "Transport allowance"]
      },
      {
        id: 2,
        businessId: 2,
        businessName: "Harry's Chijmes",
        businessType: "Bar",
        location: "City Hall",
        role: "Server",
        hourlyRate: 14,
        shifts: 9,
        imageUrl: "https://www.staffie.app/static/harry-chijmes-0714ead2ea09babfce9705f19192c2ed.jpeg",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg",
        rating: 4.8,
        distance: "3.5 km",
        date: "Mon, Apr 22",
        requirements: ["Smart casual attire", "F&B experience"],
        perks: ["Performance bonus", "Flexible hours"]
      },
      {
        id: 3,
        businessId: 3,
        businessName: "Super Loco",
        businessType: "Mexican Restaurant",
        location: "Robertson Quay",
        role: "Server",
        hourlyRate: 13,
        shifts: 14,
        imageUrl: "https://www.staffie.app/static/super-loco-db744603ff84a7de15636874ceacb705.jpeg",
        logoUrl: "https://www.super-loco.com/wp-content/uploads/2022/06/Super-Loco-Logo.png",
        rating: 4.7,
        distance: "0.8 km",
        date: "Tue, Apr 16",
        requirements: ["Customer service skills", "English proficiency"],
        perks: ["Team events", "Career growth"]
      }
    ]);
  });

  app.get("/api/partners", async (req, res) => {
    res.json([
      {
        id: 1,
        name: "Harry's Singapore",
        description: "One of Singapore's most established bar and dining chains",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Harry%27s_Restaurant_Logo.jpg",
        rating: 4.8,
        locations: 20,
        founded: "1992"
      },
      {
        id: 2,
        name: "Burnt Ends",
        description: "One-Michelin-starred modern Australian barbecue restaurant",
        logoUrl: "https://burntends.com.sg/wp-content/uploads/2015/02/burntendslogo.png",
        rating: 4.9,
        locations: 1,
        founded: "2013"
      },
      {
        id: 3,
        name: "Raffles Hotel",
        description: "Iconic colonial-style luxury hotel",
        logoUrl: "https://seeklogo.com/images/R/raffles-hotel-singapore-logo-A8D12E58BD-seeklogo.com.png",
        rating: 4.9,
        locations: 1,
        founded: "1887"
      },
      {
        id: 4,
        name: "Atlas Bar",
        description: "Art Deco-inspired grand lobby and bar",
        logoUrl: "https://assets.website-files.com/61cd08286c9cafd5eb4ca1f4/61cfe51e9f11fb2d8e342f55_Atlas%20logo.png",
        rating: 4.7,
        locations: 1,
        founded: "2017"
      },
      {
        id: 5,
        name: "Culina",
        description: "Premium gourmet food marketplace and bistro",
        logoUrl: "https://www.culinaatyork.com.sg/images/logo-black.png",
        rating: 4.8,
        locations: 2,
        founded: "2012"
      }
    ]);
  });

  const httpServer = createServer(app);
  return httpServer;
}
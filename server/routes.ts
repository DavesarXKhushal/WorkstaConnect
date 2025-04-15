import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for users
  app.post("/api/users/register", async (req, res) => {
    try {
      const userData = req.body;
      const user = await storage.createUser(userData);
      
      // Don't return the password
      const { password, ...userResponse } = user;
      res.status(201).json(userResponse);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  });

  app.post("/api/users/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // Don't return the password
      const { password: _, ...userResponse } = user;
      res.status(200).json(userResponse);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  });

  // Mock routes for sample data
  app.get("/api/shifts", async (req, res) => {
    // Return a simple static response for now
    res.json([
      {
        id: 1,
        businessId: 1,
        businessName: "Fine Dining Restaurant",
        businessType: "French Restaurant",
        location: "Orchard Road",
        role: "Server",
        hourlyRate: 16,
        shifts: 10,
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
      },
      {
        id: 2,
        businessId: 2,
        businessName: "City Bar",
        businessType: "Bar",
        location: "City Hall",
        role: "Server",
        hourlyRate: 14,
        shifts: 9,
        imageUrl: "https://images.unsplash.com/photo-1470337458703-46ad1756a187"
      },
      {
        id: 3,
        businessId: 3,
        businessName: "Bistro Deluxe",
        businessType: "Mexican Restaurant",
        location: "Robertson Quay",
        role: "Server",
        hourlyRate: 13,
        shifts: 14,
        imageUrl: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
      }
    ]);
  });

  app.get("/api/partners", async (req, res) => {
    res.json([
      { id: 1, name: "Restaurant A", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
      { id: 2, name: "Restaurant B", imageUrl: "https://images.unsplash.com/photo-1598716159546-7889ac59fac0" },
      { id: 3, name: "Restaurant C", imageUrl: "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a" },
      { id: 4, name: "Restaurant D", imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
      { id: 5, name: "Restaurant E", imageUrl: "https://images.unsplash.com/photo-1593504049359-74330189a345" }
    ]);
  });

  const httpServer = createServer(app);

  return httpServer;
}

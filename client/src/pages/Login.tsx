import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "@/components/ui/logo";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, User, Lock, ArrowRight } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [_, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  // Animate in content once component mounts
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginFormValues) => {
      const res = await apiRequest("POST", "/api/users/login", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Login successful",
        description: "You have been logged in successfully.",
      });
      setLocation("/");
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements in background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-50 rounded-full opacity-70"></div>
        <div className="absolute right-1/3 top-1/3 w-40 h-40 bg-yellow-50 rounded-full opacity-50"></div>
        <div className="absolute left-1/4 bottom-1/4 w-60 h-60 bg-green-50 rounded-full opacity-50"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-50 rounded-full opacity-40"></div>
        
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-primary rounded-full animate-float opacity-20"></div>
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-float-delayed opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-green-400 rounded-full animate-float-slow opacity-20"></div>
      </div>
      
      <div className={`relative z-10 w-full max-w-md transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="text-center mb-8">
          <Logo size="large" showText={true} className="inline-block" />
        </div>
        
        <Card className="w-full shadow-lg border-0 backdrop-blur-sm bg-white/90">
          <CardHeader className="space-y-1 pb-2">
            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Log in to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <User size={18} />
                          </div>
                          <Input 
                            placeholder="Enter your username" 
                            className="pl-10 focus:ring-2 focus:ring-primary/20 transition-all" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <Lock size={18} />
                          </div>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 focus:ring-2 focus:ring-primary/20 transition-all"
                            {...field}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-gray-900 hover:bg-primary/90 font-medium text-base py-6 group relative overflow-hidden"
                    disabled={loginMutation.isPending}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loginMutation.isPending ? "Logging in..." : "Log in"}
                      <ArrowRight size={18} className="inline-block ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t border-gray-100 pt-4 mt-2">
            <div className="text-sm text-center">
              <Link href="/forgot-password" className="text-gray-600 hover:text-primary transition-colors">
                Forgot your password?
              </Link>
            </div>
            <div className="text-sm text-center">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;

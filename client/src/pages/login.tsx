import { useState } from "react";
import { useLocation, Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, ArrowRight } from "lucide-react";
import { useAuth } from "@/lib/auth";

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (role: string) => {
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setIsLoading(false);
      login(role as any);
      setLocation(`/${role}`);
    }, 800);
  };

  const roles = [
    { id: "admin", label: "Admin", description: "Manage platform and users" },
    { id: "donor", label: "Food Donor", description: "List surplus food items" },
    { id: "recipient", label: "Recipient", description: "Request food donations" },
    { id: "analyst", label: "Analyst", description: "Track impact and data" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 p-4 font-sans">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/">
            <a className="inline-flex items-center gap-2 font-heading font-bold text-3xl text-primary mb-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl">
                <Leaf size={24} fill="currentColor" />
              </div>
              SustainShare
            </a>
          </Link>
          <p className="text-muted-foreground">Sign in to your portal to continue</p>
        </div>

        <Card className="border-border/50 shadow-xl">
          <CardHeader>
            <CardTitle className="font-heading text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Select your role to access your personalized dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="donor" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="donor">Donor / Recipient</TabsTrigger>
                <TabsTrigger value="staff">Staff / Admin</TabsTrigger>
              </TabsList>

              <TabsContent value="donor" className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {roles.slice(1, 3).map((role) => (
                    <Button
                      key={role.id}
                      variant="outline"
                      className="h-auto py-4 px-6 flex flex-col items-start gap-1 text-left hover:border-primary/50 hover:bg-primary/5 transition-all"
                      onClick={() => handleLogin(role.id)}
                      disabled={isLoading}
                    >
                      <div className="flex w-full justify-between items-center">
                        <span className="font-heading font-bold text-base">{role.label}</span>
                        <ArrowRight size={16} className="text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">{role.description}</span>
                    </Button>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="staff" className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {roles.filter(r => r.id === 'admin' || r.id === 'analyst').map((role) => (
                    <Button
                      key={role.id}
                      variant="outline"
                      className="h-auto py-4 px-6 flex flex-col items-start gap-1 text-left hover:border-primary/50 hover:bg-primary/5 transition-all"
                      onClick={() => handleLogin(role.id)}
                      disabled={isLoading}
                    >
                      <div className="flex w-full justify-between items-center">
                        <span className="font-heading font-bold text-base">{role.label}</span>
                        <ArrowRight size={16} className="text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">{role.description}</span>
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or sign in with email</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@organization.org" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Button variant="link" className="px-0 h-auto text-xs text-primary">Forgot password?</Button>
                </div>
                <Input id="password" type="password" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full font-heading text-lg h-12" onClick={() => handleLogin('donor')} disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button variant="link" className="p-0 h-auto text-primary font-bold">Register your organization</Button>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

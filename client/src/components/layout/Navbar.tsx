import { Link, useLocation } from "wouter";
import { Leaf, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/lib/auth";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setLocation("/");
  };

  const allNavItems = [
    { label: "Home", href: "/", roles: ["all"] },
    { label: "Admin", href: "/admin", roles: ["admin"] },
    { label: "Donor", href: "/donor", roles: ["donor"] },
    { label: "Recipient", href: "/recipient", roles: ["recipient"] },
    { label: "Analyst", href: "/analyst", roles: ["analyst"] },
  ];

  const navItems = allNavItems.filter(item => 
    item.roles.includes("all") || (user && user.role && item.roles.includes(user.role))
  );

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 font-heading font-bold text-xl text-primary hover:opacity-80 transition-opacity">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
              <Leaf size={20} fill="currentColor" />
            </div>
            SustainShare
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
          
          {user ? (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="ml-2 text-muted-foreground hover:text-destructive flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          ) : (
            <Link href="/login">
              <Button size="sm" className="ml-2 font-heading">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        location === item.href
                          ? "text-primary font-bold"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                
                {user ? (
                  <Button 
                    variant="destructive" 
                    className="w-full mt-4" 
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                ) : (
                  <Link href="/login">
                    <Button className="w-full font-heading" onClick={() => setIsOpen(false)}>Login</Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

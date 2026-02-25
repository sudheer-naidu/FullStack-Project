import Navbar from "@/components/layout/Navbar";
import RoleCard from "@/components/home/RoleCard";
import { Users, Truck, HeartHandshake, BarChart3, ArrowRight, Leaf, Recycle, Globe, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-food-share.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Fighting Food Waste Together
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] tracking-tight text-foreground">
              Share Food, <br />
              <span className="text-primary">Save the Planet.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Connect surplus food with communities in need. Join our network of donors, recipients, and volunteers to create a sustainable future.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full font-heading">
                Start Donating
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full font-heading border-2">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold font-heading text-foreground">2.5k+</p>
                <p className="text-muted-foreground text-sm">Meals Saved</p>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div>
                <p className="text-3xl font-bold font-heading text-foreground">150+</p>
                <p className="text-muted-foreground text-sm">Partners</p>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div>
                <p className="text-3xl font-bold font-heading text-foreground">850kg</p>
                <p className="text-muted-foreground text-sm">CO2 Reduced</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[2rem] blur-3xl opacity-50"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50">
               <img 
                 src={heroImage} 
                 alt="Community sharing food" 
                 className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
               />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 max-w-[200px] animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Leaf size={16} />
                </div>
                <span className="font-bold text-sm">Just Donated</span>
              </div>
              <p className="text-xs text-muted-foreground">Local Bakery shared 50 loaves of fresh bread.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="bg-secondary/30 py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">
              Choose Your Impact Path
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you have food to give, need resources, or want to help manage the flow, there's a role for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RoleCard 
              title="Admin" 
              description="Manage platform content, oversee interactions, and ensure integrity."
              icon={Users}
              href="/admin"
              colorClass="bg-blue-600"
            />
            <RoleCard 
              title="Food Donor" 
              description="List surplus food, coordinate pickups, and track your environmental impact."
              icon={HeartHandshake}
              href="/donor"
              colorClass="bg-emerald-600"
            />
            <RoleCard 
              title="Recipient Org" 
              description="Browse available donations, request food, and manage distribution."
              icon={Truck}
              href="/recipient"
              colorClass="bg-orange-500"
            />
            <RoleCard 
              title="Data Analyst" 
              description="Track trends, analyze waste reduction data, and generate reports."
              icon={BarChart3}
              href="/analyst"
              colorClass="bg-purple-600"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-foreground">How SustainShare Works</h2>
             <p className="text-muted-foreground text-lg">A simple cycle to reduce waste and feed communities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                <Recycle size={40} />
              </div>
              <h3 className="text-xl font-bold font-heading">1. List Surplus</h3>
              <p className="text-muted-foreground">Donors easily list surplus food items, specifying quantity and expiry.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-2">
                <Globe size={40} />
              </div>
              <h3 className="text-xl font-bold font-heading">2. Connect & Claim</h3>
              <p className="text-muted-foreground">Recipient organizations are notified and can claim items instantly.</p>
            </div>
             <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-bold font-heading">3. Safe Transfer</h3>
              <p className="text-muted-foreground">Secure pickup protocols ensure food safety and tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">Community Stories</h2>
           <div className="grid md:grid-cols-2 gap-8">
             <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
               <CardContent className="pt-6">
                 <p className="text-lg italic mb-6">"SustainShare helped us divert over 500kg of perfectly good bread from the landfill to local shelters in just one month. It's incredibly easy to use."</p>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">JD</div>
                   <div>
                     <p className="font-bold">John Doe</p>
                     <p className="text-sm opacity-70">Manager, City Bakery</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
             <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
               <CardContent className="pt-6">
                 <p className="text-lg italic mb-6">"As a small shelter, sourcing fresh produce was always a challenge. Now, we get notifications daily and can provide balanced meals."</p>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">JS</div>
                   <div>
                     <p className="font-bold">Jane Smith</p>
                     <p className="text-sm opacity-70">Director, Hope Center</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 mt-auto">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-heading font-bold text-2xl mb-4 text-primary">
              <Leaf /> SustainShare
            </div>
            <p className="text-muted-foreground max-w-sm">
              Empowering communities to fight food waste through technology and connection.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-heading">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 font-heading">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-muted-foreground text-sm">
          © 2024 SustainShare. Built with Replit.
        </div>
      </footer>
    </div>
  );
}

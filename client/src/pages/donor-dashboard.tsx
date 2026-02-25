import Navbar from "@/components/layout/Navbar";
import StatsCard from "@/components/dashboard/StatsCard";
import DonationCard, { DonationItem } from "@/components/donations/DonationCard";
import { Plus, Package, Calendar, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function DonorDashboard() {
  const mockDonations: DonationItem[] = [
    {
      id: "1",
      title: "Fresh Sourdough Bread",
      type: "Bakery",
      quantity: "15 loaves",
      location: "Main St. Bakery",
      expiresIn: "24 hours",
      donorName: "You",
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "2",
      title: "Assorted Vegetables",
      type: "Produce",
      quantity: "50 kg",
      location: "Community Garden",
      expiresIn: "3 days",
      donorName: "You",
      status: "reserved",
      imageUrl: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "3",
      title: "Canned Soup Cases",
      type: "Canned Goods",
      quantity: "20 cases",
      location: "City Market",
      expiresIn: "6 months",
      donorName: "You",
      status: "completed",
      imageUrl: "https://images.unsplash.com/photo-1584263347416-85a696b4ecd4?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Donor Dashboard</h1>
            <p className="text-muted-foreground">Manage your donations and track your impact.</p>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button className="font-heading gap-2">
                <Plus size={18} /> New Donation
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto w-[400px] sm:w-[540px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="font-heading text-2xl">List Surplus Food</SheetTitle>
                <SheetDescription>
                  Provide details about the food you want to donate. Please ensure all items follow safety guidelines.
                </SheetDescription>
              </SheetHeader>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Item Title</Label>
                  <Input id="title" placeholder="e.g. 20 Baguettes" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bakery">Bakery</SelectItem>
                        <SelectItem value="produce">Produce</SelectItem>
                        <SelectItem value="dairy">Dairy</SelectItem>
                        <SelectItem value="canned">Canned Goods</SelectItem>
                        <SelectItem value="prepared">Prepared Meals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity (approx)</Label>
                    <Input id="quantity" placeholder="e.g. 5 kg" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="expiry">Best Before / Expiry</Label>
                  <Input id="expiry" type="datetime-local" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description & Handling</Label>
                  <Textarea id="description" placeholder="Any specific details about the condition or handling requirements." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Instructions</Label>
                  <Textarea id="pickup" placeholder="Where should the recipient go? Who to ask for?" />
                </div>
                
                <Button type="submit" className="w-full font-heading text-lg">Post Donation</Button>
              </form>
            </SheetContent>
          </Sheet>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard 
            title="Total Donated" 
            value="1,240 kg" 
            icon={Package} 
            trend="+12% from last month"
            trendUp={true}
          />
          <StatsCard 
            title="Meals Provided" 
            value="2,480" 
            icon={Activity}
            description="Equivalent meals served"
          />
          <StatsCard 
            title="CO2 Saved" 
            value="3.1 tons" 
            icon={Activity}
            trend="+5% from last month"
            trendUp={true}
          />
          <StatsCard 
            title="Active Listings" 
            value="3" 
            icon={Calendar}
            description="Currently available"
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="active">Active Listings</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Pickups</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDonations.filter(d => d.status === 'available').map(item => (
                <DonationCard key={item.id} item={item} variant="donor" actionLabel="Manage" />
              ))}
            </div>
            {mockDonations.filter(d => d.status === 'available').length === 0 && (
               <div className="text-center py-12 bg-secondary/20 rounded-lg border border-dashed border-secondary-foreground/20">
                 <p className="text-muted-foreground">No active listings. Start donating!</p>
               </div>
            )}
          </TabsContent>
          
          <TabsContent value="scheduled" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDonations.filter(d => d.status === 'reserved').map(item => (
                <DonationCard key={item.id} item={item} variant="donor" actionLabel="View Pickup Details" />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-6">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDonations.filter(d => d.status === 'completed').map(item => (
                <DonationCard key={item.id} item={item} variant="donor" actionLabel="View Impact" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

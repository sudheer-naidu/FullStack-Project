import Navbar from "@/components/layout/Navbar";
import DonationCard, { DonationItem } from "@/components/donations/DonationCard";
import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function RecipientDashboard() {
  const mockAvailable: DonationItem[] = [
    {
      id: "1",
      title: "Fresh Sourdough Bread",
      type: "Bakery",
      quantity: "15 loaves",
      location: "Main St. Bakery",
      expiresIn: "24 hours",
      donorName: "Artisan Breads Co.",
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "4",
      title: "Organic Apples",
      type: "Produce",
      quantity: "5 crates",
      location: "Green Valley Farm",
      expiresIn: "1 week",
      donorName: "Green Valley Farm",
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "5",
      title: "Prepared Sandwiches",
      type: "Prepared Meals",
      quantity: "30 units",
      location: "Corporate Catering",
      expiresIn: "4 hours",
      donorName: "Corp Catering",
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&q=80&w=800"
    },
     {
      id: "6",
      title: "Milk Cartons",
      type: "Dairy",
      quantity: "50 liters",
      location: "Local Grocer",
      expiresIn: "3 days",
      donorName: "Fresh Mart",
      status: "available",
      imageUrl: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-heading font-bold text-foreground">Find Food Donations</h1>
          <p className="text-muted-foreground">Browse available surplus food in your area.</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl border shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input className="pl-9" placeholder="Search food items..." />
          </div>
          
          <div className="relative w-full md:w-1/3">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input className="pl-9" placeholder="Location or Zip Code" />
          </div>
          
          <Button variant="outline" className="w-full md:w-auto gap-2">
            <Filter size={16} /> Filters
          </Button>
          
          <div className="hidden md:block flex-1"></div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
             <Badge variant="secondary" className="cursor-pointer hover:bg-primary/20">All</Badge>
             <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Produce</Badge>
             <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Bakery</Badge>
             <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">Prepared</Badge>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockAvailable.map(item => (
            <DonationCard 
              key={item.id} 
              item={item} 
              variant="recipient" 
              actionLabel="Request Item" 
              onAction={() => alert(`Requested ${item.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

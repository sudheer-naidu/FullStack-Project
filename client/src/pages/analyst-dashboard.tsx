import Navbar from "@/components/layout/Navbar";
import { CategoryPieChart, TopDonorsChart, WasteReductionChart } from "@/components/analyst/ImpactCharts";
import StatsCard from "@/components/dashboard/StatsCard";
import { Activity, TrendingDown, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AnalystDashboard() {
  return (
    <div className="min-h-screen bg-background pb-12">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Data Analytics</h1>
            <p className="text-muted-foreground">Track food waste trends and measure impact.</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download size={16} /> Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard 
            title="Total Waste Diverted" 
            value="15,420 kg" 
            icon={TrendingDown}
            trend="+12% YoY"
            trendUp={true}
          />
          <StatsCard 
            title="Active Participants" 
            value="1,245" 
            icon={Users}
            trend="+58 this month"
            trendUp={true}
          />
          <StatsCard 
            title="Carbon Offset" 
            value="38.5 tons" 
            icon={Leaf}
            description="CO2e prevented"
          />
          <StatsCard 
            title="Efficiency Rate" 
            value="94%" 
            icon={Activity}
            description="Donations matched vs posted"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <WasteReductionChart />
          <CategoryPieChart />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
           <TopDonorsChart />
           {/* Placeholder for Map or other complex viz */}
           <div className="bg-white rounded-xl border p-6 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="bg-secondary/30 p-4 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Impact Heatmap</h3>
              <p className="text-muted-foreground max-w-xs">Geographic visualization of food distribution is processing. Check back later.</p>
           </div>
        </div>
      </div>
    </div>
  );
}

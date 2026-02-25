import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const monthlyData = [
  { name: "Jan", waste: 400, saved: 240 },
  { name: "Feb", waste: 300, saved: 139 },
  { name: "Mar", waste: 200, saved: 980 },
  { name: "Apr", waste: 278, saved: 390 },
  { name: "May", waste: 189, saved: 480 },
  { name: "Jun", waste: 239, saved: 380 },
  { name: "Jul", waste: 349, saved: 430 },
];

const categoryData = [
  { name: "Produce", value: 400, color: "hsl(var(--chart-1))" },
  { name: "Bakery", value: 300, color: "hsl(var(--chart-2))" },
  { name: "Dairy", value: 300, color: "hsl(var(--chart-3))" },
  { name: "Prepared", value: 200, color: "hsl(var(--chart-4))" },
  { name: "Canned", value: 100, color: "hsl(var(--chart-5))" },
];

const donorData = [
  { name: "City Bakery", amount: 1200 },
  { name: "Green Farm", amount: 900 },
  { name: "Fresh Mart", amount: 850 },
  { name: "Corp Catering", amount: 600 },
  { name: "Local Cafe", amount: 400 },
];

export function WasteReductionChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Impact Over Time</CardTitle>
        <CardDescription>
          Comparison of potential waste vs. food saved (kg)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}kg`} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
              />
              <Area type="monotone" dataKey="saved" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorSaved)" />
              <Area type="monotone" dataKey="waste" stroke="hsl(var(--destructive))" fillOpacity={1} fill="url(#colorWaste)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function CategoryPieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donation Categories</CardTitle>
        <CardDescription>Distribution by food type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                 contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function TopDonorsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Donors</CardTitle>
        <CardDescription>Organizations leading the change (kg)</CardDescription>
      </CardHeader>
      <CardContent>
         <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={donorData} layout="vertical" margin={{ left: 20 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} axisLine={false} tickLine={false} />
              <Tooltip 
                 contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                 cursor={{fill: 'transparent'}}
              />
              <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

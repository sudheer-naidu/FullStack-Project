import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";

export default function AdminDashboard() {
  const users = [
    { id: 1, name: "City Bakery", role: "Donor", status: "Active", joinDate: "2023-10-15" },
    { id: 2, name: "Community Shelter", role: "Recipient", status: "Active", joinDate: "2023-11-02" },
    { id: 3, name: "Fresh Mart", role: "Donor", status: "Pending", joinDate: "2024-01-20" },
    { id: 4, name: "Helping Hands", role: "Recipient", status: "Suspended", joinDate: "2023-09-10" },
    { id: 5, name: "Green Valley Farm", role: "Donor", status: "Active", joinDate: "2023-12-05" },
  ];

  return (
    <div className="min-h-screen bg-background pb-12">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Admin Control Panel</h1>
            <p className="text-muted-foreground">Oversee platform activity and manage users.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard 
            title="Total Users" 
            value="2,450" 
            icon={Users}
            trend="+12 this week"
            trendUp={true}
          />
          <StatsCard 
            title="Pending Approvals" 
            value="15" 
            icon={AlertTriangle}
            description="Requires review"
          />
          <StatsCard 
            title="System Status" 
            value="Healthy" 
            icon={CheckCircle}
            trend="99.9% Uptime"
            trendUp={true}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Management Table */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent User Signups</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge variant={
                          user.status === "Active" ? "default" : 
                          user.status === "Pending" ? "secondary" : "destructive"
                        }>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.joinDate}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Quick Actions / Alerts */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pending Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-100">
                    <AlertTriangle className="text-red-500 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-medium text-sm text-red-900">Food Safety Concern</h4>
                      <p className="text-xs text-red-700 mt-1">Reported by Shelter A regarding donation #4023.</p>
                      <Button size="sm" variant="outline" className="mt-2 h-7 text-xs border-red-200 text-red-700 hover:bg-red-100">Investigate</Button>
                    </div>
                 </div>
                 <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                    <AlertTriangle className="text-yellow-600 mt-0.5" size={16} />
                    <div>
                      <h4 className="font-medium text-sm text-yellow-900">No Show - Pickup</h4>
                      <p className="text-xs text-yellow-700 mt-1">Donor reported no-show for Recipient #88.</p>
                      <Button size="sm" variant="outline" className="mt-2 h-7 text-xs border-yellow-200 text-yellow-700 hover:bg-yellow-100">Review</Button>
                    </div>
                 </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                 <CardTitle className="text-lg">Verification Queue</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs">Org</div>
                         <div className="text-sm font-medium">New Non-Profit {i}</div>
                      </div>
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50">
                        <CheckCircle size={16} />
                      </Button>
                   </div>
                 ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

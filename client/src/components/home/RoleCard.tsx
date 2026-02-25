import { LucideIcon, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface RoleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  colorClass: string;
}

export default function RoleCard({ title, description, icon: Icon, href, colorClass }: RoleCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden relative">
      <div className={`absolute top-0 left-0 w-1 h-full ${colorClass}`} />
      <CardHeader>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass.replace('bg-', 'bg-opacity-10 bg-')} text-foreground`}>
          <Icon size={24} className={colorClass.replace('bg-', 'text-')} />
        </div>
        <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter>
        <Link href={href}>
          <Button variant="ghost" className="w-full justify-between group-hover:bg-muted/50 font-heading">
            Enter Portal <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

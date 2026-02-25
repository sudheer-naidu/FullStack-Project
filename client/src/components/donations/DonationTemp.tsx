import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, MapPin, Scale } from "lucide-react";

export interface DonationItem {
  id: string;
  title: string;
  type: string;
  quantity: string;
  location: string;
  expiresIn: string;
  donorName: string;
  status?: "available" | "reserved" | "completed";
  imageUrl?: string;
}

interface DonationCardProps {
  item: DonationItem;
  onAction?: (id: string) => void;
  actionLabel?: string;
  variant?: "donor" | "recipient";
}

export default function DonationCard({ item, onAction, actionLabel = "View Details", variant = "recipient" }: DonationCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-muted">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary/30 text-muted-foreground">
            No Image
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant={item.status === "available" ? "default" : "secondary"} className={item.status === "available" ? "bg-primary hover:bg-primary/90" : ""}>
            {item.status || "Available"}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
             <h3 className="font-heading font-bold text-lg">{item.title}</h3>
             <p className="text-sm text-muted-foreground">{item.donorName}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Scale size={14} />
          <span>{item.quantity} • {item.type}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={14} />
          <span>{item.location}</span>
        </div>
        <div className="flex items-center gap-2 text-orange-600 font-medium">
          <Clock size={14} />
          <span>Expires in {item.expiresIn}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          className="w-full font-heading" 
          variant={variant === "donor" ? "outline" : "default"}
          onClick={() => onAction && onAction(item.id)}
        >
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}

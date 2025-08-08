import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Bell,
  MessageSquare,
  Calendar,
  ChevronDown,
  Globe
} from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="flex items-center justify-between h-16 px-6 mr-72">
        
        {/* Search Bar */}
        <div className="flex-1 max-w-lg ml-6">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="البحث في النظام..."
              className="pr-10 pl-4 h-10 bg-background/50 border-border/50 focus:border-primary transition-smooth"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          
          {/* Quick Stats */}
          <div className="hidden lg:flex items-center gap-4 ml-6">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">المخزون الإجمالي</p>
              <p className="text-sm font-semibold text-primary">2,847</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">الموظفين النشطين</p>
              <p className="text-sm font-semibold text-secondary">156</p>
            </div>
          </div>

          {/* Language Toggle */}
          <Button variant="ghost" size="sm" className="h-9 w-9">
            <Globe className="h-4 w-4" />
          </Button>

          {/* Calendar */}
          <Button variant="ghost" size="sm" className="h-9 w-9">
            <Calendar className="h-4 w-4" />
          </Button>

          {/* Messages */}
          <Button variant="ghost" size="sm" className="h-9 w-9 relative">
            <MessageSquare className="h-4 w-4" />
            <Badge variant="destructive" className="absolute -top-1 -left-1 h-5 w-5 p-0 text-xs">
              2
            </Badge>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="h-9 w-9 relative">
            <Bell className="h-4 w-4" />
            <Badge variant="destructive" className="absolute -top-1 -left-1 h-5 w-5 p-0 text-xs">
              5
            </Badge>
          </Button>

          {/* User Menu */}
          <Button variant="ghost" className="h-9 px-3 ml-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-semibold">أ.م</span>
              </div>
              <ChevronDown className="h-3 w-3" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
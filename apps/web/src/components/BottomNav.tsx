import {
    ChartColumnBig,
    User,
    Users,
    TrendingUp,
    ClipboardList
} from 'lucide-react';

export function BottomNav() {
    return (
        <nav className="md:hidden fixed bottom-6 left-4 right-4 sm:left-6 sm:right-6 z-50 flex h-16 items-center justify-around rounded-xl border bg-card px-1 shadow-sm">
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-primary transition-transform active:scale-95 gap-1">
                <ChartColumnBig className="size-5" />
                <span className="text-[11px] font-medium">Dashboard</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-muted-foreground/60 hover:text-foreground transition-all active:scale-95 gap-1">
                <User className="size-5" />
                <span className="text-[11px] font-medium">Usage</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-muted-foreground/60 hover:text-foreground transition-all active:scale-95 gap-1">
                <Users className="size-5" />
                <span className="text-[11px] font-medium">Audience</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-muted-foreground/60 hover:text-foreground transition-all active:scale-95 gap-1">
                <TrendingUp className="size-5" />
                <span className="text-[11px] font-medium">Traffic</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-muted-foreground/60 hover:text-foreground transition-all active:scale-95 gap-1">
                <ClipboardList className="size-5" />
                <span className="text-[11px] font-medium">Reports</span>
            </a>
        </nav>
    );
}

import {
    ChartColumnBig,
    User,
    Users,
    TrendingUp,
    ClipboardList
} from 'lucide-react';

export function BottomNav() {
    return (
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex h-16 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] items-center justify-around rounded-xl border bg-card px-1 shadow-sm">
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-primary transition-transform active:scale-95 gap-1">
                <ChartColumnBig className="size-5" />
                <span className="text-[10px] font-bold uppercase tracking-tight">Dash</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-muted-foreground/60 hover:text-foreground transition-all active:scale-95 gap-1">
                <User className="size-5" />
                <span className="text-[10px] font-bold uppercase tracking-tight">Usage</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-muted-foreground/60 hover:text-foreground transition-all active:scale-95 gap-1">
                <Users className="size-5" />
                <span className="text-[10px] font-bold uppercase tracking-tight">Audience</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-muted-foreground/60 hover:text-foreground transition-all active:scale-95 gap-1">
                <TrendingUp className="size-5" />
                <span className="text-[10px] font-bold uppercase tracking-tight">Traffic</span>
            </a>
            <a href="#" className="flex flex-1 flex-col items-center justify-center py-2 text-muted-foreground/60 hover:text-foreground transition-all active:scale-95 gap-1">
                <ClipboardList className="size-5" />
                <span className="text-[10px] font-bold uppercase tracking-tight">Reports</span>
            </a>
        </nav>
    );
}

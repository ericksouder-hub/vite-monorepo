import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    ChartColumnBig,
    User,
    Users,
    TrendingUp,
    ClipboardList
} from 'lucide-react';

export function BottomNav() {
    return (
        <motion.nav
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="md:hidden fixed bottom-6 left-4 right-4 sm:left-6 sm:right-6 z-50 flex h-16 items-center justify-around rounded-xl border bg-card px-1 shadow-sm"
        >
            <NavItem
                to="/dashboard"
                icon={<ChartColumnBig className="size-5" />}
                label="Dashboard"
            />
            <NavItem
                to="/user-behavior"
                icon={<User className="size-5" />}
                label="Usage"
            />
            <NavItem
                to="/audience"
                icon={<Users className="size-5" />}
                label="Audience"
            />
            <NavItem
                to="/traffic"
                icon={<TrendingUp className="size-5" />}
                label="Traffic"
            />
            <NavItem
                to="/reports"
                icon={<ClipboardList className="size-5" />}
                label="Reports"
            />
        </motion.nav>
    );
}

function NavItem({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                flex flex-1 flex-col items-center justify-center py-2 transition-all active:scale-95 gap-1
                ${isActive
                    ? 'text-primary'
                    : 'text-muted-foreground/60 hover:text-foreground'
                }
            `}
        >
            {icon}
            <span className="text-[11px] font-bold">{label}</span>
        </NavLink>
    );
}

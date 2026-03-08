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
    const navItems = [
        { to: "/dashboard", icon: <ChartColumnBig className="size-5" />, label: "Dashboard" },
        { to: "/user-behavior", icon: <User className="size-5" />, label: "Usage" },
        { to: "/audience", icon: <Users className="size-5" />, label: "Audience" },
        { to: "/traffic", icon: <TrendingUp className="size-5" />, label: "Traffic" },
        { to: "/reports", icon: <ClipboardList className="size-5" />, label: "Reports" },
    ];

    return (
        <motion.nav
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="md:hidden fixed bottom-6 left-4 right-4 sm:left-6 sm:right-6 z-50 flex h-16 items-stretch rounded-xl border bg-card shadow-sm overflow-hidden"
        >
            {navItems.map((item, index) => (
                <NavItem
                    key={item.to}
                    {...item}
                    isFirst={index === 0}
                    isLast={index === navItems.length - 1}
                />
            ))}
        </motion.nav>
    );
}

function NavItem({ to, icon, label, isFirst, isLast }: { to: string; icon: React.ReactNode; label: string; isFirst?: boolean; isLast?: boolean }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                group relative flex flex-1 flex-col items-center justify-center h-full transition-all active:scale-95 gap-1
                ${isActive
                    ? 'text-primary'
                    : 'text-muted-foreground/60 hover:text-foreground'
                }
            `}
        >
            {({ isActive }) => (
                <>
                    {isActive && (
                        <motion.div
                            layoutId="active-pill-bottom"
                            className={`absolute inset-0 ${isFirst ? 'left-0' : 'left-0.5'} ${isLast ? 'right-0' : 'right-0.5'} rounded-xl bg-primary/[0.08] dark:bg-primary/[0.15] border-x border-primary/10 dark:border-primary/20 z-0`}
                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        />
                    )}
                    <div className="relative z-10 flex flex-col items-center gap-1 transition-transform duration-200 group-active:scale-90">
                        {icon}
                        <span className="text-[11px] font-bold">{label}</span>
                    </div>
                </>
            )}
        </NavLink>
    );
}

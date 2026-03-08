import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    ChartColumnBig,
    User,
    Users,
    TrendingUp,
    ChartColumnStacked,
    ClipboardList,
    TriangleAlert,
    SquareCheckBig,
    Upload,
    Link as LinkIcon,
    ChevronRight,
    Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { SidebarPromo } from './SidebarPromo';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    to: string;
    badge?: string;
    hasSubmenu?: boolean;
    collapsed?: boolean;
}

function NavItem({ icon, label, to, badge, hasSubmenu, collapsed }: NavItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `group relative flex items-center ${collapsed ? 'justify-center p-2' : 'justify-between px-4 py-2'} text-sm transition-all duration-200 ${isActive
                ? 'text-foreground font-bold'
                : 'text-foreground/80 font-medium hover:text-foreground'
                }`}
            title={collapsed ? label : undefined}
        >
            {({ isActive }) => (
                <>
                    {isActive && (
                        <motion.div
                            layoutId="active-pill-sidebar"
                            className="absolute inset-0 bg-primary/[0.08] dark:bg-primary/[0.15] border-r-2 border-primary z-0"
                            transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                        />
                    )}
                    <div className="relative z-10 flex items-center gap-3">
                        <div className="shrink-0 transition-transform duration-200 group-hover:scale-110 group-active:scale-95">{icon}</div>
                        {!collapsed && <span className="truncate">{label}</span>}
                    </div>
                    {!collapsed && (
                        <div className="relative z-10 flex items-center gap-2">
                            {badge && (
                                <span className="flex h-4.5 min-w-4.5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold bg-primary/10 text-primary">
                                    {badge}
                                </span>
                            )}
                            {hasSubmenu && (
                                <ChevronRight className="size-3 transition-transform duration-200 text-muted-foreground/0 group-hover:text-muted-foreground/50 -translate-x-1 group-hover:translate-x-0" />
                            )}
                        </div>
                    )}
                </>
            )}
        </NavLink>
    );
}

interface SidebarProps {
    collapsed?: boolean;
}

export function Sidebar({ collapsed }: SidebarProps) {
    return (
        <>
            <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2'} p-4`}>
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full text-primary">
                    <svg width="1em" height="1em" viewBox="0 0 328 329" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8">
                        <rect y="0.5" width="328" height="328" rx="164" fill="currentColor"></rect>
                        <path d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288" stroke="white" strokeWidth="20"></path>
                        <path d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771" stroke="white" strokeWidth="20"></path>
                        <line x1="238.136" y1="98.8184" x2="196.76" y2="139.707" stroke="white" strokeWidth="20"></line>
                        <line x1="135.688" y1="200.957" x2="94.3128" y2="241.845" stroke="white" strokeWidth="20"></line>
                        <line x1="133.689" y1="137.524" x2="92.5566" y2="96.3914" stroke="white" strokeWidth="20"></line>
                        <line x1="237.679" y1="241.803" x2="196.547" y2="200.671" stroke="white" strokeWidth="20"></line>
                    </svg>
                </div>
                {!collapsed && <span className="text-xl font-bold text-foreground tracking-tight truncate">Ava</span>}
            </div>

            <div className={`flex-1 overflow-y-auto overflow-x-hidden ${collapsed ? 'p-2' : 'py-3'}`}>
                <nav className="flex flex-col gap-1">
                    <NavItem
                        icon={<ChartColumnBig className="size-4" />}
                        label="Dashboard"
                        to="/dashboard"
                        badge="5"
                        collapsed={collapsed}
                    />

                    {!collapsed ? (
                        <div className="mt-6 mb-2 px-3 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest truncate">Core Pages</div>
                    ) : (
                        <div className="mt-6 mb-2 px-2 text-xs font-medium text-transparent h-4"></div>
                    )}
                    <NavItem icon={<User className="size-4" />} label="User Behavior" to="/user-behavior" collapsed={collapsed} />
                    <NavItem icon={<Users className="size-4" />} label="Audience" to="/audience" collapsed={collapsed} />
                    <NavItem icon={<TrendingUp className="size-4" />} label="Traffic Sources" to="/traffic" badge="3" collapsed={collapsed} />
                    <NavItem icon={<ChartColumnStacked className="size-4" />} label="Engagement Metrics" to="/engagement" collapsed={collapsed} />
                    <NavItem icon={<ClipboardList className="size-4" />} label="Custom Reports" to="/reports" hasSubmenu collapsed={collapsed} />
                    <NavItem icon={<TriangleAlert className="size-4" />} label="Error Logs" to="/errors" collapsed={collapsed} />
                    <NavItem icon={<SquareCheckBig className="size-4" />} label="Survey Results" to="/surveys" collapsed={collapsed} />

                    {!collapsed ? (
                        <div className="mt-6 mb-2 px-3 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest truncate">Visualization</div>
                    ) : (
                        <div className="mt-6 mb-2 px-2 text-xs font-medium text-transparent h-4"></div>
                    )}
                    <NavItem icon={<Upload className="size-4" />} label="Data Export" to="/export" collapsed={collapsed} />
                    <NavItem icon={<LinkIcon className="size-4" />} label="Integrations" to="/integrations" hasSubmenu collapsed={collapsed} />
                </nav>
            </div>

            {!collapsed && (
                <div className="p-4 mt-auto">
                    <SidebarPromo
                        variant="premium"
                        icon={<Sparkles className="size-4" />}
                        title="Upgrade to Premium"
                        description={
                            <>
                                Get lifetime access to 600+<br />expert-led courses today.
                            </>
                        }
                        actionText="Upgrade Now"
                        onAction={() => console.log('Upgrade clicked')}
                    />
                </div>
            )}
        </>
    );
}

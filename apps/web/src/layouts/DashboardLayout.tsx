import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Outlet, Link } from 'react-router-dom';
import { useTheme } from '@/components/theme-provider';
import { CommandPalette } from '../components/CommandPalette';
import {
  PanelLeft,
  Search,
  Sun,
  Moon,
  Activity,
  Bell,
  ChartColumnBig,
  User,
  Users,
  ChevronRight,
  Settings,
  X,
  CreditCard,
  SquarePen,
  CirclePlus,
  LogOut,
  Image as ImageIcon,
  Sparkles
} from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { BottomNav } from '../components/BottomNav';

export function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsCommandPaletteOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="flex min-h-screen w-full bg-background font-sans">
      {/* Sidebar (Desktop) */}
      <aside className={`hidden md:flex ${isSidebarCollapsed ? 'w-[4.5rem]' : 'w-[17.5rem]'} shrink-0 flex-col p-6 pr-0 sticky top-0 h-screen transition-all duration-300 z-50`}>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex h-full w-full flex-col rounded-xl border bg-card shadow-sm overflow-hidden"
        >
          <Sidebar collapsed={isSidebarCollapsed} />
        </motion.div>
      </aside>


      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-40 pt-6 px-4 sm:px-6">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex h-14 items-center justify-between rounded-xl border bg-card px-4 shadow-sm"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                className="hidden md:flex p-2 -ml-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              >
                <PanelLeft className="size-5" />
              </button>
              <div className="flex md:hidden size-8 shrink-0 items-center justify-center rounded-full text-primary">
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
              <div className="hidden md:block h-4 w-px bg-border mx-1" />
              <div
                className="flex items-center text-muted-foreground hover:text-foreground cursor-pointer group ml-2 sm:ml-0"
                onClick={() => setIsCommandPaletteOpen(true)}
              >
                <Search className="size-4 mr-2" />
                <span className="text-sm hidden sm:inline-block mr-2">Search here...</span>
                <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <ModeToggle />
              <ActivityDropdown />
              <NotificationDropdown />
              <ProfileDropdown />
            </div>
          </motion.div>
        </header>

        {/* Main */}
        <motion.main
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex-1 p-4 sm:px-6 pb-28 md:p-6 flex flex-col"
        >
          <Outlet />
        </motion.main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden md:flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 pb-6 text-sm text-muted-foreground"
        >
          <p>©2026 <a href="#" className="text-primary hover:underline">shadcn/studio</a>, Made for better web design</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">License</a>
            <a href="#" className="hover:text-primary">More Themes</a>
            <a href="#" className="hover:text-primary">Documentation</a>
            <a href="#" className="hover:text-primary">Support</a>
          </div>
        </motion.footer>
      </div>

      <BottomNav />



      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

function ActivityDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Activity className="size-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed inset-x-4 top-[5.5rem] sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 w-auto sm:w-96 z-50 rounded-2xl border bg-card shadow-xl shadow-black/5 overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-md border-b border-border/50 px-4 py-3 flex items-center justify-between">
                <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">Recent Activity</span>
                <button className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">Mark all read</button>
              </div>

              <div className="flex flex-col max-h-[60vh] overflow-y-auto divide-y divide-border/40 px-1">
                {/* Item 1 */}
                <div className="flex gap-3 p-3 hover:bg-accent/40 transition-colors rounded-xl mx-1 my-1">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full border border-background shadow-sm">
                    <img className="aspect-square size-full object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="Joe Lincoln" />
                  </span>
                  <div className="flex w-full flex-col gap-2">
                    <div className="text-sm leading-tight">
                      <p><span className="text-foreground font-bold italic">Joe Lincoln</span> <span className="text-muted-foreground font-medium">mentioned you in</span> <span className="text-foreground font-semibold">Trends</span></p>
                      <p className="text-[10px] text-muted-foreground/60 font-medium mt-1 uppercase tracking-tighter">18 mins ago</p>
                    </div>
                    <div className="bg-muted/40 rounded-lg p-3 border border-border/30 space-y-2">
                      <p className="text-xs font-medium text-foreground/80 leading-relaxed">"@ShadcnStudio For an expert opinion, check out what Mike has to say!"</p>
                      <div className="relative group/input">
                        <input className="w-full bg-background/50 border-none rounded-md px-3 py-1.5 text-xs focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50" placeholder="Type a reply..." />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <ImageIcon className="size-3 text-muted-foreground/40 group-focus-within/input:text-primary transition-colors cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-3 p-3 hover:bg-accent/40 transition-colors rounded-xl mx-1 my-1">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full border border-background shadow-sm">
                    <img className="aspect-square size-full object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="Jane Perez" />
                  </span>
                  <div className="flex w-full flex-col gap-1.5 pt-0.5">
                    <div className="text-sm leading-tight">
                      <p><span className="text-foreground font-bold italic">Jane Perez</span> <span className="text-muted-foreground font-medium">shared a file</span></p>
                      <p className="text-[10px] text-muted-foreground/60 font-medium mt-1 uppercase tracking-tighter">39 mins ago</p>
                    </div>
                    <div className="bg-muted/30 flex items-center gap-2 rounded-md px-2 py-1.5 border border-border/20 w-fit group cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="bg-blue-500/10 p-1 rounded">
                        <ImageIcon className="size-3.5 text-blue-500" />
                      </div>
                      <span className="text-[11px] font-bold text-foreground/80">invoices_q1_final.pdf</span>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-3 p-3 hover:bg-accent/40 transition-colors rounded-xl mx-1 my-1">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full border border-background shadow-sm">
                    <img className="aspect-square size-full object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png" alt="Tyler Hero" />
                  </span>
                  <div className="flex w-full flex-col gap-1.5 pt-0.5">
                    <div className="text-sm leading-tight">
                      <p><span className="text-foreground font-bold italic">Tyler Hero</span> <span className="text-muted-foreground font-medium">requested view access</span></p>
                      <p className="text-[10px] text-muted-foreground/60 font-medium mt-1 uppercase tracking-tighter">1 hr ago</p>
                    </div>
                    <div className="bg-muted/20 flex items-center justify-between gap-3 p-2 rounded-xl border border-border/20">
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded bg-orange-500/10 flex items-center justify-center">
                          <ChartColumnBig className="size-4 text-orange-500" />
                        </div>
                        <span className="text-[11px] font-bold">Launcher Dash...</span>
                      </div>
                      <button className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-1 rounded-md hover:opacity-90 transition-opacity">Approve</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unique Footer */}
              <div className="p-2 bg-muted/10 border-t border-border/50">
                <button className="flex w-full items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-accent/50 transition-all text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 hover:text-foreground">
                  View full history
                  <ChevronRight className="size-3" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="ml-1 size-8 rounded-full overflow-hidden border hover:ring-2 hover:ring-ring/50 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="Avatar" className="size-full object-cover" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-0 top-full mt-2 w-64 z-50 rounded-2xl border bg-card shadow-xl shadow-black/5 overflow-hidden flex flex-col"
            >
              {/* Profile Header with Tint */}
              <div className="flex items-center gap-3 px-4 py-4 bg-muted/30 border-b border-border/50">
                <div className="relative">
                  <span className="relative flex shrink-0 overflow-hidden rounded-xl size-10 shadow-sm border border-background">
                    <img className="aspect-square size-full object-cover" alt="John Doe" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" />
                  </span>
                  <span className="absolute -right-0.5 -bottom-0.5 block size-3 rounded-full bg-green-500 border-2 border-card shadow-sm"></span>
                </div>
                <div className="flex flex-1 flex-col items-start min-w-0">
                  <span className="text-foreground text-sm font-bold tracking-tight truncate w-full">John Doe</span>
                  <span className="text-muted-foreground text-[11px] font-medium leading-none truncate w-full">PRO ACCOUNT</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-1.5 py-2 space-y-4">
                {/* Account Section */}
                <div className="space-y-1">
                  <div className="px-3 pb-1 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">Account</div>
                  <nav className="space-y-0.5">
                    <DropdownItem icon={<User className="size-4" />} label="My profile" to="/settings#personal-info" />
                    <DropdownItem icon={<Settings className="size-4" />} label="Security" to="/settings#email-password" />
                    <DropdownItem icon={<CreditCard className="size-4" />} label="Plans & Billing" to="/settings" />
                  </nav>
                </div>

                {/* Team Section with subtle theme */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between px-3 pb-1">
                    <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">Workspace</span>
                    <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-bold">PRO</span>
                  </div>
                  <nav className="space-y-0.5">
                    <DropdownItem icon={<Users className="size-4 text-primary/70" />} label="Manage team" />
                    <DropdownItem icon={<SquarePen className="size-4 text-primary/70" />} label="Customization" />
                    <DropdownItem icon={<CirclePlus className="size-4 text-primary/70" />} label="Invite members" />
                  </nav>
                </div>
              </div>

              {/* Unique Logout Footer */}
              <div className="p-2 bg-muted/10 border-t border-border/50">
                <button className="flex w-full items-center justify-center gap-2 py-2 px-3 rounded-xl bg-destructive/5 text-destructive hover:bg-destructive/10 transition-all text-xs font-bold active:scale-[0.98]">
                  <LogOut className="size-3.5" />
                  <span>Sign out of Ava</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownItem({ icon, label, to }: { icon: React.ReactNode, label: string, to?: string }) {
  const content = (
    <>
      <div className="shrink-0 transition-transform group-hover:scale-110 duration-200">{icon}</div>
      <span className="flex-1 text-left font-medium">{label}</span>
      <ChevronRight className="size-3 text-muted-foreground/0 group-hover:text-muted-foreground/50 transition-all -translate-x-1 group-hover:translate-x-0" />
    </>
  );

  const className = "group relative flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-all duration-200";

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className}>
      {content}
    </button>
  );
}

function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent relative"
    >
      <Sun className="size-5 transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-2 left-2 size-5 transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inbox');

  return (
    <div className="relative">
      <button
        className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="size-5" />
        <span className="absolute top-2.5 right-2.5 size-2 rounded-full bg-destructive border-2 border-card" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed inset-x-4 top-[5.5rem] sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 w-auto sm:w-96 z-50 rounded-2xl border bg-card shadow-xl shadow-black/5 overflow-hidden flex flex-col"
            >
              {/* Header with Switcher */}
              <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-md border-b border-border/50 px-4 pt-4 pb-0 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">Inbox</span>
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">8 UNREAD</span>
                </div>
                <div className="flex p-1 bg-muted/30 rounded-lg w-fit mb-3">
                  <button
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all rounded-md ${activeTab === 'inbox' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                    onClick={() => setActiveTab('inbox')}
                  >
                    Personal
                  </button>
                  <button
                    className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all rounded-md ${activeTab === 'general' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                    onClick={() => setActiveTab('general')}
                  >
                    System
                  </button>
                </div>
              </div>

              <div className="flex flex-col max-h-[60vh] overflow-y-auto divide-y divide-border/40 px-1">
                {activeTab === 'inbox' && (
                  <>
                    {/* Item 1 */}
                    <div className="group relative flex items-start gap-3 p-3 hover:bg-accent/40 cursor-pointer transition-all rounded-xl mx-1 my-1">
                      <div className="relative shrink-0">
                        <img className="size-9 rounded-full object-cover border border-background shadow-sm" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-19.png" alt="Mark Bush" />
                        <div className="absolute -right-0.5 -bottom-0.5 size-2.5 bg-blue-500 rounded-full border-2 border-card shadow-sm"></div>
                      </div>
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold tracking-tight">Mark Bush</span>
                          <span className="text-[9px] font-bold text-muted-foreground/40 uppercase">12 mins</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium line-clamp-1 mt-0.5">Shared a new post in your community</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="size-3 text-muted-foreground hover:text-foreground" />
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="group relative flex items-start gap-3 p-3 hover:bg-accent/40 cursor-pointer transition-all rounded-xl mx-1 my-1">
                      <div className="relative shrink-0">
                        <img className="size-9 rounded-full object-cover border border-background shadow-sm" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png" alt="Aaron Black" />
                        <div className="absolute -right-0.5 -bottom-0.5 size-2.5 bg-blue-500 rounded-full border-2 border-card shadow-sm"></div>
                      </div>
                      <div className="flex w-full flex-col">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold tracking-tight">Aaron Black</span>
                          <span className="text-[9px] font-bold text-muted-foreground/40 uppercase">27 mins</span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium line-clamp-1 mt-0.5">Replied to your comment on "Marketing..."</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="size-3 text-muted-foreground hover:text-foreground" />
                      </div>
                    </div>

                    {/* Action Item */}
                    <div className="group relative flex flex-col gap-3 p-3 bg-primary/5 rounded-xl mx-2 my-1 border border-primary/10">
                      <div className="flex items-start gap-3">
                        <img className="size-9 rounded-full object-cover border border-background shadow-sm" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="Anna" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold leading-tight">Anna <span className="text-muted-foreground font-medium">requested to join the</span> Ads Campaign</span>
                          <span className="text-[9px] font-bold text-muted-foreground/60 mt-1 uppercase">2 hrs ago</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-1.5 rounded-lg bg-background border border-border shadow-sm text-[10px] font-bold hover:bg-muted transition-colors">DECLINE</button>
                        <button className="flex-1 py-1.5 rounded-lg bg-primary text-primary-foreground shadow-sm text-[10px] font-bold hover:opacity-90 transition-opacity">ACCEPT</button>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === 'general' && (
                  <div className="p-12 text-center space-y-2">
                    <div className="flex justify-center">
                      <Sparkles className="size-8 text-muted-foreground/20" />
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest">Inbox is clear</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-2 bg-muted/10 border-t border-border/50">
                <button className="flex w-full items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-accent/50 transition-all text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 hover:text-foreground">
                  See all notifications
                  <ChevronRight className="size-3" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}



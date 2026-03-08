import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Outlet } from 'react-router-dom';
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
  TrendingUp,
  ChartColumnStacked,
  ClipboardList,
  TriangleAlert,
  SquareCheckBig,
  Upload,
  Link as LinkIcon,
  ChevronRight,
  Settings,
  X,
  CreditCard,
  SquarePen,
  CirclePlus,
  LogOut,
  Image as ImageIcon
} from 'lucide-react';

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
      <aside className={`hidden md:flex ${isSidebarCollapsed ? 'w-[4.5rem]' : 'w-[17.5rem]'} shrink-0 flex-col p-6 pr-0 sticky top-0 h-screen transition-all duration-300`}>
        <div className="flex h-full w-full flex-col rounded-xl border bg-card shadow-sm overflow-hidden">
          <SidebarContent collapsed={isSidebarCollapsed} />
        </div>
      </aside>


      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-40 pt-6 px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between rounded-xl border bg-card px-4 shadow-sm">
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
                <span className="text-sm inline-block mr-2">Search here...</span>
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
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 p-4 pb-28 md:p-6 flex flex-col">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="hidden md:flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 pb-6 text-sm text-muted-foreground">
          <p>©2026 <a href="#" className="text-primary hover:underline">shadcn/studio</a>, Made for better web design</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary">License</a>
            <a href="#" className="hover:text-primary">More Themes</a>
            <a href="#" className="hover:text-primary">Documentation</a>
            <a href="#" className="hover:text-primary">Support</a>
          </div>
        </footer>
      </div>

      {/* Mobile Floating Bottom Nav */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex h-16 w-[calc(100%-2rem)] max-w-md items-center justify-around rounded-xl border bg-card/80 backdrop-blur-md px-2 shadow-xl">
        <a href="#" className="flex flex-col items-center justify-center p-3 text-primary transition-transform active:scale-95">
          <ChartColumnBig className="size-6" />
        </a>
        <a href="#" className="flex flex-col items-center justify-center p-3 text-muted-foreground hover:text-foreground transition-all active:scale-95">
          <User className="size-6" />
        </a>
        <a href="#" className="flex flex-col items-center justify-center p-3 text-muted-foreground hover:text-foreground transition-all active:scale-95">
          <Users className="size-6" />
        </a>
        <a href="#" className="flex flex-col items-center justify-center p-3 text-muted-foreground hover:text-foreground transition-all active:scale-95">
          <TrendingUp className="size-6" />
        </a>
        <a href="#" className="flex flex-col items-center justify-center p-3 text-muted-foreground hover:text-foreground transition-all active:scale-95">
          <ClipboardList className="size-6" />
        </a>
      </nav>



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
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute -right-16 sm:right-0 top-full mt-2 w-80 sm:w-[28rem] z-50 rounded-xl border bg-card shadow-lg overflow-hidden flex flex-col"
            >
              <div className="flex flex-col pb-0 px-2 py-1.5 text-sm font-medium">
                <div className="flex items-center justify-between gap-6 pb-2.5 pt-2 px-2">
                  <span className="text-muted-foreground text-base font-normal uppercase">Activity</span>
                </div>
              </div>
              <div className="bg-border h-px w-full shrink-0"></div>

              <div className="flex flex-col max-h-[60vh] overflow-y-auto">

                {/* Item 1 */}
                <div className="flex gap-4 px-4 py-3">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full">
                    <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="Joe Lincoln" />
                  </span>
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <div className="text-muted-foreground flex flex-col items-start text-sm">
                      <p><span className="text-foreground font-semibold">Joe Lincoln</span> mentioned you in last trends topic</p>
                      <p>18 mins ago</p>
                    </div>
                    <div className="bg-muted flex flex-col gap-4 rounded-md border px-4 py-2.5 w-full">
                      <p className="text-sm font-medium">@ShadcnStudio For an expert opinion, check out what Mike has to say on this topic!</p>
                      <div className="relative">
                        <input className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-card pr-9 md:text-sm" placeholder="Reply" />
                        <div className="text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3">
                          <ImageIcon className="size-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-border h-px w-full shrink-0"></div>

                {/* Item 2 */}
                <div className="flex gap-4 px-4 py-3">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full">
                    <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="Jane Perez" />
                  </span>
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <div className="text-muted-foreground flex flex-col items-start text-sm">
                      <p><span className="text-foreground font-semibold">Jane Perez</span> invites you to review a file</p>
                      <p>39 mins ago</p>
                    </div>
                    <div className="bg-muted flex items-center gap-1 rounded-md px-1.5 py-1">
                      <img alt="invoices.pdf" className="h-5" src="https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/image-14.png" />
                      <span className="text-sm font-medium">invoices.pdf</span>
                    </div>
                  </div>
                </div>
                <div className="bg-border h-px w-full shrink-0"></div>

                {/* Item 3 */}
                <div className="flex gap-4 px-4 py-3">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full">
                    <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png" alt="Tyler Hero" />
                  </span>
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <div className="text-muted-foreground flex flex-col items-start text-sm">
                      <p><span className="text-foreground font-semibold">Tyler Hero</span> wants to view your design project</p>
                      <p>1 hour ago</p>
                    </div>
                    <div className="bg-muted flex w-full items-center gap-4 rounded-md border px-4 py-2.5">
                      <img alt="Launcher-Uikit.fig" className="size-8 rounded-sm" src="https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/image-13.png" />
                      <span className="text-sm font-medium">Launcher-Uikit.fig</span>
                    </div>
                  </div>
                </div>
                <div className="bg-border h-px w-full shrink-0"></div>

                {/* Item 4 */}
                <div className="flex gap-4 px-4 py-3">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full">
                    <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png" alt="Denial" />
                  </span>
                  <div className="text-muted-foreground flex flex-col items-start text-sm">
                    <p><span className="text-foreground font-semibold">Denial</span> invites you to review the new design</p>
                    <p>3 hours ago</p>
                  </div>
                </div>
                <div className="bg-border h-px w-full shrink-0"></div>

                {/* Item 5 */}
                <div className="flex gap-4 px-4 py-3">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full">
                    <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png" alt="Leslie Alexander" />
                  </span>
                  <div className="flex w-full flex-col items-start gap-2.5">
                    <div className="text-muted-foreground flex flex-col items-start text-sm">
                      <p><span className="text-foreground font-semibold">Leslie Alexander</span> new tags to Web Redesign</p>
                      <p>8 hours ago</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs whitespace-nowrap bg-primary/10 text-primary rounded-sm font-normal">Client-Request</span>
                      <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs whitespace-nowrap rounded-sm bg-sky-600/10 font-normal text-sky-600">Figma</span>
                      <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent px-2 py-0.5 text-xs whitespace-nowrap rounded-sm bg-amber-600/10 font-normal text-amber-600">Redesign</span>
                    </div>
                  </div>
                </div>
                <div className="bg-border h-px w-full shrink-0"></div>

                {/* Item 6 */}
                <div className="flex gap-4 px-4 py-3 hover:bg-accent transition-colors">
                  <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full">
                    <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png" alt="Miya" />
                  </span>
                  <div className="text-muted-foreground flex flex-col items-start text-sm">
                    <p><span className="text-foreground font-semibold">Miya</span> invites you to review a file</p>
                    <p>10 hours ago</p>
                  </div>
                </div>

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
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 w-80 z-50 rounded-xl border bg-card shadow-lg overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-4 px-4 py-2.5 font-normal">
                <div className="relative">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-10">
                    <img className="aspect-square size-full" alt="John Doe" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" />
                  </span>
                  <span className="ring-card absolute right-0 bottom-0 block size-2 rounded-full bg-green-600 ring-2"></span>
                </div>
                <div className="flex flex-1 flex-col items-start">
                  <span className="text-foreground text-lg font-semibold">John Doe</span>
                  <span className="text-muted-foreground text-base">john.doe@example.com</span>
                </div>
              </div>

              <div className="bg-border h-px w-full shrink-0"></div>

              <div className="p-1">
                <button className="relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-2.5 text-base hover:bg-accent hover:text-accent-foreground transition-colors">
                  <User className="text-foreground size-5" />
                  <span>My account</span>
                </button>
                <button className="relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-2.5 text-base hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Settings className="text-foreground size-5" />
                  <span>Settings</span>
                </button>
                <button className="relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-2.5 text-base hover:bg-accent hover:text-accent-foreground transition-colors">
                  <CreditCard className="text-foreground size-5" />
                  <span>Billing</span>
                </button>
              </div>

              <div className="bg-border h-px w-full shrink-0"></div>

              <div className="p-1">
                <button className="relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-2.5 text-base hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Users className="text-foreground size-5" />
                  <span>Manage team</span>
                </button>
                <button className="relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-2.5 text-base hover:bg-accent hover:text-accent-foreground transition-colors">
                  <SquarePen className="text-foreground size-5" />
                  <span>Customization</span>
                </button>
                <button className="relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-2.5 text-base hover:bg-accent hover:text-accent-foreground transition-colors">
                  <CirclePlus className="text-foreground size-5" />
                  <span>Add team account</span>
                </button>
              </div>

              <div className="bg-border h-px w-full shrink-0"></div>

              <div className="p-1">
                <button className="relative flex w-full cursor-pointer items-center gap-2 rounded-sm px-4 py-2.5 text-base text-destructive hover:bg-destructive/10 transition-colors">
                  <LogOut className="size-5" />
                  <span>Logout</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
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
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute -right-8 sm:right-0 top-full mt-2 w-80 sm:w-[28rem] z-50 rounded-xl border bg-card shadow-lg overflow-hidden flex flex-col"
            >
              <div className="flex flex-col pb-0 px-2 py-1.5 text-sm font-medium">
                <div className="flex items-center justify-between gap-6 pb-2.5 pt-2 px-2">
                  <span className="text-muted-foreground text-base font-normal uppercase">Notifications</span>
                  <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs whitespace-nowrap bg-primary/10 text-primary font-normal">8 New</span>
                </div>
                <div className="-mb-0.5 flex items-center justify-between gap-4 px-2">
                  <div className="flex gap-4">
                    <button
                      className={`relative inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 border-b-2 px-2 py-1 text-sm font-normal whitespace-nowrap transition-all ${activeTab === 'inbox' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                      onClick={() => setActiveTab('inbox')}
                    >
                      Inbox
                    </button>
                    <button
                      className={`relative inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 border-b-2 px-2 py-1 text-sm font-normal whitespace-nowrap transition-all ${activeTab === 'general' ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                      onClick={() => setActiveTab('general')}
                    >
                      General
                    </button>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground pb-2">
                    <Settings className="size-5" />
                  </button>
                </div>
              </div>
              <div className="bg-border h-px w-full shrink-0"></div>

              <div className="flex flex-col max-h-[60vh] overflow-y-auto">
                {activeTab === 'inbox' && (
                  <>
                    {/* Item 1 */}
                    <div className="relative flex items-start gap-3 px-4 py-3 text-base hover:bg-accent cursor-pointer transition-colors border-b border-border last:border-0">
                      <div className="relative flex shrink-0 overflow-hidden rounded-full size-9.5">
                        <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-19.png" alt="Mark Bush" />
                      </div>
                      <div className="flex w-full flex-col items-start">
                        <span className="text-base font-medium">Mark Bush</span>
                        <div className="flex items-center gap-2.5">
                          <span className="text-muted-foreground text-sm">12 Minutes ago</span>
                          <div className="bg-muted size-1.5 rounded-full"></div>
                          <span className="text-muted-foreground text-sm">New post</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-3 mt-1 ml-auto">
                        <X className="text-muted-foreground size-4 hover:text-foreground" />
                        <div className="bg-primary size-1.5 rounded-full"></div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="relative flex items-start gap-3 px-4 py-3 text-base hover:bg-accent cursor-pointer transition-colors border-b border-border last:border-0">
                      <div className="relative flex shrink-0 overflow-hidden rounded-full size-9.5">
                        <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png" alt="Aaron Black" />
                      </div>
                      <div className="flex w-full flex-col items-start">
                        <span className="text-base font-medium">Aaron Black</span>
                        <div className="flex items-center gap-2.5">
                          <span className="text-muted-foreground text-sm">27 Minutes ago</span>
                          <div className="bg-muted size-1.5 rounded-full"></div>
                          <span className="text-muted-foreground text-sm">New comment</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-3 mt-1 ml-auto">
                        <X className="text-muted-foreground size-4 hover:text-foreground" />
                        <div className="bg-primary size-1.5 rounded-full"></div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="relative flex items-start gap-3 px-4 py-3 text-base hover:bg-accent cursor-pointer transition-colors border-b border-border last:border-0">
                      <div className="relative flex shrink-0 overflow-hidden rounded-full size-9.5">
                        <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="Anna" />
                      </div>
                      <div className="flex w-full flex-col items-start">
                        <span className="text-base font-medium">Anna has applied to create an ad for your campaign</span>
                        <div className="flex items-center gap-2.5">
                          <span className="text-muted-foreground text-sm">2 hours ago</span>
                          <div className="bg-muted size-1.5 rounded-full"></div>
                          <span className="text-muted-foreground text-sm">New request for campaign</span>
                        </div>
                        <div className="mt-3 flex items-center gap-4">
                          <button className="inline-flex shrink-0 items-center justify-center text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] bg-secondary text-secondary-foreground hover:bg-secondary/80 h-8 gap-1.5 rounded-md px-3">Decline</button>
                          <button className="inline-flex shrink-0 items-center justify-center text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] bg-primary text-primary-foreground hover:bg-primary/90 h-8 gap-1.5 rounded-md px-3">Accept</button>
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="relative flex items-start gap-3 px-4 py-3 text-base hover:bg-accent cursor-pointer transition-colors border-b border-border last:border-0">
                      <div className="relative flex shrink-0 overflow-hidden rounded-full size-9.5">
                        <img className="aspect-square size-full" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png" alt="Jason" />
                      </div>
                      <div className="flex w-full flex-col items-start">
                        <span className="text-base font-medium">Jason attached the file</span>
                        <div className="flex items-center gap-2.5">
                          <span className="text-muted-foreground text-sm">6 hours ago</span>
                          <div className="bg-muted size-1.5 rounded-full"></div>
                          <span className="text-muted-foreground text-sm">Attached files</span>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5">
                          <LinkIcon className="text-foreground size-4" />
                          <span className="text-sm font-medium">Work examples.com</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeTab === 'general' && (
                  <div className="p-8 text-center text-muted-foreground text-sm">
                    No new general notifications
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function SidebarContent({ collapsed }: { collapsed?: boolean }) {
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
        {!collapsed && <span className="text-xl font-semibold text-foreground truncate">Ava</span>}
      </div>

      <div className={`flex-1 overflow-y-auto overflow-x-hidden ${collapsed ? 'p-2' : 'p-3'}`}>
        <nav className="flex flex-col gap-1">
          <NavItem icon={<ChartColumnBig className="size-4" />} label="Dashboard" badge="5" active collapsed={collapsed} />

          {!collapsed ? (
            <div className="mt-4 mb-2 px-2 text-xs font-medium text-muted-foreground truncate">Core Pages</div>
          ) : (
            <div className="mt-4 mb-2 px-2 text-xs font-medium text-transparent h-4"></div>
          )}
          <NavItem icon={<User className="size-4" />} label="User Behavior" collapsed={collapsed} />
          <NavItem icon={<Users className="size-4" />} label="Audience" collapsed={collapsed} />
          <NavItem icon={<TrendingUp className="size-4" />} label="Traffic Sources" badge="3" collapsed={collapsed} />
          <NavItem icon={<ChartColumnStacked className="size-4" />} label="Engagement Metrics" collapsed={collapsed} />
          <NavItem icon={<ClipboardList className="size-4" />} label="Custom Reports" hasSubmenu collapsed={collapsed} />
          <NavItem icon={<TriangleAlert className="size-4" />} label="Error Logs" collapsed={collapsed} />
          <NavItem icon={<SquareCheckBig className="size-4" />} label="Survey Results" collapsed={collapsed} />

          {!collapsed ? (
            <div className="mt-4 mb-2 px-2 text-xs font-medium text-muted-foreground truncate">Visualization</div>
          ) : (
            <div className="mt-4 mb-2 px-2 text-xs font-medium text-transparent h-4"></div>
          )}
          <NavItem icon={<Upload className="size-4" />} label="Data Export" collapsed={collapsed} />
          <NavItem icon={<LinkIcon className="size-4" />} label="Integrations" hasSubmenu collapsed={collapsed} />
        </nav>
      </div>

      {!collapsed && (
        <div className="p-4 mt-auto">
          <div className="flex flex-col items-start gap-4 p-2">
            <h4 className="text-xl font-semibold text-foreground">Go to Premium</h4>
            <p className="text-sm text-foreground">Explore 600+ courses with<br />lifetime membership</p>
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function NavItem({ icon, label, badge, active, hasSubmenu, collapsed }: { icon: React.ReactNode, label: string, badge?: string, active?: boolean, hasSubmenu?: boolean, collapsed?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center ${collapsed ? 'justify-center p-2' : 'justify-between px-3 py-2'} rounded-md text-sm transition-colors ${active
        ? 'text-foreground font-medium bg-accent'
        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        }`}
      title={collapsed ? label : undefined}
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0">{icon}</div>
        {!collapsed && <span className="truncate">{label}</span>}
      </div>
      {!collapsed && (
        <div className="flex items-center gap-2">
          {badge && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary/10 px-1.5 text-xs font-medium text-foreground">
              {badge}
            </span>
          )}
          {hasSubmenu && (
            <ChevronRight className="size-4 opacity-50 shrink-0" />
          )}
        </div>
      )}
    </a>
  );
}

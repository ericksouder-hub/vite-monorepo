import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Users, ShoppingCart, LayoutDashboard, X, CornerDownLeft, ArrowUp, ArrowDown, MoreVertical, ChevronRight, Clock, Trash2, Settings } from 'lucide-react';
import { Command } from 'cmdk';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [recentItems, setRecentItems] = useState<{ id: string; label: string; icon: string; type: string }[]>([]);

  // Load recent items from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ava-recent-searches');
    if (saved) {
      try {
        setRecentItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse recent searches", e);
      }
    }
  }, []);

  // Save recent items to localStorage when they change
  useEffect(() => {
    localStorage.setItem('ava-recent-searches', JSON.stringify(recentItems));
  }, [recentItems]);

  const addToRecent = (item: { id: string; label: string; icon: string; type: string }) => {
    setRecentItems(prev => {
      const filtered = prev.filter(i => i.id !== item.id);
      return [item, ...filtered].slice(0, 5); // Keep top 5
    });
  };

  const clearRecent = () => {
    setRecentItems([]);
  };

  const removeRecent = (id: string) => {
    setRecentItems(prev => prev.filter(i => i.id !== id));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] sm:pt-[20vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border bg-card/95 backdrop-blur-xl text-card-foreground shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] mx-4 ring-1 ring-white/10"
          >
            <Command className="flex h-full w-full flex-col overflow-hidden bg-transparent">
              <div className="flex items-center border-b border-border/50 px-4 py-1" cmdk-input-wrapper="">
                <Search className="mr-3 size-5 shrink-0 text-muted-foreground/50" />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  className="flex h-14 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground/40 disabled:cursor-not-allowed disabled:opacity-50 font-medium tracking-tight"
                  placeholder="What are you looking for?"
                />
                <div className="flex items-center gap-2">
                  <kbd className="pointer-events-none hidden h-6 select-none items-center gap-1 rounded border bg-muted/50 px-1.5 font-mono text-[10px] font-bold text-muted-foreground/60 sm:flex">
                    ESC
                  </kbd>
                  <button onClick={onClose} className="p-2 text-muted-foreground/40 hover:text-foreground hover:bg-accent rounded-xl transition-colors">
                    <X className="size-4" />
                  </button>
                </div>
              </div>
              <Command.List className="max-h-[65vh] overflow-y-auto overflow-x-hidden p-1.5 scrollbar-thin scrollbar-thumb-muted-foreground/10 scrollbar-track-transparent">
                <Command.Empty className="py-12 text-center text-sm text-muted-foreground/60 font-medium italic">No matches found for your search.</Command.Empty>

                {recentItems.length > 0 && (
                  <>
                    <Command.Group
                      heading={
                        <div className="flex items-center justify-between w-full pr-1">
                          <span>Recent</span>
                          <button
                            onClick={clearRecent}
                            className="hover:text-destructive transition-colors p-1 -mr-1"
                          >
                            <Trash2 className="size-3" />
                          </button>
                        </div>
                      }
                      className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-muted-foreground/50 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.15em]"
                    >
                      {recentItems.map((item) => (
                        <Command.Item
                          key={item.id}
                          onSelect={() => {
                            addToRecent(item);
                            // Add navigation logic here if needed
                            onClose();
                          }}
                          className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-1.5 text-sm outline-none aria-selected:bg-accent/40 aria-selected:text-accent-foreground transition-all duration-200"
                        >
                          <div className="flex size-7 items-center justify-center rounded-lg bg-muted text-muted-foreground/60 group-aria-selected:bg-primary/10 group-aria-selected:text-primary transition-colors mr-3">
                            <Clock className="size-3.5" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold tracking-tight text-foreground/80">{item.label}</span>
                            <span className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">{item.type}</span>
                          </div>
                          <div className="ml-auto transition-opacity">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeRecent(item.id);
                              }}
                              className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors"
                            >
                              <X className="size-3.5" />
                            </button>
                          </div>
                        </Command.Item>
                      ))}
                    </Command.Group>
                    <Command.Separator className="mx-2 my-2 h-px bg-border/40" />
                  </>
                )}

                <Command.Group
                  heading="Suggestions"
                  className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-muted-foreground/50 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.15em]"
                >
                  <Command.Item
                    onSelect={() => {
                      addToRecent({ id: 'marketing-ui', label: 'Marketing UI Page', icon: 'Users', type: 'Suggestion' });
                      onClose();
                    }}
                    className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-1.5 text-sm outline-none aria-selected:bg-accent/50 aria-selected:text-accent-foreground transition-all duration-200"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/5 text-primary group-aria-selected:bg-primary/10 transition-colors mr-3">
                      <Users className="size-4" />
                    </div>
                    <span className="font-semibold tracking-tight">Marketing UI Page</span>
                    <div className="ml-auto opacity-0 group-aria-selected:opacity-100 transition-opacity">
                      <CornerDownLeft className="size-3 text-muted-foreground/50" />
                    </div>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      addToRecent({ id: 'ecommerce-ui', label: 'e-commerce UI Page', icon: 'ShoppingCart', type: 'Suggestion' });
                      onClose();
                    }}
                    className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-1.5 text-sm outline-none aria-selected:bg-accent/50 aria-selected:text-accent-foreground transition-all duration-200"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/5 text-primary group-aria-selected:bg-primary/10 transition-colors mr-3">
                      <ShoppingCart className="size-4" />
                    </div>
                    <span className="font-semibold tracking-tight">e-commerce UI Page</span>
                    <div className="ml-auto opacity-0 group-aria-selected:opacity-100 transition-opacity">
                      <CornerDownLeft className="size-3 text-muted-foreground/50" />
                    </div>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      addToRecent({ id: 'dashboard-ui', label: 'Dashboard UI Page', icon: 'LayoutDashboard', type: 'Suggestion' });
                      onClose();
                    }}
                    className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-1.5 text-sm outline-none aria-selected:bg-accent/50 aria-selected:text-accent-foreground transition-all duration-200"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/5 text-primary group-aria-selected:bg-primary/10 transition-colors mr-3">
                      <LayoutDashboard className="size-4" />
                    </div>
                    <span className="font-semibold tracking-tight">Dashboard UI Page</span>
                    <div className="ml-auto opacity-0 group-aria-selected:opacity-100 transition-opacity">
                      <CornerDownLeft className="size-3 text-muted-foreground/50" />
                    </div>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => {
                      // Navigate to settings
                      window.location.href = '/settings';
                      onClose();
                    }}
                    className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-1.5 text-sm outline-none aria-selected:bg-accent/50 aria-selected:text-accent-foreground transition-all duration-200"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/5 text-primary group-aria-selected:bg-primary/10 transition-colors mr-3">
                      <Settings className="size-4" />
                    </div>
                    <span className="font-semibold tracking-tight">Settings</span>
                    <div className="ml-auto opacity-0 group-aria-selected:opacity-100 transition-opacity">
                      <CornerDownLeft className="size-3 text-muted-foreground/50" />
                    </div>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="mx-2 my-2 h-px bg-border/40" />

                <Command.Group
                  heading="Interactions"
                  className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-muted-foreground/50 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.15em]"
                >
                  <Command.Item
                    onSelect={() => {
                      addToRecent({ id: 'jira', label: 'Jira', icon: 'jira', type: 'Interaction' });
                      onClose();
                    }}
                    className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-2 text-sm outline-none aria-selected:bg-accent/40 aria-selected:text-accent-foreground transition-all duration-200 mb-0.5"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background group-aria-selected:border-primary/20 group-aria-selected:shadow-sm transition-all mr-4">
                      <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/jira.png" alt="Jira" className="size-6 object-contain" />
                    </div>
                    <div className="flex flex-col items-start flex-1 min-w-0">
                      <span className="font-bold tracking-tight text-foreground/90">Jira</span>
                      <span className="text-[11px] font-medium text-muted-foreground/70 uppercase tracking-wide">Project management</span>
                    </div>
                    <div className="flex -space-x-3 mr-4">
                      <img className="inline-block size-7 rounded-full ring-2 ring-card group-aria-selected:ring-accent transition-all object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="" />
                      <img className="inline-block size-7 rounded-full ring-2 ring-card group-aria-selected:ring-accent transition-all object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="" />
                      <img className="inline-block size-7 rounded-full ring-2 ring-card group-aria-selected:ring-accent transition-all object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png" alt="" />
                      <div className="flex size-7 items-center justify-center rounded-full ring-2 ring-card group-aria-selected:ring-accent transition-all bg-muted text-[9px] font-bold text-muted-foreground">
                        +99
                      </div>
                    </div>
                    <div className="opacity-0 group-aria-selected:opacity-100 transition-opacity">
                      <ChevronRight className="size-4 text-muted-foreground/50" />
                    </div>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => {
                      addToRecent({ id: 'inferno', label: 'Inferno', icon: 'inferno', type: 'Interaction' });
                      onClose();
                    }}
                    className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-2 text-sm outline-none aria-selected:bg-accent/40 aria-selected:text-accent-foreground transition-all duration-200"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background group-aria-selected:border-primary/20 group-aria-selected:shadow-sm transition-all mr-4">
                      <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/inferno.png" alt="Inferno" className="size-6 object-contain" />
                    </div>
                    <div className="flex flex-col items-start flex-1 min-w-0">
                      <span className="font-bold tracking-tight text-foreground/90">Inferno</span>
                      <span className="text-[11px] font-medium text-muted-foreground/70 uppercase tracking-wide">Real-time photo sharing app</span>
                    </div>
                    <div className="flex -space-x-3 mr-4">
                      <img className="inline-block size-7 rounded-full ring-2 ring-card group-aria-selected:ring-accent transition-all object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="" />
                      <img className="inline-block size-7 rounded-full ring-2 ring-card group-aria-selected:ring-accent transition-all object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="" />
                      <img className="inline-block size-7 rounded-full ring-2 ring-card group-aria-selected:ring-accent transition-all object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png" alt="" />
                      <img className="inline-block size-7 rounded-full ring-2 ring-card group-aria-selected:ring-accent transition-all object-cover" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png" alt="" />
                    </div>
                    <div className="opacity-0 group-aria-selected:opacity-100 transition-opacity">
                      <ChevronRight className="size-4 text-muted-foreground/50" />
                    </div>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="mx-2 my-2 h-px bg-border/40" />

                <Command.Group
                  heading="Users"
                  className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-muted-foreground/50 [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.15em]"
                >
                  <Command.Item
                    onSelect={() => {
                      addToRecent({ id: 'barry-barnett', label: 'Barry Barnett', icon: 'Users', type: 'User' });
                      onClose();
                    }}
                    className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-2 text-sm outline-none aria-selected:bg-accent/40 aria-selected:text-accent-foreground transition-all duration-200 mb-0.5"
                  >
                    <div className="relative shrink-0 mr-4">
                      <img className="size-10 rounded-xl object-cover ring-1 ring-border group-aria-selected:ring-primary/20 transition-all" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="Barry Barnett" />
                      <div className="absolute -right-1 -bottom-1 size-3.5 bg-emerald-500 rounded-full border-2 border-card group-aria-selected:border-accent transition-all"></div>
                    </div>
                    <div className="flex flex-col items-start flex-1 min-w-0">
                      <span className="font-bold tracking-tight text-foreground/90 text-sm">Barry Barnett</span>
                      <span className="text-[11px] font-medium text-muted-foreground/60 tracking-tight">barry@hotmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-emerald-100/50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                        In office
                      </span>
                      <div className="p-1 px-1.5 rounded-lg hover:bg-muted transition-colors opacity-0 group-aria-selected:opacity-100">
                        <MoreVertical className="size-4 text-muted-foreground/50" />
                      </div>
                    </div>
                  </Command.Item>

                  <Command.Item
                    onSelect={() => {
                      addToRecent({ id: 'maria-donin', label: 'Maria Donin', icon: 'Users', type: 'User' });
                      onClose();
                    }}
                    className="group relative flex cursor-default select-none items-center rounded-xl px-3 py-2 text-sm outline-none aria-selected:bg-accent/40 aria-selected:text-accent-foreground transition-all duration-200"
                  >
                    <div className="relative shrink-0 mr-4">
                      <img className="size-10 rounded-xl object-cover ring-1 ring-border group-aria-selected:ring-primary/20 transition-all" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="Maria Donin" />
                      <div className="absolute -right-1 -bottom-1 size-3.5 bg-rose-500 rounded-full border-2 border-card group-aria-selected:border-accent transition-all"></div>
                    </div>
                    <div className="flex flex-col items-start flex-1 min-w-0">
                      <span className="font-bold tracking-tight text-foreground/90 text-sm">Maria Donin</span>
                      <span className="text-[11px] font-medium text-muted-foreground/60 tracking-tight">maria@hotmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-rose-100/50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-400">
                        On leave
                      </span>
                      <div className="p-1 px-1.5 rounded-lg hover:bg-muted transition-colors opacity-0 group-aria-selected:opacity-100">
                        <MoreVertical className="size-4 text-muted-foreground/50" />
                      </div>
                    </div>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between border-t border-border/50 bg-muted/20 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground/60">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <kbd className="inline-flex h-5 items-center justify-center rounded border bg-background px-1.5 font-mono text-[10px]">esc</kbd>
                    <span className="opacity-70">Close</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5">
                    <kbd className="inline-flex h-5 items-center justify-center rounded border bg-background px-1.5 font-mono text-[10px]">
                      <CornerDownLeft className="size-2.5" />
                    </kbd>
                    <span className="opacity-70">Select</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-1">
                      <kbd className="inline-flex size-5 items-center justify-center rounded border bg-background font-mono text-[10px]">
                        <ArrowUp className="size-2.5" />
                      </kbd>
                      <kbd className="inline-flex size-5 items-center justify-center rounded border bg-background font-mono text-[10px]">
                        <ArrowDown className="size-2.5" />
                      </kbd>
                    </div>
                    <span className="opacity-70">Navigate</span>
                  </div>
                </div>
              </div>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

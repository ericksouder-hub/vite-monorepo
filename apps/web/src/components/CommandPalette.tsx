import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Users, ShoppingCart, LayoutDashboard, X, CornerDownLeft, ArrowUp, ArrowDown, MoreVertical } from 'lucide-react';
import { Command } from 'cmdk';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
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
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-xl border bg-card text-card-foreground shadow-2xl mx-4"
          >
            <Command className="flex h-full w-full flex-col overflow-hidden bg-popover text-popover-foreground">
              <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
                <Search className="mr-2 size-5 shrink-0 opacity-50" />
                <Command.Input 
                  className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search here..." 
                />
                <button onClick={onClose} className="p-1 text-muted-foreground hover:text-foreground rounded-md">
                  <X className="size-4" />
                </button>
              </div>
              <Command.List className="max-h-[60vh] overflow-y-auto overflow-x-hidden p-2">
                <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
                
                <Command.Group heading="Suggestions" className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
                  <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                    <Users className="mr-2 size-4" />
                    <span>Marketing UI Page</span>
                  </Command.Item>
                  <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                    <ShoppingCart className="mr-2 size-4" />
                    <span>e-commerce UI Page</span>
                  </Command.Item>
                  <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                    <LayoutDashboard className="mr-2 size-4" />
                    <span>Dashboard UI Page</span>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="-mx-1 my-1 h-px bg-border" />

                <Command.Group heading="Interactions" className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
                  <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-background mr-3">
                      <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/jira.png" alt="Jira" className="size-5 object-contain" />
                    </div>
                    <div className="flex flex-col items-start flex-1">
                      <span className="font-medium">Jira</span>
                      <span className="text-xs text-muted-foreground">Project management</span>
                    </div>
                    <div className="flex -space-x-2 mr-2">
                      <img className="inline-block size-6 rounded-full ring-2 ring-background" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="" />
                      <img className="inline-block size-6 rounded-full ring-2 ring-background" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="" />
                      <img className="inline-block size-6 rounded-full ring-2 ring-background" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png" alt="" />
                      <div className="flex size-6 items-center justify-center rounded-full ring-2 ring-background bg-muted text-[10px] font-medium text-muted-foreground">
                        +99
                      </div>
                    </div>
                  </Command.Item>
                  <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-md border bg-background mr-3">
                      <img src="https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/dashboard-dialog/inferno.png" alt="Inferno" className="size-5 object-contain" />
                    </div>
                    <div className="flex flex-col items-start flex-1">
                      <span className="font-medium">Inferno</span>
                      <span className="text-xs text-muted-foreground">Real-time photo sharing app</span>
                    </div>
                    <div className="flex -space-x-2 mr-2">
                      <img className="inline-block size-6 rounded-full ring-2 ring-background" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="" />
                      <img className="inline-block size-6 rounded-full ring-2 ring-background" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="" />
                      <img className="inline-block size-6 rounded-full ring-2 ring-background" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png" alt="" />
                      <img className="inline-block size-6 rounded-full ring-2 ring-background" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png" alt="" />
                    </div>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="-mx-1 my-1 h-px bg-border" />

                <Command.Group heading="Users" className="overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
                  <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground">
                    <img className="size-8 rounded-full mr-3" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png" alt="Barry Barnett" />
                    <div className="flex flex-col items-start flex-1">
                      <span className="font-medium">Barry Barnett</span>
                      <span className="text-xs text-muted-foreground">barry@hotmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        In office
                      </span>
                      <MoreVertical className="size-4 text-muted-foreground" />
                    </div>
                  </Command.Item>
                  <Command.Item className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground">
                    <img className="size-8 rounded-full mr-3" src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png" alt="Maria Donin" />
                    <div className="flex flex-col items-start flex-1">
                      <span className="font-medium">Maria Donin</span>
                      <span className="text-xs text-muted-foreground">maria@hotmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400">
                        On leave
                      </span>
                      <MoreVertical className="size-4 text-muted-foreground" />
                    </div>
                  </Command.Item>
                </Command.Group>
              </Command.List>

              <div className="flex items-center justify-between border-t px-4 py-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <kbd className="inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    esc
                  </kbd>
                  <span>To close</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex size-5 items-center justify-center rounded border bg-muted">
                      <CornerDownLeft className="size-3" />
                    </div>
                    <span>To Select</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex size-5 items-center justify-center rounded border bg-muted">
                      <ArrowUp className="size-3" />
                    </div>
                    <div className="flex size-5 items-center justify-center rounded border bg-muted">
                      <ArrowDown className="size-3" />
                    </div>
                    <span>To Navigate</span>
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

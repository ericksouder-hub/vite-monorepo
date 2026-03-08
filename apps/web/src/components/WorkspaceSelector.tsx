import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Plus,
    Zap,
    Lightbulb,
    Check,
    ChevronsUpDown
} from 'lucide-react';

interface Workspace {
    id: string;
    name: string;
    role: string;
    icon: React.ReactNode;
    color: string;
}

const WORKSPACES: Workspace[] = [
    {
        id: 'shadcn-studio',
        name: 'shadcn/studio',
        role: 'Workspace',
        icon: (
            <div className="bg-black dark:bg-zinc-800 text-white p-1 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 328 329" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="328" height="328" rx="70" fill="currentColor"></rect>
                    <path d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288" stroke="white" strokeWidth="24"></path>
                    <path d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771" stroke="white" strokeWidth="24"></path>
                    <line x1="238.136" y1="98.8184" x2="196.76" y2="139.707" stroke="white" strokeWidth="24"></line>
                    <line x1="135.688" y1="200.957" x2="94.3128" y2="241.845" stroke="white" strokeWidth="24"></line>
                    <line x1="133.689" y1="137.524" x2="92.5566" y2="96.3914" stroke="white" strokeWidth="24"></line>
                    <line x1="237.679" y1="241.803" x2="196.547" y2="200.671" stroke="white" strokeWidth="24"></line>
                </svg>
            </div>
        ),
        color: 'bg-zinc-950'
    },
    {
        id: 'flyonui',
        name: 'FlyonUI',
        role: 'Workspace',
        icon: (
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
                <Zap className="size-4 fill-current" />
            </div>
        ),
        color: 'bg-indigo-600'
    },
    {
        id: 'themeselection',
        name: 'ThemeSelection',
        role: 'Workspace',
        icon: (
            <div className="bg-sky-100 dark:bg-sky-900/40 text-sky-600 p-1.5 rounded-lg border border-sky-200 dark:border-sky-800">
                <Check className="size-4 stroke-[3]" />
            </div>
        ),
        color: 'bg-sky-500'
    },
    {
        id: 'pixinvent',
        name: 'Pixinvent',
        role: 'Workspace',
        icon: (
            <div className="bg-zinc-950 text-yellow-400 p-1.5 rounded-lg">
                <Lightbulb className="size-4 fill-current" />
            </div>
        ),
        color: 'bg-zinc-900'
    }
];

interface WorkspaceSelectorProps {
    collapsed?: boolean;
}

export function WorkspaceSelector({ collapsed }: WorkspaceSelectorProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeWorkspace, setActiveWorkspace] = useState(WORKSPACES[0]);

    return (
        <div className="relative px-3 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex w-full items-center gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 group ${collapsed ? 'justify-center' : ''
                    }`}
            >
                <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                    {activeWorkspace.icon}
                </div>

                {!collapsed && (
                    <>
                        <div className="flex flex-1 flex-col items-start overflow-hidden text-left">
                            <span className="text-[13px] font-bold text-foreground leading-tight truncate w-full">
                                {activeWorkspace.name}
                            </span>
                            <span className="text-[11px] font-medium text-muted-foreground/60 leading-tight">
                                {activeWorkspace.role}
                            </span>
                        </div>
                        <ChevronsUpDown className={`size-3.5 text-muted-foreground/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </>
                )}
            </button>

            <AnimatePresence>
                {isOpen && !collapsed && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-3 right-3 top-[calc(100%-8px)] z-50 overflow-hidden rounded-2xl border bg-card/95 p-1 backdrop-blur-xl shadow-2xl ring-1 ring-black/[0.03]"
                        >
                            <div className="flex flex-col gap-0.5">
                                {WORKSPACES.map((workspace) => (
                                    <button
                                        key={workspace.id}
                                        onClick={() => {
                                            setActiveWorkspace(workspace);
                                            setIsOpen(false);
                                        }}
                                        className={`flex items-center gap-3 rounded-xl p-2.5 transition-all text-left group ${activeWorkspace.id === workspace.id
                                            ? 'bg-zinc-100 dark:bg-zinc-800'
                                            : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
                                            }`}
                                    >
                                        <div className="shrink-0">
                                            {workspace.icon}
                                        </div>
                                        <div className="flex flex-1 flex-col overflow-hidden">
                                            <span className={`text-[13px] font-bold leading-tight truncate ${activeWorkspace.id === workspace.id ? 'text-foreground' : 'text-foreground/70'
                                                }`}>
                                                {workspace.name}
                                            </span>
                                            <span className="text-[11px] font-medium text-muted-foreground/60 leading-tight">
                                                {workspace.role}
                                            </span>
                                        </div>
                                        {activeWorkspace.id === workspace.id && (
                                            <div className="size-1.5 rounded-full bg-primary mr-1" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-1 border-t border-border/50 p-1">
                                <button className="flex w-full items-center justify-center gap-2 rounded-xl p-2.5 text-[13px] font-bold text-[#1a5f7a] bg-[#eef8fb] dark:bg-sky-900/20 dark:text-sky-400 hover:bg-[#e4f2f7] transition-colors mt-1">
                                    Add New Workspace
                                    <Plus className="size-3.5 mt-0.5" />
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

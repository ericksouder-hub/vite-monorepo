import { motion } from 'motion/react';
import { cn } from '@workspace/ui/lib/utils';

interface Tab {
    id: string;
    label: string | React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (id: string) => void;
    className?: string;
    layoutId?: string;
}

export function Tabs({
    tabs,
    activeTab,
    onChange,
    className,
    layoutId = "active-tab"
}: TabsProps) {
    return (
        <div
            role="tablist"
            aria-orientation="horizontal"
            className={cn(
                "flex items-center gap-1 border-b border-border/50 bg-background/80 backdrop-blur-md px-4",
                className
            )}
        >
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={cn(
                        "relative px-4 py-3 text-sm font-semibold transition-all outline-none",
                        activeTab === tab.id
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    {tab.label}
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId={layoutId}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.6
                            }}
                        />
                    )}
                </button>
            ))}
        </div>
    );
}

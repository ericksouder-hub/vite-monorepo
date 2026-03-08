import React from 'react';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';
import { X } from 'lucide-react';

export interface SidebarPromoProps {
    /** The clear, benefit-driven headline of the message. */
    title: string;
    /** A concise explanation of the value or notice. Can be text or JSX for highlighting. */
    description: string | React.ReactNode;
    /** Specific, action-oriented text for the button (e.g., "Upgrade to Pro" vs "Submit"). */
    actionText?: string;
    /** Callback for when the primary action is clicked. */
    onAction?: () => void;
    /** Callback for dismissing the message. If provided, a close button will appear. */
    onClose?: () => void;
    /** Strategic icon to provide visual context for the message. */
    icon?: React.ReactNode;
    /** Visual personality: 'premium' for sales, 'accent' for notices, 'default' for standard messages. */
    variant?: 'default' | 'premium' | 'accent';
    /** Manual style overrides. */
    className?: string;
}

export function SidebarPromo({
    title,
    description,
    actionText,
    onAction,
    onClose,
    icon,
    variant = 'default',
    className
}: SidebarPromoProps) {
    return (
        <div className={cn(
            "relative group flex flex-col items-start gap-3 p-4 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md",
            variant === 'default' && "bg-card border-border hover:border-primary/30",
            variant === 'premium' && "bg-primary/5 border-primary/20 hover:bg-primary/10",
            variant === 'accent' && "bg-accent/5 border-accent/20 hover:bg-accent/10",
            className
        )}>
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-1 text-muted-foreground/30 hover:text-foreground opacity-100 transition-colors"
                    aria-label={`Dismiss ${title}`}
                >
                    <X className="size-3.5" />
                </button>
            )}

            <div className="flex items-center gap-2">
                {icon && <div className="text-primary">{icon}</div>}
                <h4 className="text-sm font-bold text-foreground leading-tight text-balance">{title}</h4>
            </div>

            <div className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors leading-relaxed text-balance">
                {description}
            </div>

            {actionText && (
                <Button
                    onClick={onAction}
                    size="sm"
                    variant={variant === 'premium' ? 'default' : 'secondary'}
                    className="mt-1 w-full text-xs h-8"
                >
                    {actionText}
                </Button>
            )}
        </div>
    );
}

import type { ReactNode } from 'react';
import { AuthLogo } from './AuthLogo';

interface AuthLayoutProps {
    children: ReactNode;
    title: ReactNode;
    description: string;
    cardTitle: string;
    cardDescription: string;
    cardType?: 'default' | 'dark';
}

export function AuthLayout({
    children,
    title,
    description,
    cardTitle,
    cardDescription,
    cardType = 'default'
}: AuthLayoutProps) {
    return (
        <div className="h-dvh lg:grid lg:grid-cols-2 bg-background font-sans">
            {/* Left Side: Content/Form */}
            <div className="flex h-full items-center justify-center space-y-6 sm:px-6 md:px-8">
                <div className="flex w-full flex-col gap-6 p-6 sm:max-w-lg">
                    {children}
                </div>
            </div>

            {/* Right Side: Branding Content */}
            <div className="h-screen p-5 max-lg:hidden">
                <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-12 text-primary-foreground shadow-2xl">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 rounded-full bg-white/10 blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-80 rounded-full bg-black/10 blur-3xl opacity-50"></div>

                    <div className="space-y-8 relative z-10">
                        <h1 className="text-5xl font-extrabold leading-[1.15] tracking-tight xl:text-6xl text-white">
                            {title}
                        </h1>
                        <p className="max-w-md text-xl font-medium leading-relaxed text-primary-foreground/90">
                            {description}
                        </p>
                    </div>

                    {/* Large Background Logo */}
                    <AuthLogo className="absolute bottom-1/4 -left-20 text-white/5 pointer-events-none rotate-12 size-[400px]" strokeWidth={20} />

                    {/* Floating Card Overlay */}
                    <div className={`relative z-20 mt-auto overflow-hidden rounded-3xl p-8 shadow-2xl ${cardType === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-black dark:bg-zinc-900 dark:text-white'
                        }`}>
                        {cardType === 'default' && (
                            <div className="absolute top-0 right-0 flex h-16 w-16 items-center justify-center rounded-bl-3xl bg-primary/10 transition-colors hover:bg-primary/20">
                                <AuthLogo className="text-primary size-8" strokeWidth={24} />
                            </div>
                        )}

                        <div className="space-y-6">
                            <p className="text-3xl font-extrabold tracking-tight pr-12 leading-tight">
                                {cardTitle}
                            </p>
                            <p className={`text-lg font-medium ${cardType === 'dark' ? 'text-zinc-400' : 'text-zinc-500 dark:text-zinc-400'
                                }`}>
                                {cardDescription}
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2.5">
                                        {[
                                            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=128&h=128&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop",
                                            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&h=128&auto=format&fit=crop"
                                        ].map((src, i) => (
                                            <div key={i} className={`h-9 w-9 rounded-full border-2 bg-zinc-100 ring-2 ring-transparent transition-transform hover:scale-110 hover:z-30 cursor-pointer overflow-hidden ${cardType === 'dark' ? 'border-zinc-900' : 'border-white dark:border-zinc-900'
                                                }`}>
                                                <img
                                                    src={src}
                                                    alt="Professional User"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        ))}
                                        <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-[10px] font-bold ring-2 ring-transparent transition-transform hover:scale-110 hover:z-30 cursor-pointer ${cardType === 'dark' ? 'border-zinc-900 bg-zinc-800 text-zinc-400' : 'border-white bg-zinc-100 text-zinc-500 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-400'
                                            }`}>
                                            +12k
                                        </div>
                                    </div>
                                    <div className={`text-sm font-semibold tracking-tight ${cardType === 'dark' ? 'text-zinc-300' : 'text-zinc-600 dark:text-zinc-300'
                                        }`}>
                                        Trusted by high-performance teams
                                    </div>
                                </div>

                                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 ${cardType === 'dark' ? 'border-white/10 bg-white/5' : 'border-primary/10 bg-primary/5'
                                    }`}>
                                    <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                                        Live: Ava optimized 1,242 schedules today
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

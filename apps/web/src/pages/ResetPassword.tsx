import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="h-dvh lg:grid lg:grid-cols-2 bg-background font-sans">
            {/* Left Side: Reset Password Form */}
            <div className="flex h-full items-center justify-center space-y-6 sm:px-6 md:px-8">
                <div className="flex w-full flex-col gap-6 p-6 sm:max-w-lg">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-black">
                            <svg width="24" height="24" viewBox="0 0 328 329" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                                <path d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288" stroke="currentColor" strokeWidth="20" />
                                <path d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771" stroke="currentColor" strokeWidth="20" />
                                <line x1="238.136" y1="98.8184" x2="196.76" y2="139.707" stroke="currentColor" strokeWidth="20" />
                                <line x1="135.688" y1="200.957" x2="94.3128" y2="241.845" stroke="currentColor" strokeWidth="20" />
                                <line x1="133.689" y1="137.524" x2="92.5566" y2="96.3914" stroke="currentColor" strokeWidth="20" />
                                <line x1="237.679" y1="241.803" x2="196.547" y2="200.671" stroke="currentColor" strokeWidth="20" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Ava</span>
                    </div>

                    <div>
                        <h2 className="mb-1.5 text-2xl font-semibold">Set new password</h2>
                        <p className="text-muted-foreground text-sm">Must be at least 8 characters.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">New Password*</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                                    placeholder="••••••••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="confirmPassword" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Confirm Password*</label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10"
                                    placeholder="••••••••••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="w-full h-11 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] mt-2">
                            Reset Password
                        </button>
                    </form>

                    <Link
                        to="/login"
                        className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-2 group"
                    >
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        Back to login
                    </Link>
                </div>
            </div>

            {/* Right Side: Branding Content */}
            <div className="h-screen p-5 max-lg:hidden">
                <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-12 text-primary-foreground shadow-2xl">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 rounded-full bg-white/10 blur-3xl opacity-50"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-80 rounded-full bg-black/10 blur-3xl opacity-50"></div>

                    <div className="space-y-8 relative z-10">
                        <h1 className="text-5xl font-extrabold leading-[1.15] tracking-tight xl:text-6xl">
                            You're just one step away<br />
                            <span className="text-white/80">from regaining access.</span>
                        </h1>
                        <p className="max-w-lg text-xl font-medium leading-relaxed text-primary-foreground/90">
                            Please create a new password below. Make sure it's strong and secure, combining letters, numbers, and special characters.
                        </p>
                    </div>

                    {/* Large Background Logo */}
                    <svg width="400" height="400" viewBox="0 0 328 329" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-1/4 -left-20 text-white/5 pointer-events-none rotate-12">
                        <path d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288" stroke="currentColor" strokeWidth="20" />
                        <path d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771" stroke="currentColor" strokeWidth="20" />
                        <line x1="238.136" y1="98.8184" x2="196.76" y2="139.707" stroke="currentColor" strokeWidth="20" />
                        <line x1="135.688" y1="200.957" x2="94.3128" y2="241.845" stroke="currentColor" strokeWidth="20" />
                        <line x1="133.689" y1="137.524" x2="92.5566" y2="96.3914" stroke="currentColor" strokeWidth="20" />
                        <line x1="237.679" y1="241.803" x2="196.547" y2="200.671" stroke="currentColor" strokeWidth="20" />
                    </svg>

                    {/* Floating Card Overly */}
                    <div className="relative z-20 mt-auto overflow-hidden rounded-3xl bg-white p-8 text-black shadow-2xl dark:bg-zinc-900 dark:text-white">
                        <div className="absolute top-0 right-0 flex h-16 w-16 items-center justify-center rounded-bl-3xl bg-primary/10 transition-colors hover:bg-primary/20">
                            <svg width="32" height="32" viewBox="0 0 328 329" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                                <path d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288" stroke="currentColor" strokeWidth="24" />
                                <path d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771" stroke="currentColor" strokeWidth="24" />
                                <line x1="238.136" y1="98.8184" x2="196.76" y2="139.707" stroke="currentColor" strokeWidth="24" />
                                <line x1="135.688" y1="200.957" x2="94.3128" y2="241.845" stroke="currentColor" strokeWidth="24" />
                                <line x1="133.689" y1="137.524" x2="92.5566" y2="96.3914" stroke="currentColor" strokeWidth="24" />
                                <line x1="237.679" y1="241.803" x2="196.547" y2="200.671" stroke="currentColor" strokeWidth="24" />
                            </svg>
                        </div>

                        <div className="space-y-6">
                            <p className="text-3xl font-extrabold tracking-tight pr-12 leading-tight">
                                Regain access to your scheduling
                            </p>
                            <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
                                We'll have you back to booking appointments and managing your calendar in just a moment.
                            </p>

                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-zinc-100 ring-2 ring-transparent dark:border-zinc-900 transition-transform hover:scale-110 hover:z-30 cursor-pointer overflow-hidden">
                                            <img
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 80}`}
                                                alt="User Avatar"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-primary">
                                    Safe & Secure
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

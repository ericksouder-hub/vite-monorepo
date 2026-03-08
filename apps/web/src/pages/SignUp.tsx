import { useState } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    return (
        <div className="h-dvh lg:grid lg:grid-cols-2 bg-background font-sans">
            {/* Left Side: Sign Up Form */}
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
                        <h2 className="mb-1.5 text-2xl font-semibold">Create your account</h2>
                        <p className="text-muted-foreground text-sm">Let's get started with your 30 days free trial</p>
                    </div>

                    <button className="w-full inline-flex items-center justify-center gap-3 rounded-md border bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground shadow-sm transition-all h-11 active:scale-[0.99]">
                        <svg className="size-5" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        <span className="font-semibold">Sign up with Google</span>
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="h-px w-full bg-border flex-1"></div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold px-2">or</p>
                        <div className="h-px w-full bg-border flex-1"></div>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name*</label>
                            <input
                                id="name"
                                type="text"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="userEmail" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email address*</label>
                            <input
                                id="userEmail"
                                type="email"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password*</label>
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

                        <div className="flex items-start gap-2 pt-1">
                            <button
                                type="button"
                                role="checkbox"
                                aria-checked={agreeToTerms}
                                onClick={() => setAgreeToTerms(!agreeToTerms)}
                                className={`flex h-5 w-5 shrink-0 mt-0.5 items-center justify-center rounded border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${agreeToTerms ? 'bg-primary border-primary' : 'bg-background border-input'}`}
                            >
                                {agreeToTerms && <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />}
                            </button>
                            <label
                                onClick={() => setAgreeToTerms(!agreeToTerms)}
                                className="text-sm text-muted-foreground cursor-pointer select-none leading-relaxed"
                            >
                                I agree to all <span className="text-primary font-semibold hover:underline">Terms</span>, <span className="text-primary font-semibold hover:underline">Privacy Policy</span> and <span className="text-primary font-semibold hover:underline">Fees</span>
                            </label>
                        </div>

                        <button type="submit" className="w-full h-11 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] mt-2">
                            Sign up to Ava
                        </button>
                    </form>

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account? <Link to="/login" className="text-primary font-bold hover:underline underline-offset-4">Log in</Link>
                    </p>
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
                            Create your account<br />
                            <span className="text-white/80">to get started.</span>
                        </h1>
                        <p className="max-w-lg text-xl font-medium leading-relaxed text-primary-foreground/90">
                            Your account will allow you to securely save your progress, customize your preferences, and stay connected across all your devices.
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
                                We're excited to have you join our community
                            </p>
                            <p className="text-lg font-medium text-zinc-500 dark:text-zinc-400">
                                Your account will allow you to securely save your progress and customize your preferences.
                            </p>

                            <div className="flex items-center gap-4 pt-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-zinc-100 ring-2 ring-transparent dark:border-zinc-900 transition-transform hover:scale-110 hover:z-30 cursor-pointer overflow-hidden">
                                            <img
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 40}`}
                                                alt="User Avatar"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-primary">
                                    Ready to book?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

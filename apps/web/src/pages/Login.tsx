import { useState } from 'react';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthBrandHeader } from '../components/auth/AuthBrandHeader';

export function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <AuthLayout
            title={<>Welcome back!<br /><span className="text-white/80">Please sign in to your Ava account</span></>}
            description="Access your dashboard and manage your appointments."
            cardTitle="Plan your days better with Ava"
            cardDescription="Stay connected with Ava. We help you stay organized and never miss an appointment again."
        >
            <AuthBrandHeader />

            <div>
                <h2 className="mb-1.5 text-2xl font-semibold">Sign In</h2>
                <p className="text-muted-foreground text-sm">Choose your preferred login method:</p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground shadow-sm transition-colors h-10">
                    <svg className="size-4" viewBox="0 0 24 24">
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
                    Google
                </button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground shadow-sm transition-colors h-10">
                    <svg className="size-4 text-[#1877F2] fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                </button>
            </div>

            <div className="flex items-center gap-4">
                <div className="h-px w-full bg-border flex-1"></div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Or continue with</p>
                <div className="h-px w-full bg-border flex-1"></div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            role="checkbox"
                            aria-checked={rememberMe}
                            onClick={() => setRememberMe(!rememberMe)}
                            className={`flex h-5 w-5 items-center justify-center rounded border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${rememberMe ? 'bg-primary border-primary' : 'bg-background border-input'}`}
                        >
                            {rememberMe && <Check className="h-3.5 w-3.5 text-primary-foreground" strokeWidth={3} />}
                        </button>
                        <label
                            onClick={() => setRememberMe(!rememberMe)}
                            className="text-sm text-muted-foreground cursor-pointer select-none font-medium"
                        >
                            Remember Me
                        </label>
                    </div>
                    <Link to="/forgot-password" title="Go to forgot password" className="text-sm font-medium text-primary hover:underline underline-offset-4">Forgot Password?</Link>
                </div>

                <button type="submit" className="w-full h-10 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]">
                    Sign in to Ava
                </button>
            </form>

            <p className="text-center text-sm text-muted-foreground">
                New on our platform? <Link to="/signup" className="text-primary font-bold hover:underline underline-offset-4">Create an account</Link>
            </p>
        </AuthLayout>
    );
}

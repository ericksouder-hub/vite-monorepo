import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthBrandHeader } from '../components/auth/AuthBrandHeader';

export function ResetPassword() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/success');
    };

    return (
        <AuthLayout
            title={<>Set your new password<br /><span className="text-white/80">and regain access.</span></>}
            description="Create a strong, unique password to keep your account secure. We recommend using a mix of letters, numbers, and symbols."
            cardTitle="Secure your account"
            cardDescription="Your security is our priority. Once updated, you'll be able to sign in immediately."
        >
            <AuthBrandHeader />

            <div>
                <h2 className="mb-1.5 text-2xl font-semibold">Create New Password</h2>
                <p className="text-muted-foreground text-sm">Ensure your new password is at least 8 characters long.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
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
                Back to sign in
            </Link>
        </AuthLayout>
    );
}

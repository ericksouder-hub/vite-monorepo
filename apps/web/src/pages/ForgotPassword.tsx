import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthBrandHeader } from '../components/auth/AuthBrandHeader';

export function ForgotPassword() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/check-email');
    };

    return (
        <AuthLayout
            title={<>Forgot your password?<br /><span className="text-white/80">We've got you covered.</span></>}
            description="Enter your registered email address and we'll send you a secure link to reset your password and regain access."
            cardTitle="Simple, secure recovery"
            cardDescription="We use industry-standard encryption to ensure your account recovery is safe and private."
        >
            <AuthBrandHeader />

            <div>
                <h2 className="mb-1.5 text-2xl font-semibold">Reset Password</h2>
                <p className="text-muted-foreground text-sm">Enter your email to receive recovery instructions.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1.5">
                    <label htmlFor="userEmail" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email address*</label>
                    <input
                        id="userEmail"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email address"
                    />
                </div>

                <button type="submit" className="w-full h-11 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] mt-2">
                    Send Reset Link
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

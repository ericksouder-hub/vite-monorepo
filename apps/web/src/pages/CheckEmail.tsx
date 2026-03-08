import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, RefreshCw } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthBrandHeader } from '../components/auth/AuthBrandHeader';

export function CheckEmail() {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title={<>Check your email,<br /><span className="text-white/80">we've sent a link.</span></>}
            description="We've sent a password reset link to your email address. Please click the link to reset your password and regain access to your account."
            cardTitle="Verify your identity quickly"
            cardDescription="Security is our top priority. Verifying your email ensures that only you can access your account."
            avatarSeedOffset={100}
            avatarLabel="Trusted by 10k+ professionals"
        >
            <AuthBrandHeader />

            <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail size={24} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Verification Sent</h2>
                <p className="text-muted-foreground text-sm">We've sent a secure link to your inbox. Please check your email to proceed.</p>
            </div>

            <div className="space-y-4">
                <button
                    onClick={() => navigate('/login')}
                    className="w-full h-11 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]"
                >
                    Open email app
                </button>

                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        Didn't receive the email?{' '}
                        <button className="text-primary font-bold hover:underline inline-flex items-center gap-1 transition-colors">
                            <RefreshCw size={14} /> Click to resend
                        </button>
                    </p>
                </div>
            </div>

            <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors py-2 group"
            >
                <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                Back to login
            </Link>
        </AuthLayout>
    );
}

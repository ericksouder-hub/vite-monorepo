import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, RefreshCw } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthBrandHeader } from '../components/auth/AuthBrandHeader';

export function CheckEmail() {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title={<>Check your inbox,<br /><span className="text-white/80">we've sent a link.</span></>}
            description="Check your email for a password reset link. It expires in 30 minutes for your security. Don't forget to check your spam folder just in case."
            cardTitle="Secure verification"
            cardDescription="We send temporary secure links to ensure that only the account owner can authorize password changes."
        >
            <AuthBrandHeader />

            <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail size={24} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">Email Sent</h2>
                <p className="text-muted-foreground text-sm">We've sent a secure link to your email address. Please click the link to proceed.</p>
            </div>

            <div className="space-y-4">
                <button
                    onClick={() => navigate('/login')}
                    className="w-full h-11 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]"
                >
                    Return to sign in
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
                Back to sign in
            </Link>
        </AuthLayout>
    );
}

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthBrandHeader } from '../components/auth/AuthBrandHeader';

export function Success() {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title={<>Password reset<br /><span className="text-white/80">successfully!</span></>}
            description="Your password has been changed. You can now log in to your account with your new credentials and continue where you left off."
            cardTitle="Welcome back to Ava"
            cardDescription="Your account is now secure with your new password. We're glad to have you back!"
            cardType="dark"
        >
            <AuthBrandHeader />

            <div className="space-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                    <CheckCircle2 size={24} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">All Set!</h2>
                <p className="text-muted-foreground text-sm">Your password has been updated. You can now access your dashboard.</p>
            </div>

            <div className="space-y-4">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="w-full h-11 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    Go to Dashboard
                    <ArrowRight size={18} />
                </button>

                <button
                    onClick={() => navigate('/login')}
                    className="w-full h-11 rounded-md border border-input bg-background text-foreground font-semibold hover:bg-accent transition-all"
                >
                    Back to login
                </button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
                Having trouble? <button className="text-primary font-bold hover:underline">Contact Support</button>
            </p>
        </AuthLayout>
    );
}

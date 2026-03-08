import { AuthLogo } from './AuthLogo';

export function AuthBrandHeader({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-black">
                <AuthLogo className="size-6" strokeWidth={20} />
            </div>
            <span className="text-2xl font-bold tracking-tight">Ava</span>
        </div>
    );
}

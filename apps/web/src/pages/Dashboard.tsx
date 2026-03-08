export function Dashboard() {
    return (
        <div className="flex-1 rounded-xl border bg-card p-6 shadow-sm">
            <div
                className="h-full w-full rounded-md border min-h-[400px]"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(45deg, var(--color-muted), var(--color-muted) 1px, var(--color-card) 2px, var(--color-card) 15px)',
                }}
            />
        </div>
    );
}

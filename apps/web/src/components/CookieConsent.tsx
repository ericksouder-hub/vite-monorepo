import { useState, useEffect } from "react"
import { Cookie } from "lucide-react"

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already dismissed the banner
        const consent = localStorage.getItem("cookie-consent")
        if (!consent) {
            // Small delay to make it feel smoother
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleDismiss = () => {
        localStorage.setItem("cookie-consent", "dismissed")
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div
            data-slot="card"
            className="bg-card text-card-foreground fixed z-50 flex w-auto max-w-[calc(100vw-2rem)] flex-col gap-4 rounded-xl border-2 p-6 shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-500 ease-out left-4 right-4 top-1/2 -translate-y-1/2 sm:left-1/2 sm:right-auto sm:w-[min(420px,calc(100vw-3rem))] sm:-translate-x-1/2 md:left-auto md:right-8 md:bottom-8 md:top-auto md:w-[420px] md:translate-x-0 md:translate-y-0"
        >
            <div data-slot="card-content" className="flex gap-4 max-sm:flex-col">
                <Cookie className="size-8 shrink-0 text-primary" aria-hidden="true" />
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-semibold tracking-tight">Cookie Policy</h2>
                        <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                            We use cookies to improve your experience. By clicking "Allow all", you agree to our{" "}
                            <a href="#" className="text-primary hover:underline transition-all">
                                Cookies Policy
                            </a>.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleDismiss}
                            data-slot="button"
                            className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 rounded-md text-sm font-medium transition-colors shadow-sm"
                        >
                            Allow all
                        </button>
                        <button
                            onClick={handleDismiss}
                            data-slot="button"
                            className="cursor-pointer bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 rounded-md text-sm font-medium transition-colors border shadow-xs"
                        >
                            Manage
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

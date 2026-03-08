import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Image as ImageIcon,
    CloudUpload,
    Trash,
    Mail,
    Eye,
    X,
    Plus,
    Trash2,
    ChevronDown
} from 'lucide-react';
import { Tabs } from '@/components/Tabs';

export function Settings() {
    const [activeTab, setActiveTab] = useState('general');
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="w-full pt-4 pb-12">
            <div className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
                <Tabs
                    tabs={[
                        { id: 'general', label: 'General' },
                        { id: 'preferences', label: 'Preferences' },
                        { id: 'users', label: 'Users' }
                    ]}
                    activeTab={activeTab}
                    onChange={setActiveTab}
                    layoutId="active-settings-tab"
                    className="sticky top-[112px] md:top-[120px] z-30 -mx-4 sm:-mx-6 lg:-mx-8 sm:px-6 lg:px-8 mb-6 before:absolute before:bottom-full before:left-[-1000px] before:right-[-1000px] before:h-[112px] md:before:h-[120px] before:bg-background before:content-['']"
                />

                <div className="mt-4">
                    {activeTab === 'general' && <GeneralSettings />}
                    {activeTab === 'preferences' && <div className="py-20 text-center text-muted-foreground">Preferences settings coming soon...</div>}
                    {activeTab === 'users' && <div className="py-20 text-center text-muted-foreground">User management coming soon...</div>}
                </div>
            </div>
        </div>
    );
}

function GeneralSettings() {
    return (
        <section className="py-3">
            <div className="mx-auto max-w-7xl space-y-10">
                {/* Personal Information */}
                <div id="personal-info" className="grid grid-cols-1 gap-10 lg:grid-cols-3 scroll-mt-48 mt-6">
                    <div className="flex flex-col space-y-1">
                        <h3 className="font-semibold text-foreground">Personal Information</h3>
                        <p className="text-muted-foreground text-sm">Manage your personal information and role.</p>
                    </div>
                    <div className="space-y-6 lg:col-span-2">
                        <form className="mx-auto">
                            <div className="mb-6 w-full space-y-2">
                                <label className="text-sm font-medium text-foreground">Your Avatar</label>
                                <div className="flex items-center gap-4">
                                    <div role="button" className="flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-dashed hover:opacity-95 bg-muted/30">
                                        <ImageIcon className="size-6 text-muted-foreground" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input type="file" accept="image/*" className="hidden" />
                                        <button type="button" className="inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                            <CloudUpload className="size-4" />
                                            Upload avatar
                                        </button>
                                        <button type="button" className="inline-flex h-9 items-center justify-center rounded-md px-3 text-destructive hover:bg-destructive/10" disabled>
                                            <Trash className="size-4" />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm">Pick a photo up to 1MB.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="first-name" className="text-sm font-medium text-foreground">First Name</label>
                                    <input
                                        id="first-name"
                                        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="last-name" className="text-sm font-medium text-foreground">Last Name</label>
                                    <input
                                        id="last-name"
                                        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        placeholder="Doe"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="mobile" className="text-sm font-medium text-foreground">Mobile</label>
                                    <input
                                        id="mobile"
                                        type="tel"
                                        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="country" className="text-sm font-medium text-foreground">Country</label>
                                    <div className="relative">
                                        <select
                                            id="country"
                                            className="h-9 w-full appearance-none rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        >
                                            <option value="">Select country</option>
                                            <option value="india">India</option>
                                            <option value="china">China</option>
                                            <option value="usa">United States</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="gender" className="text-sm font-medium text-foreground">Gender</label>
                                    <div className="relative">
                                        <select
                                            id="gender"
                                            className="h-9 w-full appearance-none rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        >
                                            <option value="">Select a gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="role" className="text-sm font-medium text-foreground">Role</label>
                                    <div className="relative">
                                        <select
                                            id="role"
                                            className="h-9 w-full appearance-none rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        >
                                            <option value="">Select a role</option>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                            <option value="other">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="flex justify-end">
                            <button className="h-9 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-border/50"></div>

                {/* Email & Password */}
                <div id="email-password" className="grid grid-cols-1 gap-10 lg:grid-cols-3 scroll-mt-48">
                    <div className="flex flex-col space-y-1">
                        <h3 className="font-semibold text-foreground">Email & Password</h3>
                        <p className="text-muted-foreground text-sm">Manage your email and password settings.</p>
                    </div>
                    <div className="lg:col-span-2">
                        <form className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email <span className="text-destructive">*</span></label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pr-9 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        placeholder="Email address"
                                        required
                                    />
                                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="current-password" className="text-sm font-medium text-foreground">Current Password <span className="text-destructive">*</span></label>
                                <div className="relative">
                                    <input
                                        id="current-password"
                                        type="password"
                                        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pr-9 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                        placeholder="Password"
                                        required
                                    />
                                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                        <Eye className="size-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="new-password" className="text-sm font-medium text-foreground">New Password <span className="text-destructive">*</span></label>
                                <div className="relative space-y-3">
                                    <div className="relative">
                                        <input
                                            id="new-password"
                                            type="password"
                                            className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pr-9 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                            placeholder="Password"
                                            required
                                        />
                                        <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                            <Eye className="size-4" />
                                        </button>
                                    </div>
                                    <div className="flex h-1 w-full gap-1">
                                        <span className="h-full flex-1 rounded-full bg-border"></span>
                                        <span className="h-full flex-1 rounded-full bg-border"></span>
                                        <span className="h-full flex-1 rounded-full bg-border"></span>
                                        <span className="h-full flex-1 rounded-full bg-border"></span>
                                        <span className="h-full flex-1 rounded-full bg-border"></span>
                                    </div>
                                    <p className="text-foreground text-sm font-medium">Enter a password</p>
                                    <ul className="space-y-1.5">
                                        <li className="flex items-center gap-2">
                                            <X className="size-4 text-muted-foreground" />
                                            <span className="text-xs text-muted-foreground">At least 12 characters</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <X className="size-4 text-muted-foreground" />
                                            <span className="text-xs text-muted-foreground">At least 1 lowercase letter</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <X className="size-4 text-muted-foreground" />
                                            <span className="text-xs text-muted-foreground">At least 1 uppercase letter</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                        <div className="mt-6 flex justify-end">
                            <button className="h-9 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-border/50"></div>

                {/* Connect Accounts */}
                <div id="connect-accounts" className="grid grid-cols-1 gap-10 lg:grid-cols-3 scroll-mt-48">
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-foreground">Connect Accounts</h3>
                        <p className="text-muted-foreground text-sm">Manage your connected accounts.</p>
                    </div>
                    <div className="space-y-4 lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-3 rounded-md border p-2 bg-muted/20">
                                <img src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-icon.png" alt="Google" className="size-4 rounded" />
                                <p className="text-sm font-medium">Google</p>
                                <button className="text-primary hover:text-primary/80">
                                    <X className="size-3" />
                                </button>
                            </div>
                            <div className="flex items-center gap-3 rounded-md border p-2 bg-muted/20">
                                <img src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/slack-icon.png" alt="Slack" className="size-4 rounded" />
                                <p className="text-sm font-medium">Slack</p>
                                <button className="text-primary hover:text-primary/80">
                                    <X className="size-3" />
                                </button>
                            </div>
                            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                <Plus className="size-4" />
                                Add App
                            </button>
                        </div>
                        <p className="text-muted-foreground text-sm">Connected accounts allow you to integrate with third-party services for enhanced functionality.</p>
                    </div>
                </div>

                <div className="h-px w-full bg-border/50"></div>

                {/* Social URLs */}
                <div id="social-urls" className="grid grid-cols-1 gap-10 lg:grid-cols-3 scroll-mt-48">
                    <div className="flex flex-col">
                        <h3 className="font-semibold text-foreground">Social URLs</h3>
                        <p className="text-muted-foreground text-sm">Manage your social URLs.</p>
                    </div>
                    <div className="space-y-6 lg:col-span-2">
                        <div className="space-y-4">
                            <input className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Link to social profile" />
                            <input className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Link to social profile" />
                            <input className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="Link to social profile" />
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                <Plus className="size-4" />
                                Add URL
                            </button>
                            <button className="h-9 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-border/50"></div>

                {/* Danger Zone */}
                <div id="danger-zone" className="grid grid-cols-1 gap-10 lg:grid-cols-3 scroll-mt-48">
                    <div className="flex flex-col space-y-1">
                        <h3 className="font-semibold text-foreground">Danger Zone</h3>
                        <p className="text-muted-foreground text-sm">
                            Delete your account permanently. This action will remove all your data and cannot be undone.{' '}
                            <a href="#" className="font-medium text-foreground hover:underline">Learn more</a>
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-medium text-foreground">Delete account</h3>
                                    <p className="text-muted-foreground text-sm">Delete your account permanently. This action will remove all your data and cannot be undone.</p>
                                </div>
                                <button className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-destructive bg-transparent px-4 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10 focus-visible:ring-destructive">
                                    <Trash2 className="size-4" />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

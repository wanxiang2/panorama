import {
    LayoutDashboard,
    WalletCards,
    ChartNoAxesCombined,
    CalendarDays,
    GraduationCap,
    Info,
    Bell
} from "lucide-react";

/**
 * Creates the navigation bar on the left side of the home page.
 */
export default function Navbar() {
    // Maybe you can add a Debt tab or a Debt page you can add as a choice under Budgetting.
    // For Education, you can explain some basic things about investing, budgeting, and planning. Talk about ETFs, how small cap value produce
    // higher returns over time but more volatile. Talk about I-bonds for inflation protection. Talk about HSAs, ROth IRA, Traditona IRA, and 529 plans, Coverdell, and custodial accounts (Justin Hughes said).
    // You can also talk about the Damodaran course on valuation and MIT OCW and tell how you can get a finance education online for free by taking these courses.

    // Under About Us, have an About Us page that talks about us and then talk about how to use this website. 
    // Also under About Us, have a Mobile page that gives a QR code to download the app and then have a page that talks about how to use the app.



    return (
        <header className="shrink-0 self-stretch">
            <div className="bg-[#E9ECEF] shadow-[0_4px_8px_-1px_rgba(0,0,0,0.25)] w-44 min-h-screen h-full p-4">
                <nav>
                    <ul className="flex flex-col gap-4 items-center">
                        <img src="/panorama_logo.svg" alt="Logo" className="h-auto w-35 mb-7" />

                        {/* <h1 className="inline-flex items-center gap-2">Hi WanXiang <Bell className="h-4 w-4" /></h1> */}
                        <div className="flex items-center gap-3 mb-7">
                            <button type="button" aria-label="Notifications" className="text-slate-600">
                                <Bell className="h-5 w-5" />
                            </button>
                            <span aria-hidden="true" className="h-8 border-l border-slate-300" />
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                                W
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-left">
                            <li><a href="" className="inline-flex items-center gap-2"><LayoutDashboard className="h-4 w-4" />Overview</a></li>
                            <li><a href="" className="inline-flex items-center gap-2"><WalletCards className="h-4 w-4" />Budgetting</a></li>
                            <li><a href="" className="inline-flex items-center gap-2"><ChartNoAxesCombined className="h-4 w-4" />Investing</a></li>
                            <li><a href="" className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" />Planning</a></li>
                            <li><a href="" className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4" />Education</a></li>
                            <li><a href="" className="inline-flex items-center gap-2"><Info className="h-4 w-4" />About Us</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default function Navbar() {
    // Maybe you can add a Debt tab or a Debt page you can add as a choice under Budgetting.
    // For Education, you can explain some basic things about investing, budgeting, and planning. Talk about ETFs, how small cap value produce
    // higher returns over time but more volatile. Talk about I-bonds for inflation protection. Talk about HSAs, ROth IRA, Traditona IRA, and 529 plans, Coverdell, and custodial accounts (Justin Hughes said).
    // You can also talk about the Damodaran course on valuation and MIT OCW and tell how you can get a finance education online for free by taking these courses.

    // Under About Us, have an About Us page that talks about us and then talk about how to use this website. 
    // Also under About Us, have a Mobile page that gives a QR code to download the app and then have a page that talks about how to use the app.



    return (
        <header className="mb-4">
            <div className="bg-[#E9ECEF] shadow-[0_4px_8px_-1px_rgba(0,0,0,0.25)] w-44 min-h-screen p-4">
                <nav>
                    <ul className="flex flex-col gap-4 items-center">
                        <img src="/panorama_logo.svg" alt="Logo" className="h-auto w-35 mb-7" />

                        <div className="flex flex-col gap-4 items-left">
                            <li><a href="">Overview</a></li>
                            <li><a href="">Budgetting</a></li>
                            <li><a href="">Investing</a></li>
                            <li><a href="">Planning</a></li>
                            <li><a href="">Education</a></li>
                            <li><a href="">About Us</a></li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
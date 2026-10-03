import NetWorthChart from "@/components/charts/NetWorthChart";
import Chatbot from "@/components/layout/home_page_sections/Chatbot";
import FinancialStatements from "@/components/layout/home_page_sections/FinancialStatements";
import Investments from "@/components/layout/home_page_sections/Investments";
import CreditCards from "@/components/layout/home_page_sections/CreditCards";
import AccountsDropdowns from "@/components/layout/home_page_sidebar_sections/AccountsDropdowns";
import CalendarSection from "@/components/layout/home_page_sidebar_sections/CalendarSection";
import FunFact from "@/components/layout/home_page_sections/FunFact";

/**
 * This is the main home page for the Panorama app. It has the main content area on the left and the side content area on the right for desktop views.
 * In mobile views, the main content and side content are merged into a single column layout.
 */
export default function Home() {
  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-4 pt-10 pb-7 pr-1 pl-1 lg:grid-cols-[7fr_3fr] lg:pr-7 lg:pl-13">
      {/* This is the main content area. It includes the navbar, chatbot, and main content. */}
      <div className="contents min-w-0 lg:order-1 lg:grid lg:content-start lg:gap-4">
        <section className="order-1 min-w-0">
          <h1 className="text-2xl font-bold select-none mb-4">
            👋 Hi WanXiang, what can I help you with today?
          </h1>
          <Chatbot />
        </section>

        <div className="order-4 min-w-0">
          <FinancialStatements />
        </div>
        <div className="order-5 min-w-0">
          <Investments />
        </div>
        <div className="order-6 min-w-0">
          <CreditCards />
        </div>
        <div className="order-8 min-w-0">
          <FunFact />
        </div>
      </div>

      {/* This is the side content on the right to tell you your net worth, what accounts you have linked, and any recurring charges. */}
      <div className="contents min-w-0 lg:order-2 lg:grid lg:content-start lg:gap-4">
        <div className="order-2 min-w-0">
          <NetWorthChart />
        </div>
        <section className="order-3 min-w-0">
          <div className="ml-2 font-bold">
            <h1>NET WORTH</h1>
            <h1 className="text-4xl">$109,000</h1>
          </div>
        </section>
        <div className="order-7 min-w-0">
          <AccountsDropdowns />
          <CalendarSection />
        </div>
      </div>
    </div>
  );
}
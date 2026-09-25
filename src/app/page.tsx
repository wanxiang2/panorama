import NetWorthChart from "@/components/charts/NetWorthChart";
import Chatbot from "@/components/layout/home_page_sections/Chatbot";
import FinancialStatements from "@/components/layout/home_page_sections/FinancialStatements";
import Investments from "@/components/layout/home_page_sections/Investments";
import CreditCards from "@/components/layout/home_page_sections/CreditCards";
import AccountsDropdowns from "@/components/layout/home_page_sidebar_sections/AccountsDropdowns";
import CalendarSection from "@/components/layout/home_page_sidebar_sections/CalendarSection";
import FunFact from "@/components/layout/home_page_sections/FunFact";

/**
 * This is the main home page for the Panorama app. It has the main content area on the left and the side content area on the right.
 */
export default function Home() {
  return (
    <div className="ml-13 mt-10 mr-7 mb-7">
      
      {/* This is the main content area. It includes the navbar, chatbot, and main content. */}
      <div className="flex w-full gap-4">
        <div className="flex w-[70%] flex-col gap-4">
          <section className="mt-1 mb-1">
            <h1 className="text-2xl font-bold select-none mb-4">👋 Hi WanXiang, what can I help you with today?</h1>
            <Chatbot />
          </section>
          <FinancialStatements />
          <Investments />
          <CreditCards />
          <FunFact />
        </div>

        {/* This is the side content on the right to tell you your net worth, what accounts you have linked, and any recurring charges. */}
        <div className="flex w-[30%] flex-col gap-4">
          <NetWorthChart />
          <section className="ml-2 font-bold">
            <h1>NET WORTH</h1>
            <h1 className="text-4xl">$109,000</h1>
            <AccountsDropdowns />
            <CalendarSection />
          </section>
        </div>
      </div>
    </div>
  );
}

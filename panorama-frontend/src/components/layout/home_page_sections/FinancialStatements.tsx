/**
 * This renders a balance sheet table showing earnings and expenses.
 */
export default function FinancialStatements() {

    return (
        <section className="flex flex-col gap-4">
            
            {/* This is for the Month selector. Select the month to have the page update accordingly. */}
            <div className="flex flex-col gap-4 h-10 rounded-full bg-white px-5 select-none items-center justify-evenly">
                <p>Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec</p>
            </div>

            <div className="rounded-xl bg-white p-4 select-none">

                <h2 className="text-center">Cash Flow</h2>

                {/* This is just placeholder content. Remove it later. */}
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="py-2 pr-4 text-left font-medium text-gray-600">Income</th>
                            <th className="py-2 text-right font-medium text-gray-600">$</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100">
                            <td className="py-2 pr-4">Revenue</td>
                            <td className="py-2 text-right">$120,000</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                            <td className="py-2 pr-4">Expenses</td>
                            <td className="py-2 text-right">$80,000</td>
                        </tr>
                        <tr>
                            <td className="py-2 pr-4 font-medium">Net Income</td>
                            <td className="py-2 text-right font-medium">$40,000</td>
                        </tr>
                    </tbody>
                </table>
                {/* End of Removal */}
            </div>
        </section>
    );

}
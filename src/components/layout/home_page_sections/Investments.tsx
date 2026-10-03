/**
 * This renders a table showing all your investments in stocks, bonds, and ETFs in a table. 
 * Shows the ticker, name, number of shares owned, and performance.
 */
export default function Investments() {

    return (
        <section className="rounded-xl bg-white p-4 select-none">

            <h2 className="text-center">Investments</h2>
            
            {/* This is just placeholder content. Remove it later. */}
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className="py-2 pr-4 text-left font-medium text-gray-600">Item</th>
                        <th className="py-2 text-right font-medium text-gray-600">Value</th>
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
        </section>
    );

}
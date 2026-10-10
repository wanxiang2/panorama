/**
 * This renders a fun fact section with an interesting tidbit. 
 * It could be a fact that is relevant or interesting about the user, some general personal finance advice, or a fun fact about our company.
 */
export default function FunFact() {

    {/* IDEA!!! Make the Fun Fact section like this Fun Fact. <tell the fun fact> <source. But don't have a URL just the word source but it is clickable> */}
    
    return (
        <section className="flex items-baseline gap-2 bg-white p-4 select-none">
            <h2 className="text-base font-bold">Fun Fact.</h2>
            <p className="text-gray-600">
                Did you know? The average American saves about 10% of their income each year.
            </p>
        </section>
    );
            
}
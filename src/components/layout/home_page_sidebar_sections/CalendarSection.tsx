import { Calendar } from "@/components/ui/calendar";

/**
 * This renders a calendar for the home page on the right column. 
 * This will tell the user if they have any recurring charges coming up.
 */
export default function CalendarSection() {
    return (
        <section className="mt-5">
            <h2 className="text-left text-xs font-light">COMING UP</h2>

            <div className="mt-2 overflow-hidden rounded-xl bg-white shadow-sm select-none">
                <Calendar
                    className="w-full bg-white"
                    mode="single"
                    selected={new Date()}
                    classNames={{
                        day_button:
                            "data-[selected-single=true]:bg-[#51418b] data-[selected-single=true]:text-white hover:bg-[#51418b] hover:text-white",
                    }}
                />
            </div>

        </section>
    );
}
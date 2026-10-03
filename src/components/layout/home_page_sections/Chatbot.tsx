import { Plus, Mic, AudioLines } from "lucide-react";

/**
 * This renders the chatbot at the top of the home page.
 */
export default function Chatbot() {
    return (
        <div className="w-full max-w-5xl mb-6">
            <div className="flex h-12 min-w-0 items-center rounded-full border border-gray-200 bg-white px-3 shadow-sm sm:px-5">

                {/* Left button */}
                <button className="text-gray-700 hover:text-black">
                    <Plus size={28} strokeWidth={2} />
                </button>

                {/* Input */}
                <input
                    type="text"
                    placeholder="Ask anything"
                    className="mx-2 min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-gray-400 sm:mx-4"
                />

                {/* Mic */}
                <button className="mr-2 shrink-0 text-gray-700 hover:text-black sm:mr-4">
                    <Mic size={20} />
                </button>

                {/* Voice button */}
                <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800">
                    <AudioLines size={20} />
                </button>
            </div>
        </div>
    );
}
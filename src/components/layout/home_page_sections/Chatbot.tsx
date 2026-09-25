import { Plus, Mic, AudioLines } from "lucide-react";

/**
 * This renders the chatbot at the top of the home page.
 */
export default function Chatbot() {
    return (
        <div className="w-full max-w-5xl mb-6">
            <div className="flex items-center h-12 rounded-full border border-gray-200 bg-white shadow-sm px-5">

                {/* Left button */}
                <button className="text-gray-700 hover:text-black">
                    <Plus size={28} strokeWidth={2} />
                </button>

                {/* Input */}
                <input
                    type="text"
                    placeholder="Ask anything"
                    className="flex-1 mx-4 bg-transparent outline-none text-base placeholder:text-gray-400"
                />

                {/* Mic */}
                <button className="mr-4 text-gray-700 hover:text-black">
                    <Mic size={20} />
                </button>

                {/* Voice button */}
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800">
                    <AudioLines size={20} />
                </button>
            </div>
        </div>
    );
}
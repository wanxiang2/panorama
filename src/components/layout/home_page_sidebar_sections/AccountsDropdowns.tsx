"use client";

import { useState } from "react";
import {
    BarChart3,
    ChevronDown,
    CreditCard,
    DollarSign,
    Landmark,
    PiggyBank,
} from "lucide-react";

const accounts = [
    { name: "Checking", balance: "$4,280.00", detail: "Chase checking account", icon: Landmark },
    { name: "Credit Cards", balance: "-$1,240.00", detail: "2 cards connected", icon: CreditCard },
    { name: "Net Cash", balance: "$3,040.00", detail: "Cash after credit card balances", icon: DollarSign },
    { name: "Savings", balance: "$18,650.00", detail: "High-yield savings account", icon: PiggyBank },
    { name: "Investments", balance: "$82,310.00", detail: "Brokerage and retirement accounts", icon: BarChart3 },
];

export default function AccountsDropdowns() {
    const [openAccount, setOpenAccount] = useState<string | null>(null);

    return (
        <section className="mt-5">
            <h2 className="text-left text-xs font-light">ACCOUNTS</h2>

            <div className="mt-2 overflow-hidden rounded-xl bg-white shadow-sm select-none">
                {accounts.map(({ name, balance, detail, icon: Icon }) => {
                    const isOpen = openAccount === name;

                    return (
                        <div key={name} className="border-b border-slate-200 last:border-b-0">
                            <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => setOpenAccount(isOpen ? null : name)}
                                className="flex w-full items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-slate-50"
                            >
                                <Icon className="h-4 w-4 shrink-0 text-[#51418b]" strokeWidth={1.8} />
                                <span className="min-w-0 flex-1 truncate text-sm text-slate-800">{name}</span>
                                <span className="text-xs font-medium text-slate-500">{balance}</span>
                                <ChevronDown
                                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {isOpen && (
                                <div className="bg-slate-50 px-10 pb-3 text-xs text-slate-500">
                                    {detail}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );

}
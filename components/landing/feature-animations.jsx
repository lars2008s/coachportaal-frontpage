'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// 1. AI Assistant Animation
export function AIAssistantAnimation() {
    const [messages, setMessages] = useState([
        { text: "Maak een training voor pupillen", isAi: false },
    ]);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setMessages((prev) => [...prev, { text: "Natuurlijk! Hier is een voorstel:", isAi: true }]);
        }, 1500);
        const timer2 = setTimeout(() => {
            setMessages((prev) => [...prev, { text: "• Warming-up: Tikkertje (10m)\n• Kern: Kogelstoten techniek (20m)\n• Slot: Estafette (15m)", isAi: true }]);
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-80 flex flex-col">
            <div className="bg-blue-600 p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">✨</div>
                <span className="font-bold text-white text-[10px] uppercase tracking-wider">AI Coach Assistent</span>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50">
                <AnimatePresence>
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.isAi ? "justify-start" : "justify-end"}`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.isAi
                                    ? "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm"
                                    : "bg-blue-600 text-white rounded-tr-none shadow-md"
                                    }`}
                            >
                                {msg.text.split("\n").map((line, j) => (
                                    <div key={j}>{line}</div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                    {messages.length < 3 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex justify-start"
                        >
                            <div className="bg-gray-200 rounded-full px-3 py-1 flex gap-1">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// 2. Member Management Animation
export function MemberManagementAnimation() {
    const [members, setMembers] = useState([
        { name: "Emma P.", status: "present" },
        { name: "Lucas M.", status: "absent" },
        { name: "Noah S.", status: "present" },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMembers((prev) => {
                const newMembers = [...prev];
                const idx = Math.floor(Math.random() * newMembers.length);
                newMembers[idx].status = newMembers[idx].status === "present" ? "absent" : "present";
                return newMembers;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-400">
                <span>Aanwezigheid</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Live</span>
            </div>
            <div className="divide-y divide-gray-100">
                {members.map((m, i) => (
                    <div key={i} className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600">
                                {m.name.charAt(0)}
                            </div>
                            <span className="text-gray-900 font-bold text-xs">{m.name}</span>
                        </div>
                        <motion.div
                            key={m.status}
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`px-3 py-1 rounded-full text-[10px] font-bold ${m.status === "present"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                                }`}
                        >
                            {m.status === "present" ? "Aanwezig" : "Afwezig"}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 3. Competitions Animation
export function CompetitionsAnimation() {
    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative h-64">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent z-10" />

            <div className="p-4 space-y-3">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: -50, opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: "linear",
                        }}
                        className="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-lg shadow-sm"
                    >
                        <div className="w-8 h-8 rounded bg-yellow-50 flex items-center justify-center text-yellow-600 font-bold text-xs">
                            #{i}
                        </div>
                        <div className="flex-1">
                            <div className="h-2 w-24 bg-gray-200 rounded mb-1" />
                            <div className="h-2 w-16 bg-gray-100 rounded" />
                        </div>
                        <div className="text-xs font-mono font-bold text-gray-900">
                            {10 + i}.45s
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// 4. Diploma Generator Animation
export function DiplomaAnimation() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto h-64 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="raw"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center"
                    >
                        <div className="text-4xl mb-2">📊</div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Data scannen...</div>
                    </motion.div>
                )}
                {step === 1 && (
                    <motion.div
                        key="processing"
                        initial={{ opacity: 0, rotate: -10 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 10 }}
                        className="bg-blue-600 p-6 rounded-2xl shadow-xl text-white text-center"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="text-4xl mb-2"
                        >
                            ⚙️
                        </motion.div>
                        <div className="text-[10px] font-black uppercase tracking-widest">Genereren...</div>
                    </motion.div>
                )}
                {step === 2 && (
                    <motion.div
                        key="done"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-white p-4 rounded-xl shadow-2xl border-4 border-double border-yellow-400 w-48 aspect-[1.414] flex flex-col items-center justify-center text-center shadow-yellow-200/50"
                    >
                        <div className="text-[8px] font-serif text-gray-400 uppercase tracking-[0.2em] mb-1">Oorkonde</div>
                        <div className="text-lg font-serif font-bold text-gray-900 mb-1 leading-tight">Winnaar</div>
                        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white text-xs mb-1 shadow-inner">★</div>
                        <div className="h-1 w-16 bg-gray-200 rounded" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// 5. Chrome Extension Animation
export function ExtensionAnimation() {
    return (
        <div className="w-full max-w-sm mx-auto bg-gray-100 rounded-t-xl overflow-hidden border border-gray-300 shadow-xl">
            {/* Browser Bar */}
            <div className="bg-gray-200 px-3 py-2 flex items-center gap-2 border-b border-gray-300">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-inner" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-inner" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-inner" />
                </div>
                <div className="flex-1 bg-white h-6 rounded text-[10px] flex items-center px-2 text-gray-400 font-mono">
                    atletiek.nu/resultaten
                </div>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-5 h-5 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[8px] font-black cursor-pointer shadow-lg shadow-blue-500/20"
                >
                    CP
                </motion.div>
            </div>

            {/* Content */}
            <div className="bg-white h-44 relative p-4">
                <div className="space-y-2 opacity-50">
                    <div className="h-3 bg-gray-100 w-3/4 rounded" />
                    <div className="h-3 bg-gray-100 w-1/2 rounded" />
                    <div className="h-24 bg-gray-50 rounded border border-gray-100" />
                </div>

                {/* Popup */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 right-4 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-10"
                >
                    <div className="flex items-center gap-2 mb-3 border-b border-gray-50 pb-2">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[6px] font-bold">CP</div>
                        <span className="text-[10px] font-black tracking-tight text-gray-900">Coach Portaal</span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-[9px]">
                            <span className="text-gray-400 font-bold uppercase tracking-widest">Gevonden:</span>
                            <span className="font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">12 atleten</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 1 }}
                                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                            />
                        </div>
                        <button className="w-full bg-blue-600 text-white text-[10px] py-2 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                            Importeren
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// 6. Library Animation
export function LibraryAnimation() {
    const [query, setQuery] = useState("");
    const fullText = "Sprint";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setQuery(fullText.slice(0, i + 1));
            i = (i + 1) % (fullText.length + 5);
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-4">
            <div className="relative mb-4">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-xs">
                    🔍
                </div>
                <input
                    type="text"
                    value={query}
                    readOnly
                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold focus:outline-none placeholder:text-gray-300"
                    placeholder="Zoek oefening..."
                />
            </div>

            <div className="grid grid-cols-2 gap-3">
                {[
                    { title: "Startblokken", type: "Sprint", color: "blue" },
                    { title: "Kogelstoten", type: "Werpen", color: "orange" },
                    { title: "Hordenloops", type: "Sprint", color: "blue" },
                    { title: "Duurtraining", type: "Lopen", color: "green" },
                ].map((item, i) => {
                    const isMatch = item.type.toLowerCase().includes(query.toLowerCase()) || query.length === 0;
                    return (
                        <motion.div
                            key={i}
                            animate={{
                                opacity: isMatch ? 1 : 0.2,
                                scale: isMatch ? 1 : 0.95,
                            }}
                            className={`p-3 rounded-xl border ${isMatch ? "border-blue-100 bg-blue-50/50" : "border-gray-50 bg-white"}`}
                        >
                            <div className="flex items-center gap-1.5 mb-2">
                                <div className={`w-1 h-3 rounded-full bg-${item.color}-500 shadow-sm shadow-${item.color}-500/20`} />
                                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">{item.type}</span>
                            </div>
                            <div className="text-[11px] font-black text-gray-900 leading-tight">{item.title}</div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

// 7. Blocks Animation
export function BlocksAnimation() {
    return (
        <div className="w-full max-w-sm mx-auto bg-gray-50 rounded-2xl border border-gray-200 p-4 h-64 flex flex-col">
            <div className="flex-1 border-2 border-dashed border-gray-200 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden bg-white/50 shadow-inner">
                <div className="absolute top-4 left-4 text-[9px] text-gray-400 font-black uppercase tracking-[0.2em] leading-none">Training Tijdlijn</div>

                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-4/5 h-16 bg-white border border-gray-100 rounded-2xl flex items-center px-4 gap-4 shadow-2xl shadow-gray-200/50 group"
                >
                    <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-black shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform">1</div>
                    <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 leading-none mb-1.5">Kernoefening</div>
                        <div className="h-1.5 w-16 bg-gray-50 rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-blue-100 rounded-full" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="flex gap-3 overflow-x-hidden pt-2">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        animate={{ y: i === 1 ? [0, -10, 0] : 0 }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className="flex-shrink-0 w-24 h-16 bg-white border border-gray-100 rounded-xl shadow-sm p-4"
                    >
                        <div className="w-full h-2 bg-gray-100 rounded-full mb-2" />
                        <div className="w-2/3 h-2 bg-gray-50 rounded-full" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

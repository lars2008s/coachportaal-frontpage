'use client';

import { motion } from "framer-motion";

export function BentoCard({
    children,
    className = "",
    title,
    description,
    delay = 0,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
        >
            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">{title}</h3>
                <p className="text-sm text-gray-500 mt-1 mb-6 leading-relaxed">{description}</p>
                <div className="flex-1 min-h-0 flex items-center justify-center">{children}</div>
            </div>
        </motion.div>
    );
}

export function FeatureIcon({ icon }) {
    return (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6 shadow-sm shadow-blue-100">
            {icon}
        </div>
    );
}

export function CheckItem({ text }) {
    return (
        <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
            <div className="h-5 w-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                <svg
                    className="h-3.5 w-3.5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
            {text}
        </div>
    );
}

export function StaticLibraryPreview() {
    const cards = [
        { title: "Verspringen – Aanloop", tags: ["Benjamin"], duration: 45, color: "blue" },
        { title: "Kogel Basis", tags: ["Pupil"], duration: 50, color: "purple" },
        { title: "Sprint Starts", tags: ["Miniem"], duration: 60, color: "green" },
    ];
    return (
        <div className="w-full space-y-3">
            {cards.map((c, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 p-3 shadow-sm flex items-center gap-3 hover:border-blue-200 transition-colors">
                    <div className={`w-10 h-10 rounded-lg bg-${c.color}-50 flex items-center justify-center text-${c.color}-600`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 text-xs truncate">{c.title}</h4>
                        <div className="flex gap-1.5 mt-1">
                            {c.tags.map((t) => (
                                <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-full bg-gray-50 text-gray-400 font-bold border border-gray-100">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                    <span className="text-[10px] text-gray-300 font-black">{c.duration}m</span>
                </div>
            ))}
        </div>
    );
}

export function TrainingBuilderPreview() {
    return (
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden">
            {/* Header Mockup */}
            <div className="border-b border-gray-50 bg-gray-50/30 p-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-red-400/50"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-400/50"></div>
                    <div className="h-2 w-2 rounded-full bg-green-400/50"></div>
                </div>
                <div className="px-3 py-1 bg-white rounded-full border border-gray-100 shadow-sm text-[10px] text-gray-400 font-black uppercase tracking-widest">
                    Training Editor
                </div>
                <div className="w-6"></div>
            </div>

            <div className="p-5 flex gap-5">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="h-4 w-32 bg-gray-100 rounded-full"></div>
                        <div className="h-9 px-4 bg-blue-600 rounded-xl flex items-center text-[11px] text-white font-black uppercase tracking-wider shadow-lg shadow-blue-600/20">Opslaan</div>
                    </div>

                    <div className="space-y-3">
                        {/* WARMUP */}
                        <div className="relative pl-5 border-l-2 border-orange-100 pb-2">
                            <div className="absolute -left-1.5 top-0 h-2.5 w-2.5 rounded-full bg-orange-400 border-2 border-white"></div>
                            <div className="bg-orange-50/50 rounded-xl border border-orange-100 p-3">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-black uppercase tracking-wider text-orange-900">Opwarming</span>
                                    <span className="text-[10px] text-orange-600 font-bold">15 min</span>
                                </div>
                                <div className="h-1.5 w-3/4 bg-orange-200/30 rounded-full mb-1"></div>
                                <div className="h-1.5 w-1/2 bg-orange-200/30 rounded-full"></div>
                            </div>
                        </div>

                        {/* CORE */}
                        <div className="relative pl-5 border-l-2 border-blue-100">
                            <div className="absolute -left-1.5 top-0 h-2.5 w-2.5 rounded-full bg-blue-500 border-2 border-white"></div>
                            <div className="bg-white rounded-xl border border-gray-100 p-3 shadow-xl shadow-gray-100/20">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[11px] font-black text-gray-900">Sprint Techniek</span>
                                    <span className="text-[10px] text-blue-600 font-bold">40 min</span>
                                </div>
                                <div className="h-1.5 w-2/3 bg-gray-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function MemberTablePreview() {
    const members = [
        { name: "Emma Peeters", category: "Pupil", status: "Present", color: "bg-pink-100 text-pink-600" },
        { name: "Lucas Maes", category: "Miniem", status: "Present", color: "bg-blue-100 text-blue-600" },
        { name: "Noah Vermeulen", category: "Benj.", status: "Absent", color: "bg-yellow-100 text-yellow-600" },
    ];

    return (
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex flex-col">
            <div className="p-5 border-b border-gray-50 flex items-center justify-between">
                <div>
                    <h4 className="font-black text-gray-900 text-xs uppercase tracking-widest">Leden</h4>
                    <p className="text-[10px] text-gray-400 font-bold mt-0.5">Laatste update: zojuist</p>
                </div>
                <div className="h-8 w-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm shadow-blue-100">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                </div>
            </div>

            <div className="p-2">
                <table className="w-full text-left">
                    <tbody className="divide-y divide-gray-50">
                        {members.map((m, i) => (
                            <tr key={i} className="group">
                                <td className="px-3 py-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center text-[10px] font-black ${m.color} shadow-sm`}>
                                            {m.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-900 truncate max-w-[80px]">{m.name}</div>
                                            <div className="text-[9px] font-bold text-gray-400">{m.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-3 py-3 text-right">
                                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${m.status === "Present" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                                        {m.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export function CompetitionResultPreview() {
    return (
        <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-xl p-5">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <h4 className="font-black text-gray-900 text-xs uppercase tracking-widest">PK Antwerpen</h4>
                    <p className="text-[10px] text-gray-400 font-bold mt-0.5">60m Sprint • Pupil</p>
                </div>
                <div className="h-9 w-9 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-500 shadow-sm shadow-yellow-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </div>
            </div>
            <div className="space-y-3">
                {[
                    { rank: 1, name: "Emma P.", time: "8.45s", color: "text-yellow-600" },
                    { rank: 2, name: "Julie J.", time: "8.52s", color: "text-gray-400" },
                    { rank: 3, name: "Lotte D.", time: "8.61s", color: "text-orange-400" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                            <span className={`font-black ${item.color} w-3`}>{item.rank}</span>
                            <span className="text-gray-900 font-bold">{item.name}</span>
                        </div>
                        <span className="font-mono font-bold text-gray-400">{item.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

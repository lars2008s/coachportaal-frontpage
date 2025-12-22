'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function DocsPage() {
    const categories = [
        {
            title: "Aan de slag",
            description: "Nieuw bij Coach Portaal? Volg onze 15-minuten installatiegids.",
            icon: "🚀",
            links: [
                { label: "Snelstartgids", href: "/docs/quick-start" },
                { label: "Dashboard Navigatie", href: "/docs/dashboard" }
            ]
        },
        {
            title: "Gebruikershandleiding",
            description: "Leer alles over het beheren van leden, trainingen en wedstrijden.",
            icon: "📖",
            links: [
                { label: "Ledenadministratie", href: "/docs/members" },
                { label: "Training Builder", href: "/docs/training" }
            ]
        },
        {
            title: "Beheer & Instellingen",
            description: "Configureer je organisatie, rollen en facturatie.",
            icon: "⚙️",
            links: [
                { label: "Systeemconfiguratie", href: "/docs/admin" },
                { label: "Gebruikersbeheer", href: "/docs/users" }
            ]
        },
        {
            title: "Ondersteuning",
            description: "Veelgestelde vragen en probleemoplossing.",
            icon: "🆘",
            links: [
                { label: "Probleemoplossing", href: "/docs/troubleshooting" },
                { label: "Contacteer ons", href: "mailto:support@coachportaal.be" }
            ]
        }
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 text-center"
            >
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
                    Kennisbank <span className="text-blue-600">Docs</span>
                </h1>
                <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                    Alles wat je nodig hebt om het meeste uit Coach Portaal te halen.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col h-full hover:bg-white hover:border-blue-100 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-600/5"
                    >
                        <div className="text-4xl mb-6">{cat.icon}</div>
                        <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">{cat.title}</h2>
                        <p className="text-gray-500 font-medium mb-8 leading-relaxed">{cat.description}</p>

                        <div className="mt-auto space-y-3">
                            {cat.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="flex items-center text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors no-underline!"
                                >
                                    <svg className="mr-2 w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                    </svg>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="rounded-[3rem] bg-gray-900 p-12 sm:p-20 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px]"></div>
                <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6 tracking-tight">Nog steeds hulp nodig?</h3>
                    <p className="text-gray-400 font-medium mb-10 max-w-lg mx-auto leading-relaxed">
                        Als je het antwoord niet kunt vinden in onze documentatie, staat ons ondersteuningsteam voor je klaar.
                    </p>
                    <Link
                        href="mailto:support@coachportaal.be"
                        className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-lg font-black text-gray-900 shadow-2xl hover:bg-gray-50 transition-all no-underline!"
                    >
                        Stuur ons een bericht
                    </Link>
                </div>
            </div>
        </div>
    );
}

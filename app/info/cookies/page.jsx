'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function CookiesPage() {
    const lastUpdated = "27 december 2024";

    const cookieTypes = [
        {
            type: "Noodzakelijk",
            required: true,
            description: "Deze cookies zijn essentieel voor de werking van de website en kunnen niet worden uitgeschakeld.",
            cookies: [
                { name: "__clerk_*", purpose: "Authenticatie en sessiebeheer", duration: "Sessie / 1 jaar", provider: "Clerk" },
                { name: "__client_uat", purpose: "Gebruikersauthenticatie status", duration: "1 jaar", provider: "Clerk" },
            ]
        },
        {
            type: "Functioneel",
            required: false,
            description: "Deze cookies onthouden uw voorkeuren en maken een verbeterde ervaring mogelijk.",
            cookies: [
                { name: "theme_preference", purpose: "Onthoudt uw themavoorkeur (licht/donker)", duration: "1 jaar", provider: "Coach Portaal" },
                { name: "sidebar_state", purpose: "Onthoudt of de zijbalk is in- of uitgeklapt", duration: "30 dagen", provider: "Coach Portaal" },
            ]
        },
        {
            type: "Analytisch",
            required: false,
            description: "Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken.",
            cookies: [
                { name: "_ga, _gid", purpose: "Google Analytics - bezoekersstatistieken", duration: "2 jaar / 24 uur", provider: "Google" },
            ]
        }
    ];

    const sections = [
        {
            id: "wat",
            title: "Wat zijn cookies?",
            content: `Cookies zijn kleine tekstbestanden die op uw computer of mobiel apparaat worden opgeslagen wanneer u een website bezoekt. Ze worden veel gebruikt om websites te laten functioneren, efficiënter te maken en om informatie te verstrekken aan de eigenaren van de website.

Cookies kunnen worden ingesteld door de website die u bezoekt ("first-party cookies") of door andere websites die content op die pagina uitvoeren ("third-party cookies").`
        },
        {
            id: "beheren",
            title: "Hoe kunt u cookies beheren?",
            content: `U heeft verschillende opties om cookies te beheren:

Browserinstellingen
De meeste browsers staan u toe om cookies te bekijken, verwijderen en blokkeren. De methode verschilt per browser:
• Chrome: Instellingen → Privacy en beveiliging → Cookies
• Firefox: Instellingen → Privacy & beveiliging → Cookies
• Safari: Voorkeuren → Privacy → Cookies
• Edge: Instellingen → Cookies en sitemachtigingen

Let op: Het blokkeren van alle cookies kan de functionaliteit van onze website beperken.`
        },
        {
            id: "toestemming",
            title: "Uw toestemming",
            content: `Bij uw eerste bezoek aan onze website vragen wij uw toestemming voor het plaatsen van niet-essentiële cookies. U kunt deze toestemming op elk moment intrekken via de cookie-instellingen onderaan de pagina.

Noodzakelijke cookies worden altijd geplaatst omdat deze essentieel zijn voor de werking van de website. Hiervoor is geen toestemming vereist.`
        },
        {
            id: "wijzigingen",
            title: "Wijzigingen",
            content: `Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken. De meest recente versie is altijd beschikbaar op deze pagina met de datum van de laatste wijziging.`
        },
        {
            id: "contact",
            title: "Contact",
            content: `Heeft u vragen over ons gebruik van cookies? Neem contact met ons op via support@coachportaal.be.

Voor meer informatie over hoe wij omgaan met uw persoonsgegevens, verwijzen wij u naar ons Privacybeleid.`
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <Link
                    href="/info"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium mb-6 no-underline transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Terug naar Info
                </Link>

                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter mb-4 leading-none">
                    Cookie<span className="text-blue-600">beleid</span>
                </h1>
                <p className="text-gray-500 font-medium">
                    Laatst bijgewerkt: {lastUpdated}
                </p>
            </motion.div>

            {/* Introduction */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100"
            >
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-amber-800 font-medium text-sm leading-relaxed">
                        Dit cookiebeleid legt uit welke cookies wij gebruiken op Coach Portaal,
                        waarom wij ze gebruiken en hoe u deze kunt beheren. Wij respecteren uw privacy
                        en gebruiken alleen cookies die noodzakelijk zijn of waarvoor u toestemming heeft gegeven.
                    </p>
                </div>
            </motion.div>

            {/* Cookie Types Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">
                    Welke cookies gebruiken wij?
                </h2>

                <div className="space-y-6">
                    {cookieTypes.map((category, index) => (
                        <motion.div
                            key={category.type}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl border border-gray-200 overflow-hidden"
                        >
                            <div className="p-5 bg-gray-50 border-b border-gray-200">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-gray-900">{category.type}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${category.required
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        {category.required ? 'Altijd actief' : 'Optioneel'}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500">{category.description}</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50/50">
                                        <tr>
                                            <th className="px-5 py-3 text-left font-semibold text-gray-700">Cookie</th>
                                            <th className="px-5 py-3 text-left font-semibold text-gray-700">Doel</th>
                                            <th className="px-5 py-3 text-left font-semibold text-gray-700">Duur</th>
                                            <th className="px-5 py-3 text-left font-semibold text-gray-700">Partij</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {category.cookies.map((cookie) => (
                                            <tr key={cookie.name} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-5 py-4 font-mono text-xs text-gray-700">{cookie.name}</td>
                                                <td className="px-5 py-4 text-gray-600">{cookie.purpose}</td>
                                                <td className="px-5 py-4 text-gray-500">{cookie.duration}</td>
                                                <td className="px-5 py-4 text-gray-500">{cookie.provider}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Other Sections */}
            <div className="grid gap-6">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                            {section.title}
                        </h2>
                        <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {section.content}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Related Links */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 grid sm:grid-cols-2 gap-4"
            >
                <Link
                    href="/info/privacy"
                    className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-200 transition-all no-underline group"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Privacybeleid</h3>
                    </div>
                    <p className="text-sm text-gray-500">Lees hoe wij omgaan met uw persoonsgegevens.</p>
                </Link>

                <Link
                    href="/info/terms"
                    className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 hover:border-gray-300 transition-all no-underline group"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors">Algemene Voorwaarden</h3>
                    </div>
                    <p className="text-sm text-gray-500">Bekijk onze gebruiksvoorwaarden.</p>
                </Link>
            </motion.div>
        </div>
    );
}

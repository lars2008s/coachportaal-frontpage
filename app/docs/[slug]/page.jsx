'use client';

import { useParams } from 'next/navigation';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const docsContent = [
    {
        slug: "quick-start",
        title: "Snelstartgids",
        content: `
            <p class="text-xl text-gray-600 mb-8 font-medium">Zet de Coach Portaal Platform binnen 15 minuten op! Deze gids loodst je door de essentiële stappen.</p>
            <h2 class="text-3xl font-black text-gray-900 mb-6 tracking-tight">Wat ga je bereiken?</h2>
            <ul class="space-y-4 mb-10 text-gray-600 font-medium">
                <li>• Maak je coach-account aan</li>
                <li>• Stel je organisatie in</li>
                <li>• Importeer je eerste leden</li>
                <li>• Maak je eerste training</li>
            </ul>
            <h2 class="text-3xl font-black text-gray-900 mb-6 tracking-tight">Stap 1: Account aanmaken</h2>
            <p class="mb-6 text-gray-600 leading-relaxed">Ga naar de dashboard-link en klik op &quot;Gratis starten&quot;. Na het invullen van je e-mailadres en het verifiëren van je account, kun je direct aan de slag.</p>
        `
    },
    {
        slug: "dashboard",
        title: "Dashboard Overzicht",
        content: `
            <p class="text-xl text-gray-600 mb-8 font-medium">Het Dashboard is jouw centrale commandocentrum. Het biedt een overzicht van je organisatie en snelle toegang tot alle functies.</p>
            <h2 class="text-3xl font-black text-gray-900 mb-6 tracking-tight">Belangrijke secties</h2>
            <h3 class="text-xl font-bold mb-4">Sidebar Navigatie</h3>
            <p class="mb-6 text-gray-600 leading-relaxed">Aan de linkerkant vind je alle kernmodules: Leden, Trainingen, Agenda, Wedstrijden en AI-Assistent.</p>
            <h3 class="text-xl font-bold mb-4">Activiteitsoverzicht</h3>
            <p class="mb-6 text-gray-600 leading-relaxed">In het midden zie je direct welke trainingen er vandaag gepland staan en of er belangrijke meldingen zijn voor je club.</p>
        `
    },
    {
        slug: "members",
        title: "Ledenbeheer",
        content: `
            <h2 class="text-3xl font-black text-gray-900 mb-6 tracking-tight">Leden administreren</h2>
            <p class="text-xl text-gray-600 mb-8 font-medium">Leer hoe je atleten toevoegt, bewerkt en organiseert in groepen.</p>
            <p class="mb-6 text-gray-600 leading-relaxed">Het Coach Portaal maakt het eenvoudig om je volledige ledenlijst te importeren via Excel. Het systeem herkent automatisch de juiste leeftijdscategorieën op basis van het geboortejaar.</p>
        `
    },
    {
        slug: "training",
        title: "Training Builder",
        content: `
            <h2 class="text-3xl font-black text-gray-900 mb-6 tracking-tight">Trainingen bouwen</h2>
            <p class="text-xl text-gray-600 mb-8 font-medium">Maak professionele trainingsschema's in een handomdraai.</p>
            <p class="mb-6 text-gray-600 leading-relaxed">Gebruik de Training Builder om je sessies op te bouwen uit blokken. Sleep oefeningen uit de bibliotheek of laat de AI Copilot suggesties doen voor een gebalanceerde training.</p>
        `
    }
];

export default function DocDetailPage() {
    const params = useParams();
    const [doc, setDoc] = useState(null);

    useEffect(() => {
        const foundDoc = docsContent.find(d => d.slug === params.slug);
        setDoc(foundDoc);
    }, [params.slug]);

    if (!doc) return <div className="py-24 text-center">Loading documentation...</div>;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <Link href="/docs" className="inline-flex items-center text-sm font-black text-blue-600 uppercase tracking-widest no-underline! mb-8 group">
                <svg className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Terug naar Docs
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tighter mb-12 leading-[0.95]">
                    {doc.title}
                </h1>

                <div
                    className="prose prose-blue max-w-none text-gray-600 font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: doc.content }}
                />
            </motion.div>

            <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
                <div className="text-sm font-bold text-gray-400">
                    Was deze pagina nuttig?
                </div>
                <div className="flex gap-4">
                    <button className="px-4 py-2 rounded-xl bg-gray-50 text-gray-900 font-bold border border-gray-100 hover:bg-gray-100 transition-colors">
                        Ja
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-gray-50 text-gray-900 font-bold border border-gray-100 hover:bg-gray-100 transition-colors">
                        Nee
                    </button>
                </div>
            </div>
        </div>
    );
}

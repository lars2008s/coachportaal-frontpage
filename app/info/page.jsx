'use client';

import { motion } from "framer-motion";

export default function InfoPage() {
    const sections = [
        {
            id: "intro",
            title: "1. Introductie & Missie",
            content: "Het Coach Portaal Platform is ontwikkeld met één doel voor ogen: efficiëntie voor de coach. In de wereld van atletiek gaat veel tijd verloren aan administratie, het handmatig opstellen van trainingen en het bijhouden van prestaties. Dit platform centraliseert al deze taken in een moderne, intuïtieve webapplicatie."
        },
        {
            id: "dashboard",
            title: "2. Dashboard & Navigatie",
            content: "Bij het inloggen komt de gebruiker terecht op het Home Dashboard. Dit biedt een direct overzicht van de eerstvolgende geplande trainingen, recente activiteiten in de club en snelle acties zoals &apos;Nieuwe Training Maken&apos; of &apos;Lid Toevoegen&apos;."
        },
        {
            id: "training",
            title: "3. Trainingsbeheer",
            content: "Dit is het hart van het platform. Coaches kunnen hier hun expertise digitaliseren met de Training Builder, de Training Bibliotheek en gedetailleerde technische focussen."
        },
        {
            id: "calendar",
            title: "4. Kalender & Planning",
            content: "De kalendermodule stelt coaches in staat om een wekelijks trainingsschema op te stellen, specifieke trainingen uit de bibliotheek te koppelen en een visueel overzicht te hebben van de trainingsfocus."
        },
        {
            id: "ai",
            title: "5. AI Integratie",
            content: "Het platform maakt gebruik van geavanceerde AI (OpenAI) om de coach te ondersteunen via de AI Coach Chat en Copilot Assistentie tijdens het bouwen van trainingen."
        },
        {
            id: "camps",
            title: "6. Zomerkampen Module",
            content: "Speciaal ontworpen voor sportkampen: Groepsindeling, monitorbeheer, aanwezigheidslijsten en specifieke kampplanningen."
        },
        {
            id: "members",
            title: "7. Ledenbeheer",
            content: "Een complete database van alle atleten met profielen, custom fields, opvolging van lidgeld en automatische berekening van leeftijdscategorieën."
        },
        {
            id: "competitions",
            title: "8. Wedstrijden & Prestaties",
            content: "Beheer alle facetten van atletiekwedstrijden, inclusief de unieke Atletiek.nu integratie via onze Chrome Extension."
        },
        {
            id: "tech",
            title: "9. Technische Architectuur",
            content: "Gebouwd met de modernste tech-stack: React 19, Vite, Tailwind CSS, Convex (real-time database), Clerk (authenticatie) en OpenAI."
        },
        {
            id: "export",
            title: "10. Export & Rapportage",
            content: "Ondersteuning voor diverse export-mogelijkheden zoals aanwezigheidslijsten (PDF), ledenlijsten (Excel) en automatisch gegenereerde diploma's."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
                    Platform <span className="text-blue-600">Gids</span>
                </h1>
                <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                    Alles wat je moet weten over het Coach Portaal Platform. Een diepe duik in onze functies en visie.
                </p>
            </motion.div>

            <div className="grid gap-8">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-blue-100 transition-colors"
                    >
                        <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                            {section.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            {section.content}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20 p-12 rounded-[3rem] bg-blue-600 text-white text-center shadow-2xl shadow-blue-600/20"
            >
                <h3 className="text-3xl font-black mb-6">Heb je vragen?</h3>
                <p className="text-blue-100 mb-8 font-medium">
                    Ons team van coaches staat klaar om je te helpen bij de implementatie van het portaal in je club.
                </p>
                <a
                    href="mailto:support@coachportaal.be"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-black text-blue-600 hover:bg-gray-50 transition-all no-underline!"
                >
                    Contacteer support
                </a>
            </motion.div>
        </div>
    );
}

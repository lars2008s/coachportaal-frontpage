'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import {
    TrainingBuilderPreview,
    MemberTablePreview,
    CompetitionResultPreview
} from '../components/landing/landing-components';
import {
    AIAssistantAnimation,
    MemberManagementAnimation,
    CompetitionsAnimation,
    DiplomaAnimation,
    ExtensionAnimation,
    LibraryAnimation,
    BlocksAnimation
} from '../components/landing/feature-animations';

export default function Page() {
    const trainerFeatures = [
        {
            title: "Al jouw trainingen op één plek",
            description: "Nooit meer zoeken in documenten of schriften. Beheer al je atletiek trainingen in één overzichtelijk dashboard.",
            component: <LibraryAnimation />,
            color: "blue"
        },
        {
            title: "Makkelijk variatie met Atletiek Spellen",
            description: "Breng variatie in je trainingen met onze database aan atletiek spellen en oefeningen. Filter eenvoudig op onderdeel of leeftijd.",
            component: <BlocksAnimation />,
            color: "blue"
        },
        {
            title: "AI Coach Assistent",
            description: "Laat AI je helpen bij het maken van trainingsschema's. Vraag om inspiratie, specifieke oefeningen of complete weekplanningen.",
            component: <AIAssistantAnimation />,
            color: "blue"
        }
    ];

    const volunteerFeatures = [
        {
            title: "Automatische Diploma Generator",
            description: "Beloon je atleten met prachtige, automatisch gegenereerde diploma's op basis van hun prestaties tijdens de atletiek trainingen.",
            component: <DiplomaAnimation />,
            color: "blue"
        },
        {
            title: "Club Records Beheer",
            description: "Houd de clubrecords van je vereniging automatisch bij. Resultaten worden direct verwerkt en gevisualiseerd.",
            component: <CompetitionsAnimation />,
            color: "blue"
        },
        {
            title: "Eenvoudig Ledenbeheer",
            description: "Houd de aanwezigheid bij, beheer categorieën en communiceer makkelijk met je leden.",
            component: <MemberManagementAnimation />,
            color: "blue"
        },
        {
            title: "Zomerkampen Module",
            description: "Organiseer en beheer zomerkampen voor je club. Van inschrijvingen tot dagplanningen, alles in één systeem.",
            component: <LibraryAnimation />,
            color: "blue"
        },
        {
            title: "Software voor Atletiek.nu",
            description: "Importeer wedstrijdresultaten direct vanaf atletiek.nu met onze handige browser extensie. Bespaar uren aan handmatig werk.",
            component: <ExtensionAnimation />,
            color: "blue"
        }
    ];

    return (
        <div className="flex flex-col gap-24 sm:gap-32 pb-24">
            {/* Hero Section */}
            <section className="relative pt-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-60"></div>

                <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Nieuw: Nu beschikbaar voor alle clubs & vzw's
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-gray-900 leading-[0.95] mb-8">
                            De slimste software voor <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                atletiek trainingen
                            </span>
                        </h1>
                        <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                            Bespaar tijd met de administratie van je atletiek trainingen vzw en focus op wat echt telt: je atleten passie voor sport bijbrengen.
                            Van trainingsplanning tot club records en atletiek.nu integratie.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="https://dashboard.coachportaal.be/sign-up"
                                className="group inline-flex items-center justify-center rounded-2xl bg-gray-900 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-gray-900/10 hover:bg-black hover:-translate-y-0.5 transition-all no-underline!"
                            >
                                Start direct gratis
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                href="#trainer"
                                className="inline-flex items-center justify-center rounded-2xl border border-gray-100 bg-white px-8 py-4 text-base font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-all no-underline!"
                            >
                                Voor de trainer
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Visuals */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto max-w-5xl px-4"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 bg-gray-50/50 rounded-[2.5rem] border border-gray-100">
                        <div className="md:col-span-8">
                            <TrainingBuilderPreview />
                        </div>
                        <div className="md:col-span-4 flex flex-col gap-6">
                            <div className="flex-1">
                                <CompetitionResultPreview />
                            </div>
                            <div className="flex-1">
                                <MemberTablePreview />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Trainer Section */}
            <section id="trainer" className="scroll-mt-32">
                <div className="text-center max-w-3xl mx-auto mb-20 px-4">
                    <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">
                        Voor de Trainer
                    </h2>
                    <p className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
                        Focus op de training, <br className="hidden sm:block" /> wij doen de rest
                    </p>
                </div>

                <div className="space-y-48">
                    {trainerFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 px-4`}
                        >
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mb-8 shadow-sm shadow-blue-100">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-4xl font-black text-gray-900 tracking-tight mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="flex-1 w-full max-w-lg lg:max-w-none">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-[3rem] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                                    <div className="relative transition-transform duration-700 hover:scale-[1.02] flex items-center justify-center">
                                        {feature.component}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Volunteer / Club Section */}
            <section id="vrijwilligers" className="scroll-mt-32">
                <div className="text-center max-w-3xl mx-auto mb-20 px-4">
                    <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-4">
                        Voor Vrijwilligers & Clubs
                    </h2>
                    <p className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
                        Minder administratie, <br className="hidden sm:block" /> meer plezier voor de club
                    </p>
                </div>

                <div className="space-y-48">
                    {volunteerFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 px-4`}
                        >
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 mb-8 shadow-sm shadow-indigo-100">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="text-4xl font-black text-gray-900 tracking-tight mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-500 font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="flex-1 w-full max-w-lg lg:max-w-none">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-blue-200 rounded-[3rem] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                                    <div className="relative transition-transform duration-700 hover:scale-[1.02] flex items-center justify-center">
                                        {feature.component}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gray-900 rounded-[3rem] p-12 sm:p-24 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 leading-none">
                        Klaar om je coaching naar een hoger niveau te tillen?
                    </h2>
                    <p className="text-xl text-gray-400 font-medium mb-12">
                        Maak vandaag nog een gratis account aan en ervaar het gemak van het Coach Portaal.
                    </p>
                    <Link
                        href="https://dashboard.coachportaal.be/sign-up"
                        className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-lg font-black text-gray-900 shadow-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all no-underline!"
                    >
                        Start direct gratis
                    </Link>
                </div>
            </section>
        </div>
    );
}

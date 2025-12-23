'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { useState } from 'react';
import {
    AIAssistantAnimation,
    MemberManagementAnimation,
    CompetitionsAnimation,
    DiplomaAnimation,
    ExtensionAnimation,
    LibraryAnimation,
    BlocksAnimation
} from '../components/landing/feature-animations';
import { getRecentPosts } from '../data/blogs';

// Role selector card
function RoleCard({ icon, title, description, benefits, isActive, onClick, color }) {
    const colorClasses = {
        blue: {
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            activeBg: 'bg-gradient-to-br from-blue-600 to-indigo-600',
            text: 'text-blue-600',
            iconBg: 'bg-blue-100',
        },
        purple: {
            bg: 'bg-purple-50',
            border: 'border-purple-200',
            activeBg: 'bg-gradient-to-br from-purple-600 to-indigo-600',
            text: 'text-purple-600',
            iconBg: 'bg-purple-100',
        }
    };
    const c = colorClasses[color];

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative w-full p-8 rounded-3xl border-2 text-left transition-all duration-300 ${isActive
                    ? `${c.activeBg} border-transparent text-white shadow-2xl`
                    : `bg-white ${c.border} hover:shadow-xl`
                }`}
        >
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${isActive ? 'bg-white/20' : c.iconBg
                }`}>
                <div className={isActive ? 'text-white' : c.text}>
                    {icon}
                </div>
            </div>

            {/* Title */}
            <h3 className={`text-2xl font-black mb-3 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                {title}
            </h3>

            {/* Description */}
            <p className={`text-base mb-6 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                {description}
            </p>

            {/* Quick benefits */}
            <ul className="space-y-2">
                {benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                        <svg className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-lime-300' : 'text-lime-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm font-medium ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                            {benefit}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Selected indicator */}
            {isActive && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center"
                >
                    <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
            )}
        </motion.button>
    );
}

// Deep dive benefit section
function BenefitSection({ icon, title, description, details, animation, color, reverse = false }) {
    const colorClasses = {
        blue: { bg: 'bg-blue-50', iconBg: 'bg-blue-100', iconText: 'text-blue-600', accent: 'text-blue-600', border: 'border-blue-100' },
        purple: { bg: 'bg-purple-50', iconBg: 'bg-purple-100', iconText: 'text-purple-600', accent: 'text-purple-600', border: 'border-purple-100' },
        lime: { bg: 'bg-lime-50', iconBg: 'bg-lime-100', iconText: 'text-lime-600', accent: 'text-lime-600', border: 'border-lime-100' },
        orange: { bg: 'bg-orange-50', iconBg: 'bg-orange-100', iconText: 'text-orange-600', accent: 'text-orange-600', border: 'border-orange-100' },
    };
    const c = colorClasses[color] || colorClasses.blue;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
        >
            {/* Content */}
            <div className="flex-1">
                <div className={`w-14 h-14 rounded-2xl ${c.iconBg} ${c.iconText} flex items-center justify-center mb-6`}>
                    {icon}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">
                    {title}
                </h3>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                    {description}
                </p>

                {/* Detail points */}
                <div className="space-y-4">
                    {details.map((detail, i) => (
                        <div key={i} className={`flex gap-4 p-4 rounded-2xl ${c.bg} ${c.border} border`}>
                            <div className={`w-8 h-8 rounded-lg ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                                <span className={`text-sm font-bold ${c.accent}`}>{i + 1}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">{detail.title}</h4>
                                <p className="text-sm text-gray-500">{detail.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animation/Visual */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
                <div className="relative">
                    <div className={`absolute inset-0 ${c.bg} rounded-3xl blur-3xl opacity-50`} />
                    <div className="relative">
                        {animation}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Blog card
function BlogCard({ post }) {
    const colorClasses = {
        blue: 'bg-blue-100 text-blue-700',
        purple: 'bg-purple-100 text-purple-700',
        green: 'bg-green-100 text-green-700',
        orange: 'bg-orange-100 text-orange-700',
        indigo: 'bg-indigo-100 text-indigo-700',
    };

    return (
        <Link href={`/blogs/${post.slug}`} className="group block no-underline">
            <div className="h-full p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${colorClasses[post.color] || colorClasses.blue}`}>
                        {post.category}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{post.readTime || '5 min'}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight text-lg">
                    {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-bold">
                    Lees meer
                    <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </Link>
    );
}

export default function Page() {
    const [selectedRole, setSelectedRole] = useState('trainer');
    const recentPosts = getRecentPosts(3);

    // Trainer benefits data
    const trainerBenefits = [
        {
            icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
            title: "Jouw complete trainingsbibliotheek",
            description: "Stop met zoeken in schriften, documenten en losse notities. Al je trainingen staan overzichtelijk op één plek, altijd toegankelijk op je telefoon of laptop.",
            color: "blue",
            animation: <LibraryAnimation />,
            details: [
                { title: "Onbeperkt trainingen opslaan", description: "Maak zoveel trainingen als je wilt en organiseer ze per categorie, leeftijdsgroep of seizoen." },
                { title: "Direct toegankelijk", description: "Open je training op de baan via je telefoon. Geen gedoe met papieren of schriften meer." },
                { title: "Trainingen kopiëren & aanpassen", description: "Neem een bestaande training als basis en pas hem aan voor een andere groep." },
            ]
        },
        {
            icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            title: "Nooit meer inspiratie tekort",
            description: "Toegang tot honderden atletiekspellen en oefeningen, gefilterd op leeftijd en onderdeel. Elke training wordt een succes.",
            color: "lime",
            animation: <BlocksAnimation />,
            details: [
                { title: "Spellenbibliotheek", description: "Honderden bewezen oefeningen voor warming-up, techniek, kracht en spelvormen." },
                { title: "Filter op leeftijd & niveau", description: "Vind direct geschikte oefeningen voor pupillen, kadetten of junioren." },
                { title: "Eigen oefeningen toevoegen", description: "Bouw je eigen verzameling op met oefeningen die werken voor jouw groep." },
            ]
        },
        {
            icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
            title: "AI die met je meedenkt",
            description: "Beschrijf wat je wilt trainen en laat AI een complete training voor je samenstellen. Van warming-up tot cooling-down in seconden.",
            color: "purple",
            animation: <AIAssistantAnimation />,
            details: [
                { title: "Trainingen in seconden", description: "Vraag: 'Maak een sprinttraining voor pupillen' en krijg direct een complete training." },
                { title: "Slimme suggesties", description: "De AI leert van jouw voorkeuren en stelt steeds betere trainingen voor." },
                { title: "Volledig aanpasbaar", description: "Gebruik de AI-training als startpunt en pas hem aan naar jouw wensen." },
            ]
        },
    ];

    // Bestuurslid benefits data
    const bestuurslidBenefits = [
        {
            icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: "Ledenbeheer zonder hoofdpijn",
            description: "Eén overzicht van al je leden met categorieën, contactgegevens en aanwezigheid. Geen Excel-chaos meer.",
            color: "purple",
            animation: <MemberManagementAnimation />,
            details: [
                { title: "Automatische categorieën", description: "Leden worden automatisch ingedeeld op basis van geboortejaar. Geen handmatig werk." },
                { title: "Aanwezigheid bijhouden", description: "Coaches registreren aanwezigheid direct in de app. Jij hebt altijd overzicht." },
                { title: "Communicatie centraal", description: "Stuur berichten naar specifieke groepen of de hele club vanuit één plek." },
            ]
        },
        {
            icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
            title: "Diploma's automatisch genereren",
            description: "Na elke clubwedstrijd of training automatisch prachtige diploma's voor alle deelnemers. Ouders en kinderen zijn er dol op.",
            color: "orange",
            animation: <DiplomaAnimation />,
            details: [
                { title: "Professionele templates", description: "Kies uit meerdere designs of upload je eigen clublogo voor een persoonlijke touch." },
                { title: "Bulk genereren", description: "Genereer met één klik diploma's voor alle deelnemers van een evenement." },
                { title: "Direct delen", description: "Download als PDF of stuur direct per email naar ouders." },
            ]
        },
        {
            icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: "Clubrecords automatisch bijhouden",
            description: "Alle prestaties worden automatisch vergeleken met clubrecords. Nieuwe records? Je weet het direct.",
            color: "blue",
            animation: <CompetitionsAnimation />,
            details: [
                { title: "Automatische vergelijking", description: "Bij elke ingevoerde prestatie wordt gekeken of het een nieuw record is." },
                { title: "Recordoverzicht", description: "Eén pagina met alle clubrecords per categorie en onderdeel." },
                { title: "Notificaties", description: "Word automatisch op de hoogte gesteld van nieuwe records." },
            ]
        },
        {
            icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>,
            title: "Resultaten importeren met één klik",
            description: "Onze Chrome-extensie haalt wedstrijdresultaten direct van atletiek.nu. Geen handmatig overtypen meer.",
            color: "lime",
            animation: <ExtensionAnimation />,
            details: [
                { title: "Atletiek.nu integratie", description: "Navigeer naar een wedstrijdpagina, klik op de extensie, klaar." },
                { title: "Automatische koppeling", description: "Atleten worden automatisch gekoppeld aan je ledenbestand." },
                { title: "Bespaar uren werk", description: "Wat voorheen uren kostte, doe je nu in minuten." },
            ]
        },
    ];

    const currentBenefits = selectedRole === 'trainer' ? trainerBenefits : bestuurslidBenefits;

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
                                </span>
                                <span className="text-xs font-bold text-gray-600">
                                    Nieuw: AI Coach Assistent beschikbaar
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
                                De slimste software voor{' '}
                                <span className="text-gradient">jouw atletiekclub</span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-4 max-w-2xl mx-auto font-medium">
                                Bespaar uren per week op administratie en focus op wat écht telt: geweldige trainingen geven en je club laten groeien.
                            </p>
                        </motion.div>
                    </div>

                    {/* Role Selector */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
                                Wat is jouw rol?
                            </h2>
                            <p className="text-gray-500 font-medium">
                                Selecteer je rol om te zien hoe Coach Portaal jou kan helpen
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <RoleCard
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title="Ik ben Trainer"
                                description="Ik geef trainingen en zoek naar tools om slimmere trainingen te maken met minder voorbereiding."
                                benefits={[
                                    "Trainingsbibliotheek op je telefoon",
                                    "AI die trainingen voor je maakt",
                                    "Honderden oefeningen en spellen"
                                ]}
                                isActive={selectedRole === 'trainer'}
                                onClick={() => setSelectedRole('trainer')}
                                color="blue"
                            />
                            <RoleCard
                                icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                                title="Ik ben Bestuurslid"
                                description="Ik beheer de club en zoek naar manieren om administratie te vereenvoudigen en de club professioneler te runnen."
                                benefits={[
                                    "Ledenbeheer op één plek",
                                    "Automatische diploma's",
                                    "Clubrecords bijhouden"
                                ]}
                                isActive={selectedRole === 'bestuurslid'}
                                onClick={() => setSelectedRole('bestuurslid')}
                                color="purple"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Benefits Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className={`text-xs font-bold uppercase tracking-widest mb-4 block ${selectedRole === 'trainer' ? 'text-blue-600' : 'text-purple-600'}`}>
                            {selectedRole === 'trainer' ? 'Voor Trainers' : 'Voor Bestuursleden'}
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
                            {selectedRole === 'trainer'
                                ? 'Focus op de training, wij doen de rest'
                                : 'Minder administratie, meer tijd voor de club'
                            }
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            {selectedRole === 'trainer'
                                ? 'Ontdek hoe Coach Portaal je helpt om betere trainingen te geven met minder voorbereiding.'
                                : 'Ontdek hoe Coach Portaal je helpt om je club professioneler en efficiënter te beheren.'
                            }
                        </p>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-32"
                        >
                            {currentBenefits.map((benefit, i) => (
                                <BenefitSection
                                    key={i}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    details={benefit.details}
                                    animation={benefit.animation}
                                    color={benefit.color}
                                    reverse={i % 2 === 1}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 sm:p-20"
                    >
                        {/* Background decorations */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
                                Klaar om het zelf te ervaren?
                            </h2>
                            <p className="text-xl text-gray-400 mb-10 font-medium">
                                Start vandaag nog gratis en ontdek hoe Coach Portaal jouw club kan helpen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="https://dashboard.coachportaal.be/sign-up"
                                    className="group inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-bold text-gray-900 bg-white hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 no-underline"
                                >
                                    Start direct gratis
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-bold text-white border border-white/20 hover:bg-white/10 transition-all no-underline"
                                >
                                    Lees onze blog
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
                    >
                        <div>
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">
                                Blog
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                                Laatste artikelen
                            </h2>
                        </div>
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors no-underline"
                        >
                            Bekijk alle artikelen
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {recentPosts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <BlogCard post={post} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from 'react';

// Floating athletic icons for background
const floatingIcons = [
    { icon: '🏃', delay: 0, duration: 8, size: 40 },
    { icon: '🎯', delay: 1, duration: 10, size: 32 },
    { icon: '💪', delay: 2, duration: 9, size: 36 },
    { icon: '🏆', delay: 3, duration: 11, size: 28 },
    { icon: '⚡', delay: 0.5, duration: 7, size: 30 },
    { icon: '🥇', delay: 1.5, duration: 12, size: 24 },
];

function FloatingBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {floatingIcons.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute opacity-10"
                    initial={{ y: '100vh', x: `${Math.random() * 100}%` }}
                    animate={{ y: '-100px', x: `${Math.random() * 100}%` }}
                    transition={{
                        duration: item.duration,
                        delay: item.delay,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear'
                    }}
                    style={{ fontSize: item.size }}
                >
                    {item.icon}
                </motion.div>
            ))}
        </div>
    );
}

// Enhanced role selector
function RoleSelectorCard({ role, selectedRole, onSelect }) {
    const isSelected = selectedRole === role.id;
    const colors = role.id === 'trainer'
        ? { from: 'from-blue-500', to: 'to-indigo-600', bg: 'bg-blue-50', text: 'text-blue-600' }
        : { from: 'from-purple-500', to: 'to-pink-600', bg: 'bg-purple-50', text: 'text-purple-600' };

    return (
        <motion.button
            onClick={() => onSelect(role.id)}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`relative w-full p-6 rounded-2xl text-left transition-all duration-500 overflow-hidden ${
                isSelected
                    ? `bg-gradient-to-br ${colors.from} ${colors.to} text-white shadow-2xl shadow-blue-900/30`
                    : 'bg-white/90 backdrop-blur-sm border-2 border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-xl'
            }`}
        >
            <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all ${
                    isSelected ? 'bg-white/20' : `${colors.bg} ${colors.text}`
                }`}>
                    <span className="text-3xl">{role.emoji}</span>
                </div>

                <h3 className={`text-xl font-black mb-2 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                    {role.title}
                </h3>

                <p className={`mb-4 text-sm leading-relaxed ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
                    {role.description}
                </p>

                <ul className="space-y-2">
                    {role.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <svg className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-lime-300' : 'text-lime-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-700'}`}>
                                {benefit}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {isSelected && (
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-lime-400 to-lime-500 rounded-lg flex items-center justify-center shadow-lg"
                >
                    <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
            )}
        </motion.button>
    );
}

// Feature showcase with personal touch
function FeatureShowcase({ features }) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 to-indigo-100/80 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
                    <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/50`}>
                        <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                            <span className="text-2xl">{feature.emoji}</span>
                        </div>
                        <h3 className="text-lg font-black text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">{feature.description}</p>
                        {feature.details && (
                            <ul className="space-y-1.5 mb-3">
                                {feature.details.map((detail, j) => (
                                    <li key={j} className="flex items-start gap-2 text-xs text-gray-700">
                                        <svg className="w-3.5 h-3.5 text-lime-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {feature.quote && (
                            <div className={`text-xs italic ${feature.quoteColor} border-l-2 ${feature.quoteBorder} pl-2 py-1.5 bg-white/50 rounded-r`}>
                                "{feature.quote}"
                            </div>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

// Unique feature highlight with icon
function UniqueFeatureCard({ feature, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row gap-6 items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
        >
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-4 shadow-lg">
                    <span className="text-3xl">{feature.emoji}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <ul className="space-y-2">
                    {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 text-lime-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {highlight}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-2 shadow-2xl">
                        <div className="bg-gray-800 rounded-xl p-2">
                            <div className="bg-gray-700 rounded-lg flex items-center justify-center h-48">
                                <span className="text-6xl">{feature.emoji}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Page() {
    const [selectedRole, setSelectedRole] = useState('trainer');

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        setTimeout(() => {
            document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const roles = {
        trainer: {
            id: 'trainer',
            emoji: '🏃',
            title: 'Ik ben Trainer',
            description: 'Ik geef trainingen en wil snel goede trainingen maken met minder voorbereidingstijd.',
            benefits: [
                'Trainingsbibliotheek op je telefoon',
                'Sla trainingen op en hergebruik ze',
                'Honderden spellen & spelvormen'
            ]
        },
        bestuurslid: {
            id: 'bestuurslid',
            emoji: '🏛️',
            title: 'Ik ben Bestuurslid',
            description: 'Ik beheer de club en wil administratie automatiseren zodat we ons op de sport kunnen richten.',
            benefits: [
                'Ledenbeheer in één overzicht',
                'Automatische diploma\'s & records',
                'Resultaten importeren'
            ]
        }
    };

    const trainerFeatures = [
        {
            emoji: '⚡',
            title: 'Trainingen in Seconden',
            description: 'Type wat je wilt trainen en krijg direct een complete training. Klaar voor gebruik.',
            details: [
                'Type "sprinttraining voor pupillen" → complete training',
                'Automatische warming-up en cooling-down',
                'Pas intensiteit en duur aan naar jouw groep',
                'Bewaar favoriete trainingen voor hergebruik'
            ],
            quote: 'Ik bespaar elke week 2 uur voorbereiding!',
            quoteColor: 'text-blue-600',
            quoteBorder: 'border-blue-300',
            iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600'
        },
        {
            emoji: '📚',
            title: '1000+ Oefeningen',
            description: 'Toegang tot een enorme bibliotheek met atletiek oefeningen en spellen.',
            details: [
                'Sprint, horden, sprong, werp en kracht',
                'Filter op leeftijd: Kangoeroes t/m Cadetten',
                'Video-instructies en uitleg',
                'Voeg toe aan je eigen trainingen'
            ],
            quote: 'Eindelijk genoeg variatie!',
            quoteColor: 'text-lime-600',
            quoteBorder: 'border-lime-300',
            iconBg: 'bg-gradient-to-br from-lime-500 to-emerald-600'
        },
        {
            emoji: '💡',
            title: 'AI Training Assistent',
            description: 'Krijg suggesties op basis van wat je eerder hebt gedaan. Het systeem leert jouw voorkeuren kennen.',
            details: [
                'Gebaseerd op jouw eerdere trainingen',
                'Houdt rekening met jouw materiaal',
                'Past zich aan jouw groep aan',
                'Wordt slimmer naarmate je het gebruikt'
            ],
            quote: 'Voelt als een persoonlijke assistent.',
            quoteColor: 'text-purple-600',
            quoteBorder: 'border-purple-300',
            iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600'
        },
        {
            emoji: '📊',
            title: 'Aanwezigheid & Voortgang',
            description: 'Registreer aanwezigheid en track de voortgang van al je atleten.',
            details: [
                'Snelle aanwezigheidsregistratie',
                'Per training of activiteit',
                'Automatische export naar PDF',
                'Historiek per atleet'
            ],
            quote: 'Altijd inzicht in wie er geweest is.',
            quoteColor: 'text-teal-600',
            quoteBorder: 'border-teal-300',
            iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600'
        },
        {
            emoji: '🏆',
            title: 'Club Records',
            description: 'Automatische tracking van clubrecords met indoor/outdoor onderscheid.',
            details: [
                'Automatische record detectie',
                'Indoor en Outdoor categorieën',
                'Per leeftijdscategorie',
                'Directe notificaties bij nieuwe records'
            ],
            quote: 'Records worden nooit meer vergeten.',
            quoteColor: 'text-amber-600',
            quoteBorder: 'border-amber-300',
            iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600'
        },
        {
            emoji: '📅',
            title: 'Training Kalender',
            description: 'Plan en beheer al je trainingen in één overzichtelijke kalender.',
            details: [
                'Maand en week weergave',
                'Kleurcodering per trainingstype',
                'Direct trainingen toewijzen',
                'Mobiel toegankelijk'
            ],
            quote: 'Al mijn trainingen op één plek.',
            quoteColor: 'text-indigo-600',
            quoteBorder: 'border-indigo-300',
            iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-600'
        }
    ];

    const bestuurslidFeatures = [
        {
            emoji: '👥',
            title: 'Ledenbeheer',
            description: 'Alle leden, categorieën en aanwezigheid op één plek.',
            details: [
                'Automatische indeling in leeftijdscategorieën',
                'Aanwezigheidsregistratie per training',
                'QR-codes voor identificatie',
                'Exporteer lijsten naar Excel'
            ],
            quote: 'Besparen 5 uur per week aan administratie.',
            quoteColor: 'text-purple-600',
            quoteBorder: 'border-purple-300',
            iconBg: 'bg-gradient-to-br from-purple-500 to-indigo-600'
        },
        {
            emoji: '🎓',
            title: 'Diploma Generator',
            description: 'Genereer professionele diploma\'s voor alle deelnemers na elke wedstrijd.',
            details: [
                'Automatische generatie na wedstrijdresultaat',
                'Personaliseer met clublogo en kleuren',
                'PDF export',
                'Bewaar alle diploma\'s in het ledenprofiel'
            ],
            quote: 'Ouders en kinderen zijn er superblij mee.',
            quoteColor: 'text-orange-600',
            quoteBorder: 'border-orange-300',
            iconBg: 'bg-gradient-to-br from-orange-500 to-amber-600'
        },
        {
            emoji: '📊',
            title: 'Resultaten Import',
            description: 'Chrome-extensie importeert automatisch resultaten van Atletiek.nu.',
            details: [
                'One-click import van wedstrijdresultaten',
                'Clubrecords worden direct bijgewerkt',
                'Historiek van alle prestaties per lid',
                'Geen handmatige invoer meer nodig'
            ],
            quote: 'Records zijn nu altijd up-to-date.',
            quoteColor: 'text-blue-600',
            quoteBorder: 'border-blue-300',
            iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600'
        },
        {
            emoji: '📧',
            title: 'Communicatie',
            description: 'Stuur groepsmails naar leden, ouders en trainers.',
            details: [
                'Email sjablonen aanmaken',
                'Segmenteer op groepen',
                'Verzendgeschiedenis',
                'Personaliseer berichten'
            ],
            quote: 'Communiceren was nog nooit zo makkelijk.',
            quoteColor: 'text-pink-600',
            quoteBorder: 'border-pink-300',
            iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600'
        },
        {
            emoji: '⛺',
            title: 'Kamp & Activiteiten',
            description: 'Organiseer zomerkampen, activiteiten en evenementen.',
            details: [
                'Online inschrijvingen',
                'Deelnemersbeheer',
                'Prijzen per categorie',
                'Inschrijvingsperiodes'
            ],
            quote: 'Kamporganisatie is nu een fluitje van een cent.',
            quoteColor: 'text-cyan-600',
            quoteBorder: 'border-cyan-300',
            iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600'
        },
        {
            emoji: '🏆',
            title: 'Club Records',
            description: 'Automatische tracking van clubrecords met indoor/outdoor onderscheid.',
            details: [
                'Automatische record detectie',
                'Indoor en Outdoor categorieën',
                'Per leeftijdscategorie',
                'Directe notificaties bij nieuwe records'
            ],
            quote: 'Records worden nooit meer vergeten.',
            quoteColor: 'text-amber-600',
            quoteBorder: 'border-amber-300',
            iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600'
        }
    ];

    const uniqueFeatures = [
        {
            emoji: '🤖',
            title: 'AI Copilot',
            description: 'Onze AI-gestuurde assistent helpt je bij elke stap. Van trainingen samenstellen tot advies - de AI leert van jouw voorkeuren.',
            highlights: [
                'Training suggesties op basis van jouw groep',
                'Fotoherkenning van papieren schema\'s',
                'Automatische verbetersuggesties',
                '24/7 beschikbaar'
            ]
        },
        {
            emoji: '📱',
            title: 'Mobile App',
            description: 'Coach Portaal werkt als een native app op je telefoon. Gebruik het op het veld, in de sportzaal of onderweg.',
            highlights: [
                'Offline beschikbaarheid',
                'Push notificaties',
                'Swipe gestures',
                'Haptic feedback'
            ]
        },
        {
            emoji: '🔗',
            title: 'Atletiek.nu Integratie',
            description: 'De unieke Chrome extensie importeert wedstrijdresultaten automatisch van Atletiek.nu. Terwijl jij naar de wedstrijdpagina kijkt, scant de extensie alle resultaten en importeert deze met één klik. Geen copy-paste, geen Excel sheets, geen handmatige invoerfouten. Alle atleten, hun prestaties, en categorieën worden direct verwerkt. Nieuwe clubrecords worden automatisch gedetecteerd en bijgewerkt. Plus: alle resultaten komen in een gedeelde database, zodat andere clubs ook profiteren van de ingevoerde data.',
            highlights: [
                'Installeer de Chrome extensie',
                'Ga naar een wedstrijd op Atletiek.nu',
                'Klik op "Importeer resultaten"',
                'Alles wordt automatisch verwerkt'
            ]
        },
        {
            emoji: '🎨',
            title: 'Visuele Training Editor',
            description: 'Maak trainingen met een intuïtieve drag & drop editor. Organiseer blokken in warming-up, kern en cooling-down.',
            highlights: [
                'Drag & drop interface',
                'Kleurcode per trainingstype',
                'SOS Training Wizard',
                'Sla op als template'
            ]
        },
        {
            emoji: '📅',
            title: 'Training Kalender',
            description: 'Plan en beheer al je trainingen in één overzichtelijke kalender met kleurcodering per type.',
            highlights: [
                'Maand en week weergave',
                'Kleurcodering per discipline',
                'Direct trainingen toewijzen',
                'Mobiel toegankelijk'
            ]
        },
        {
            emoji: '📊',
            title: 'Dashboard Stats',
            description: 'Alle statistieken overzichtelijk op één plek: leden, trainingen, records en activiteiten.',
            highlights: [
                'Live statistieken',
                'Recente records widget',
                'Snelle acties',
                'Overzicht op elk device'
            ]
        }
    ];

    const currentFeatures = selectedRole === 'trainer' ? trainerFeatures : bestuurslidFeatures;

    return (
        <div className="min-h-screen">
            {/* Continuous gradient background */}
            <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 -z-10" />
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-lime-400/10 to-emerald-400/10 rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <section className="relative py-12 lg:py-16">
                <FloatingBackground />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Personal greeting badge */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.15 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg mb-8"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-lime-400 to-lime-500 shadow-sm" />
                                </span>
                                <span className="text-xs font-bold text-gray-700 tracking-wide">
                                    Het #1 Coach Portaal — gemaakt door trainers, voor trainers
                                </span>
                            </motion.div>

                            {/* Main headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.15] mb-6"
                            >
                                Minder papierwerk,{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                                    meer atletiek
                                </span>
                            </motion.h1>

                            {/* Personal subheadline */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                                className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
                            >
                                We weten hoe het voelt — uren trainingen voorbereiden, administratie bijhouden.
                                <br />
                                <span className="text-blue-600 font-semibold">Coach Portaal verandert dat.</span>
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
                            >
                                <Link
                                    href="https://dashboard.coachportaal.be"
                                    className="group inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 no-underline"
                                >
                                    Probeer het gratis
                                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/bibliotheek"
                                    className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-base font-bold text-gray-700 bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 no-underline"
                                >
                                    Bekijk trainingen
                                </Link>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500"
                            >
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Geen creditcard nodig
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Direct toegang
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    50+ verenigingen
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Role Selector */}
            <section className="relative py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
                            Wat is jouw rol?
                        </h2>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            Coach Portaal ondersteunt zowel trainers als bestuursleden.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <RoleSelectorCard role={roles.trainer} selectedRole={selectedRole} onSelect={handleRoleSelect} />
                        <RoleSelectorCard role={roles.bestuurslid} selectedRole={selectedRole} onSelect={handleRoleSelect} />
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section id="features-section" className="relative py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
                                selectedRole === 'trainer' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                            }`}
                        >
                            {selectedRole === 'trainer' ? 'Voor Trainers' : 'Voor Bestuursleden'}
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
                            {selectedRole === 'trainer' ? 'Focus op trainen, wij doen de rest' : 'Minder administratie, meer atletiek'}
                        </h2>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            {selectedRole === 'trainer'
                                ? 'Ontdek hoe Coach Portaal je helpt om betere trainingen te geven met minder voorbereidingstijd.'
                                : 'Ontdek hoe Coach Portaal je helpt om je club efficiënter te beheren.'}
                        </p>
                    </motion.div>

                    <FeatureShowcase features={currentFeatures} />
                </div>
            </section>

            {/* Unique Features Section - NEW */}
            <section className="relative py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-purple-700 uppercase tracking-widest mb-4 bg-purple-100">
                            Wat ons uniek maakt
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
                            Features die je nergens anders vindt
                        </h2>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            Coach Portaal is gebouwd met moderne technologieën en unieke integraties.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {uniqueFeatures.map((feature, i) => (
                            <UniqueFeatureCard key={i} feature={feature} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Types - Wide Section */}
            <section className="relative py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest mb-4 bg-blue-100">
                            Trainingstypes
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
                            Trainingen voor elk onderdeel
                        </h2>
                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            Van sprint tot werpen - vind de juiste oefeningen.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                title: 'Sprinttrainingen',
                                emoji: '🏃',
                                items: ['Starttechniek', 'Versnellingsdrills', 'Maximale snelheid'],
                                gradient: 'from-blue-500 to-indigo-600'
                            },
                            {
                                title: 'Techniektrainingen',
                                emoji: '🎯',
                                items: ['Hordentechniek', 'Verspringen', 'Werptechniek'],
                                gradient: 'from-lime-500 to-emerald-600'
                            },
                            {
                                title: 'Kracht & Conditie',
                                emoji: '💪',
                                items: ['Core stability', 'Plyometrie', 'Uithoudingsvermogen'],
                                gradient: 'from-purple-500 to-pink-600'
                            },
                            {
                                title: 'Warming-up',
                                emoji: '🔥',
                                items: ['Spelvormen', 'Mobiliteit', 'Activatieoefeningen'],
                                gradient: 'from-orange-500 to-amber-600'
                            },
                            {
                                title: 'Spelvormen',
                                emoji: '🎮',
                                items: ['Tag spellen', 'Estafettes', 'Team challenges'],
                                gradient: 'from-teal-500 to-cyan-600'
                            },
                            {
                                title: 'Cooling-down',
                                emoji: '🧘',
                                items: ['Rekken', 'Ontspanning', 'Recovery tips'],
                                gradient: 'from-indigo-500 to-purple-600'
                            },
                        ].map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 to-indigo-100/70 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform" />
                                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <span className="text-2xl">{type.emoji}</span>
                                    </div>
                                    <h3 className="text-lg font-black text-gray-900 mb-2">{type.title}</h3>
                                    <ul className="space-y-1.5">
                                        {type.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-xs text-gray-700">
                                                <svg className="w-3 h-3 text-lime-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Library CTA */}
            <section className="relative py-12">
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/90 to-emerald-600/90 backdrop-blur-sm p-8 sm:p-10 shadow-2xl shadow-teal-500/30">
                        {/* Background decorations */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold text-teal-100 uppercase tracking-widest mb-5 bg-white/20 backdrop-blur-sm"
                            >
                                Gratis toegang voor iedereen
                            </motion.div>
                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                                Publieke Trainingsbibliotheek
                            </h2>
                            <p className="text-base text-white/90 mb-6 max-w-xl mx-auto leading-relaxed">
                                Je hoeft geen account te hebben om onze trainingsbibliotheek te bekijken. Duik in honderden trainingen en vind inspiratie.
                            </p>

                            <Link
                                href="/bibliotheek"
                                className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-base font-bold text-teal-800 bg-white hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 no-underline"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Bekijk de bibliotheek
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4 leading-tight">
                            Klaar om te starten?
                        </h2>
                        <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
                            Sluit je aan bij 50+ atletiekverenigingen. Geen creditcard nodig, direct toegang.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://dashboard.coachportaal.be"
                                className="group inline-flex items-center justify-center rounded-xl px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 no-underline"
                            >
                                Start vandaag nog gratis
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                        <p className="mt-5 text-xs text-gray-500 flex items-center justify-center gap-5">
                            <span className="flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Gratis proefperiode
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Geen verplichtingen
                            </span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Personal footer note */}
            <section className="relative py-10 border-t border-gray-200/50">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm text-gray-600 leading-relaxed">
                            <strong className="text-gray-900">Coach Portaal</strong> is ontstaan uit passie voor atletiek. We zijn elke dag bezig om het platform te verbeteren. Heb je vragen?{" "}
                            <a href="mailto:support@coachportaal.be" className="text-blue-600 font-semibold hover:text-blue-700 underline">
                                Stuur ons een berichtje
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

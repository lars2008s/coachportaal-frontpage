'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from 'react';

// Exercise categories with SEO content
const exerciseCategories = [
    {
        id: 'warmingup',
        name: 'Warming-up Oefeningen',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
            </svg>
        ),
        description: 'Effectieve warming-up oefeningen en atletiek warming-up spelletjes om je trainingen optimaal te beginnen.',
        color: 'orange',
        exercises: [
            { name: 'Tikkertje Varianten', description: 'Diverse tag-spellen voor actieve opwarming en coordinatie', difficulty: 'Makkelijk' },
            { name: 'Loopspelletjes', description: 'Speelse oefeningen voor natuurlijke bewegingspatronen', difficulty: 'Makkelijk' },
            { name: 'Mobiliteitsoefeningen', description: 'Gewrichtsmobiliteit voor blessurepreventie', difficulty: 'Gemiddeld' },
            { name: 'Estafette Warming-up', description: 'Team-based warming-up met estafette-elementen', difficulty: 'Makkelijk' },
        ]
    },
    {
        id: 'sprint',
        name: 'Sprint Oefeningen',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        description: 'Sprint oefeningen en techniektraining voor verbetering van loopsnelheid en acceleratie.',
        color: 'blue',
        exercises: [
            { name: 'Fly-In Sprints', description: 'Opbouwen naar maximale snelheid met vliegende start', difficulty: 'Gemiddeld' },
            { name: 'Acceleratie Ladders', description: 'Techniektraining voor explosieve startfase', difficulty: 'Makkelijk' },
            { name: 'Hill Sprints', description: 'Resistentie training op helling voor krachtontwikkeling', difficulty: 'Moeilijk' },
            { name: 'Plyometrische Sprongen', description: 'Explosieve krachtsoefeningen voor sprinters', difficulty: 'Moeilijk' },
        ]
    },
    {
        id: 'springen',
        name: 'Spring Oefeningen',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        ),
        description: 'Techniektraining voor verspringen, hoogspringen, horden en polsstokhoogspringen.',
        color: 'green',
        exercises: [
            { name: 'Horden Techniek', description: 'Aanloop, afzet en passage techniek voor horden', difficulty: 'Gemiddeld' },
            { name: 'Verspringen Fases', description: 'Aanloop, afzet, vlucht en landing training', difficulty: 'Makkelijk' },
            { name: 'Hoogspringen Flop', description: 'Flop-techniek training voor hoogspringen', difficulty: 'Moeilijk' },
            { name: 'Polsstok Basis', description: 'Introductie polsstokhoogspringen techniek', difficulty: 'Gemiddeld' },
        ]
    },
    {
        id: 'werpen',
        name: 'Werpen Oefeningen',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        description: 'Kogelstoten, discuswerpen, speerwerpen en kogelslingeren oefeningen voor alle niveaus.',
        color: 'purple',
        exercises: [
            { name: 'Kogelstoten Techniek', description: 'Glide en rotatie techniek voor kogelstoters', difficulty: 'Gemiddeld' },
            { name: 'Discus Basis', description: 'Greep, draaiing en afwerp bewegingen', difficulty: 'Makkelijk' },
            { name: 'Speerwerpen Stappen', description: 'Kruisstap en afwerp sequentie training', difficulty: 'Gemiddeld' },
            { name: 'Slingeren Kracht', description: 'Core rotatie oefeningen voor werpers', difficulty: 'Moeilijk' },
        ]
    },
    {
        id: 'spelvormen',
        name: 'Atletiek Spelvormen',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        description: 'Plezierige atletiek spelvormen die techniek en conditie combineren met spelenderwijs leren.',
        color: 'lime',
        exercises: [
            { name: 'Puntenspel Estafette', description: 'Competitieve estafette met punten voor techniek', difficulty: 'Makkelijk' },
            { name: 'Team Challenge', description: 'Groepsopdrachten met atletiek elementen', difficulty: 'Gemiddeld' },
            { name: 'Circuit Spelvorm', description: 'Roterende stations met diverse atletiek oefeningen', difficulty: 'Makkelijk' },
            { name: 'Variatiespel Loop', description: 'Loopsport variaties in spelvorm', difficulty: 'Gemiddeld' },
        ]
    }
];

// Age groups for filtering
const ageGroups = [
    { id: 'all', name: 'Alle Leeftijden', description: 'Bekijk alle atletiek oefeningen' },
    { id: 'pupillen', name: 'Pupillen (6-12 jaar)', description: 'Spelvormen en basis motoriek' },
    { id: 'cadetten', name: 'Cadetten (13-15 jaar)', description: 'Techniekverfijning' },
    { id: 'junioren', name: 'Junioren (16+ jaar)', description: 'Prestiegericht' },
];

// Featured exercises
const featuredExercises = [
    {
        title: 'Complete Sprinttraining',
        category: 'Sprint',
        ageGroup: 'Pupillen',
        duration: '60 min',
        description: 'Een complete atletiek training gericht op sprinttechniek voor pupillen. Inclusief warming-up spelletjes, techniekdrills en afsluitende estafette.',
        exercises: ['Tikkertje warming-up', 'Armtechniek drills', 'High knees oefeningen', 'Estafette afsluiting']
    },
    {
        title: 'Techniektraining Verspringen',
        category: 'Springen',
        ageGroup: 'Cadetten',
        duration: '75 min',
        description: 'Gedegen verspringen training met focus op de vier fasen: aanloop, afzet, vlucht en landing. Geschikt voor cadetten die hun techniek willen verbeteren.',
        exercises: ['Mobiliteit warming-up', 'Aanloop techniek', 'Afzet oefeningen', 'Sprongen met landingszone']
    },
    {
        title: 'Warming-up Spelletjes',
        category: 'Warming-up',
        ageGroup: 'Alle leeftijden',
        duration: '20 min',
        description: 'Collectie van leuke atletiek warming-up spelletjes om elke training energiek te beginnen. Geschikt voor alle leeftijdsgroepen en aan te passen aan groepsgrootte.',
        exercises: ['Varianten van tikkertje', 'Loopspelletjes', 'Coordinatie oefeningen', 'Team estafettes']
    }
];

const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', gradient: 'from-blue-600 to-indigo-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200', gradient: 'from-purple-600 to-indigo-600' },
    green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200', gradient: 'from-green-600 to-emerald-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200', gradient: 'from-orange-600 to-red-600' },
    lime: { bg: 'bg-lime-100', text: 'text-lime-700', border: 'border-lime-200', gradient: 'from-lime-600 to-green-600' },
};

function ExerciseCard({ exercise, color }) {
    const colors = colorClasses[color] || colorClasses.blue;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-4 rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{exercise.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">{exercise.description}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold uppercase ${colors.bg} ${colors.text}`}>
                        {exercise.difficulty}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

function CategoryCard({ category, isActive, onClick }) {
    const colors = colorClasses[category.color] || colorClasses.blue;

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${isActive
                    ? `bg-gradient-to-br ${colors.gradient} border-transparent text-white shadow-xl`
                    : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-lg'
                }`}
        >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${isActive ? 'bg-white/20' : colors.bg
                }`}>
                <div className={isActive ? 'text-white' : colors.text}>
                    {category.icon}
                </div>
            </div>
            <h3 className={`text-xl font-black mb-2 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                {category.name}
            </h3>
            <p className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                {category.description}
            </p>
            {isActive && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                >
                    <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
            )}
        </motion.button>
    );
}

export default function OefeningenPageContent() {
    const [selectedCategory, setSelectedCategory] = useState(exerciseCategories[0]);
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Makkelijk': return 'text-green-600 bg-green-100';
            case 'Gemiddeld': return 'text-orange-600 bg-orange-100';
            case 'Moeilijk': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section - SEO Optimized */}
            <section className="relative py-20 lg:py-28 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50/30 to-indigo-50/50" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8">
                            <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs font-bold text-gray-600">
                                Honderden atletiek oefeningen beschikbaar
                            </span>
                        </div>

                        {/* Main H1 - SEO Optimized */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Atletiek oefeningen &{' '}
                            <span className="text-gradient">trainingsschema's</span>
                        </h1>

                        {/* Description with keywords */}
                        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-6 max-w-3xl mx-auto font-medium">
                            Ontdek honderden atletiek oefeningen en trainingsschema's voor warming-up, sprint, springen, werpen en atletiek spelvormen. Geschikt voor alle leeftijdsgroepen: pupillen, cadetten en junioren.
                        </p>

                        {/* Keywords subtext */}
                        <p className="text-sm text-gray-400 mb-8">
                            Van warming-up oefeningen en sprint trainingen tot geavanceerde atletiek spelvormen - vind de perfecte oefening voor jouw training.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://dashboard.coachportaal.be/sign-up"
                                className="group inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 no-underline"
                            >
                                Start met gratis oefeningen
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                href="/blogs"
                                className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-bold text-gray-700 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all no-underline"
                            >
                                Bekijk trainings tips
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Age Group Filter */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-black text-gray-900">Filter op leeftijdsgroep</h2>
                            <p className="text-sm text-gray-500">Vind geschikte atletiek oefeningen per categorie</p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {ageGroups.map((group) => (
                                <button
                                    key={group.id}
                                    onClick={() => setSelectedAgeGroup(group.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedAgeGroup === group.id
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {group.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Exercise Categories */}
            <section className="py-20" aria-labelledby="categories-heading">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 id="categories-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
                            Atletiek oefeningen per categorie
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Kies een categorie en ontdek uitgebreide atletiek trainingen en oefeningen voor jouw doelgroep.
                        </p>
                    </motion.div>

                    {/* Category Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {exerciseCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <CategoryCard
                                    category={category}
                                    isActive={selectedCategory.id === category.id}
                                    onClick={() => setSelectedCategory(category)}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Selected Category Detail */}
                    <motion.div
                        key={selectedCategory.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-gray-100"
                    >
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            {/* Icon and Title */}
                            <div className="flex-1">
                                <div className={`w-20 h-20 rounded-2xl ${colorClasses[selectedCategory.color].bg} ${colorClasses[selectedCategory.color].text} flex items-center justify-center mb-6`}>
                                    <div className="w-10 h-10">
                                        {selectedCategory.icon}
                                    </div>
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-4">
                                    {selectedCategory.name}
                                </h3>
                                <p className="text-lg text-gray-600 mb-8">
                                    {selectedCategory.description}
                                </p>

                                {/* Exercise List */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {selectedCategory.exercises.map((exercise, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                                        >
                                            <h4 className="font-bold text-gray-900 mb-1">{exercise.name}</h4>
                                            <p className="text-sm text-gray-500 mb-2">{exercise.description}</p>
                                            <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold uppercase ${getDifficultyColor(exercise.difficulty)}`}>
                                                {exercise.difficulty}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Side */}
                            <div className="lg:w-80">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                                    <h4 className="text-xl font-black text-gray-900 mb-3">
                                        Meer atletiek oefeningen nodig?
                                    </h4>
                                    <p className="text-sm text-gray-500 mb-6">
                                        krijg toegang tot honderden atletiek oefeningen, trainingsschema's en spelvormen.
                                    </p>
                                    <ul className="space-y-3 mb-6">
                                        {[
                                            'Honderden oefeningen',
                                            'Filter op leeftijd & niveau',
                                            'Direct klaar voor gebruik',
                                            'AI training suggesties'
                                        ].map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <svg className="w-5 h-5 text-lime-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="https://dashboard.coachportaal.be/sign-up"
                                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl no-underline"
                                    >
                                        Start gratis
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Trainingsschemas Section */}
            <section className="py-20 bg-white" aria-labelledby="trainingsschema-heading">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-4 block">
                            Trainingsschema's
                        </span>
                        <h2 id="trainingsschema-heading" className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
                            Kant-en-klare atletiek trainingen
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Complete trainingsschema's met warming-up oefeningen, techniektraining en atletiek spelvormen. Direct klaar voor gebruik.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {featuredExercises.map((training, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${training.category === 'Sprint' ? 'bg-blue-100 text-blue-700' :
                                            training.category === 'Springen' ? 'bg-green-100 text-green-700' :
                                                'bg-orange-100 text-orange-700'
                                        }`}>
                                        {training.category}
                                    </span>
                                    <span className="text-xs text-gray-400">{training.duration}</span>
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">
                                    {training.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {training.description}
                                </p>
                                <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    {training.ageGroup}
                                </div>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-xs font-bold text-gray-700 mb-2">Onderdelen:</p>
                                    <ul className="space-y-1">
                                        {training.exercises.map((exercise, i) => (
                                            <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                                                {exercise}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trainingstips & Blog Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-xs font-bold text-lime-400 uppercase tracking-widest mb-4 block">
                            Trainingstips
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                            Meer dan alleen atletiek oefeningen
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Ontdek coaching tips, trainingsmethodieken en meer in onze blogsectie.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                title: 'Efficiënt trainen met grote groepen',
                                category: 'Coaching',
                                excerpt: '5 praktische tips om kwaliteit te behouden met 20+ atleten.'
                            },
                            {
                                title: 'Warming-up spelletjes voor pupillen',
                                category: 'Oefeningen',
                                excerpt: 'Leuke warming-up oefeningen die kinderen motiveren.'
                            },
                            {
                                title: 'Sprinttechniek verbeteren',
                                category: 'Techniek',
                                excerpt: 'Essentiële drills voor betere loopsnelheid.'
                            }
                        ].map((article, index) => (
                            <Link
                                key={index}
                                href="/blogs"
                                className="group block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 no-underline"
                            >
                                <span className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-2 block">
                                    {article.category}
                                </span>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center text-lime-400 text-sm font-bold mt-4 group-hover:translate-x-1 transition-transform">
                                    Lees artikel
                                    <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 no-underline"
                        >
                            Bekijk alle artikelen
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-orange-50 via-blue-50 to-indigo-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 text-white mb-6 shadow-lg">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
                            Klaar om te trainen?
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                            Start vandaag nog gratis en krijg direct toegang tot alle atletiek oefeningen, trainingsschema's en spelvormen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://dashboard.coachportaal.be/sign-up"
                                className="group inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 no-underline"
                            >
                                Maak gratis account aan
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-bold text-gray-700 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all no-underline"
                            >
                                Meer over Coach Portaal
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <article className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-black text-gray-900 mb-4">
                            Alles over atletiek oefeningen en trainingen
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Atletiek oefeningen vormen de basis van elke effectieve training, of het nu gaat om warming-up oefeningen, sprint trainingen, technische work-outs voor springen en werpen, of leuke atletiek spelvormen. Op deze pagina vind je een uitgebreid overzicht van alle beschikbare oefeningen en trainingsschema's.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Warming-up oefeningen voor atletiek
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Een goede warming-up is essentieel voor blessurepreventie en optimale prestaties. Onze collectie warming-up oefeningen omvat dynamische rekoefeningen, mobiliteitstraining en atletiek warming-up spelletjes die de spieren voorbereiden op intensieve inspanning. Voor pupillen gebruiken we vooral spelvormen zoals tikkertje varianten en loopspelletjes.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Sprint oefeningen voor alle niveaus
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Sprint oefeningen richten zich op het verbeteren van loopsnelheid, acceleratie en techniek. Van eenvoudige loop drills voor pupillen tot geavanceerde fly-in sprints en hill sprints voor junioren - onze bibliotheek bevat sprint trainingen voor elke leeftijdsgroep. Techniekaspecten zoals armbeweging, knieheffing en voetplaatsing worden stap voor stap opgebouwd.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Atletiek spelvormen voor plezierige trainingen
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Atletiek spelvormen maken trainingen leuker en effectiever. Door techniek en conditie te verwerken in spelvormen, blijven atleten gemotiveerd en leren ze spelenderwijs. Denk aan estafettes met technische elementen, puntenspellen en team challenges. Deze aanpak werkt vooral goed voor pupillen en jongere cadetten.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Trainingsschema's per leeftijdsgroep
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Effectieve trainingsschema's zijn afgestemd op de ontwikkelingsfase van de atleet. Voor pupillen focussen we op basis motoriek, plezier en veelzijdigheid met korte, afwisselende oefeningen. Cadetten werken aan techniekverfijning met meer structuur. Junioren trainen prestatiegericht met specifieke trainingsschema's voor hun onderdeel.
                        </p>

                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mt-8">
                            <p className="text-sm text-blue-800">
                                <strong>Tip:</strong> Gebruik Coach Portaal om trainingsschema's aan te passen aan jouw groep. Filter op leeftijd, onderdeel en doel - en krijg direct een op maat gemaakt trainingsschema.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

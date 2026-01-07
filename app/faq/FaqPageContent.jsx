'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

// FAQ Data optimized for featured snippets (40-60 words per answer)
const faqData = [
    // Atletiek Trainingen
    {
        id: 1,
        category: 'Atletiek Trainingen',
        question: 'Hoeveel keer per week moet je atletiek training doen?',
        answer: 'Voor kangoeroes, benjamins en pupillen (6-11 jaar) wordt 2-3 keer per week training aanbevolen, met sessies van 45-60 minuten. Miniemen en cadetten kunnen 3-4 keer trainen met langere sessies. Rust en herstel zijn minstens zo belangrijk als de training zelf, vooral voor groeiende atleten.',
        keywords: ['training frequentie', 'atletiek schema', 'aantal trainingen']
    },
    {
        id: 2,
        category: 'Atletiek Trainingen',
        question: 'Hoe ziet een typische atletiek training eruit?',
        answer: 'Een standaard atletiek training duurt 60-90 minuten en bestaat uit: 10-15 minuten warming-up met loopscholing en mobiliteitsoefeningen, 30-45 minuten kernprogramma met techniektraining en specifieke oefeningen, en 10-15 minuten cooling-down met rekoefeningen.',
        keywords: ['training opbouw', 'training structuur', 'atletiek les']
    },
    {
        id: 3,
        category: 'Atletiek Trainingen',
        question: 'Hoe maak je een atletiek trainingsschema?',
        answer: 'Een goed atletiek trainingsschema begint met het bepalen van je doelen (sprint, springen of werpen). Verdeel de week in: 2-3 techniektrainingen, 1-2 kracht- en conditietrainingen, en 1 rustdag. Bouw progressief op: basisperiode, opbouwpériode en piekperiode.',
        keywords: ['trainingsschema maken', 'trainingsopbouw', 'periode training']
    },
    {
        id: 4,
        category: 'Atletiek Trainingen',
        question: 'Wat zijn goede atletiek trainingen voor beginners?',
        answer: 'Beginners starten met basisatletiek: loopscholing (hakken-heffen, knieheffen, passeer), eenvoudige sprongoefeningen (hoepspringen, kleine horden), en balwerpvormen voor coördinatie. Focus op plezier en basis motoriek in plaats van specialisatie.',
        keywords: ['beginners atletiek', 'starten met atletiek', 'basisoefeningen']
    },

    // Atletiek Oefeningen
    {
        id: 5,
        category: 'Atletiek Oefeningen',
        question: 'Wat zijn goede atletiek oefeningen voor pupillen?',
        answer: 'Voor pupillen zijn spelvormen het meest effectief: tag-spellen voor snelheid en reactievermogen, estafettes met eenvoudige taken, coördinatie-oefeningen met ballen, en hordenoefeningen met lage hindernissen. Houd oefeningen kort (5-10 minuten) en wissel vaak.',
        keywords: ['pupillen oefeningen', 'jeugdatletiek', 'kinderen atletiek']
    },
    {
        id: 6,
        category: 'Atletiek Oefeningen',
        question: 'Welke warming-up oefeningen voor atletiek zijn het beste?',
        answer: 'Effectieve atletiek warming-up bestaat uit: 10 minuten rustig joggen, loopscholing (A-skips, B-skips, loophuringen), mobiliteitsoefeningen (heupen, enkels, schouders), en 2-3 versnellingslooptjes van 30-50 meter. Sluit af met dynamische rekoefeningen.',
        keywords: ['warming-up', 'opwarmen', 'loopscholing']
    },
    {
        id: 7,
        category: 'Atletiek Oefeningen',
        question: 'Wat zijn de beste sprinttraining oefeningen?',
        answer: 'Sprinttraining omvat: acceleratie-oefeningen (vliegende starts, sled pulls), maximaalsnelheid training (vliegende starts van 20-40m), en snelheidsuithouding (tempo runs van 80-150m). Combineer dit met krachttraining zoals squats en lunges voor meer explosiviteit.',
        keywords: ['sprinttraining', 'snelheidstraining', 'sprint oefeningen']
    },
    {
        id: 8,
        category: 'Atletiek Oefeningen',
        question: 'Welke loopscholing oefeningen moet je doen?',
        answer: 'Essentiële loopscholing oefeningen zijn: A-skips (knieheffen op de plaats), B-skips (beenstreken), loophuringen (high knees, gestrekt been), en karretjes trekken (achteruit rennen). Doe deze 2-3 keer per week, 2-3 sets van 20-30 meter per oefening.',
        keywords: ['loopscholing', 'looptechniek', 'loopscholing oefeningen']
    },
    {
        id: 9,
        category: 'Atletiek Oefeningen',
        question: 'Hoe leer je de juiste looptechniek?',
        answer: 'Looptechniek train je door loopscholing, core-stability voor houding, en videoanalyse voor feedback. Focus op: voorvoetlanding (niet op de hak), hoge knieheffing, actieve afzet, en ontspannen armschwing. Oefeningen herhalen is belangrijker dan zware belasting.',
        keywords: ['looptechniek', 'sprinttechniek', 'lopen techniek']
    },

    // Jeugdatletiek
    {
        id: 10,
        category: 'Jeugdatletiek',
        question: 'Vanaf welke leeftijd kan je starten met atletiek?',
        answer: 'Jeugdatletiek kan starten vanaf 6 jaar (kangoeroes). Tot 11 jaar ligt de focus op algemene motorische ontwikkeling: rennen, springen, werpen en gooien in spelvorm. Vanaf 12 jaar (miniemen) kan er meer gespecialiseerd worden naar specifieke atletiekonderdelen.',
        keywords: ['starten met atletiek', 'leeftijd atletiek', 'jeugdatletiek']
    },
    {
        id: 11,
        category: 'Jeugdatletiek',
        question: 'Hoe motiveer je kinderen voor atletiek?',
        answer: 'Kinderen motiveren door variatie en spelvormen: wissel elke 10-15 minuten van activiteit, gebruik competitieve elementen (estafettes, punten), geef complimenten voor inspanning niet prestatie, en laat ze kennismaken met verschillende onderdelen.',
        keywords: ['kinderen motiveren', 'jeugdcoaching', 'pupillen motivatie']
    },
    {
        id: 12,
        category: 'Jeugdatletiek',
        question: 'Wat is de beste leeftijd om te specialiseren in atletiek?',
        answer: 'Specialisatie in atletiek start het best rond 14-15 jaar (cadetten). Daarvoor ligt de focus op veelzijdigheid en algemene motoriek. Te vroeg specialiseren kan leiden tot eenzijdige belasting, verhoogde kans op blessures en minder plezier in de sport.',
        keywords: ['specialisatie', 'jeugdatletiek', 'atletiek onderdelen']
    },
    {
        id: 13,
        category: 'Jeugdatletiek',
        question: 'Hoe combineer je school en atletiek voor jeugd?',
        answer: 'Combineer school en atletiek met planning: train in de late middag (na school, voor avondeten), plan rustdagen rond toetsweken, communiceer met trainers over schooleisen, en prioritiseer slaap (8-10 uur per nacht voor herstel).',
        keywords: ['school en sport', 'jeugdatletiek', 'training plannen']
    },

    // Atletiek Spellen
    {
        id: 14,
        category: 'Atletiek Spellen',
        question: 'Welke atletiek spelletjes voor kinderen zijn leuk?',
        answer: 'Populaire atletiek spelletjes voor kinderen: tikkertje varianten (bevriezen, teamtag), estafettes met verschillende taken, hindernisbanen, coördinatiespellen met ballen, en targetingsspellen (naar een doel werpen). Spellen duren 5-15 minuten.',
        keywords: ['atletiek spelletjes', 'kinderen spellen', 'pupillen spelletjes']
    },
    {
        id: 15,
        category: 'Atletiek Spellen',
        question: 'Wat zijn goede atletiek spelvormen voor warming-up?',
        answer: 'Effectieve warming-up spelvormen zijn: tag-spellen (bent, tikkertje met taken), partnerloops, relay races zonder competitie, en coördinatiespellen als "zakkenlopen" of "dierendraf". Deze verhogen de hartslag en activeren spieren.',
        keywords: ['warming-up spelletjes', 'warming-up spellen', 'opwarm spelletjes']
    },
    {
        id: 16,
        category: 'Atletiek Spellen',
        question: 'Hoe maak je atletiek training leuk voor pupillen?',
        answer: 'Maak atletiek training leuk door: variatie in oefeningen, spelvormen in plaats van drill, competities (estafettes, punten), thematrainingen (olympische dag), en complimenten geven. Gebruik muziek en maak gebruik van de accommodatie (springbak, horden).',
        keywords: ['leuke training', 'pupillen training', 'atletiek voor kinderen']
    },
    {
        id: 17,
        category: 'Atletiek Spellen',
        question: 'Welke estafettevormen zijn geschikt voor atletiek?',
        answer: 'Geschikte estafettevormen voor atletiek: estafettes met wisselbatjes, Zweedse estafette (heen en terug), estafette met hindernissen, estafette met opdrachten (hindernis nemen, bal werpen), en teamestafettes met verschillende afstanden per loper.',
        keywords: ['estafettes', 'estafettevormen', 'atletiek estafette']
    },

    // Trainingsschema's
    {
        id: 18,
        category: "Trainingsschema's",
        question: 'Wat is een goed trainingsschema voor beginners atletiek?',
        answer: 'Een beginners trainingsschema: Maandag - techniektraining (loopscholing), Woensdag - krachttraining (lichaamsgewicht), Donderdag - rust, Zaterdag - variërende training (sprint, springen of werpen). Bouw na 6-8 weken langzaam volume en intensiteit op.',
        keywords: ['beginners schema', 'trainingsschema beginner', 'startersschema atletiek']
    },
    {
        id: 19,
        category: "Trainingsschema's",
        question: 'Hoe bouw je een trainingsschema op voor een seizoen?',
        answer: 'Een seizoenstraining bestaat uit: voorbereidingsperiode (6-8 weken basisconditie en techniek), opbouwpériode (4-6 weken intensiteit verhogen), wedstrijdperiode (onderhoud en pieken), en overgangsperiode (rust en herstel). Plan rustweken na elke 3-4 weken.',
        keywords: ['seizoen planning', 'periode training', 'trainingscyclus']
    },
    {
        id: 20,
        category: "Trainingsschema's",
        question: 'Wat is het beste trainingsschema voor sprinters?',
        answer: 'Sprinter trainingsschema: Maandag - acceleratie training (10-30m sprints), Dinsdag - krachttraining (plyometrics, squats), Woensdag - rust of lichte recovery, Donderdag - maximaalsnelheid (30-60m vliegende starts), Vrijdag - tempo training (80-150m), Zaterdag - wedstrijd of rust.',
        keywords: ['sprinter schema', 'sprinttraining schema', 'sprint programma']
    },
];

// Get unique categories
const categories = ['Alle', ...new Set(faqData.map(item => item.category))];

// FAQ Item Component
function FAQItem({ faq, index, isOpen, onToggle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
        >
            <button
                onClick={onToggle}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed mb-3">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                        {faq.keywords.map((keyword, i) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs rounded-full"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Category Badge Component
function CategoryBadge({ category, isActive, onClick }) {
    const categoryColors = {
        'Alle': 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        'Atletiek Trainingen': 'bg-blue-100 text-blue-700 hover:bg-blue-200',
        'Atletiek Oefeningen': 'bg-purple-100 text-purple-700 hover:bg-purple-200',
        'Jeugdatletiek': 'bg-green-100 text-green-700 hover:bg-green-200',
        'Atletiek Spellen': 'bg-orange-100 text-orange-700 hover:bg-orange-200',
        'Trainingsschema\'s': 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${isActive
                ? `ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-600 ${categoryColors[category] || categoryColors['Alle']}`
                : categoryColors[category] || categoryColors['Alle']
                }`}
        >
            {category}
        </button>
    );
}

export default function FaqPageContent() {
    const [activeCategory, setActiveCategory] = useState('Alle');
    const [openItems, setOpenItems] = useState(new Set());

    const filteredFAQs = activeCategory === 'Alle'
        ? faqData
        : faqData.filter(faq => faq.category === activeCategory);

    const toggleItem = (id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const expandAll = () => {
        setOpenItems(new Set(filteredFAQs.map(faq => faq.id)));
    };

    const collapseAll = () => {
        setOpenItems(new Set());
    };

    return (
        <>
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqData.map(faq => ({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer
                            }
                        }))
                    })
                }}
            />

            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 block">
                                FAQ
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                                Veelgestelde vragen over{' '}
                                <span className="text-gradient">atletiek trainingen</span>
                            </h1>
                            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                                Vind direct antwoorden op alles over atletiek oefeningen, jeugdatletiek, spellen en trainingsschema's.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="sticky top-16 sm:top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <div className="flex items-center justify-between py-4">
                            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                                {categories.map((category) => (
                                    <CategoryBadge
                                        key={category}
                                        category={category}
                                        isActive={activeCategory === category}
                                        onClick={() => {
                                            setActiveCategory(category);
                                            setOpenItems(new Set());
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="hidden md:flex gap-2 ml-4">
                                <button
                                    onClick={expandAll}
                                    className="px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                    Alle openklappen
                                </button>
                                <button
                                    onClick={collapseAll}
                                    className="px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                    Alle dichtklappen
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ List */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <div className="space-y-4">
                            {filteredFAQs.map((faq, index) => (
                                <FAQItem
                                    key={faq.id}
                                    faq={faq}
                                    index={index}
                                    isOpen={openItems.has(faq.id)}
                                    onToggle={() => toggleItem(faq.id)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Internal Links Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl font-black text-gray-900 mb-4">
                                Meer weten over atletiek trainingen?
                            </h2>
                            <p className="text-gray-500 max-w-xl mx-auto">
                                Ontdek onze uitgebreide collectie atletiek oefeningen en artikelen.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Link
                                href="/oefeningen"
                                className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white hover:shadow-xl hover:-translate-y-1 transition-all no-underline"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black mb-3">Atletiek Oefeningen Bibliotheek</h3>
                                    <p className="text-white/80 mb-6">
                                        Toegang tot honderden atletiek oefeningen en spellen, gefilterd op leeftijd en onderdeel.
                                    </p>
                                    <span className="inline-flex items-center text-white font-bold group-hover:translate-x-1 transition-transform">
                                        Bekijk alle oefeningen
                                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            </Link>

                            <Link
                                href="/blogs"
                                className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 text-white hover:shadow-xl hover:-translate-y-1 transition-all no-underline"
                            >
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black mb-3">Blog & Tips</h3>
                                    <p className="text-white/80 mb-6">
                                        Artikelen over coaching, trainingstechnieken en het begeleiden van jeugdatleten.
                                    </p>
                                    <span className="inline-flex items-center text-white font-bold group-hover:translate-x-1 transition-transform">
                                        Lees onze artikelen
                                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 sm:p-16 text-center"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                                    Klaar om je training naar een hoger niveau te tillen?
                                </h2>
                                <p className="text-xl text-gray-400 mb-8 font-medium max-w-2xl mx-auto">
                                    Start vandaag nog gratis en krijg toegang tot honderden atletiek oefeningen, trainingen en tools.
                                </p>
                                <Link
                                    href="https://dashboard.coachportaal.be/sign-up"
                                    className="inline-flex items-center justify-center rounded-xl px-10 py-5 text-lg font-bold text-gray-900 bg-white hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 no-underline"
                                >
                                    Start direct gratis
                                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Clock, Users, Filter, BookOpen, Sparkles, ArrowRight, Play, Dumbbell } from 'lucide-react';

// Category badge colors
const categoryColors = {
    'Sprint': 'bg-red-100 text-red-700 border-red-200',
    'Duurloop': 'bg-blue-100 text-blue-700 border-blue-200',
    'Techniek': 'bg-purple-100 text-purple-700 border-purple-200',
    'Kracht': 'bg-orange-100 text-orange-700 border-orange-200',
    'Coördinatie': 'bg-green-100 text-green-700 border-green-200',
    'Spel': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'Werpen': 'bg-pink-100 text-pink-700 border-pink-200',
    'Springen': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    'Warming-up': 'bg-lime-100 text-lime-700 border-lime-200',
    'Cooling-down': 'bg-slate-100 text-slate-700 border-slate-200',
};

// Age group display names
const ageGroupNames = {
    'kangoeroes': 'Kangoeroes',
    'benjamin': 'Benjamins',
    'pupil': 'Pupillen',
    'miniem': 'Miniemen',
    'cadet': 'Cadetten',
    'scholier': 'Scholieren',
    'junior': 'Junioren',
    'senior': 'Senioren',
};

function TrainingCard({ training }) {
    const categoryColor = categoryColors[training.category] || 'bg-gray-100 text-gray-700 border-gray-200';
    const ageGroupName = ageGroupNames[training.ageGroup] || training.ageGroup;

    return (
        <Link
            href={`/bibliotheek/${training._id}`}
            className="group block no-underline"
        >
            <article className="h-full bg-white rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1">
                {/* Header with category and age group */}
                <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${categoryColor}`}>
                        {training.category}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                        {ageGroupName}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {training.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {training.description || 'Geen beschrijving beschikbaar.'}
                </p>

                {/* Footer with duration and block count */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {training.duration} min
                        </span>
                        {training.blockCount && (
                            <span className="flex items-center gap-1.5">
                                <Dumbbell className="w-4 h-4" />
                                {training.blockCount} oefeningen
                            </span>
                        )}
                    </div>
                    <span className="text-blue-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Bekijk <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </article>
        </Link>
    );
}

function EmptyState() {
    return (
        <div className="text-center py-16 px-4">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Bibliotheek wordt geladen...</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
                De publieke trainingsbibliotheek is nog in opbouw. Binnenkort vind je hier honderden gratis atletiektrainingen.
            </p>
            <Link
                href="https://dashboard.coachportaal.be"
                className="btn btn-primary no-underline"
            >
                <Sparkles className="w-5 h-5" />
                Bekijk het Dashboard
            </Link>
        </div>
    );
}

export default function BibliotheekPageContent({ trainings }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('');

    // Extract unique categories and age groups from trainings
    const categories = [...new Set(trainings.map(t => t.category))].filter(Boolean);
    const ageGroups = [...new Set(trainings.map(t => t.ageGroup))].filter(Boolean);

    // Filter trainings based on search and filters
    const filteredTrainings = trainings.filter(training => {
        const matchesSearch = !searchQuery ||
            training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (training.description && training.description.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = !selectedCategory || training.category === selectedCategory;
        const matchesAgeGroup = !selectedAgeGroup || training.ageGroup === selectedAgeGroup;

        return matchesSearch && matchesCategory && matchesAgeGroup;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                </div>

                <div className="relative container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium">Publieke Bibliotheek</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Gratis Atletiek{' '}
                            <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Trainingen
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Ontdek professionele trainingsschema's voor alle leeftijdsgroepen.
                            Van warming-up spelletjes tot complete wedstrijdvoorbereiding.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Zoek trainingen, oefeningen..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                                />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">{trainings.length}</div>
                                <div className="text-sm text-gray-400">Trainingen</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">{categories.length}</div>
                                <div className="text-sm text-gray-400">Categorieën</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-400">Gratis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CoachPortaal Promo Banner */}
            <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-3">
                                <Sparkles className="w-3 h-3" />
                                Coach Portaal
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">
                                Maak zelf trainingen met AI
                            </h2>
                            <p className="text-white/80 text-sm md:text-base max-w-xl">
                                Gratis account aanmaken en direct aan de slag met onze AI-trainingsschema maker, ledenbeheer en meer.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <div className="flex items-center gap-4 text-sm text-white/70">
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Gratis
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Geen creditcard
                                </span>
                            </div>
                            <Link
                                href="https://dashboard.coachportaal.be/sign-up"
                                className="group inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 no-underline"
                            >
                                <Users className="w-5 h-5 mr-2" />
                                Gratis Aanmelden
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            {trainings.length > 0 && (
                <section className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-gray-200">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Filter className="w-4 h-4" />
                                <span className="text-sm font-medium">Filters:</span>
                            </div>

                            {/* Category Filter */}
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            >
                                <option value="">Alle categorieën</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>

                            {/* Age Group Filter */}
                            <select
                                value={selectedAgeGroup}
                                onChange={(e) => setSelectedAgeGroup(e.target.value)}
                                className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            >
                                <option value="">Alle leeftijdsgroepen</option>
                                {ageGroups.map(ag => (
                                    <option key={ag} value={ag}>{ageGroupNames[ag] || ag}</option>
                                ))}
                            </select>

                            {/* Results count */}
                            <div className="ml-auto text-sm text-gray-500">
                                {filteredTrainings.length} {filteredTrainings.length === 1 ? 'training' : 'trainingen'} gevonden
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Trainings Grid */}
            <section className="container mx-auto px-4 py-12">
                {trainings.length === 0 ? (
                    <EmptyState />
                ) : filteredTrainings.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-gray-600 text-lg">
                            Geen trainingen gevonden met de huidige filters.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('');
                                setSelectedAgeGroup('');
                            }}
                            className="mt-4 text-blue-600 font-medium hover:underline"
                        >
                            Wis alle filters
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredTrainings.map((training) => (
                            <TrainingCard key={training._id} training={training} />
                        ))}
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Wil je zelf trainingen maken?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Met Coach Portaal maak je in minuten professionele trainingen.
                        Gebruik onze AI-assistent of bouw met drag-and-drop.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="https://dashboard.coachportaal.be"
                            className="btn btn-lg bg-white text-blue-700 hover:bg-gray-100 no-underline shadow-lg"
                        >
                            <Sparkles className="w-5 h-5" />
                            Gratis Starten
                        </Link>
                        <Link
                            href="/oefeningen"
                            className="btn btn-lg bg-white/10 text-white border border-white/30 hover:bg-white/20 no-underline"
                        >
                            <Play className="w-5 h-5" />
                            Bekijk Oefeningen
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

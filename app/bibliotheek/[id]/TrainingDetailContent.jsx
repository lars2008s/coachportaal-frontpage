'use client';

import Link from 'next/link';
import {
    Clock,
    Users,
    ArrowLeft,
    ExternalLink,
    Sparkles,
    Play,
    Target,
    Flame,
    Snowflake,
    ChevronDown,
    ChevronUp,
    Share2,
    Bookmark,
    Copy,
    Check
} from 'lucide-react';
import { useState } from 'react';

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

// Block type styling
const blockTypeConfig = {
    warmup: {
        label: 'Warming-up',
        icon: Flame,
        gradient: 'from-orange-500 to-red-500',
        bgLight: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-700',
    },
    core: {
        label: 'Hoofddeel',
        icon: Target,
        gradient: 'from-blue-500 to-purple-500',
        bgLight: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700',
    },
    cooldown: {
        label: 'Cooling-down',
        icon: Snowflake,
        gradient: 'from-cyan-500 to-blue-500',
        bgLight: 'bg-cyan-50',
        borderColor: 'border-cyan-200',
        textColor: 'text-cyan-700',
    },
};

function BlockCard({ block, type, index }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const config = blockTypeConfig[type];
    const Icon = config.icon;

    // Check if content is long enough to need expansion
    const needsExpansion = block.content && block.content.length > 200;
    const displayContent = needsExpansion && !isExpanded
        ? block.content.slice(0, 200) + '...'
        : block.content;

    return (
        <div className={`rounded-xl border ${config.borderColor} ${config.bgLight} overflow-hidden transition-all hover:shadow-md`}>
            <div className="p-5">
                {/* Block header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-lg`}>
                            <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">{block.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{block.duration} min</span>
                                {block.exerciseType && (
                                    <>
                                        <span className="text-gray-300">•</span>
                                        <span className="capitalize">{block.exerciseType === 'game' ? 'Spel' : 'Techniek'}</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Block content */}
                {block.content && (
                    <div className="mt-4">
                        <p className="text-gray-700 text-sm whitespace-pre-wrap leading-relaxed">
                            {displayContent}
                        </p>
                        {needsExpansion && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                            >
                                {isExpanded ? (
                                    <>
                                        <ChevronUp className="w-4 h-4" />
                                        Minder tonen
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4" />
                                        Meer lezen
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                )}

                {/* Technical focus tag */}
                {block.technicalFocus && (
                    <div className="mt-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-200">
                            <Target className="w-3 h-3" />
                            {block.technicalFocus}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

function BlockSection({ title, blocks, type }) {
    if (!blocks || blocks.length === 0) return null;

    const config = blockTypeConfig[type];
    const Icon = config.icon;

    return (
        <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                    <p className="text-sm text-gray-500">{blocks.length} {blocks.length === 1 ? 'oefening' : 'oefeningen'}</p>
                </div>
            </div>
            <div className="space-y-4">
                {blocks.map((block, index) => (
                    <BlockCard
                        key={block.id || index}
                        block={block}
                        type={type}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default function TrainingDetailContent({ training }) {
    const [copied, setCopied] = useState(false);

    const categoryColor = categoryColors[training.category] || 'bg-gray-100 text-gray-700 border-gray-200';
    const ageGroupName = ageGroupNames[training.ageGroup] || training.ageGroup;

    const totalBlocks = (training.warmup?.length || 0) + (training.core?.length || 0) + (training.cooldown?.length || 0);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
                </div>

                <div className="relative container mx-auto px-4 py-12 md:py-20">
                    {/* Back button */}
                    <Link
                        href="/bibliotheek"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 no-underline"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium">Terug naar bibliotheek</span>
                    </Link>

                    <div className="max-w-4xl">
                        {/* Categories */}
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <span className={`px-3 py-1.5 text-sm font-semibold rounded-full border ${categoryColor.replace('border-', 'border-white/20 ').replace('text-', 'text-white ').replace('bg-', 'bg-white/10 ')}`}>
                                {training.category}
                            </span>
                            <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/10 text-white/80 border border-white/20">
                                {ageGroupName}
                            </span>
                            {training.focus && (
                                <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30">
                                    <Target className="w-3.5 h-3.5 inline mr-1.5" />
                                    {training.focus}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            {training.title}
                        </h1>

                        {/* Description */}
                        {training.description && (
                            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
                                {training.description}
                            </p>
                        )}

                        {/* Stats */}
                        <div className="flex flex-wrap items-center gap-6 mb-8">
                            <div className="flex items-center gap-2 text-gray-300">
                                <Clock className="w-5 h-5 text-blue-400" />
                                <span className="font-medium">{training.duration} minuten</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Play className="w-5 h-5 text-green-400" />
                                <span className="font-medium">{totalBlocks} oefeningen</span>
                            </div>
                        </div>

                        {/* Tags */}
                        {training.tags && training.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-8">
                                {training.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/10"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={`https://dashboard.coachportaal.be/import/${training._id}`}
                                className="btn btn-primary no-underline"
                            >
                                <Sparkles className="w-5 h-5" />
                                Gebruiken in Dashboard
                            </a>
                            <button
                                onClick={handleCopyLink}
                                className="btn bg-white/10 text-white border border-white/20 hover:bg-white/20"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-5 h-5 text-green-400" />
                                        Gekopieerd!
                                    </>
                                ) : (
                                    <>
                                        <Share2 className="w-5 h-5" />
                                        Delen
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Content */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <BlockSection
                        title="Warming-up"
                        blocks={training.warmup}
                        type="warmup"
                    />
                    <BlockSection
                        title="Hoofddeel"
                        blocks={training.core}
                        type="core"
                    />
                    <BlockSection
                        title="Cooling-down"
                        blocks={training.cooldown}
                        type="cooldown"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Wil je deze training aanpassen?
                    </h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Open de training in het Coach Portaal Dashboard om oefeningen toe te voegen,
                        aan te passen of te verwijderen.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href={`https://dashboard.coachportaal.be/import/${training._id}`}
                            className="btn btn-lg bg-white text-blue-700 hover:bg-gray-100 no-underline shadow-lg"
                        >
                            <ExternalLink className="w-5 h-5" />
                            Open in Dashboard
                        </a>
                        <Link
                            href="/bibliotheek"
                            className="btn btn-lg bg-white/10 text-white border border-white/30 hover:bg-white/20 no-underline"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Terug naar Bibliotheek
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

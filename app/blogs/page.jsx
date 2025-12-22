'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export const blogPosts = [
    {
        slug: "administratie-omzetten-in-coachtijd",
        title: "Houd op met papierwerk - Win 10+ uur week terug",
        excerpt: "Ontdek hoe coaches administratieve taken automatiseren en meer tijd kunnen besteden aan wat echt telt: atleten ontwikkelen.",
        date: "11 Dec 2025",
        category: "Coaching",
        color: "blue"
    },
    {
        slug: "val-transformatie-2025",
        title: "Transformatie van de Jeugdcompetitie 2025-2028",
        excerpt: "Een diepgaande analyse van de hervormingen binnen de Vlaamse Atletiekliga voor de categorieën Pupillen en Miniemen.",
        date: "1 Dec 2025",
        category: "Beleid",
        color: "indigo"
    },
    {
        slug: "effecient-trainen-met-grote-groepen",
        title: "Efficiënt trainen met grote groepen",
        excerpt: "Hoe houd je overzicht en kwaliteit als je met meer dan 20 atleten op de baan staat? 5 praktische tips.",
        date: "28 Nov 2025",
        category: "Coaching",
        color: "blue"
    },
    {
        slug: "nieuwe-spelregels-2025",
        title: "Nieuwe wedstrijdregels voor pupillen",
        excerpt: "Alles wat je moet weten over de veranderingen in de competitie opzet voor het komende seizoen.",
        date: "15 Nov 2025",
        category: "Wedstrijden",
        color: "green"
    }
];

export default function BlogsPage() {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16 text-center"
            >
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-none">
                    Onze <span className="text-blue-600">Blog</span>
                </h1>
                <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                    Inzichten, tips en updates voor de moderne atletiekcoach.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link href={`/blogs/${post.slug}`} className="group block h-full no-underline!">
                            <div className="h-full p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 group-hover:border-blue-200 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-blue-600/5 transition-all duration-500 flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <span className={`px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest`}>
                                        {post.category}
                                    </span>
                                    <span className="text-xs font-bold text-gray-400">{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center text-blue-600 font-black text-sm uppercase tracking-wider">
                                    Lees meer
                                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

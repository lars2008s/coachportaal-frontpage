'use client';

import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from 'react';
import { blogPosts, blogCategories } from '../../data/blogs';

const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
    green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200' },
    gray: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' },
};

function BlogCard({ post, featured = false }) {
    const colors = colorClasses[post.color] || colorClasses.blue;

    return (
        <Link href={`/blogs/${post.slug}`} className="group block no-underline h-full">
            <div className={`h-full flex flex-col rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden ${featured ? 'md:flex-row' : ''}`}>
                {/* Image placeholder */}
                <div className={`relative bg-gradient-to-br from-gray-100 to-gray-50 ${featured ? 'md:w-1/2 aspect-video md:aspect-auto' : 'aspect-video'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                            <svg className={`w-8 h-8 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                    </div>
                    {/* Featured badge */}
                    {post.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-lime-400 text-gray-900 text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Uitgelicht
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className={`flex flex-col p-6 ${featured ? 'md:p-8 md:w-1/2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors.bg} ${colors.text}`}>
                            {post.category}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">{post.readTime || '5 min'}</span>
                    </div>

                    <h2 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight ${featured ? 'text-2xl' : 'text-lg'}`}>
                        {post.title}
                    </h2>

                    <p className={`text-gray-500 leading-relaxed mb-4 flex-1 ${featured ? 'text-base' : 'text-sm line-clamp-2'}`}>
                        {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                        <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                        <span className="flex items-center text-blue-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                            Lees meer
                            <svg className="ml-1.5 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function BlogsPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredPosts = activeCategory === 'all'
        ? blogPosts
        : blogPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => post !== featuredPost);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 block">
                            Blog
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
                            Inzichten voor de{' '}
                            <span className="text-gradient">moderne coach</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                            Tips, tutorials en updates om je coaching naar een hoger niveau te tillen.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-16 sm:top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
                        {blogCategories.map((category) => {
                            const isActive = activeCategory === category.slug;
                            return (
                                <button
                                    key={category.slug}
                                    onClick={() => setActiveCategory(category.slug)}
                                    className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${isActive
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* Featured Post */}
                    {activeCategory === 'all' && featuredPost && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-12"
                        >
                            <BlogCard post={featuredPost} featured />
                        </motion.div>
                    )}

                    {/* Regular Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(activeCategory === 'all' ? regularPosts : filteredPosts).map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <BlogCard post={post} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Geen artikelen gevonden</h3>
                            <p className="text-gray-500">Er zijn nog geen artikelen in deze categorie.</p>
                            <button
                                onClick={() => setActiveCategory('all')}
                                className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
                            >
                                Bekijk alle artikelen
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-black text-gray-900 mb-4">
                            Mis geen enkel artikel
                        </h2>
                        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
                            Ontvang onze nieuwste tips en updates rechtstreeks in je inbox. Geen spam, alleen waardevolle content.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all no-underline"
                        >
                            Aanmelden voor newsletter
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

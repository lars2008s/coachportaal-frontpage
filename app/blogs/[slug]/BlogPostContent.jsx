'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-700' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700' },
    green: { bg: 'bg-green-100', text: 'text-green-700' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-700' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700' },
};

function ShareButtons({ title, slug }) {
    const url = `https://coachportaal.be/blogs/${slug}`;

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-gray-400">Delen:</span>
            <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center text-gray-500 transition-all no-underline"
                aria-label="Delen op Twitter"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
            <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#0077B5] hover:text-white flex items-center justify-center text-gray-500 transition-all no-underline"
                aria-label="Delen op LinkedIn"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </a>
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#1877F2] hover:text-white flex items-center justify-center text-gray-500 transition-all no-underline"
                aria-label="Delen op Facebook"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            </a>
            <button
                onClick={() => {
                    navigator.clipboard.writeText(url);
                    alert('Link gekopieerd!');
                }}
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-900 hover:text-white flex items-center justify-center text-gray-500 transition-all"
                aria-label="Kopieer link"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            </button>
        </div>
    );
}

function RelatedPostCard({ post }) {
    const colors = colorClasses[post.color] || colorClasses.blue;

    return (
        <Link href={`/blogs/${post.slug}`} className="group block no-underline">
            <div className="p-5 rounded-xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${colors.bg} ${colors.text}`}>
                        {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight text-sm">
                    {post.title}
                </h4>
            </div>
        </Link>
    );
}

export default function BlogPostContent({ post, relatedPosts }) {
    const colors = colorClasses[post.color] || colorClasses.blue;

    return (
        <article className="min-h-screen">
            {/* Hero Header */}
            <header className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                    {/* Back link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors no-underline mb-8 group"
                        >
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                            Terug naar blog
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${colors.bg} ${colors.text}`}>
                                {post.category}
                            </span>
                            <span className="text-sm text-gray-400 font-medium">{post.date}</span>
                            <span className="text-sm text-gray-400 font-medium">• {post.readTime || '5 min lezen'}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl text-gray-500 font-medium leading-relaxed mb-8 max-w-3xl">
                            {post.excerpt}
                        </p>

                        {/* Share buttons */}
                        <ShareButtons title={post.title} slug={post.slug} />
                    </motion.div>
                </div>
            </header>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:font-semibold prose-strong:text-gray-900"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share CTA */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Vond je dit artikel nuttig?</h3>
                            <p className="text-gray-500">Deel het met je collega-coaches!</p>
                        </div>
                        <ShareButtons title={post.title} slug={post.slug} />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                            Klaar om te beginnen?
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                            Ontdek hoe Coach Portaal je kan helpen bij deze veranderingen. Maak gratis een account aan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://dashboard.coachportaal.be/sign-up"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all no-underline"
                            >
                                Probeer Coach Portaal gratis
                            </Link>
                            <Link
                                href="/blogs"
                                className="inline-flex items-center justify-center px-8 py-4 text-white font-bold border border-white/30 rounded-xl hover:bg-white/10 transition-all no-underline"
                            >
                                Meer artikelen lezen
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl font-black text-gray-900 mb-8">Gerelateerde artikelen</h2>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {relatedPosts.map((relatedPost) => (
                                <motion.div
                                    key={relatedPost.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <RelatedPostCard post={relatedPost} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    );
}

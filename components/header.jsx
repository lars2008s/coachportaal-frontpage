'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Blogs', href: '/blogs' },
    { linkText: 'Docs', href: '/docs' },
    { linkText: 'Bibliotheek', href: '/bibliotheek' },
    { linkText: 'Info', href: '/info' }
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-100'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 no-underline group">
                            <div className="relative">
                                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/25 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-xl group-hover:shadow-blue-600/40 transition-all group-hover:scale-105">
                                    CP
                                </div>
                                <div className="absolute -top-1 -right-1 h-3 w-3 bg-lime-400 rounded-full border-2 border-white animate-pulse" />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
                                Coach Portaal
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors no-underline group"
                                >
                                    {item.linkText}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all group-hover:w-3/4" />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA Buttons */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                href="https://dashboard.coachportaal.be"
                                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors no-underline"
                            >
                                Inloggen
                            </Link>
                            <Link
                                href="https://dashboard.coachportaal.be"
                                className="group relative px-5 py-2.5 text-sm font-bold text-white no-underline rounded-xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all group-hover:scale-105" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-indigo-600 to-blue-600" />
                                <span className="relative flex items-center gap-2">
                                    Gratis starten
                                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 h-4 flex flex-col justify-between">
                                <span className={`h-0.5 w-full bg-gray-600 rounded-full transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                                <span className={`h-0.5 w-full bg-gray-600 rounded-full transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`h-0.5 w-full bg-gray-600 rounded-full transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Spacer for fixed header */}
            <div className="h-16 sm:h-20" />

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-2xl z-50 md:hidden"
                        >
                            <div className="flex flex-col h-full p-6">
                                {/* Close button */}
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="self-end w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors mb-8"
                                >
                                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Nav Items */}
                                <div className="flex flex-col gap-2">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center px-4 py-3 text-lg font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all no-underline"
                                            >
                                                {item.linkText}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="mt-auto pt-8 space-y-3 border-t border-gray-100">
                                    <Link
                                        href="https://dashboard.coachportaal.be"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full px-4 py-3 text-center text-base font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all no-underline"
                                    >
                                        Inloggen
                                    </Link>
                                    <Link
                                        href="https://dashboard.coachportaal.be"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block w-full px-4 py-3 text-center text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-600/25 no-underline"
                                    >
                                        Gratis starten
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

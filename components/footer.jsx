'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
    product: [
        { name: 'Functies', href: '/#trainer' },
        { name: 'Prijzen', href: '/#pricing' },
        { name: 'Chrome Extensie', href: '/docs/chrome-extension' },
        { name: 'API', href: '/docs/api' },
    ],
    resources: [
        { name: 'Documentatie', href: '/docs' },
        { name: 'Blog', href: '/blogs' },
        { name: 'Handleidingen', href: '/docs/guides' },
        { name: 'FAQ', href: '/info#faq' },
    ],
    company: [
        { name: 'Over ons', href: '/info' },
        { name: 'Contact', href: 'mailto:support@coachportaal.be' },
        { name: 'Privacy', href: '/info/privacy' },
        { name: 'Voorwaarden', href: '/info/terms' },
    ],
};

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/coachportaal',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/coachportaal',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: 'Facebook',
        href: 'https://facebook.com/coachportaal',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/coachportaal',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
        ),
    },
];

export function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="relative mt-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-full blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                {/* Newsletter Section */}
                <div className="relative -mt-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-blue-600/20"
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                                    Blijf op de hoogte
                                </h3>
                                <p className="text-blue-100 font-medium">
                                    Ontvang tips, updates en nieuws rechtstreeks in je inbox.
                                </p>
                            </div>
                            <div className="flex-1 w-full lg:w-auto">
                                {isSubscribed ? (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="flex items-center justify-center gap-3 bg-white/20 rounded-2xl px-6 py-4"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-white font-bold">Bedankt voor je aanmelding!</span>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="je@email.com"
                                            className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 font-medium focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                        >
                                            Aanmelden
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-12 border-t border-gray-200">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 no-underline mb-6">
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white font-bold text-lg">
                                CP
                            </div>
                            <span className="font-bold text-xl text-gray-900 tracking-tight">Coach Portaal</span>
                        </Link>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">
                            De slimste software voor atletiek trainingen en clubbeheer.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all no-underline"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors no-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors no-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Bedrijf</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors no-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400 font-medium">
                        © {new Date().getFullYear()} Coach Portaal. Alle rechten voorbehouden.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
                        <Link href="/info/privacy" className="hover:text-gray-600 transition-colors no-underline">
                            Privacy
                        </Link>
                        <Link href="/info/terms" className="hover:text-gray-600 transition-colors no-underline">
                            Voorwaarden
                        </Link>
                        <Link href="/info/cookies" className="hover:text-gray-600 transition-colors no-underline">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

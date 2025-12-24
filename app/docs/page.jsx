import Link from 'next/link';
import { docsCategories } from 'data/docs';


export const metadata = {
    title: 'Documentatie | Coach Portaal',
    description: 'Complete handleidingen en documentatie voor Coach Portaal. Leer alles over ledenbeheer, trainingen, wedstrijden en meer.',
};

export default function DocsPage() {
    return (
        <div className="max-w-4xl py-12 px-8">

            {/* Hero */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                    <span>📚</span>
                    <span>Kennisbank</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-[0.95]">
                    Documentatie
                </h1>
                <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                    Alles wat je nodig hebt om het meeste uit Coach Portaal te halen.
                    Van snelle start tot geavanceerde configuratie.
                </p>
            </div>

            {/* Quick Start Card */}
            <Link
                href="/docs/quick-start"
                className="block mb-12 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] transition-all duration-300 no-underline! group"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">
                            Aanbevolen voor beginners
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">
                            🚀 Snelstartgids
                        </h2>
                        <p className="text-blue-100 font-medium max-w-lg">
                            Zet Coach Portaal in 15 minuten op. Van account aanmaken tot je eerste training.
                        </p>
                    </div>
                    <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur group-hover:bg-white/30 transition-colors">
                        <svg className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
            </Link>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {docsCategories.filter(cat => cat.id !== 'getting-started').map((category) => (
                    <div
                        key={category.id}
                        className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl">{category.icon}</span>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 tracking-tight">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium">
                                    {category.description}
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-2">
                            {category.docs.map((doc) => (
                                <li key={doc.slug}>
                                    <Link
                                        href={`/docs/${doc.slug}`}
                                        className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors no-underline! group"
                                    >
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                        {doc.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Getting Started Section */}
            <div className="mt-12 p-8 rounded-3xl bg-gray-900 text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black mb-2 tracking-tight">Aan de slag</h3>
                        <p className="text-gray-400 font-medium">
                            Bekijk ook onze andere startersgidsen om snel productief te worden.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="/docs/dashboard"
                            className="px-5 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors no-underline!"
                        >
                            Dashboard Tour
                        </Link>
                        <Link
                            href="/docs/first-training"
                            className="px-5 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors no-underline!"
                        >
                            Eerste Training
                        </Link>
                    </div>
                </div>
            </div>

            {/* Help Section */}
            <div className="mt-12 text-center">
                <p className="text-gray-500 font-medium mb-4">
                    Staat je vraag er niet tussen?
                </p>
                <Link
                    href="mailto:support@coachportaal.be"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors no-underline!"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Support
                </Link>
            </div>
        </div>
    );
}

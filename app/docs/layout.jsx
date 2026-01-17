import Link from 'next/link';
import { docsCategories } from 'data/docs';


export const metadata = {
    title: 'Documentatie | Coach Portaal',
    description: 'Complete handleidingen en documentatie voor Coach Portaal. Leer alles over ledenbeheer, trainingen, wedstrijden en meer.',
    keywords: ['coach portaal documentatie', 'atletiek handleiding', 'trainer gids', 'coach portaal help'],
    openGraph: {
        title: 'Documentatie | Coach Portaal',
        description: 'Complete handleidingen en documentatie voor Coach Portaal.',
        url: 'https://atletiektrainer.be/docs',
        siteName: 'Coach Portaal',
        locale: 'nl_BE',
        type: 'website',
    },
};

export default function DocsLayout({ children }) {
    return (
        <>
            {/* Sidebar - Fixed position, starting right below header */}
            <aside className="hidden lg:block fixed left-0 top-16 sm:top-20 w-64 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] overflow-y-auto border-r border-gray-200 bg-gray-50 z-30">
                <div className="p-5">
                    <Link href="/docs" className="flex items-center gap-3 mb-6 no-underline!">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-blue-500/20">
                            📚
                        </div>
                        <div>
                            <h2 className="text-base font-black text-gray-900 tracking-tight">Docs</h2>
                            <p className="text-xs text-gray-500 font-medium">Coach Portaal</p>
                        </div>
                    </Link>

                    <nav className="space-y-6">
                        {docsCategories.map((category) => (
                            <div key={category.id}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-base">{category.icon}</span>
                                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider">
                                        {category.title}
                                    </h3>
                                </div>
                                <ul className="space-y-0.5">
                                    {category.docs.map((doc) => (
                                        <li key={doc.slug}>
                                            <Link
                                                href={`/docs/${doc.slug}`}
                                                className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all no-underline!"
                                            >
                                                {doc.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main content - offset by sidebar width on large screens */}
            <div className="lg:ml-64">
                {children}
            </div>
        </>
    );
}

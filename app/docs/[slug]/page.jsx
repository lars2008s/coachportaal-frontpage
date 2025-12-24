import { notFound } from 'next/navigation';
import Link from 'next/link';
import { docsCategories, docsContent, getDocNavigation, getAllDocs } from 'data/docs';


// Generate static params for all docs
export async function generateStaticParams() {
    return getAllDocs().map((doc) => ({
        slug: doc.slug,
    }));
}

// Generate metadata for each doc
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const doc = docsContent[slug];

    if (!doc) {
        return { title: 'Niet gevonden | Coach Portaal' };
    }

    return {
        title: `${doc.title} | Documentatie | Coach Portaal`,
        description: doc.description,
        openGraph: {
            title: `${doc.title} | Documentatie | Coach Portaal`,
            description: doc.description,
            url: `https://coachportaal.be/docs/${slug}`,
            siteName: 'Coach Portaal',
            locale: 'nl_BE',
            type: 'article',
        },
    };
}

// Render markdown-like content
function renderContent(content) {
    // Convert markdown-style formatting to HTML
    let html = content
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
        // Code blocks
        .replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            return `<pre class="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto my-4 text-sm font-mono"><code>${code.trim()}</code></pre>`;
        })
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-gray-100 text-gray-900 rounded text-sm font-mono">$1</code>')
        // Convert numbered lists
        .replace(/^(\d+)\.\s(.+)$/gm, '<li class="ml-4">$2</li>')
        // Convert bullet points
        .replace(/^[-•]\s(.+)$/gm, '<li class="ml-4">$1</li>')
        // Convert tables
        .replace(/\|(.+)\|/g, (match, content) => {
            const cells = content.split('|').map(cell => cell.trim());
            if (cells.every(cell => cell.match(/^-+$/))) {
                return ''; // Skip separator rows
            }
            const isHeader = content.includes('---');
            const cellTag = isHeader ? 'th' : 'td';
            return `<tr>${cells.map(cell => `<${cellTag} class="px-4 py-2 border-b border-gray-100">${cell}</${cellTag}>`).join('')}</tr>`;
        })
        // Line breaks
        .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
        .replace(/\n/g, '<br/>');

    return html;
}

export default async function DocDetailPage({ params }) {
    const { slug } = await params;
    const doc = docsContent[slug];

    if (!doc) {
        notFound();
    }

    const navigation = getDocNavigation(slug);

    // Find which category this doc belongs to
    const category = docsCategories.find(cat =>
        cat.docs.some(d => d.slug === slug)
    );

    return (
        <div className="max-w-4xl py-12 px-8">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8">
                <Link href="/docs" className="text-gray-500 hover:text-gray-900 font-medium no-underline!">
                    Docs
                </Link>
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {category && (
                    <>
                        <span className="text-gray-500 font-medium">{category.title}</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </>
                )}
                <span className="text-gray-900 font-semibold">{doc.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    {category && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                            {category.title}
                        </span>
                    )}
                    {doc.readTime && (
                        <span className="text-gray-500 text-sm font-medium">
                            ⏱️ {doc.readTime} leestijd
                        </span>
                    )}
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter mb-4 leading-[0.95]">
                    {doc.title}
                </h1>
                <p className="text-xl text-gray-500 font-medium leading-relaxed">
                    {doc.description}
                </p>
            </header>

            {/* Table of Contents */}
            {doc.sections.length > 3 && (
                <div className="mb-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-wider mb-4">
                        In deze gids
                    </h2>
                    <ul className="space-y-2">
                        {doc.sections.map((section, index) => (
                            <li key={index}>
                                <a
                                    href={`#section-${index}`}
                                    className="text-sm font-medium text-gray-600 hover:text-blue-600 no-underline! flex items-center gap-2"
                                >
                                    <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-xs flex items-center justify-center font-bold">
                                        {index + 1}
                                    </span>
                                    {section.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Content Sections */}
            <div className="space-y-12">
                {doc.sections.map((section, index) => (
                    <section key={index} id={`section-${index}`} className="scroll-mt-24">
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 text-sm flex items-center justify-center font-bold shrink-0">
                                {index + 1}
                            </span>
                            {section.title}
                        </h2>

                        {section.type === 'checklist' ? (
                            <ul className="space-y-3">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                                        <span className="w-6 h-6 rounded-lg bg-green-100 text-green-600 text-sm flex items-center justify-center shrink-0 mt-0.5">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div
                                className="prose prose-gray max-w-none text-gray-600 font-medium leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: renderContent(section.content) }}
                            />
                        )}
                    </section>
                ))}
            </div>

            {/* Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    {navigation.prev ? (
                        <Link
                            href={`/docs/${navigation.prev.slug}`}
                            className="flex-1 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all no-underline! group"
                        >
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mb-2">
                                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Vorige
                            </div>
                            <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                                {navigation.prev.title}
                            </div>
                        </Link>
                    ) : (
                        <div className="flex-1" />
                    )}

                    {navigation.next ? (
                        <Link
                            href={`/docs/${navigation.next.slug}`}
                            className="flex-1 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all no-underline! text-right group"
                        >
                            <div className="flex items-center justify-end gap-2 text-sm text-gray-500 font-medium mb-2">
                                Volgende
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                                {navigation.next.title}
                            </div>
                        </Link>
                    ) : (
                        <div className="flex-1" />
                    )}
                </div>
            </div>

            {/* Feedback */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Was deze pagina nuttig?</h3>
                <p className="text-gray-500 text-sm font-medium mb-4">
                    Help ons de documentatie te verbeteren.
                </p>
                <div className="flex justify-center gap-3">
                    <button className="px-6 py-2 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 hover:border-green-300 transition-all">
                        👍 Ja
                    </button>
                    <button className="px-6 py-2 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 hover:border-red-300 transition-all">
                        👎 Nee
                    </button>
                </div>
            </div>
        </div>
    );
}

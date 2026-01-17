import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import Script from 'next/script';

export const metadata = {
    title: {
        template: '%s | Coach Portaal',
        default: 'Coach Portaal | De Slimste Software voor Atletiek Spellen & Trainingen'
    },
    description: 'Ontwikkel effectieve atletiek trainingen met honderden atletiek oefeningen, spelvormen en sprint oefeningen. Perfecte trainingsschema maker voor jeugdatletiek training en atletiekvereniging beheer. Gratis toegang tot atletiek spellen, trainingsplanning, ledenbeheer en diploma generator.',
    keywords: [
        'atletiek trainingen',
        'atletiek oefeningen',
        'atletiek spellen',
        'jeugdatletiek training',
        'trainingsschema maker',
        'atletiek spelvormen',
        'sprint oefeningen',
        'atletiekvereniging beheer',
        'atletiek trainingen vzw',
        'coach portaal',
        'trainingsplanning atletiek',
        'ledenbeheer atletiek club',
        'atletiek diploma generator',
        'club records atletiek',
        'warming-up spelletjes atletiek',
        'techniek training atletiek'
    ],
    openGraph: {
        title: 'Coach Portaal | Honderden Atletiek Spellen & Training Software',
        description: 'Bespaar tijd met de administratie van je atletiek trainingen en focus op wat echt telt: je atleten passie voor sport bijbrengen. Toegang tot honderden atletiek spellen, oefeningen en trainingsschema maker.',
        url: 'https://atletiektrainer.be',
        siteName: 'Coach Portaal',
        locale: 'nl_BE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Coach Portaal | Honderden Atletiek Spellen & Training Software',
        description: 'Bespaar tijd met de administratie van je atletiek trainingen en focus op wat echt telt. Toegang tot honderden atletiek spellen, sprint oefeningen en trainingsschema maker.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://atletiektrainer.be',
        languages: {
            'nl-BE': 'https://atletiektrainer.be',
            'nl-NL': 'https://atletiektrainer.be/nl',
        }
    },
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/icon.png', type: 'image/png' },
        ],
        shortcut: '/favicon.svg',
        apple: '/apple-icon.png',
    }
};

export default function RootLayout({ children }) {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Coach Portaal',
        url: 'https://atletiektrainer.be',
        logo: 'https://atletiektrainer.be/logo.png',
        description: 'De ultieme digitale assistent voor atletiekcoaches en clubs. Beheer trainingen, leden, clubrecords en atletiek spellen.',
        sameAs: [],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'info@atletiektrainer.be',
            availableLanguage: ['Dutch', 'English']
        },
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'BE',
            addressRegion: 'Belgium'
        }
    };

    const softwareApplicationSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Coach Portaal',
        applicationCategory: 'SportsApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '150',
            bestRating: '5',
            worstRating: '1'
        },
        description: 'Coach Portaal is de complete software voor atletiekclubs. Beheer trainingen, toegang tot honderden atletiek spellen, sprint oefeningen, ledenbeheer, diploma generator en clubrecord tracking. De perfecte trainingsschema maker voor jeugdatletiek training en atletiekvereniging beheer.',
        keywords: 'atletiek trainingen, atletiek oefeningen, atletiek spelvormen, sprint oefeningen, jeugdatletiek training, trainingsschema maker, atletiekvereniging beheer, atletiek spellen',
        author: {
            '@type': 'Organization',
            name: 'Coach Portaal'
        },
        featureList: [
            'Atletiek trainingen beheer',
            'Trainingsschema maker',
            'Honderden atletiek oefeningen',
            'Sprint oefeningen bibliotheek',
            'Jeugdatletiek training programma\'s',
            'Ledenbeheer atletiekvereniging',
            'Atletiek spellen en spelvormen',
            'Diploma generator',
            'Club records tracking',
            'AI training assistent'
        ]
    };

    const webSiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Coach Portaal',
        url: 'https://atletiektrainer.be',
        description: 'De slimste software voor atletiek spellen en trainingen. Trainingsschema maker voor jeugdatletiek training en atletiekvereniging beheer.',
        potentialAction: {
            '@type': 'SearchAction',
            target: 'https://atletiektrainer.be/zoeken?q={search_term_string}',
            'query-input': 'required name=search_term_string'
        }
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://atletiektrainer.be'
            }
        ]
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Wat zijn atletiek trainingen en hoe stel je ze op?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Atletiek trainingen zijn gestructureerde sessies die gericht zijn op het ontwikkelen van atletiekvaardigheden zoals rennen, springen en werpen. Een effectieve training bevat een warming-up, techniekonderdelen, specifieke atletiek oefeningen en afsluitende spelvormen. Coach Portaal helpt je met de trainingsschema maker om snel professionele trainingen samen te stellen.'
                }
            },
            {
                '@type': 'Question',
                name: 'Welke atletiek oefeningen zijn geschikt voor pupillen?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Voor kangoeroes, benjamins en pupillen (6-11 jaar) zijn vooral spelvormen en basisoefeningen geschikt die gericht zijn op plezier en motoriek. Denk aan tag-spellen, estafettes, simpele hordenoefeningen en balwerpspellen. Coach Portaal heeft een uitgebreide bibliotheek met jeugdatletiek training specifiek voor deze groepen.'
                }
            },
            {
                '@type': 'Question',
                name: 'Hoe vind ik geschikte sprint oefeningen voor mijn training?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Coach Portaal biedt een filterbare bibliotheek met honderden atletiek oefeningen, waaronder specifieke sprint oefeningen. Je kunt filteren op leeftijdsgroep (kangoeroes, benjamins, pupillen, miniemen, cadetten), trainingsdoel (warming-up, techniek, kracht) en atletiekonderdeel. Zoek direct de juiste sprint oefeningen voor jouw training.'
                }
            },
            {
                '@type': 'Question',
                name: 'Wat voor atletiek spelvormen zijn er voor warming-up?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Voor warming-up zijn er diverse atletiek spelvormen zoals tag-spellen (tikkertje varianten), relay races, coordinatie-oefeningen en loopspelletjes. Deze spelvormen zorgen voor een leuke en effectieve opwarming voordat de technische training met specifieke atletiek oefeningen begint.'
                }
            },
            {
                '@type': 'Question',
                name: 'Hoe helpt de trainingsschema maker bij jeugdatletiek training?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'De trainingsschema maker in Coach Portaal heeft een AI-assistent die jeugdatletiek trainingen kan samenstellen. Beschrijf wat je wilt trainen en ontvang direct een complete training met warming-up, techniekonderdelen en atletiek spellen. Ideaal voor pupillen en jongere atleten.'
                }
            },
            {
                '@type': 'Question',
                name: 'Is Coach Portaal geschikt voor atletiekvereniging beheer?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, Coach Portaal is speciaal ontwikkeld voor atletiekvereniging beheer. De software omvat ledenbeheer, trainingsplanning, atletiek spellen bibliotheek, diploma generator en clubrecord tracking. Het is de complete oplossing voor atletiekclubs die hun administratie willen stroomlijnen.'
                }
            }
        ]
    };

    const schemas = [
        organizationSchema,
        softwareApplicationSchema,
        webSiteSchema,
        breadcrumbSchema,
        faqSchema
    ];

    return (
        <html lang="nl" className="scroll-smooth">
            <head>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-M143XKST2T"
                    strategy="afterInteractive"
                />
                <Script id="google-tag" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-M143XKST2T');
                    `}
                </Script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
                />
            </head>
            <body className="antialiased text-gray-900 bg-slate-50" suppressHydrationWarning>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

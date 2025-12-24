import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Coach Portaal',
        default: 'Coach Portaal | De Slimste Software voor Atletiek Spellen & Trainingen'
    },
    description: 'De ultieme digitale assistent voor atletiekcoaches en clubs. Toegang tot honderden atletiek spellen, trainingsbibliotheek, ledenbeheer en diploma generator. De beste software voor atletiek trainingen vzw.',
    keywords: ['atletiek spellen', 'atletiek', 'atletiek trainingen vzw', 'atletiek oefeningen', 'atletiek spelvormen', 'coach portaal', 'trainingsplanning atletiek', 'ledenbeheer atletiek club', 'atletiek diploma generator', 'club records atletiek', 'warming-up spelletjes atletiek', 'techniek training atletiek'],
    openGraph: {
        title: 'Coach Portaal | Honderden Atletiek Spellen & Training Software',
        description: 'Bespaar tijd met de administratie van je atletiek trainingen en focus op wat echt telt: je atleten passie voor sport bijbrengen. Toegang tot honderden atletiek spellen.',
        url: 'https://coachportaal.be',
        siteName: 'Coach Portaal',
        locale: 'nl_BE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Coach Portaal | Honderden Atletiek Spellen & Training Software',
        description: 'Bespaar tijd met de administratie van je atletiek trainingen en focus op wat echt telt. Toegang tot honderden atletiek spellen.',
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: 'https://coachportaal.be',
    }
};

export default function RootLayout({ children }) {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Coach Portaal',
        url: 'https://coachportaal.be',
        description: 'De ultieme digitale assistent voor atletiekcoaches en clubs. Beheer trainingen, leden, clubrecords en atletiek spellen.',
        sameAs: [],
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
            ratingCount: '150'
        },
        description: 'Coach Portaal is de complete software voor atletiekclubs. Beheer trainingen, toegang tot honderden atletiek spellen, ledenbeheer, diploma generator en clubrecord tracking.',
        keywords: 'atletiek spellen, atletiek trainingen, coach portaal, atletiek oefeningen',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Wat zijn atletiek spellen?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Atletiek spellen zijn spelvormen en oefeningen die gericht zijn op het ontwikkelen van atletiekvaardigheden zoals rennen, springen en werpen. Deze spellen maken trainingen leuker en effectiever voor alle leeftijdsgroepen, van pupillen tot senioren.'
                }
            },
            {
                '@type': 'Question',
                name: 'Welke atletiek spellen zijn geschikt voor pupillen?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Voor pupillen (6-12 jaar) zijn vooral spelvormen geschikt die gericht zijn op plezier en basis motoriek. Denk aan tag-spellen, estafettes, simpele hordenoefeningen en balwerpspellen. Coach Portaal heeft een uitgebreide bibliotheek met spellen specifiek voor pupillen.'
                }
            },
            {
                '@type': 'Question',
                name: 'Hoe vind ik geschikte atletiek oefeningen voor mijn training?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Coach Portaal biedt een filterbare bibliotheek met honderden atletiek spellen en oefeningen. Je kunt filteren op leeftijdsgroep (pupillen, kadetten, junioren), trainingsdoel (warming-up, techniek, kracht) en atletiekonderdeel. Zoek direct de juiste oefening voor jouw training.'
                }
            },
            {
                '@type': 'Question',
                name: 'Kan ik zelf atletiek spellen toevoegen aan Coach Portaal?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, in Coach Portaal kun je je eigen atletiek spellen en oefeningen toevoegen aan de bibliotheek. Bouw zo je eigen verzameling op met spellen die werken voor jouw groep. Je kunt ook bestaande oefeningen kopiëren en aanpassen.'
                }
            },
            {
                '@type': 'Question',
                name: 'Wat voor atletiek spelvormen zijn er voor warming-up?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Voor warming-up zijn er diverse atletiek spelvormen zoals tag-spellen (tikkertje varianten), relay races, coordinatie-oefeningen en loopspelletjes. Deze spelvormen zorgen voor een leuke en effectieve opwarming voordat de technische training begint.'
                }
            },
            {
                '@type': 'Question',
                name: 'Hoe helpt Coach Portaal bij het maken van trainingen?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Coach Portaal heeft een AI-assistent die trainingen voor je kan samenstellen. Beschrijf wat je wilt trainen en ontvang direct een complete training met warming-up, techniekonderdelen en atletiek spellen. Je kunt de training naar wens aanpassen en opslaan voor later gebruik.'
                }
            }
        ]
    };

    const schemas = [organizationSchema, softwareApplicationSchema, faqSchema];

    return (
        <html lang="nl" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
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

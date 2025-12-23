import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Coach Portaal',
        default: 'Coach Portaal | De Slimste Software voor Atletiek Trainingen & Clubs'
    },
    description: 'De ultieme digitale assistent voor atletiekcoaches en clubs. Beheer trainingen, leden, clubrecords en zomerkampen. De beste software voor atletiek trainingen vzw en integratie met atletiek.nu.',
    keywords: ['atletiek', 'atletiek trainingen vzw', 'software atletiek.nu', 'atletiek spellen', 'coach portaal', 'trainingsplanning atletiek', 'ledenbeheer atletiek club', 'atletiek diploma generator', 'club records atletiek'],
    openGraph: {
        title: 'Coach Portaal | De Slimste Software voor Atletiek Trainingen',
        description: 'Bespaar tijd met de administratie van je atletiek trainingen en focus op wat echt telt: je atleten passie voor sport bijbrengen.',
        url: 'https://coachportaal.be',
        siteName: 'Coach Portaal',
        locale: 'nl_BE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Coach Portaal | De Slimste Software voor Atletiek',
        description: 'Bespaar tijd met de administratie van je atletiek trainingen en focus op wat echt telt.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="nl" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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

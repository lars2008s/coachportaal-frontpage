import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Coach Portaal',
        default: 'Coach Portaal | De Slimme Software voor Atletiek Trainingen & Clubs'
    },
    description: 'De ultieme digitale assistent voor atletiekcoaches en clubs. Beheer trainingen, leden, clubrecords en zomerkampen. De beste software voor atletiek trainingen vzw en integratie met atletiek.nu.',
    keywords: ['atletiek', 'atletiek trainingen vzw', 'software atletiek.nu', 'atletiek spellen', 'coach portaal', 'trainingsplanning atletiek', 'ledenbeheer atletiek club', 'atletiek diploma generator', 'club records atletiek']
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-gray-900 bg-slate-50" suppressHydrationWarning>
                <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}

import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Blogs', href: '/blogs' },
    { linkText: 'Docs', href: '/docs' },
    { linkText: 'Info', href: '/info' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/" className="flex items-center gap-3 no-underline!">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/20 flex items-center justify-center text-white font-bold text-lg">
                    CP
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">Coach Portaal</span>
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 ml-4!">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors no-underline!">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex items-center gap-4 ml-auto">
                <Link
                    href="https://dashboard.coachportaal.be"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors no-underline!"
                >
                    Inloggen
                </Link>
                <Link
                    href="https://dashboard.coachportaal.be/sign-up"
                    className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-all shadow-sm hover:shadow-md no-underline!"
                >
                    Gratis starten
                </Link>
            </div>
        </nav>
    );
}

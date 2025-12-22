export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16 border-t border-gray-100 mt-20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-gray-900 flex items-center justify-center text-white font-bold text-sm">
                        CP
                    </div>
                    <span className="font-bold text-lg text-gray-900 tracking-tight">Coach Portaal</span>
                </div>

                <div className="text-sm text-gray-500 font-medium whitespace-nowrap!">
                    © {new Date().getFullYear()} Coach Portaal. Alle rechten voorbehouden.
                </div>

                <div className="flex gap-8 text-sm font-bold text-gray-400">
                    <Link href="/info" className="hover:text-gray-900 transition-colors no-underline!">Over ons</Link>
                    <Link href="/blogs" className="hover:text-gray-900 transition-colors no-underline!">Blog</Link>
                    <Link href="/docs" className="hover:text-gray-900 transition-colors no-underline!">Docs</Link>
                    <a href="mailto:support@coachportaal.be" className="hover:text-gray-900 transition-colors no-underline!">Support</a>
                </div>
            </div>
        </footer>
    );
}

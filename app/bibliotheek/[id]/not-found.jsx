import Link from 'next/link';
import { BookOpen, ArrowLeft, Search, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
            <div className="text-center max-w-lg">
                {/* Icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <BookOpen className="w-12 h-12 text-gray-500" />
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Training niet gevonden
                </h1>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-8">
                    Deze training bestaat niet of is niet publiek beschikbaar.
                    Misschien is de training verwijderd of privé gezet.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/bibliotheek"
                        className="btn btn-primary no-underline"
                    >
                        <Search className="w-5 h-5" />
                        Zoek in Bibliotheek
                    </Link>
                    <Link
                        href="/"
                        className="btn btn-secondary no-underline"
                    >
                        <Home className="w-5 h-5" />
                        Naar Homepage
                    </Link>
                </div>

                {/* Back link */}
                <Link
                    href="/bibliotheek"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mt-8 text-sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Terug naar bibliotheek
                </Link>
            </div>
        </div>
    );
}

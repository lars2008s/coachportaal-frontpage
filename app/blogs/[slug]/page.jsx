'use client';

import { useParams } from 'next/navigation';
import { motion } from "framer-motion";
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Simplified data for the demonstration. In a real app, this would be in a data file or fetched.
const blogPosts = [
    {
        slug: "administratie-omzetten-in-coachtijd",
        title: "Houd op met papierwerk - Win 10+ uur week terug",
        excerpt: "Ontdek hoe coaches administratieve taken automatiseren en meer tijd kunnen besteden aan wat echt telt: atleten ontwikkelen.",
        date: "11 Dec 2025",
        category: "Coaching",
        content: `
            <p class="text-xl text-gray-600 mb-8 font-medium">Bent u het ook beu om meer tijd met spreadsheets door te brengen dan met daadwerkelijk coachen? Vindt u zichzelf verdrinken in een zee van Excel-bladen, WhatsApp-berichten en papieren formulieren alleen om uw team georganiseerd te houden? U bent niet de enige.</p>
            <h2 class="text-3xl font-black text-gray-900 mb-6 tracking-tight">De Coach Pijnpunten</h2>
            <p class="mb-6 text-gray-600 leading-relaxed">In het hele land verliezen toegewijde coaches talloze uren aan administratieve taken. Tijd die besteed zou moeten worden aan het ontwikkelen van atleten, het plannen van trainingssessies en het inspireren van teams.</p>
            <ul class="space-y-4 mb-10">
                <li class="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                    <span class="text-gray-600 font-medium">Ledenbeheer chaos: Het bijhouden van honderden atleten in spreadsheets.</span>
                </li>
                <li class="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                    <span class="text-gray-600 font-medium">Trainingsplanningshoofdpijn: Handmatig schema&apos;s maken en distribueren.</span>
                </li>
                <li class="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                    <span class="text-gray-600 font-medium">Wedstrijd tracking: Resultaten registreren en diploma&apos;s met de hand schrijven.</span>
                </li>
            </ul>
            <h2 class="text-3xl font-black text-gray-900 mb-6 tracking-tight">De oplossing</h2>
            <p class="mb-6 text-gray-600 leading-relaxed">Maak kennis met het Coach Portaal - een revolutionair platform dat de manier waarop coaches hun teams beheren transformeert. Met één klik importeer je leden, genereer je trainingen met AI en volg je prestaties op de voet.</p>
        `
    },
    {
        slug: "val-transformatie-2025",
        title: "Transformatie van de Jeugdcompetitie 2025-2028",
        excerpt: "Een diepgaande analyse van de hervormingen binnen de Vlaamse Atletiekliga voor de categorieën Pupillen en Miniemen.",
        date: "1 Dec 2025",
        category: "Beleid",
        content: `
            <p class="text-xl text-gray-600 mb-8 font-medium">De Vlaamse Atletiekliga (VAL) bevindt zich op een cruciaal kantelpunt. Vanaf 1 november 2025 wordt een omvangrijk pakket aan reglementswijzigingen van kracht dat de competitiecultuur voor de categorieën Pupillen en Miniemen fundamenteel hertekent.</p>
            <h2 class="text-3xl font-black text-gray-900 mb-6 tracking-tight">LTAD-Model</h2>
             <p class="mb-6 text-gray-600 leading-relaxed">De theoretische onderbouw van de nieuwe reglementen is het Long Term Athlete Development model. Dit raamwerk verdeelt de sportieve carrière van een kind in verschillende fasen, waarbij de focus bij pupillen en miniemen verschuift naar &apos;Learning to Train&apos;.</p>
             <h2 class="text-2xl font-black text-gray-900 mb-4 tracking-tight">De 3-uurs norm</h2>
             <p class="mb-6 text-gray-600 leading-relaxed">In reactie op veranderende maatschappelijke patronen, introduceert de VAL de richtlijn dat een individueel wedstrijdprogramma bij voorkeur binnen maximaal 3 uur moet worden afgewerkt.</p>
        `
    }
];

export default function BlogPostPage() {
    const params = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = blogPosts.find(p => p.slug === params.slug);
        setPost(foundPost);
    }, [params.slug]);

    if (!post) return <div className="py-24 text-center">Loading...</div>;

    return (
        <article className="max-w-3xl mx-auto py-12 px-4">
            <Link href="/blogs" className="inline-flex items-center text-sm font-black text-blue-600 uppercase tracking-widest no-underline! mb-8 group">
                <svg className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Terug naar overzicht
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest">
                        {post.category}
                    </span>
                    <span className="text-sm font-bold text-gray-400">{post.date}</span>
                </div>
                <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tighter mb-12 leading-[0.95]">
                    {post.title}
                </h1>

                <div
                    className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </motion.div>

            <div className="mt-24 p-12 rounded-[3rem] bg-gray-50 border border-gray-100 text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">Interessant artikel?</h3>
                <p className="text-gray-500 font-medium mb-8">
                    Deel het met je collega-coaches of ontdek hoe Coach Portaal je kan helpen bij deze veranderingen.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        href="https://dashboard.coachportaal.be/sign-up"
                        className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-black text-white shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all no-underline!"
                    >
                        Probeer Coach Portaal gratis
                    </Link>
                </div>
            </div>
        </article>
    );
}

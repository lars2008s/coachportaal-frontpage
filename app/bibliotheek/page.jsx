import { fetchQuery } from "convex/nextjs";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import BibliotheekPageContent from './BibliotheekPageContent';

// SEO Metadata
export const metadata = {
    title: 'Gratis Atletiek Oefeningen & Trainingen Bibliotheek',
    description: 'Ontdek onze publieke bibliotheek met professionele atletiektrainingen. Gratis te gebruiken voor coaches, trainers en atletiekverenigingen. Van warming-up tot cooling-down.',
    keywords: [
        'atletiek trainingen',
        'gratis trainingen',
        'atletiek oefeningen',
        'trainingsbibliotheek',
        'atletiek spelvormen',
        'warming-up oefeningen',
        'cooling-down atletiek'
    ],
    openGraph: {
        title: 'Gratis Atletiek Trainingen & Oefeningen | Coach Portaal Bibliotheek',
        description: 'Publieke bibliotheek met professionele atletiektrainingen. Gratis beschikbaar voor alle coaches.',
        url: 'https://coachportaal.be/bibliotheek',
        siteName: 'Coach Portaal',
        locale: 'nl_BE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Gratis Atletiek Trainingen Bibliotheek | Coach Portaal',
        description: 'Ontdek honderden gratis atletiektrainingen en oefeningen.',
    },
    alternates: {
        canonical: 'https://coachportaal.be/bibliotheek',
    },
};

// JSON-LD structured data for CollectionPage
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Publieke Trainingsbibliotheek',
    description: 'Gratis toegang tot professionele atletiektrainingen en oefeningen voor alle leeftijdsgroepen.',
    url: 'https://coachportaal.be/bibliotheek',
    mainEntity: {
        '@type': 'ItemList',
        name: 'Atletiek Trainingen',
        description: 'Verzameling publieke atletiektrainingen',
    },
    publisher: {
        '@type': 'Organization',
        name: 'Coach Portaal',
        url: 'https://coachportaal.be',
    },
};

export default async function BibliotheekPage() {
    // Fetch trainings from Convex
    const trainings = await fetchQuery(api.trainings.getPublicTrainingsForWebsite, {
        limit: 50
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BibliotheekPageContent trainings={trainings} />
        </>
    );
}

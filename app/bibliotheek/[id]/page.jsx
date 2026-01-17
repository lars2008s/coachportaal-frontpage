import { fetchQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";
import { notFound } from 'next/navigation';
import TrainingDetailContent from './TrainingDetailContent';

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
    const resolvedParams = await params;

    const training = await fetchQuery(api.trainings.getPublicTrainingById, {
        id: resolvedParams.id
    });

    if (!training) {
        return {
            title: 'Training niet gevonden',
            description: 'Deze training bestaat niet of is niet publiek beschikbaar.',
        };
    }

    return {
        title: `${training.title} - Coach Portaal`,
        description: training.description?.slice(0, 160) || `${training.title} - Bekijk deze atletiektraining op Coach Portaal.`,
        keywords: [
            training.category,
            training.ageGroup,
            'atletiek training',
            'oefeningen',
            'trainingsschema',
            ...(training.tags || [])
        ],
        openGraph: {
            title: `${training.title} - Coach Portaal`,
            description: training.description?.slice(0, 160),
            type: 'article',
            url: `https://atletiektrainer.be/bibliotheek/${training._id}`,
            siteName: 'Coach Portaal',
            locale: 'nl_BE',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${training.title} - Coach Portaal`,
            description: training.description?.slice(0, 160),
        },
        alternates: {
            canonical: `https://atletiektrainer.be/bibliotheek/${training._id}`,
        },
    };
}

export default async function TrainingDetailPage({ params }) {
    const resolvedParams = await params;

    const training = await fetchQuery(api.trainings.getPublicTrainingById, {
        id: resolvedParams.id
    });

    if (!training) {
        notFound();
    }

    // JSON-LD structured data for HowTo (training as instructions)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: training.title,
        description: training.description,
        totalTime: `PT${training.duration}M`,
        step: [
            ...(training.warmup || []).map((block, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: block.title,
                text: block.content,
                duration: `PT${block.duration}M`,
            })),
            ...(training.core || []).map((block, i) => ({
                '@type': 'HowToStep',
                position: (training.warmup?.length || 0) + i + 1,
                name: block.title,
                text: block.content,
                duration: `PT${block.duration}M`,
            })),
            ...(training.cooldown || []).map((block, i) => ({
                '@type': 'HowToStep',
                position: (training.warmup?.length || 0) + (training.core?.length || 0) + i + 1,
                name: block.title,
                text: block.content,
                duration: `PT${block.duration}M`,
            })),
        ],
        author: {
            '@type': 'Organization',
            name: 'Coach Portaal',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Coach Portaal',
            url: 'https://atletiektrainer.be',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <TrainingDetailContent training={training} />
        </>
    );
}

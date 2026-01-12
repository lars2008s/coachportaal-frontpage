import { blogPosts } from '../data/blogs';
import { getAllDocs } from '../data/docs';
import { fetchQuery } from "convex/nextjs";
import { api } from "../convex/_generated/api";

export default async function sitemap() {
    const baseUrl = 'https://atletiektrainer.be';

    // Generate blog post URLs dynamically
    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    // Generate documentation URLs dynamically
    const docUrls = getAllDocs().map((doc) => ({
        url: `${baseUrl}/docs/${doc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Generate training URLs dynamically from Convex
    let trainingUrls = [];
    try {
        const trainings = await fetchQuery(api.trainings.getPublicTrainingsForWebsite, {});
        trainingUrls = trainings.map((training) => ({
            url: `${baseUrl}/bibliotheek/${training._id}`,
            lastModified: new Date(training._creationTime || Date.now()),
            changeFrequency: 'weekly',
            priority: 0.7,
        }));
    } catch (error) {
        console.error('Failed to fetch trainings for sitemap:', error);
    }

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/oefeningen`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/bibliotheek`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...blogUrls,
        ...docUrls,
        ...trainingUrls,
    ];
}

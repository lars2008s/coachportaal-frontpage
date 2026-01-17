import { notFound } from 'next/navigation';
import BlogPostContent from './BlogPostContent';
import { getBlogPost, getRecentPosts, blogPosts } from '../../../data/blogs';

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = getBlogPost(resolvedParams.slug);

    if (!post) {
        return {
            title: 'Blog niet gevonden',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        keywords: [post.category, 'atletiek', 'coaching', 'training', 'Coach Portaal'],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            url: `https://atletiektrainer.be/blogs/${post.slug}`,
            siteName: 'Coach Portaal',
            locale: 'nl_BE',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        },
        alternates: {
            canonical: `https://atletiektrainer.be/blogs/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const resolvedParams = await params;
    const post = getBlogPost(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    // Get related posts (excluding current post)
    const relatedPosts = getRecentPosts(4)
        .filter(p => p.slug !== resolvedParams.slug)
        .slice(0, 3);

    // JSON-LD structured data for BlogPosting
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        author: {
            '@type': 'Organization',
            name: 'Coach Portaal',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Coach Portaal',
            url: 'https://atletiektrainer.be',
        },
        datePublished: post.date,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://atletiektrainer.be/blogs/${post.slug}`,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogPostContent post={post} relatedPosts={relatedPosts} />
        </>
    );
}


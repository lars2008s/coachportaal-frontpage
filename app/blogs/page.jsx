import BlogsPageContent from './BlogsPageContent';

export const metadata = {
    title: 'Blog',
    description: 'Tips, tutorials en updates om je coaching naar een hoger niveau te tillen. Ontdek inzichten voor de moderne atletiekcoach.',
    keywords: ['atletiek blog', 'coaching tips', 'trainers tips', 'atletiek training', 'Coach Portaal blog'],
    openGraph: {
        title: 'Blog | Coach Portaal',
        description: 'Tips, tutorials en updates om je coaching naar een hoger niveau te tillen.',
        url: 'https://atletiektrainer.be/blogs',
        siteName: 'Coach Portaal',
        locale: 'nl_BE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog | Coach Portaal',
        description: 'Tips, tutorials en updates om je coaching naar een hoger niveau te tillen.',
    },
    alternates: {
        canonical: 'https://atletiektrainer.be/blogs',
    },
};

export default function BlogsPage() {
    return <BlogsPageContent />;
}

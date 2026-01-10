export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
            {
                userAgent: 'GPTBot',
                disallow: '/',
            },
        ],
        sitemap: 'https://atletiektrainer.be/sitemap.xml',
        host: 'https://atletiektrainer.be',
    };
}

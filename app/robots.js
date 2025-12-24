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
        sitemap: 'https://coachportaal.be/sitemap.xml',
        host: 'https://coachportaal.be',
    };
}

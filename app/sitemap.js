export default function sitemap() {
    return [
        {
            url: 'https://coachportaal.be',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://coachportaal.be/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]
}

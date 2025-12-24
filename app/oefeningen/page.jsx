import OefeningenPageContent from './OefeningenPageContent';

export const metadata = {
    title: 'Atletiek Oefeningen & Trainingsschema\'s | Coach Portaal',
    description: 'Ontdek honderden atletiek oefeningen en trainingsschema\'s. Warming-up oefeningen, sprint trainingen, spring- en werpoefeningen, en atletiek spelvormen voor alle leeftijdsgroepen.',
    keywords: [
        'atletiek oefeningen',
        'atletiek trainingen',
        'warming-up oefeningen atletiek',
        'sprint oefeningen',
        'atletiek spelvormen',
        'trainingsschema atletiek',
        'atletiek training voor pupillen',
        'horden oefeningen',
        'verspringen oefeningen',
        'kogelstoten oefeningen',
        'atletiek warming-up spelletjes',
        'techniek training atletiek'
    ],
    openGraph: {
        title: 'Atletiek Oefeningen & Trainingsschema\'s | Coach Portaal',
        description: 'Honderden atletiek oefeningen en trainingsschema\'s voor warming-up, sprint, springen, werpen en spelvormen. Geschikt voor alle leeftijdsgroepen.',
        url: 'https://coachportaal.be/oefeningen',
        siteName: 'Coach Portaal',
        locale: 'nl_BE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Atletiek Oefeningen & Trainingsschema\'s | Coach Portaal',
        description: 'Honderden atletiek oefeningen en trainingsschema\'s voor warming-up, sprint, springen, werpen en spelvormen.',
    },
    alternates: {
        canonical: 'https://coachportaal.be/oefeningen',
    },
};

export default function OefeningenPage() {
    return <OefeningenPageContent />;
}

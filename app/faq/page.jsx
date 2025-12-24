import FaqPageContent from './FaqPageContent';

export const metadata = {
    title: "Veelgestelde Vragen | Atletiek Trainingen, Oefeningen & Trainingsschema's",
    description: "Antwoorden op de meest gestelde vragen over atletiek trainingen, oefeningen voor pupillen, jeugdatletiek, atletiek spellen en trainingsschema's. Vind alles wat je moet weten.",
    keywords: [
        'atletiek trainingen',
        'atletiek oefeningen',
        'jeugdatletiek',
        'atletiek spellen',
        'trainingsschema atletiek',
        'atletiek warming-up',
        'pupillen atletiek',
        'atletiek trainingsschema',
        'sprinttraining oefeningen',
        'atletiek spelvormen',
        'techniek training atletiek',
        'krachttraining atletiek'
    ],
    openGraph: {
        title: 'FAQ | Atletiek Trainingen & Oefeningen',
        description: 'Vind antwoorden op al je vragen over atletiek trainingen, oefeningen en spellen voor pupillen en jeugdatletiek.',
        url: 'https://coachportaal.be/faq',
        siteName: 'Coach Portaal',
        locale: 'nl_BE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ | Atletiek Trainingen & Oefeningen',
        description: 'Vind antwoorden op al je vragen over atletiek trainingen, oefeningen en spellen.',
    },
    alternates: {
        canonical: 'https://coachportaal.be/faq',
    },
};

export default function FaqPage() {
    return <FaqPageContent />;
}

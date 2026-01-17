'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
    const lastUpdated = "27 december 2024";

    const sections = [
        {
            id: "intro",
            title: "1. Inleiding",
            content: `Coach Portaal ("wij", "ons", "onze") respecteert de privacy van alle gebruikers van onze website en diensten. Wij zijn toegewijd aan het beschermen van uw persoonlijke gegevens en het naleven van de Algemene Verordening Gegevensbescherming (AVG/GDPR) en andere toepasselijke privacywetgeving.

Deze privacyverklaring beschrijft hoe wij uw persoonsgegevens verzamelen, gebruiken, opslaan en beschermen wanneer u gebruik maakt van het Coach Portaal Platform.`
        },
        {
            id: "verantwoordelijke",
            title: "2. Verwerkingsverantwoordelijke",
            content: `Coach Portaal is de verwerkingsverantwoordelijke voor de verwerking van uw persoonsgegevens. U kunt ons bereiken via:

• E-mail: support@coachportaal.be
• Website: https://atletiektrainer.be`
        },
        {
            id: "gegevens",
            title: "3. Welke gegevens verzamelen wij?",
            content: `Wij verzamelen de volgende categorieën persoonsgegevens:

Accountgegevens:
• Naam en voornaam
• E-mailadres
• Wachtwoord (versleuteld)
• Profielfoto (optioneel)

Clubgegevens (voor beheerders):
• Clubnaam en contactgegevens
• Ledeninformatie (naam, geboortedatum, contactgegevens)
• Trainingsgegevens en planning

Gebruiksgegevens:
• Inloggegevens en sessie-informatie
• Browser- en apparaatinformatie
• IP-adres`
        },
        {
            id: "doeleinden",
            title: "4. Doeleinden van verwerking",
            content: `Wij verwerken uw persoonsgegevens voor de volgende doeleinden:

• Het leveren en verbeteren van onze diensten
• Het beheren van uw account en authenticatie
• Het faciliteren van clubbeheer en ledenadministratie
• Het versturen van servicegerelateerde communicatie
• Het analyseren en verbeteren van de gebruikerservaring
• Het voldoen aan wettelijke verplichtingen`
        },
        {
            id: "rechtsgrond",
            title: "5. Rechtsgrond voor verwerking",
            content: `Wij verwerken uw gegevens op basis van:

• Uitvoering van de overeenkomst: Voor het leveren van onze diensten.
• Toestemming: Voor het versturen van marketingcommunicatie.
• Gerechtvaardigd belang: Voor het verbeteren van onze diensten en beveiliging.
• Wettelijke verplichting: Voor het voldoen aan juridische vereisten.`
        },
        {
            id: "bewaartermijn",
            title: "6. Bewaartermijn",
            content: `Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld:

• Accountgegevens: Tot verwijdering van uw account plus 30 dagen
• Trainings- en wedstrijddata: Zolang uw account actief is
• Logbestanden: Maximaal 90 dagen
• Factuurgegevens: 7 jaar (wettelijke verplichting)`
        },
        {
            id: "rechten",
            title: "7. Uw rechten",
            content: `Op grond van de AVG heeft u de volgende rechten:

• Recht op inzage: U kunt opvragen welke gegevens wij over u hebben.
• Recht op rectificatie: U kunt onjuiste gegevens laten corrigeren.
• Recht op verwijdering: U kunt verzoeken om verwijdering van uw gegevens.
• Recht op beperking: U kunt de verwerking laten beperken.
• Recht op overdraagbaarheid: U kunt uw gegevens in een standaardformaat ontvangen.
• Recht op bezwaar: U kunt bezwaar maken tegen bepaalde verwerkingen.

Om uw rechten uit te oefenen, neem contact met ons op via support@coachportaal.be.`
        },
        {
            id: "beveiliging",
            title: "8. Beveiliging",
            content: `Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen:

• Versleuteling van gegevens in transit (HTTPS) en in rust
• Toegangscontrole en authenticatie via Clerk
• Regelmatige beveiligingsaudits
• Gebruik van veilige cloudinfrastructuur (Convex)
• Strikte toegangsrechten voor medewerkers`
        },
        {
            id: "derden",
            title: "9. Delen met derden",
            content: `Wij delen uw gegevens alleen met derden wanneer dit noodzakelijk is:

• Clerk (authenticatie en gebruikersbeheer)
• Convex (database en backend services)
• OpenAI (AI-functionaliteiten, alleen geanonimiseerde data)

Al onze partners zijn gebonden aan verwerkersovereenkomsten en voldoen aan de AVG.`
        },
        {
            id: "cookies",
            title: "10. Cookies",
            content: `Wij gebruiken cookies om de werking van onze website te verbeteren. Voor meer informatie, zie ons Cookiebeleid.`
        },
        {
            id: "wijzigingen",
            title: "11. Wijzigingen",
            content: `Wij kunnen deze privacyverklaring van tijd tot tijd wijzigen. De meest recente versie is altijd beschikbaar op onze website. Bij significante wijzigingen zullen wij u hierover informeren via e-mail of een melding op het platform.`
        },
        {
            id: "contact",
            title: "12. Contact & Klachten",
            content: `Voor vragen over deze privacyverklaring of de verwerking van uw persoonsgegevens, neem contact met ons op via support@coachportaal.be.

Indien u een klacht heeft over de manier waarop wij met uw gegevens omgaan, kunt u een klacht indienen bij de Belgische Gegevensbeschermingsautoriteit (GBA) via www.gegevensbeschermingsautoriteit.be.`
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <Link
                    href="/info"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium mb-6 no-underline transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Terug naar Info
                </Link>

                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter mb-4 leading-none">
                    Privacy<span className="text-blue-600">beleid</span>
                </h1>
                <p className="text-gray-500 font-medium">
                    Laatst bijgewerkt: {lastUpdated}
                </p>
            </motion.div>

            <div className="grid gap-6">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-100"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">
                            {section.title}
                        </h2>
                        <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {section.content}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200"
            >
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Vragen over privacy?</h3>
                        <p className="text-gray-500 text-sm font-medium">Neem gerust contact met ons op.</p>
                    </div>
                    <a
                        href="mailto:support@coachportaal.be"
                        className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-all no-underline"
                    >
                        Contact opnemen
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

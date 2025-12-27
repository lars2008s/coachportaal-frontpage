'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
    const lastUpdated = "27 december 2024";

    const sections = [
        {
            id: "definities",
            title: "1. Definities",
            content: `In deze algemene voorwaarden wordt verstaan onder:

• Platform: Het Coach Portaal Platform, toegankelijk via coachportaal.be en dashboard.coachportaal.be
• Diensten: Alle door Coach Portaal aangeboden softwarediensten, inclusief trainingstools, ledenbeheer en AI-assistentie
• Gebruiker: Elke natuurlijke of rechtspersoon die gebruik maakt van het Platform
• Account: De persoonlijke toegang tot het Platform na registratie
• Organisatie: De sportclub of vereniging waarbinnen de Gebruiker opereert
• Abonnement: De gekozen serviceformule (Team, Club of Federation)`
        },
        {
            id: "toepasselijkheid",
            title: "2. Toepasselijkheid",
            content: `Deze algemene voorwaarden zijn van toepassing op:

• Elk gebruik van het Platform en de Diensten
• Alle overeenkomsten tussen Coach Portaal en de Gebruiker
• Alle aanbiedingen, offertes en facturen

Door gebruik te maken van het Platform of door het aanmaken van een Account, gaat u akkoord met deze voorwaarden. Indien u niet akkoord gaat, dient u geen gebruik te maken van onze Diensten.`
        },
        {
            id: "account",
            title: "3. Account & Registratie",
            content: `3.1 Registratie
Om gebruik te maken van het Platform, dient u een Account aan te maken met waarheidsgetrouwe gegevens. U bent verantwoordelijk voor het up-to-date houden van uw gegevens.

3.2 Beveiliging
U bent verantwoordelijk voor de vertrouwelijkheid van uw inloggegevens. Alle activiteiten onder uw Account vallen onder uw verantwoordelijkheid. Meld verdachte activiteiten onmiddellijk aan ons.

3.3 Leeftijd
U dient minimaal 16 jaar oud te zijn om een Account aan te maken. Gebruikers jonger dan 16 jaar hebben toestemming nodig van een ouder of voogd.`
        },
        {
            id: "diensten",
            title: "4. Onze Diensten",
            content: `4.1 Omschrijving
Coach Portaal biedt een SaaS-platform voor atletiekclubs en trainers, met functionaliteiten voor:
• Trainingsbeheer en planning
• Ledenbeheer en administratie
• Wedstrijdbeheer en resultatenregistratie
• AI-ondersteunde trainingsadviezen
• Chrome Extension voor Atletiek.nu-integratie

4.2 Beschikbaarheid
Wij streven naar 99% uptime maar garanderen geen ononderbroken beschikbaarheid. Gepland onderhoud wordt vooraf gecommuniceerd.

4.3 Wijzigingen
Wij behouden het recht om functionaliteiten toe te voegen, te wijzigen of te verwijderen. Significante wijzigingen worden vooraf aangekondigd.`
        },
        {
            id: "abonnementen",
            title: "5. Abonnementen & Prijzen",
            content: `5.1 Abonnementsvormen
• Team (€9/maand): Tot 50 leden
• Club (€19/maand): Tot 200 leden, premium ondersteuning
• Federation (Op maat): Onbeperkt leden, enterprise functies

5.2 Betaling
Abonnementskosten worden maandelijks of jaarlijks vooruit gefactureerd. Betaling geschiedt via de aangegeven betaalmethoden.

5.3 Prijswijzigingen
Wij kunnen prijzen wijzigen met minimaal 30 dagen voorafgaande kennisgeving. Bestaande abonnementen behouden hun prijs tot de volgende verlengingsperiode.

5.4 Opzegging
U kunt uw abonnement op elk moment opzeggen. Het abonnement blijft actief tot het einde van de betaalde periode.`
        },
        {
            id: "gebruik",
            title: "6. Acceptabel Gebruik",
            content: `Bij gebruik van het Platform is het niet toegestaan om:

• Illegale activiteiten te ondernemen of te faciliteren
• Rechten van derden te schenden
• Malware of schadelijke code te verspreiden
• Het Platform te hacken of te overbelasten
• Geautomatiseerde scraping uit te voeren zonder toestemming
• Valse of misleidende informatie te verstrekken
• Het Platform te gebruiken voor doeleinden anders dan atletiekbeheer

Overtreding kan leiden tot onmiddellijke opschorting of beëindiging van uw Account.`
        },
        {
            id: "eigendom",
            title: "7. Intellectueel Eigendom",
            content: `7.1 Ons Eigendom
Het Platform, de software, het ontwerp, de teksten en alle bijbehorende intellectuele eigendomsrechten behoren toe aan Coach Portaal. U verkrijgt een beperkt, niet-exclusief gebruiksrecht voor de duur van uw Abonnement.

7.2 Uw Content
U behoudt alle rechten op de content die u uploadt. Door content te uploaden, verleent u ons een licentie om deze te verwerken ten behoeve van de Diensten.

7.3 Feedback
Indien u feedback of suggesties geeft, mogen wij deze vrij gebruiken voor verbetering van onze Diensten.`
        },
        {
            id: "gegevens",
            title: "8. Gegevens & Privacy",
            content: `8.1 Verwerking
De verwerking van persoonsgegevens geschiedt conform ons Privacybeleid en de AVG.

8.2 Eigendom van Data
De data die u invoert in het Platform blijft uw eigendom. Wij verwerken deze uitsluitend voor het leveren van de Diensten.

8.3 Export
U heeft het recht om uw data te exporteren in gangbare formaten. Neem contact met ons op voor assistentie.

8.4 Verwijdering
Bij beëindiging van uw Account worden uw gegevens na 30 dagen permanent verwijderd, tenzij wettelijke bewaartermijnen anders vereisen.`
        },
        {
            id: "aansprakelijkheid",
            title: "9. Aansprakelijkheid",
            content: `9.1 Beperking
Coach Portaal is niet aansprakelijk voor:
• Indirecte schade, gevolgschade of gederfde winst
• Schade door overmacht of storingen bij derden
• Verlies van data door uw toedoen
• Onjuist gebruik van het Platform

9.2 Maximum
Onze totale aansprakelijkheid is beperkt tot het bedrag dat u in de voorafgaande 12 maanden aan ons heeft betaald.

9.3 Vrijwaring
U vrijwaart ons voor aanspraken van derden die voortvloeien uit uw gebruik van het Platform of schending van deze voorwaarden.`
        },
        {
            id: "beeindiging",
            title: "10. Beëindiging",
            content: `10.1 Door U
U kunt uw Account en Abonnement op elk moment opzeggen via uw accountinstellingen of door contact met ons op te nemen.

10.2 Door Ons
Wij kunnen uw Account opschorten of beëindigen bij:
• Schending van deze voorwaarden
• Niet-betaling na herinnering
• Frauduleus of illegaal gebruik
• Inactiviteit langer dan 24 maanden

10.3 Gevolgen
Na beëindiging verliest u toegang tot het Platform. U krijgt 30 dagen om uw data te exporteren.`
        },
        {
            id: "wijzigingen",
            title: "11. Wijzigingen Voorwaarden",
            content: `Wij kunnen deze voorwaarden wijzigen. Wijzigingen worden minimaal 30 dagen vooraf aangekondigd via e-mail of het Platform. Voortgezet gebruik na de wijzigingsdatum betekent acceptatie van de nieuwe voorwaarden.

Bij significante wijzigingen die uw rechten beperken, heeft u het recht om uw Account kosteloos te beëindigen binnen 30 dagen na kennisgeving.`
        },
        {
            id: "geschillen",
            title: "12. Toepasselijk Recht & Geschillen",
            content: `12.1 Toepasselijk Recht
Op deze voorwaarden en alle overeenkomsten is Belgisch recht van toepassing.

12.2 Geschillen
Geschillen worden bij voorkeur in onderling overleg opgelost. Indien dit niet mogelijk is, worden geschillen voorgelegd aan de bevoegde rechtbank te Antwerpen.

12.3 Consumenten
Deze beperking doet geen afbreuk aan uw rechten als consument onder dwingend recht van uw woonplaats.`
        },
        {
            id: "contact",
            title: "13. Contact",
            content: `Voor vragen over deze voorwaarden kunt u contact opnemen via:

• E-mail: support@coachportaal.be
• Website: www.coachportaal.be

Wij streven ernaar binnen 5 werkdagen te reageren op uw vragen.`
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
                    Algemene <span className="text-blue-600">Voorwaarden</span>
                </h1>
                <p className="text-gray-500 font-medium">
                    Laatst bijgewerkt: {lastUpdated}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 p-6 rounded-2xl bg-blue-50 border border-blue-100"
            >
                <p className="text-blue-800 font-medium text-sm leading-relaxed">
                    <strong>Samenvatting:</strong> Deze voorwaarden regelen het gebruik van Coach Portaal.
                    Door ons Platform te gebruiken, gaat u akkoord met deze voorwaarden.
                    Lees ze zorgvuldig door voordat u een Account aanmaakt.
                </p>
            </motion.div>

            <div className="grid gap-6">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
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
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Vragen over de voorwaarden?</h3>
                        <p className="text-gray-500 text-sm font-medium">Wij helpen u graag met eventuele vragen.</p>
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

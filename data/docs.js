// Documentation content for Coach Portaal
// Streamlined with prominent images

export const docsCategories = [
    {
        id: 'dashboard-pages',
        title: 'Dashboard Pagina\'s',
        description: 'Documentatie van alle pagina\'s in het Coach Portaal dashboard.',
        icon: '📄',
        docs: [
            { slug: 'homepagina', title: 'Home Dashboard' },
            { slug: 'navigatie', title: 'Navigatie Sidebar' },
            { slug: 'trainingen', title: 'Trainingen Overzicht' },
            { slug: 'ontdek-blokken', title: 'Ontdek Blokken' },
            { slug: 'bibliotheek', title: 'Bibliotheek' },
            { slug: 'kalender', title: 'Kalender' },
            { slug: 'ai-coach', title: 'AI Coach' },
            { slug: 'statistieken', title: 'Statistiekenkaarten' },
            { slug: 'quick-actions', title: 'Quick Actions' },
            { slug: 'agenda', title: 'Agenda Sectie' },
            { slug: 'tips', title: 'Tips Carousel' },
            { slug: 'sos-trainer', title: 'SOS Trainer' }
        ]
    },
    {
        id: 'getting-started',
        title: 'Aan de slag',
        description: 'Nieuw bij Coach Portaal? Start hier.',
        icon: '🚀',
        docs: [
            { slug: 'quick-start', title: 'Snelstartgids' },
            { slug: 'dashboard', title: 'Dashboard Navigatie' },
            { slug: 'first-training', title: 'Je Eerste Training' }
        ]
    },
    {
        id: 'members',
        title: 'Ledenbeheer',
        description: 'Atleten en groepen beheren.',
        icon: '👥',
        docs: [
            { slug: 'members-overview', title: 'Ledenlijst' },
            { slug: 'members-management', title: 'Ledengegevens Beheer' },
            { slug: 'members-import', title: 'Leden Importeren' },
            { slug: 'members-groups', title: 'Groepen & Categorieën' }
        ]
    },
    {
        id: 'training',
        title: 'Training Builder',
        description: 'Trainingen maken en plannen.',
        icon: '🏃',
        docs: [
            { slug: 'training-builder', title: 'Training Builder' },
            { slug: 'exercises', title: 'Oefeningen Bibliotheek' },
            { slug: 'ai-copilot', title: 'AI Copilot' }
        ]
    },
    {
        id: 'competitions',
        title: 'Wedstrijden',
        description: 'Wedstrijden en resultaten bijhouden.',
        icon: '🏆',
        docs: [
            { slug: 'competitions', title: 'Wedstrijdbeheer' },
            { slug: 'results-import', title: 'Resultaten Importeren' },
            { slug: 'club-records', title: 'Clubrecords' }
        ]
    },
    {
        id: 'admin',
        title: 'Beheer & Instellingen',
        description: 'Organisatie en systeem configuratie.',
        icon: '⚙️',
        docs: [
            { slug: 'settings-overview', title: 'Instellingen Overzicht' },
            { slug: 'organization', title: 'Organisatie Instellen' },
            { slug: 'profile-settings', title: 'Profiel Instellingen' },
            { slug: 'preferences-settings', title: 'Voorkeursinstellingen' },
            { slug: 'billing-settings', title: 'Facturering' },
            { slug: 'users-roles', title: 'Gebruikers & Rollen' },
            { slug: 'invite-codes', title: 'Uitnodigingscodes' }
        ]
    },
    {
        id: 'ai-advanced',
        title: 'AI & Automatisering',
        description: 'Kunstmatige intelligentie en slimme features.',
        icon: '🤖',
        docs: [
            { slug: 'ai-coach-advanced', title: 'AI Training Generator' },
            { slug: 'chrome-extension', title: 'Chrome Extension' }
        ]
    },
    {
        id: 'events-camps',
        title: 'Evenementen & Kampen',
        description: 'Speciale events en meerdaagse kampen.',
        icon: '🏕️',
        docs: [
            { slug: 'camps-complete', title: 'Trainingskampen Volledig' },
            { slug: 'attendance-tracking', title: 'Aanwezigheid Tracking' }
        ]
    },
    {
        id: 'analytics',
        title: 'Analytics & Data',
        description: 'Diepgaande analyse en rapportage.',
        icon: '📊',
        docs: [
            { slug: 'analytics-reports', title: 'Analytics & Rapporten' }
        ]
    },
    {
        id: 'collaboration',
        title: 'Team & Samenwerking',
        description: 'Team beheer en communicatie.',
        icon: '👥',
        docs: [
            { slug: 'team-collaboration', title: 'Team Beheer' },
            { slug: 'mobile-app', title: 'Mobiel App' }
        ]
    },
    {
        id: 'advanced',
        title: 'Geavanceerde Tips',
        description: 'Best practices en geavanceerde functies.',
        icon: '🎯',
        docs: [
            { slug: 'best-practices', title: 'Best Practices' }
        ]
    },
    {
        id: 'support',
        title: 'Ondersteuning',
        description: 'Hulp en probleemoplossing.',
        icon: '🆘',
        docs: [
            { slug: 'troubleshooting', title: 'Probleemoplossing' },
            { slug: 'faq', title: 'Veelgestelde Vragen' },
            { slug: 'contact', title: 'Contact' }
        ]
    }
];

// Full documentation content
export const docsContent = {
    // ============ DASHBOARD PAGES ============
    'homepagina': {
        title: 'Home Dashboard',
        description: 'Het centrale startpunt van Coach Portaal.',
        readTime: '2 min',
        sections: [
            {
                title: 'Dashboard',
                image: '/docs/home/home_dashboard.png',
                content: `![Home Dashboard](/docs/home/home_dashboard.png)

Centrale hub met statistieken, agenda en snelle toegang tot alle functies.`
            },
            {
                title: 'Secties',
                content: `Welkomstboodschap → Statistiekenkaarten → Quick Actions → Agenda → Tips → Records → SOS Trainer`
            }
        ],
        nextDoc: 'navigatie',
        prevDoc: null
    },

    'navigatie': {
        title: 'Navigatie Sidebar',
        description: 'Het hoofdmenu van Coach Portaal.',
        readTime: '2 min',
        sections: [
            {
                title: 'Sidebar',
                image: '/docs/home/navigation_sidebar.png',
                content: `![Navigatie Sidebar](/docs/home/navigation_sidebar.png)

Gestructureerde toegang tot alle functies.`
            },
            {
                title: 'Menu',
                content: `| Algemeen | Training | Beheer |
|----------|----------|--------|
| 🏠 Home | 📅 Trainingen | 📅 Kalender |
| | ⭐ Ontdek Blokken | |
| | 📚 Bibliotheek | |`
            },
            {
                title: 'Profiel',
                content: `Onderaan: avatar, naam, e-mail en ⚙️ Instellingen`
            }
        ],
        nextDoc: 'trainingen',
        prevDoc: 'homepagina'
    },

    'trainingen': {
        title: 'Trainingen Overzicht',
        description: 'Beheer je trainingsschema\'s.',
        readTime: '3 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/trainingen/trainingen_overview.png',
                content: `![Trainingen Overzicht](/docs/trainingen/trainingen_overview.png)

Hier kun je al je trainingsschema's beheren en organiseren. Bekijk beschikbare trainingsblokken, stel filters in op basis van leeftijdsgroep en discipline, en maak snel nieuwe trainingen aan.`
            },
            {
                title: 'Tabbladen & Filters',
                image: '/docs/trainingen/trainingen_tabs_filters.png',
                content: `![Tabs en Filters](/docs/trainingen/trainingen_tabs_filters.png)

**Tabbladen:** Trainingsschema's | Favorieten | Trainingsblokken

**Actieknoppen:** 🆘 SOS Training | + Nieuw Schema

**Filters:** Bron | Leeftijd | Discipline`
            },
            {
                title: 'Training Cards',
                image: '/docs/trainingen/training_card_example.png',
                content: `![Training Card Voorbeeld](/docs/trainingen/training_card_example.png)

⭐ Favoriet | Titel | Beschrijving | Tags | Schema opbouw | Zichtbaarheid`
            }
        ],
        nextDoc: 'ontdek-blokken',
        prevDoc: 'navigatie'
    },

    'ontdek-blokken': {
        title: 'Ontdek Blokken',
        description: 'AI-powered discovery voor trainingsblokken.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/ontdek-blokken/ontdek_blokken_overview.png',
                content: `![Ontdek Blokken](/docs/ontdek-blokken/ontdek_blokken_overview.png)

AI-aangedreven swipe-interface om nieuwe trainingsblokken te ontdekken.`
            },
            {
                title: 'Trainer IQ',
                content: `🧠 **Mijn Trainer IQ** - Leert van je swipe-gedrag en stelt relevante blokken voor.`
            },
            {
                title: 'Swipe Interface',
                image: '/docs/ontdek-blokken/swipe_interface.png',
                content: `![Swipe Interface](/docs/ontdek-blokken/swipe_interface.png)

| Links | Rechts | Omhoog |
|-------|--------|--------|
| NEXT | TOP! | OPSLAAN |`
            }
        ],
        nextDoc: 'bibliotheek',
        prevDoc: 'trainingen'
    },

    'bibliotheek': {
        title: 'Bibliotheek',
        description: 'Ontdek schema\'s van andere trainers.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/bibliotheek/bibliotheek.png',
                content: `![Bibliotheek Overzicht](/docs/bibliotheek/bibliotheek.png)

Ontdek en hergebruik trainingsschema's en oefenblokken. Profiteer van honderden voorgemaakte trainingsschema's en oefeningen die door andere trainers zijn gemaakt.`
            },
            {
                title: 'Functies',
                content: `📊 658+ Trainingsschema's | 🏃 3901+ Oefeningen | 🔍 Geavanceerde zoeking | ⭐ Favorieten beheren`
            },
            {
                title: 'Gebruik',
                content: `- Zoek op categorie, discipline of leeftijdsgroep
- Voeg oefeningen direct toe aan je trainingen
- Sla favorieten op voor snelle toegang`
            }
        ],
        nextDoc: 'kalender',
        prevDoc: 'ontdek-blokken'
    },

    'kalender': {
        title: 'Kalender',
        description: 'Beheer en plan trainingssessies.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/kalender/kalender_overview.png',
                content: `![Kalender Overzicht](/docs/kalender/kalender_overview.png)

Zie al je trainingen en activiteiten in een visueel overzicht. Plan trainingen, wedstrijden en evenementen gemakkelijk in je kalender.`
            },
            {
                title: 'Weergave',
                content: `**Weergave:** Maand | Week

**Navigatie:** Vorige | Huidige periode | Volgende

**Actie:** Klik op dag of "Afspraak Toevoegen"`
            }
        ],
        nextDoc: 'ai-coach',
        prevDoc: 'bibliotheek'
    },

    'ai-coach': {
        title: 'AI Coach',
        description: 'Genereer trainingsschema\'s met AI.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/ai-coach/ai_coach_overview.png',
                content: `![AI Coach](/docs/ai-coach/ai_coach_overview.png)

Intelligente assistent voor het genereren van trainingsschema's.`
            },
            {
                title: 'Gebruik',
                content: `1. Beschrijf je training (type, doelgroep, focus)
2. Of upload een foto van een training
3. De AI genereert een compleet schema`
            },
            {
                title: 'Tips',
                content: `Wees specifiek: doelgroep, tijdsduur, trainingsdoel, locatie, beschikbaar materiaal`
            }
        ],
        nextDoc: 'statistieken',
        prevDoc: 'kalender'
    },

    'statistieken': {
        title: 'Statistiekenkaarten',
        description: 'Quick stats over je club en trainingen.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/home/statistieken_kaarten.png',
                content: `![Statistieken Kaarten](/docs/home/statistieken_kaarten.png)

De belangrijkste kerncijfers van je atletiekvereniging.`
            },
            {
                title: 'Vier Kaarten',
                content: `| 👥 Leden | 📖 Trainingen | 🏆 Records | 📅 Activiteiten |
|---------|-------------|------------|--------------|
| Totaal geregistreerde leden | Beschikbare trainingen | Actieve clubrecords | Geplande activiteiten |`
            }
        ],
        nextDoc: 'quick-actions',
        prevDoc: 'ai-coach'
    },

    'quick-actions': {
        title: 'Quick Actions',
        description: 'Snel toegang tot veelgebruikte functionaliteiten.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/home/quick_actions.png',
                content: `![Quick Actions](/docs/home/quick_actions.png)

Directe toegang tot de meest gebruikte functionaliteiten.`
            },
            {
                title: 'Acties',
                content: `| ➕ Nieuwe Training | 👤 Lid Toevoegen | 📊 Resultaten | 📅 Activiteit Plannen |
|-------------------|-----------------|---------------|---------------------|
| Direct nieuw schema | Sporter registreren | Uitslagen invoeren | Evenement/kamp plannen |`
            }
        ],
        nextDoc: 'agenda',
        prevDoc: 'statistieken'
    },

    'agenda': {
        title: 'Agenda Sectie',
        description: 'Overzicht van je geplande trainingsmomenten.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/home/agenda_sectie.png',
                content: `![Agenda Sectie](/docs/home/agenda_sectie.png)

Beheer en inzicht in wekelijkse trainingsmomenten.`
            },
            {
                title: 'Instellen',
                content: `Ga naar Instellingen > Voorkeuren om je wekelijkse trainingsmomenten in te stellen.`
            }
        ],
        nextDoc: 'tips',
        prevDoc: 'quick-actions'
    },

    'tips': {
        title: 'Tips Carousel',
        description: 'Handige tips om het meeste uit het platform te halen.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/home/tips_sectie.png',
                content: `![Tips Sectie](/docs/home/tips_sectie.png)

Interactieve carrousel met tips en functionaliteiten.`
            },
            {
                title: 'Navigatie',
                content: `◀ Vorige | ▶ Volgende | Paginatie dots`
            }
        ],
        nextDoc: 'sos-trainer',
        prevDoc: 'agenda'
    },

    'sos-trainer': {
        title: 'SOS Trainer',
        description: 'Snel een trainingsschema genereren in noodsituaties.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/home/sos_trainer_sectie.png',
                content: `![SOS Trainer](/docs/home/sos_trainer_sectie.png)

Snel een trainingsschema genereren zonder voorbereiding.`
            },
            {
                title: 'Wanneer gebruiken?',
                content: `- Onverwacht geen tijd om te prepareren
- Onderweg naar de training
- Snel een alternatief nodig
- Inspiratie nodig`
            }
        ],
        nextDoc: 'wedstrijden',
        prevDoc: 'tips'
    },

    'wedstrijden': {
        title: 'Wedstrijden & Clubrecords',
        description: 'Beheer wedstrijden en track clubrecords.',
        readTime: '3 min',
        sections: [
            {
                title: 'Wedstrijdenoverzicht',
                image: '/docs/wedstrijden/wedstrijden_overview.png',
                content: `![Wedstrijden Overzicht](/docs/wedstrijden/wedstrijden_overview.png)

Zie al je geplande en afgelopen wedstrijden. Beheer deelnemers, voer resultaten in en volg prestaties.`
            },
            {
                title: 'Clubrecords',
                image: '/docs/wedstrijden/clubrecords.png',
                content: `![Clubrecords](/docs/wedstrijden/clubrecords.png)

Automatische bijhouding van je clubrecords. Ziet meteen wanneer een atlete een nieuw record behaalt.`
            },
            {
                title: 'Functies',
                content: `✅ Wedstrijden plannen | 📊 Resultaten invoeren | 🏅 Records volgen | 🎓 Certificaten genereren`
            }
        ],
        nextDoc: 'activiteiten',
        prevDoc: 'sos-trainer'
    },

    'activiteiten': {
        title: 'Activiteiten & Evenementen',
        description: 'Plan kampen, workshops en speciale evenementen.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/activiteiten/activiteiten.png',
                content: `![Activiteiten Overzicht](/docs/activiteiten/activiteiten.png)

Organiseer trainingskampen, workshops, wedstrijden en andere speciale evenementen voor je atleten.`
            },
            {
                title: 'Soorten Activiteiten',
                content: `🏕️ Trainingskampen | 📚 Workshops | 🏃 Speciale trainingen | 🎓 Clinics | 🎉 Team events`
            },
            {
                title: 'Beheer',
                content: `- Plan meerdaagse kampen met dagschema
- Beheer deelnemers en betalingen
- Communiceer met deelnemers
- Documenteer met foto's en video`
            }
        ],
        nextDoc: 'communicatie',
        prevDoc: 'wedstrijden'
    },

    'communicatie': {
        title: 'Communicatie & Instellingen',
        description: 'Team communicatie en platform instellingen.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/communicatie/communicatie.png',
                content: `![Communicatie](/docs/communicatie/communicatie.png)

Communiceer met je coaching team en stel je platform in.`
            },
            {
                title: 'Communicatie Tools',
                content: `📧 E-mailberichten | 💬 In-app berichten | 📱 SMS notifications | 🔔 Instellingen`
            },
            {
                title: 'Platform Instellingen',
                content: `- Organisatieprofiel configureren
- Team members uitnodigen
- Gebruiksrechten beheren
- Voorkeursinstellingen instellen`
            }
        ],
        nextDoc: 'quick-start',
        prevDoc: 'activiteiten'
    },

    // ============ GETTING STARTED ============
    'quick-start': {
        title: 'Snelstartgids',
        description: 'Zet Coach Portaal in 15 minuten op.',
        readTime: '5 min',
        sections: [
            {
                title: 'Stappen',
                content: `1. **Account aanmaken** - Ga naar dashboard.coachportaal.be
2. **Organisatie instellen** - Clubnaam, logo, leeftijdscategorieën
3. **Leden importeren** - Excel-upload met naam, geboortedatum, geslacht
4. **Eerste training** - Trainingen → Nieuwe Training`
            }
        ],
        nextDoc: 'dashboard',
        prevDoc: 'communicatie'
    },

    'dashboard': {
        title: 'Dashboard Navigatie',
        description: 'Leer je weg te vinden in het dashboard.',
        readTime: '3 min',
        sections: [
            {
                title: 'Sidebar',
                content: `| 👥 Leden | 🏃 Trainingen | 📅 Agenda | 🏆 Wedstrijden | 🤖 AI Assistent | ⚙️ Instellingen |`
            },
            {
                title: 'Snelle Acties',
                content: `+ Nieuwe Training | + Nieuw Lid | Meldingen | Profiel`
            }
        ],
        nextDoc: 'first-training',
        prevDoc: 'quick-start'
    },

    'first-training': {
        title: 'Je Eerste Training',
        description: 'Stap-voor-stap een training maken.',
        readTime: '5 min',
        sections: [
            {
                title: 'Training Aanmaken',
                content: `1. Trainingen → Nieuwe Training
2. Vul titel, datum, doelgroep in
3. Voeg oefeningen toe via drag-and-drop
4. Gebruik AI Copilot voor suggesties
5. Opslaan of publiceren`
            }
        ],
        nextDoc: 'members-overview',
        prevDoc: 'dashboard'
    },

    // ============ MEMBERS ============
    'members-overview': {
        title: 'Ledenlijst',
        description: 'Overzicht van het ledenbeheer.',
        readTime: '3 min',
        sections: [
            {
                title: 'Ledenmodule',
                content: `Beheer alle atleten, hun gegevens en leeftijdscategorieën.

**Tabel:** Naam | Geboortedatum | Categorie | Groep | Wedstrijden | Status`
            },
            {
                title: 'Zoeken & Filteren',
                content: `🔍 Zoekbalk | 📊 Categorie-filter | 📁 Groep-filter | ✅ Status-filter`
            },
            {
                title: 'Lid Toevoegen',
                content: `+ Nieuw Lid → Voornaam, achternaam, geboortedatum (verplicht), geslacht, e-mail, telefoon, groep`
            }
        ],
        nextDoc: 'members-import',
        prevDoc: 'first-training'
    },

    'members-import': {
        title: 'Leden Importeren',
        description: 'Importeer je volledige ledenlijst via Excel.',
        readTime: '3 min',
        sections: [
            {
                title: 'Bestandsstructuur',
                content: `| Kolom | Verplicht | Voorbeeld |
|-------|----------|-----------|
| Voornaam | ✅ | Jan |
| Achternaam | ✅ | Jansen |
| Geboortedatum | ✅ | 15/03/2012 |
| Geslacht | ✅ | M/V |
| E-mail | ❌ | jan@email.be |`
            },
            {
                title: 'Importproces',
                content: `1. Leden → Importeren
2. Bestand uploaden (.xlsx)
3. Kolommen koppelen
4. Voorbeeld controleren
5. Importeren`
            }
        ],
        nextDoc: 'members-groups',
        prevDoc: 'members-overview'
    },

    'members-groups': {
        title: 'Groepen & Categorieën',
        description: 'Organiseer atleten in trainingsgroepen.',
        readTime: '3 min',
        sections: [
            {
                title: 'Leeftijdscategorieën',
                content: `| Benjamins | Pupillen | Miniemen | Cadetten | Scholieren | Junioren | Seniors | Masters |
|-----------|----------|----------|----------|-----------|---------|---------|---------|
| 7-8 jaar | 9-10 jaar | 11-12 jaar | 13-14 jaar | 15-16 jaar | 17-18 jaar | 19-35 jaar | 35+ jaar |`
            },
            {
                title: 'Trainingsgroepen',
                content: `Leden → Groepen → + Nieuwe Groep

Maak groepen per trainer, wedstrijdteam of talentgroep.`
            }
        ],
        nextDoc: 'training-builder',
        prevDoc: 'members-import'
    },

    // ============ TRAINING ============
    'training-builder': {
        title: 'Training Builder',
        description: 'De krachtige editor voor trainingen.',
        readTime: '4 min',
        sections: [
            {
                title: 'Interface',
                content: `**Links:** Oefeningen Bibliotheek
**Midden:** Training Canvas
**Rechts:** Details paneel`
            },
            {
                title: 'Trainingsblokken',
                content: `🟢 Warming-up | 🔵 Hoofddeel | 🟠 Techniek | 🔴 Intensief | 🟣 Cooling-down`
            },
            {
                title: 'Templates',
                content: `⚙️ → Opslaan als Template

Herbruik structuur voor vergelijkbare trainingen.`
            }
        ],
        nextDoc: 'exercises',
        prevDoc: 'members-groups'
    },

    'exercises': {
        title: 'Oefeningen Bibliotheek',
        description: 'Ontdek de database met atletiekoefeningen.',
        readTime: '3 min',
        sections: [
            {
                title: 'Categorieën',
                content: `🏃 Looptechniek | 💪 Kracht | 🧘 Mobiliteit | ⚡ Snelheid | 🎯 Coördinatie | 🏋️ Plyometrie | 🔄 Warming-up | ❄️ Cooling-down`
            },
            {
                title: 'Zoeken',
                content: `🔍 Zoeken | 📊 Categorie-filter | ⭐ Favorieten | 🏃 Discipline-filter`
            },
            {
                title: 'Eigen Oefeningen',
                content: `+ Nieuwe Oefening → Naam, beschrijving, categorie, video (optioneel)`
            }
        ],
        nextDoc: 'ai-copilot',
        prevDoc: 'training-builder'
    },

    'ai-copilot': {
        title: 'AI Copilot',
        description: 'Laat AI helpen met trainingsplanning.',
        readTime: '3 min',
        sections: [
            {
                title: 'Functies',
                content: `✅ Complete trainingen genereren
✅ Oefeningen suggereren
✅ Progressie plannen
✅ Variaties bedenken
✅ Vragen beantwoorden`
            },
            {
                title: 'Gebruik',
                content: `**In Training Builder:** 🤖 AI Suggestie
**In Chat:** AI Assistent via sidebar

**Voorbeeld:** "Maak een 60-minuten training voor benjamins gericht op coördinatie"`
            }
        ],
        nextDoc: 'competitions',
        prevDoc: 'exercises'
    },

    // ============ COMPETITIONS ============
    'competitions': {
        title: 'Wedstrijdbeheer',
        description: 'Beheer wedstrijden en resultaten.',
        readTime: '3 min',
        sections: [
            {
                title: 'Wedstrijd Aanmaken',
                content: `Wedstrijden → Nieuwe Wedstrijd

Naam, datum, locatie, type → Opslaan`
            },
            {
                title: 'Deelnemers',
                content: `+ Deelnemers Toevoegen → Leden selecteren → Disciplines toewijzen`
            },
            {
                title: 'Resultaten',
                content: `Handmatig invoeren of importeren via Chrome-extensie.

Automatische vergelijking: PR | SB | Clubrecords 🎉`
            }
        ],
        nextDoc: 'results-import',
        prevDoc: 'ai-copilot'
    },

    'results-import': {
        title: 'Resultaten Importeren',
        description: 'Haal resultaten automatisch op van atletiek.nu.',
        readTime: '3 min',
        sections: [
            {
                title: 'Chrome Extensie',
                content: `1. Chrome Web Store → "Coach Portaal Import"
2. Toevoegen aan Chrome
3. Inloggen met Coach Portaal account`
            },
            {
                title: 'Importeren',
                content: `1. Ga naar atletiek.nu wedstrijdpagina
2. Klik Coach Portaal icoon
3. Extensie herkent wedstrijd en atleten
4. Klik Importeren`
            }
        ],
        nextDoc: 'club-records',
        prevDoc: 'competitions'
    },

    'club-records': {
        title: 'Clubrecords',
        description: 'Automatische tracking van clubrecords.',
        readTime: '2 min',
        sections: [
            {
                title: 'Automatisch',
                content: `Records worden automatisch bijgewerkt bij nieuwe prestaties.`
            },
            {
                title: 'Overzicht',
                content: `Wedstrijden → Clubrecords

Discipline | Categorie | Houder | Prestatie | Datum | Wedstrijd`
            },
            {
                title: 'Certificaten',
                content: `Certificaat Genereren → Layout aanpassen → Download PDF`
            }
        ],
        nextDoc: 'organization',
        prevDoc: 'results-import'
    },

    // ============ ADMIN ============
    'organization': {
        title: 'Organisatie Instellen',
        description: 'Configureer je club en instellingen.',
        readTime: '3 min',
        sections: [
            {
                title: 'Basisgegevens',
                content: `Instellingen → Organisatie

Clubnaam | Logo | Adres | Website | E-mail | BTW-nummer`
            },
            {
                title: 'Seizoen',
                content: `Huidig seizoen (bijv. 2024-2025) | Start 1 september | Einde 31 augustus`
            },
            {
                title: 'Categorieën',
                content: `Instellingen → Categorieën

Standaard VAL-categorieën, aanpasbaar naar federatie.`
            }
        ],
        nextDoc: 'users-roles',
        prevDoc: 'club-records'
    },

    'users-roles': {
        title: 'Gebruikers & Rollen',
        description: 'Beheer teamleden en toegangsrechten.',
        readTime: '3 min',
        sections: [
            {
                title: 'Rollen',
                content: `| Rol | Rechten |
|-----|---------|
| Admin | Volledige toegang |
| Trainer | Trainingen, leden, wedstrijden |
| Volunteer | Alleen lezen |`
            },
            {
                title: 'Uitnodigen',
                content: `Instellingen → Gebruikers → + Uitnodigen

E-mailadres → Rol kiezen → Uitnodigingsmail`
            }
        ],
        nextDoc: 'invite-codes',
        prevDoc: 'organization'
    },

    'invite-codes': {
        title: 'Uitnodigingscodes',
        description: 'Maak eenvoudig grote groepen gebruikers lid.',
        readTime: '2 min',
        sections: [
            {
                title: 'Code Aanmaken',
                content: `Instellingen → Uitnodigingscodes → + Nieuwe Code

Naam | Rol | Limiet | Vervaldatum`
            },
            {
                title: 'Delen',
                content: `Deel code via WhatsApp, e-mail of mondeling.

Ontvanger: dashboard.coachportaal.be → Registreren → Code invoeren`
            }
        ],
        nextDoc: 'settings-overview',
        prevDoc: 'users-roles'
    },

    // ============ SUPPORT ============
    'troubleshooting': {
        title: 'Probleemoplossing',
        description: 'Oplossingen voor veelvoorkomende problemen.',
        readTime: '3 min',
        sections: [
            {
                title: 'Inlogproblemen',
                content: `- Wachtwoord vergeten? Klik voor reset-link
- Check spamfolder voor verificatie-e-mail
- Probeer incognitomodus`
            },
            {
                title: 'Import Problemen',
                content: `- Eerste rij = kolomkoppen
- Datumnotatie DD/MM/JJJJ
- Sla op als .xlsx`
            },
            {
                title: 'Prestatieproblemen',
                content: `- Ververs pagina (Ctrl+F5)
- Check internetverbinding
- Probeer Chrome browser`
            }
        ],
        nextDoc: 'faq',
        prevDoc: 'settings-overview'
    },

    'faq': {
        title: 'Veelgestelde Vragen',
        description: 'Antwoorden op de meest gestelde vragen.',
        readTime: '3 min',
        sections: [
            {
                title: 'Algemeen',
                content: `**Is Coach Portaal gratis?**
Ja, basisversie gratis. Betaald abonnement voor AI en onbeperkte leden.

**Offline gebruiken?**
Nee, internetverbinding vereist.

**Apparaten?**
Werkt in elke browser op desktop, tablet en mobiel.`
            },
            {
                title: 'Privacy',
                content: `**Data opslag?**
Beveiligde servers in EU, AVG/GDPR-compliant.

**Data exporteren?**
Ja, via Instellingen → Export.`
            }
        ],
        nextDoc: 'contact',
        prevDoc: 'troubleshooting'
    },

    'contact': {
        title: 'Contact',
        description: 'Neem contact op voor hulp of feedback.',
        readTime: '2 min',
        sections: [
            {
                title: 'Ondersteuning',
                content: `📧 **E-mail:** support@coachportaal.be
⏰ **Reactietijd:** Binnen 24 uur (werkdagen)

Beschrijf probleem: wat deed je? welke foutmelding? welke browser?`
            },
            {
                title: 'Feedback',
                content: `📧 **E-mail:** feedback@coachportaal.be

Of in app: Profiel → Feedback geven`
            },
            {
                title: 'Socials',
                content: `🐦 @coachportaal | 📘 /coachportaal.be | 📸 @coachportaal`
            }
        ],
        nextDoc: 'homepagina',
        prevDoc: 'faq'
    },

    // ============ MEMBERS (ADDITIONAL) ============
    'members-management': {
        title: 'Ledengegevens Beheer',
        description: 'Beheer atletenprofiel details.',
        readTime: '3 min',
        sections: [
            {
                title: 'Profielpagina',
                image: '/docs/leden/member-management.png',
                content: `![Ledenmanagement](/docs/leden/member-management.png)

Zie en bewerk alle details van een atlete.`
            },
            {
                title: 'Informatie',
                content: `👤 **Persoonlijk:** Naam, geboortedatum, geslacht, e-mail, telefoon
📊 **Statistieken:** Trainingen bijgewoond, records, resultaten
📝 **Opmerkingen:** Notes en geschiedenis`
            },
            {
                title: 'Acties',
                content: `✏️ Bewerken | 📞 Contacteren | 📊 Statistieken weergeven | ❌ Verwijderen`
            }
        ],
        nextDoc: 'members-import',
        prevDoc: 'members-overview'
    },

    // ============ SETTINGS ============
    'settings-overview': {
        title: 'Instellingen Overzicht',
        description: 'Configureer je platform.',
        readTime: '2 min',
        sections: [
            {
                title: 'Overzicht',
                image: '/docs/instellingen/settings-overview.png',
                content: `![Instellingen](/docs/instellingen/settings-overview.png)

Alle platform instellingen op één plaats.`
            },
            {
                title: 'Secties',
                content: `⚙️ Organisatie | 👤 Profiel | 📋 Voorkeursinstellingen | 💳 Facturering | 👥 Gebruikers`
            }
        ],
        nextDoc: 'organization',
        prevDoc: 'contact'
    },

    'profile-settings': {
        title: 'Profiel Instellingen',
        description: 'Beheer je persoonlijke gegevens.',
        readTime: '2 min',
        sections: [
            {
                title: 'Profiel',
                image: '/docs/instellingen/profile-settings.png',
                content: `![Profielinstellingen](/docs/instellingen/profile-settings.png)

Pas je account gegevens aan.`
            },
            {
                title: 'Beschikbare Velden',
                content: `📧 E-mailadres | 🔐 Wachtwoord | 📸 Profielfoto | ℹ️ Bio | 🌐 Website`
            }
        ],
        nextDoc: 'preferences-settings',
        prevDoc: 'organization'
    },

    'preferences-settings': {
        title: 'Voorkeursinstellingen',
        description: 'Personaliseer je ervarings.',
        readTime: '2 min',
        sections: [
            {
                title: 'Voorkeursinstellingen',
                image: '/docs/instellingen/preferences-settings.png',
                content: `![Voorkeuren](/docs/instellingen/preferences-settings.png)

Pas taal, thema en notificaties aan.`
            },
            {
                title: 'Opties',
                content: `🌍 **Taal:** Nederlands | English
🎨 **Thema:** Licht | Donker | Automatisch
🔔 **Notificaties:** E-mail | SMS | In-app
📅 **Datumformat:** DD/MM/YYYY | MM/DD/YYYY`
            }
        ],
        nextDoc: 'billing-settings',
        prevDoc: 'profile-settings'
    },

    'billing-settings': {
        title: 'Facturering',
        description: 'Beheer abonnementen en betalingen.',
        readTime: '2 min',
        sections: [
            {
                title: 'Facturering',
                image: '/docs/instellingen/billing-settings.png',
                content: `![Facturering](/docs/instellingen/billing-settings.png)

Beheer je abonnement en betalingsmethode.`
            },
            {
                title: 'Opties',
                content: `💳 **Huidge Plan:** Gratis | Pro | Enterprise
📝 **Facturen:** Downloaderen en archiveren
💰 **Betalingsgegevens:** Creditcard gegevens bijwerken
🔄 **Abonnementsbeheer:** Upgrade, downgrade, annuleren`
            }
        ],
        nextDoc: 'users-roles',
        prevDoc: 'preferences-settings'
    },

    // ============ AI COACH ADVANCED ============
    'ai-coach-advanced': {
        title: 'AI Coach - Geavanceerd',
        description: 'Volledige AI training generator en assistant.',
        readTime: '4 min',
        sections: [
            {
                title: 'AI Training Generator',
                image: '/docs/ai-coach/ai_coach_overview.png',
                content: `Genereer volledige trainingsschema's met kunstmatige intelligentie. De AI leert van je trainingspatronen en past zich aan.`
            },
            {
                title: 'Hoe Werkt Het',
                content: `1. **Beschrijf je Training:** Type wat je wilt trainen
2. **Selecteer Doelgroep:** Leeftijd, niveau, discipline
3. **Kies Focus:** Snelheid, kracht, techniek, uithoudingsvermogen
4. **AI Genereert:** Compleet schema in 30 seconden
5. **Pas Aan:** Edit de voorgestelde oefeningen
6. **Gebruik:** Direct beschikbaar voor je klassen`
            },
            {
                title: 'Voorbeelden',
                content: `**Voorbeeld 1:** "60-minuten sprinttraining voor U16 jongens gericht op acceleratie"
→ AI genereert: Warming-up, acceleratie drills, max velocity werk, cool-down

**Voorbeeld 2:** "30-minuten recovery sessie na zware wedstrijd"
→ AI genereert: Lichte mobiliteit, stretching, mentale focus

**Voorbeeld 3:** "Technique masterclass hurdles voor beginners"
→ AI genereert: Stap-voor-stap hurdle technique met progressie`
            },
            {
                title: 'AI Features',
                content: `✅ Oneindige trainingsideeën genereren
✅ Aangepast aan leeftijd en niveau
✅ Variaties voor hetzelfde thema
✅ Progressieve trainingsschema's
✅ Blessurepreventie ingebouwd
✅ Basis- tot gevorderd niveau`
            },
            {
                title: 'Tips',
                content: `- Wees specifiek in je beschrijving
- Vermeld doelgroep en tijdsduur
- Geef trainingsdoelen aan
- Vraag om variaties van dezelfde training
- Gebruik genereerde schema's als templates`
            }
        ],
        nextDoc: 'camps-complete',
        prevDoc: 'ai-copilot'
    },

    // ============ CAMPS & ACTIVITIES ============
    'camps-complete': {
        title: 'Trainingskampen - Volledig',
        description: 'Plan en beheer meerdaagse trainingsevens.',
        readTime: '5 min',
        sections: [
            {
                title: 'Kamp Organisatie',
                image: '/docs/activiteiten/camps-overview.png',
                content: `Organiseer meerdaagse trainingskampen met volledig beheer van deelnemers, accommodatie, schema en communicatie.`
            },
            {
                title: 'Stappen om een Kamp in te Stellen',
                content: `1. **Basisgegevens**
   - Naam, datum (start/eind), locatie
   - Doelgroep, trainer(s)
   - Beschrijving, doelstellingen

2. **Deelnemers**
   - Voeg leden toe of importeer groep
   - Beheer inschrijvingen
   - Track betalingen

3. **Dag Schema**
   - Maak dagschema's
   - Voeg trainingen toe
   - Plan maaltijden/pauzes
   - Voeg activities toe

4. **Communicatie**
   - Stuur updates naar deelnemers
   - Deel belangrijke info
   - Verzamel feedback`
            },
            {
                title: 'Kampschema',
                content: `**Dag 1 - Maandag**
- 09:00 Aankomst & incheck
- 10:00 Openingsbijeenkomst
- 11:00 Training: Technique foundation
- 13:00 Lunch
- 14:30 Training: Speed drills
- 17:00 Pauze
- 19:00 Diner
- 20:30 Team activity

**Dag 2 - Dinsdag**
- 08:00 Breakfast
- 09:00 Training: Power
- 12:00 Lunch
- 13:30 Video analyse
- 15:00 Training: Competition simulation
- 17:30 Recovery
- 19:00 Diner
- 20:00 Discussion & feedback`
            },
            {
                title: 'Deelnemer Management',
                content: `- Registratie en betalingen
- Medische informatie
- Noodcontacten
- Voedselallergieën
- Bijzondere behoeften
- Aanwezigheid tracking
- Feedback verzamelen`
            },
            {
                title: 'Best Practices',
                content: `✅ Stuur kalender 1 maand van tevoren
✅ Bevestig inschrijvingen 2 weken ervoor
✅ Update deelnemers dagelijks
✅ Verzamel feedback aan het eind
✅ Documenteer hoogtepunten met foto's
✅ Genereer certificaten voor deelnemers`
            }
        ],
        nextDoc: 'attendance-tracking',
        prevDoc: 'ai-coach-advanced'
    },

    // ============ ATTENDANCE TRACKING ============
    'attendance-tracking': {
        title: 'Aanwezigheid & Deelname',
        description: 'Volg trainingsdeelname en statistieken.',
        readTime: '3 min',
        sections: [
            {
                title: 'Aanwezigheid Tracking',
                content: `Zie direct in het dashboard wie aanwezig is bij elke training. Track trends en identificeer atleten die regelmatig missen.`
            },
            {
                title: 'Hoe Aanwezigheid in te Voeren',
                content: `**Voor Training:**
1. Ga naar Trainingen → Selecteer training
2. Klik "Aanwezigheid invoeren"
3. Vink leden aan/uit
4. Voeg opmerkingen toe (blessure, ziek)
5. Sla op

**Mobiel:**
1. Open training op telefoon
2. Scroll naar "Check-in"
3. Tik op foto van atlete
4. Bevestig aanwezigheid
5. Done!`
            },
            {
                title: 'Statistieken',
                content: `- Gemiddelde aanwezigheid per atlete
- Trainingen gemist per maand
- Trends over seizoen
- Beste deelnemers (perfect record)
- Atleten met slechte aanwezigheid
- Reden voor afwezigheid`
            },
            {
                title: 'Rapporten',
                content: `📊 **Maandelijks Rapport:**
- Totale trainingen gepland
- Gemiddelde opkomst
- Top deelnemers
- Deelnemers met zorgen

📈 **Trends:**
- Seizoenaalpatronen
- Impact op prestatie
- Voortgang in loop van seizoen`
            },
            {
                title: 'Instellingen',
                content: `- Automatische herinnering 1 dag voor
- Ouders notificatie bij afwezigheid
- Drempel waarschuwen (bijv: 3x missen)
- Notities voor afwezigheid
- Absentie redenen (ziek, blessure, persoonlijk)`
            }
        ],
        nextDoc: 'analytics-reports',
        prevDoc: 'camps-complete'
    },

    // ============ ANALYTICS & REPORTS ============
    'analytics-reports': {
        title: 'Analytics & Rapporten',
        description: 'Diepgaande data-analyse en rapportage.',
        readTime: '4 min',
        sections: [
            {
                title: 'Analytics Dashboard',
                content: `Analyseer al je trainings- en competitiegegevens. Identificeer trends, track voortgang en maak data-gestuurde besluiten.`
            },
            {
                title: 'Beschikbare Rapporten',
                content: `🏃 **Training Analyse**
- Trainingen per week/maand
- Gemiddelde deelname
- Training frequentie per atlete
- Populairste training types
- Peak training tijden

🏆 **Competitie Resultaten**
- PR-tracking
- Persoonlijke besten
- Seizoen trends
- Vergelijking vorig seizoen
- Top performers

📊 **Team Statistieken**
- Groepsvoortgang
- Categorieën prestatie
- Records per categorie
- Meest succesvol trainingschema's`
            },
            {
                title: 'Rapporten Genereren',
                content: `1. Ga naar Dashboard → Reports
2. Kies rapporttype
3. Selecteer periode (week/maand/seizoen)
4. Voeg filters toe (groep, categorie, atlete)
5. Genereer
6. Download als PDF of Excel`
            },
            {
                title: 'Data Export',
                content: `📥 **Exporteer naar:**
- Excel (voor analyse)
- PDF (voor presentaties)
- Google Sheets (automatisch)
- CSV (voor externe tools)

💾 **Wat Exporteren:**
- Trainingsgeschiedenis
- Competitieresultaten
- Aanwezigheidsdata
- Persoonlijke records
- Clubs records`
            },
            {
                title: 'Inzichten & Alerts',
                content: `🔔 **Automatische Alerts:**
- Atlete met slechte aanwezigheid
- Plotselinge prestatieverandering
- Blessuringsrisico (overtraining)
- Records en milestones bereikt
- Team trend wijzigingen`
            }
        ],
        nextDoc: 'chrome-extension',
        prevDoc: 'attendance-tracking'
    },

    // ============ CHROME EXTENSION ============
    'chrome-extension': {
        title: 'Chrome Extension',
        description: 'Atletiek.nu integratie en bulk operaties.',
        readTime: '4 min',
        sections: [
            {
                title: 'Chrome Extension Setup',
                content: `De Coach Portaal Chrome Extension integreert je platform met Atletiek.nu voor directe wedstrijdresultaat import.`
            },
            {
                title: 'Installatie',
                content: `1. **Download:**
   - Ga naar Chrome Web Store
   - Zoek "Coach Portaal"
   - Klik "Toevoegen aan Chrome"

2. **Login:**
   - Klik extensie icoon
   - Login met je account
   - Autoriseer toegang

3. **Klaar:**
   - Extension werkt automatisch
   - Zie icoon in toolbar`
            },
            {
                title: 'Atletiek.nu Import',
                content: `**Resultaten Importeren:**
1. Ga naar atletiek.nu wedstrijdpagina
2. Klik Coach Portaal icoon
3. Selecteer je organisatie
4. Herken atleten automatisch
5. Bewerk indien nodig
6. Klik "Importeren"

**Wat Import:**
- Wedstrijdgegevens
- Atletennamen & resultaten
- Prestaties per onderdeel
- Automatische PR detectie`
            },
            {
                title: 'Bulk Operaties',
                content: `📋 **Bulk Leden Import:**
- Upload Excel lijst
- Map kolommen
- Controleer preview
- Importeer alles tegelijk

📊 **Bulk Resultaat Import:**
- Import meerdere wedstrijden
- Automatische matching
- Batch PR updates
- Record updates`
            },
            {
                title: 'Geavanceerde Features',
                content: `🔄 **Synchronisatie:**
- Automatische sync met atletiek.nu
- Dagelijkse updates
- Real-time wedstrijduitslagen

⚙️ **Instellingen:**
- Auto-import activeren
- Notificaties
- Categorie mapping
- Discipline aliassen`
            },
            {
                title: 'Troubleshooting',
                content: `❓ **Problemen:**
- Extension verschijnt niet → Refresh pagina
- Login werkt niet → Check cookies
- Import mislukt → Controleer format
- Atleten niet herkend → Update naamlijst`
            }
        ],
        nextDoc: 'team-collaboration',
        prevDoc: 'analytics-reports'
    },

    // ============ TEAM COLLABORATION ============
    'team-collaboration': {
        title: 'Team Beheer & Samenwerking',
        description: 'Werkteam organisatie, rollen en toegang.',
        readTime: '4 min',
        sections: [
            {
                title: 'Team Management',
                content: `Beheer je coaching team, wijs verantwoordelijkheden toe en werk samen in real-time.`
            },
            {
                title: 'Rollen & Rechten',
                content: `👨‍💼 **Admin**
- Volledige toegang
- Beheer gebruikers
- Instellingen wijzigen
- Facturering

🏃 **Coach**
- Trainingen maken/bewerken
- Leden beheren
- Wedstrijden invoeren
- Rapporten zien

👥 **Assistent**
- Trainingen zien
- Aanwezigheid invoeren
- Basisgegevens
- Geen wijzigingen

📋 **Vrijwilliger**
- Aanwezigheid invoeren
- Alleen-lezen toegang
- Geen gevoelige gegevens`
            },
            {
                title: 'Team Uitnodigen',
                content: `**Methode 1: Direct Uitnodigen**
1. Instellingen → Gebruikers
2. "+ Nieuw Team Member"
3. Email invoeren
4. Rol kiezen
5. Uitnodigingsmail verstuurd

**Methode 2: Uitnodigingscode**
1. Instellingen → Uitnodigingscodes
2. "+ Nieuwe Code"
3. Rol en limiet instellen
4. Deel code (WhatsApp/Email)
5. Anderen gebruiken code om aan te sluiten`
            },
            {
                title: 'Samenwerkingsfeatures',
                content: `💬 **In-App Messaging**
- Directe berichten tussen coaches
- Groepschats
- Notificaties

📅 **Gedeelde Kalender**
- Zien andermans trainingsschema
- Coachbeschikbaarheid
- Gezamenlijke planning

📝 **Gedeelde Notities**
- Trainings feedback
- Atletennoten
- Teamopmerkingen

🔄 **Real-time Updates**
- Zien wie trainingen bewerkt
- Live changelog
- Conflictdetectie`
            },
            {
                title: 'Best Practices',
                content: `✅ Verdeel verantwoordelijkheden duidelijk
✅ Communiceer via in-app system
✅ Voer data in op hetzelfde moment
✅ Review samen trainingseffectiviteit
✅ Deel feedback op trainingen
✅ Documenteer trainersspecific aantekeningen`
            }
        ],
        nextDoc: 'mobile-app',
        prevDoc: 'chrome-extension'
    },

    // ============ MOBILE APP ============
    'mobile-app': {
        title: 'Mobiel App Gids',
        description: 'Coach Portaal op je telefoon.',
        readTime: '3 min',
        sections: [
            {
                title: 'Mobiel App Features',
                content: `Gebruik Coach Portaal volledig op je smartphone. Perfect voor trainingen op het veld.`
            },
            {
                title: 'Wat Kan je Doen',
                content: `📱 **Trainingsveld:**
- Trainingen zien
- Leden checken
- Aanwezigheid invoeren
- Real-time feedback

📊 **Quick Stats:**
- Vandaag statistieken
- Recent resultaten
- Aankomende wedstrijden

💬 **Communicatie:**
- Berichten naar team
- Ouders notificaties
- Team chat

📅 **Calendar:**
- Week overzicht
- Trainingswaarschuwingen
- Wedstrijd reminders`
            },
            {
                title: 'Offline Mode',
                content: `✅ **Werkt Offline:**
- Aanwezigheid invoeren
- Trainingen bekijken
- Notes maken
- Berichten schrijven

🔄 **Sync Wanneer Online:**
- Automatische upload
- Conflictherkenning
- Data samenvoegen`
            },
            {
                title: 'Mobiel-Specifieke Features',
                content: `📸 **Camera:**
- Maak foto's van trainingen
- Voeg toe aan raporten
- Deel met team

🗺️ **GPS:**
- Trainingslocatie
- Waarschuwing bij vertrek
- Navigatie

🔔 **Notificaties:**
- Trainingsupdates
- Wedstrijdremindes
- Teambericht alerts`
            },
            {
                title: 'Tips',
                content: `💡 Zet notificaties aan voor belangrijke updates
💡 Gebruik offline mode op het veld
💡 Sync voor training begint
💡 Beheer batterij met dark mode
💡 Voer snel gegevens in met swipe`
            }
        ],
        nextDoc: 'best-practices',
        prevDoc: 'team-collaboration'
    },

    // ============ BEST PRACTICES ============
    'best-practices': {
        title: 'Best Practices & Tips',
        description: 'Gouden regels voor maximaal succes.',
        readTime: '5 min',
        sections: [
            {
                title: 'Coaching Workflow',
                content: `**Dagelijkse Routine:**

📅 **Ochtend (voor training):**
- Controleer trainingsplan
- Check aanwezigheidsvoorspelling
- Bekijk weersvoorspelling
- Voorzie potentiële problemen

🏃 **Training:**
- Voer aanwezigheid in
- Maak notities over voortgang
- Neem foto's van hoogtepunten
- Track individuele prestaties

📊 **Na Training:**
- Voeg feedback toe
- Update statistieken
- Communiceer met ouders
- Plan volgende training`
            },
            {
                title: 'Trainingsplanning',
                content: `🎯 **Periodisatie:**
- Volg seizoenale cyclus
- Varieer trainingstypen
- Voorkomen overtraining
- Plannen recovery periodes

📈 **Progressie:**
- Start met basis
- Verhoog intensiteit geleidelijk
- Meet voortgang
- Pas aan op basis van resultaten

🔄 **Variatie:**
- Zelfde doel, verschillende aanpak
- Houd het interessant
- Challenge atleten
- Voorkomen verveling`
            },
            {
                title: 'Data Beheer',
                content: `✅ **Regelmatig Updaten:**
- Voer gegevens in dezelfde dag in
- Geen backlog creëren
- Consistent inputten

💾 **Backup:**
- Export maandelijks
- Archive oude seizoenen
- Cloud backup inschakelen

📊 **Analyseren:**
- Maandelijks rapportage
- Trends herkennen
- Seizoen evaluatie`
            },
            {
                title: 'Team Communicatie',
                content: `📢 **Effectieve Communicatie:**
- Gebruik in-app system
- Wees duidelijk en kort
- Stuur updates regelmatig
- Vraag feedback

👨‍👩‍👧‍👦 **Ouders:**
- Maandelijkse rapport
- Successen delen
- Problemen aanspreken
- Vragen beantwoorden

🤝 **Team:**
- Wekelijkse sync
- Feedback session
- Training effectiveness review
- Collaboratie verbeteren`
            },
            {
                title: 'Performance Optimization',
                content: `🚀 **Snellere Data Entry:**
- Gebruik mobile app
- Templates voor training
- Sneltoetsen leren
- Bulk operaties gebruiken

⏱️ **Tijdbeheer:**
- Automatiseer waar mogelijk
- Gebruik templates
- Deel verantwoordelijkheden
- Batch werk`
            },
            {
                title: 'Advanced Tips',
                content: `💡 **AI Training Generator:** Gebruik AI voor snelle ideeen
💡 **Template Library:** Sla succesvolle trainingen op
💡 **Bulk Import:** Import hele groepen tegelijk
💡 **Automated Reports:** Schedule maandelijks rapport
💡 **Extensions:** Integrate met atletiek.nu
💡 **Mobile App:** Traag geen laptop naar trainingen
💡 **Sharing:** Betrek ouders in voortgang
💡 **Analytics:** Maak data-gestuurde besluiten`
            }
        ],
        nextDoc: 'quick-start',
        prevDoc: 'mobile-app'
    }
};

// Helper function to get all docs as a flat array
export function getAllDocs() {
    return docsCategories.flatMap(cat =>
        cat.docs.map(doc => ({
            ...doc,
            categoryId: cat.id,
            categoryTitle: cat.title
        }))
    );
}

// Get doc by slug
export function getDocBySlug(slug) {
    return docsContent[slug] || null;
}

// Get navigation info for a doc
export function getDocNavigation(slug) {
    const allDocs = getAllDocs();
    const currentIndex = allDocs.findIndex(d => d.slug === slug);

    if (currentIndex === -1) return { prev: null, next: null };

    return {
        prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
        next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null
    };
}

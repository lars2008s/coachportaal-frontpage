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

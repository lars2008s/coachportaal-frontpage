// Documentation content for Coach Portaal
// Organized by category with comprehensive guides

export const docsCategories = [
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
            { slug: 'organization', title: 'Organisatie Instellen' },
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
    // ============ GETTING STARTED ============
    'quick-start': {
        title: 'Snelstartgids',
        description: 'Zet Coach Portaal in 15 minuten op en ga meteen aan de slag.',
        readTime: '15 min',
        sections: [
            {
                title: 'Welkom bij Coach Portaal',
                content: `Coach Portaal is het alles-in-één platform voor atletiekcoaches en -trainers. In deze gids leer je de basis om snel productief te worden.`
            },
            {
                title: 'Wat ga je bereiken?',
                type: 'checklist',
                items: [
                    'Je coach-account aanmaken',
                    'Je organisatie instellen',
                    'Je eerste leden importeren',
                    'Je eerste training maken'
                ]
            },
            {
                title: 'Stap 1: Account Aanmaken',
                content: `Ga naar **dashboard.coachportaal.be** en klik op "Gratis Starten". Vul je e-mailadres in en verifieer je account via de bevestigingsmail.

**Tip:** Gebruik een zakelijk e-mailadres dat gekoppeld is aan je club voor eenvoudiger teambeheer.`
            },
            {
                title: 'Stap 2: Organisatie Instellen',
                content: `Na het inloggen word je gevraagd om je organisatie te configureren:

1. **Clubnaam** – De officiële naam van je atletiekclub
2. **Logo uploaden** – Zichtbaar in exports en op diploma's
3. **Leeftijdscategorieën** – Standaard Belgische VAL-categorieën of aangepast

Je kunt later altijd wijzigingen aanbrengen via Instellingen.`
            },
            {
                title: 'Stap 3: Leden Importeren',
                content: `Het snelste is om je ledenlijst te importeren via Excel:

1. Ga naar **Leden** in de sidebar
2. Klik op **Importeren** rechtsboven
3. Upload je Excel-bestand met kolommen: Naam, Geboortedatum, Geslacht, E-mail
4. Het systeem herkent automatisch de juiste leeftijdscategorieën

Je kunt ook handmatig leden toevoegen via de "Nieuw lid" knop.`
            },
            {
                title: 'Stap 4: Je Eerste Training',
                content: `Nu je leden hebt, kun je een training plannen:

1. Ga naar **Trainingen** → **Nieuwe Training**
2. Kies een datum en doelgroep
3. Gebruik de drag-and-drop builder om oefeningen toe te voegen
4. Laat de **AI Copilot** suggesties doen voor een gebalanceerde sessie

Gefeliciteerd! Je bent klaar om te starten met Coach Portaal.`
            }
        ],
        nextDoc: 'dashboard',
        prevDoc: null
    },

    'dashboard': {
        title: 'Dashboard Navigatie',
        description: 'Leer je weg te vinden in het centrale commandocentrum.',
        readTime: '8 min',
        sections: [
            {
                title: 'Overzicht',
                content: `Het Dashboard is je startpagina wanneer je inlogt. Het geeft een helikopterweergave van je organisatie en biedt snelle toegang tot alle functies.`
            },
            {
                title: 'Sidebar Navigatie',
                content: `Aan de linkerkant vind je de hoofdnavigatie met alle kernmodules:

| Icoon | Module | Beschrijving |
|-------|--------|--------------|
| 👥 | Leden | Ledenadministratie en groepsbeheer |
| 🏃 | Trainingen | Training bouwen en plannen |
| 📅 | Agenda | Kalenderweergave van alle activiteiten |
| 🏆 | Wedstrijden | Wedstrijdbeheer en resultaten |
| 🤖 | AI Assistent | Slimme hulp voor trainingsplanning |
| ⚙️ | Instellingen | Organisatie- en accountinstellingen |`
            },
            {
                title: 'Snelle Acties',
                content: `Rechtsboven in het dashboard vind je snelkoppelingen:

- **+ Nieuwe Training** – Maak direct een nieuwe training
- **+ Nieuw Lid** – Voeg snel een atleet toe
- **🔔 Meldingen** – Bekijk recente activiteit en updates
- **👤 Profiel** – Accountinstellingen en uitloggen`
            },
            {
                title: 'Activiteitsoverzicht',
                content: `Het centrale gedeelte toont:

- 📊 **Statistieken** – Aantal leden, trainingen deze week, aankomende wedstrijden
- 📋 **Vandaag** – Geplande trainingen en taken voor vandaag
- 🔔 **Recente Updates** – Laatste wijzigingen door teamleden`
            }
        ],
        nextDoc: 'first-training',
        prevDoc: 'quick-start'
    },

    'first-training': {
        title: 'Je Eerste Training',
        description: 'Stap-voor-stap door het maken van een complete trainingssessie.',
        readTime: '12 min',
        sections: [
            {
                title: 'Introductie',
                content: `In deze gids bouwen we samen een complete trainingssessie. Je leert de Training Builder te gebruiken en krijgt tips voor effectieve trainingsopbouw.`
            },
            {
                title: 'Training Aanmaken',
                content: `1. Ga naar **Trainingen** in de sidebar
2. Klik op **Nieuwe Training**
3. Vul de basisgegevens in:
   - **Titel** – bijv. "Snelheid & Coördinatie"
   - **Datum & Tijd** – wanneer de training plaatsvindt
   - **Doelgroep** – selecteer één of meerdere groepen
   - **Locatie** – optioneel, bijv. "Atletiekpiste A"`
            },
            {
                title: 'Oefeningen Toevoegen',
                content: `De Training Builder werkt met blokken die je kunt slepen:

**Warmup (15 min)**
- Inlopen 800m
- Dynamische stretching
- ABC-loopscholing

**Hoofddeel (30 min)**
- Sprints 4x30m
- Coördinatieladder
- Horden lage hoogte

**Cooling-down (10 min)**
- Uitlopen 400m
- Statisch stretchen

Sleep oefeningen uit de bibliotheek of typ zelf een beschrijving.`
            },
            {
                title: 'AI Copilot Gebruiken',
                content: `Weet je niet welke oefeningen te kiezen? Laat de AI helpen:

1. Klik op **🤖 AI Suggestie** rechtsboven in de builder
2. Beschrijf je doel: "Ik wil snelheid trainen voor benjamins"
3. De AI genereert een complete sessie die je kunt bewerken

Je kunt ook individuele oefeningen laten aanvullen of variaties opvragen.`
            },
            {
                title: 'Opslaan & Delen',
                content: `Als je training compleet is:

- **Opslaan als concept** – om later verder te werken
- **Publiceren** – maakt de training zichtbaar voor atleten (indien gekoppeld)
- **Exporteren** – download als PDF voor printen
- **Dupliceren** – hergebruik voor een andere datum`
            }
        ],
        nextDoc: 'members-overview',
        prevDoc: 'dashboard'
    },

    // ============ MEMBERS ============
    'members-overview': {
        title: 'Ledenlijst',
        description: 'Overzicht van het ledenbeheer en basisfuncties.',
        readTime: '6 min',
        sections: [
            {
                title: 'Ledenmodule',
                content: `De Ledenmodule is het hart van je administratie. Hier beheer je alle atleten, hun gegevens en leeftijdscategorieën.`
            },
            {
                title: 'Overzichtstabel',
                content: `De ledentabel toont in één oogopslag:

- **Naam** – Volledige naam van de atleet
- **Geboortedatum** – Automatische categorieberekening
- **Categorie** – Bijv. Pupillen, Benjamins, etc.
- **Groep** – Trainingsgroep indien ingedeeld
- **Wedstrijden** – Aantal competities dit seizoen
- **Status** – Actief, Inactief of Geschorst`
            },
            {
                title: 'Zoeken & Filteren',
                content: `Snel het juiste lid vinden:

- 🔍 **Zoekbalk** – Zoek op naam of e-mail
- 📊 **Filter op categorie** – Toon alleen benjamins, pupillen, etc.
- 📁 **Filter op groep** – Alleen leden van een specifieke trainingsgroep
- ✅ **Filter op status** – Actieve leden, inactieve leden`
            },
            {
                title: 'Lid Toevoegen',
                content: `Klik op **+ Nieuw Lid** en vul in:

1. **Voornaam & Achternaam** *(verplicht)*
2. **Geboortedatum** *(verplicht)* – bepaalt automatisch de categorie
3. **Geslacht** *(verplicht)* – voor correcte categorieën
4. **E-mailadres** – voor communicatie
5. **Telefoonnummer** – contactgegevens
6. **Groep** – wijs direct een trainingsgroep toe`
            }
        ],
        nextDoc: 'members-import',
        prevDoc: 'first-training'
    },

    'members-import': {
        title: 'Leden Importeren',
        description: 'Importeer je volledige ledenlijst via Excel of CSV.',
        readTime: '10 min',
        sections: [
            {
                title: 'Waarom Importeren?',
                content: `Als je veel leden hebt, is handmatig invoeren tijdrovend. Met de importfunctie kun je in één keer je volledige ledenlijst uploaden.`
            },
            {
                title: 'Ondersteunde Formaten',
                content: `Coach Portaal ondersteunt:

- **Excel (.xlsx, .xls)** – Aanbevolen
- **CSV (.csv)** – Met komma of puntkomma als scheidingsteken
- **Google Sheets** – Exporteer eerst als Excel`
            },
            {
                title: 'Bestandsstructuur',
                content: `Je bestand moet de volgende kolommen bevatten:

| Kolomnaam | Verplicht | Voorbeeld |
|-----------|-----------|-----------|
| Voornaam | ✅ Ja | Jan |
| Achternaam | ✅ Ja | Jansen |
| Geboortedatum | ✅ Ja | 15/03/2012 |
| Geslacht | ✅ Ja | M of V |
| E-mail | ❌ Nee | jan@email.be |
| Telefoon | ❌ Nee | 0471234567 |
| Groep | ❌ Nee | Benjamins A |

**Let op:** De eerste rij moet kolomkoppen bevatten.`
            },
            {
                title: 'Importproces',
                content: `1. Ga naar **Leden** → **Importeren**
2. Sleep je bestand of klik om te uploaden
3. **Kolomtoewijzing** – Koppel je kolommen aan de juiste velden
4. **Voorbeeld** – Controleer de eerste 5 rijen
5. **Validatie** – Het systeem meldt fouten zoals ontbrekende data
6. **Importeren** – Bevestig om alle leden toe te voegen

**Tip:** Je kunt bestaande leden updaten door hetzelfde e-mailadres te gebruiken.`
            }
        ],
        nextDoc: 'members-groups',
        prevDoc: 'members-overview'
    },

    'members-groups': {
        title: 'Groepen & Categorieën',
        description: 'Organiseer atleten in trainingsgroepen en leeftijdscategorieën.',
        readTime: '8 min',
        sections: [
            {
                title: 'Leeftijdscategorieën',
                content: `Coach Portaal berekent automatisch de correcte leeftijdscategorie op basis van geboortedatum. De standaard Belgische VAL-categorieën zijn:

| Categorie | Geboortejaren | Leeftijd |
|-----------|---------------|----------|
| Benjamins | 2016-2017 | 7-8 jaar |
| Pupillen | 2014-2015 | 9-10 jaar |
| Miniemen | 2012-2013 | 11-12 jaar |
| Cadetten | 2010-2011 | 13-14 jaar |
| Scholieren | 2008-2009 | 15-16 jaar |
| Junioren | 2006-2007 | 17-18 jaar |
| Seniors | 1987-2005 | 19-35 jaar |
| Masters | voor 1987 | 35+ jaar |`
            },
            {
                title: 'Trainingsgroepen',
                content: `Naast categorieën kun je eigen trainingsgroepen maken:

1. Ga naar **Leden** → **Groepen**
2. Klik op **+ Nieuwe Groep**
3. Geef een naam, bijv. "Sprint Dames"
4. Kies een kleur voor herkenning
5. Wijs leden toe aan de groep

Groepen zijn ideaal voor:
- Atleten met dezelfde trainer
- Wedstrijdteams
- Talentgroepen`
            },
            {
                title: 'Leden Indelen',
                content: `Er zijn twee manieren om leden in groepen te plaatsen:

**Individueel:**
1. Open het ledenprofiel
2. Klik op "Groep wijzigen"
3. Selecteer de juiste groep

**Bulk:**
1. Selecteer meerdere leden met de checkboxes
2. Klik op "Bulk acties" → "Groep toewijzen"
3. Kies de doelgroep`
            }
        ],
        nextDoc: 'training-builder',
        prevDoc: 'members-import'
    },

    // ============ TRAINING ============
    'training-builder': {
        title: 'Training Builder',
        description: 'De krachtige editor voor het samenstellen van trainingen.',
        readTime: '15 min',
        sections: [
            {
                title: 'Introductie',
                content: `De Training Builder is de kern van Coach Portaal. Hiermee stel je professionele trainingsschema's samen met een intuïtieve drag-and-drop interface.`
            },
            {
                title: 'Interface Overzicht',
                content: `De builder bestaat uit drie delen:

**Linker paneel: Oefeningen Bibliotheek**
- Zoek in honderden voorgeprogrammeerde oefeningen
- Filter op type: warming-up, techniek, kracht, etc.
- Maak eigen favorieten

**Midden: Training Canvas**
- Sleep oefeningen hierheen
- Organiseer in blokken (warming-up, hoofddeel, etc.)
- Pas duur en herhalingen aan

**Rechter paneel: Details**
- Bewerk geselecteerde oefening
- Voeg notities toe voor atleten
- Bekijk of voeg variaties toe`
            },
            {
                title: 'Trainingsblokken',
                content: `Elke training is opgebouwd uit blokken:

🟢 **Warming-up** – Voorbereiden van het lichaam
🔵 **Hoofddeel** – De kern van je training  
🟠 **Techniek** – Focus op bewegingskwaliteit
🔴 **Intensief** – Hoge belasting oefeningen
🟣 **Cooling-down** – Herstel en stretching

Klik op **+ Blok Toevoegen** om een nieuw blok in te voegen.`
            },
            {
                title: 'Oefeningen Bewerken',
                content: `Klik op een oefening om details aan te passen:

- **Naam** – Pas de titel aan
- **Duur** – Tijd in minuten of seconden
- **Sets & Herhalingen** – bijv. 3x10
- **Rustpauze** – Tijd tussen sets
- **Notities** – Extra instructies voor atleten
- **Video** – Link naar YouTube instructievideo`
            },
            {
                title: 'Templates Opslaan',
                content: `Bouw je regelmatig dezelfde structuur? Sla het op als template:

1. Maak je training compleet
2. Klik op **⚙️** → **Opslaan als Template**
3. Geef een naam, bijv. "Standaard Snelheidstraining"
4. Vind je templates in **Trainingen** → **Templates**

Templates bevatten de structuur, niet de datum of doelgroep – ideaal voor hergebruik!`
            }
        ],
        nextDoc: 'exercises',
        prevDoc: 'members-groups'
    },

    'exercises': {
        title: 'Oefeningen Bibliotheek',
        description: 'Ontdek de uitgebreide database met atletiekoefeningen.',
        readTime: '8 min',
        sections: [
            {
                title: 'De Bibliotheek',
                content: `Coach Portaal bevat een uitgebreide bibliotheek met honderden atletiekoefeningen. Elke oefening bevat instructies, doel, en vaak een video.`
            },
            {
                title: 'Categorieën',
                content: `Oefeningen zijn ingedeeld in:

🏃 **Looptechniek** – ABC-oefeningen, skipping, etc.
💪 **Kracht** – Lichaamsgewicht en met materiaal
🧘 **Mobiliteit** – Stretching en bewegelijkheid
⚡ **Snelheid** – Sprints, reactie, acceleratie
🎯 **Coördinatie** – Ladder, horden, bal
🏋️ **Plyometrie** – Sprongkracht training
🔄 **Warming-up** – Opwarmoefeningen
❄️ **Cooling-down** – Herstel en stretching`
            },
            {
                title: 'Zoeken & Filteren',
                content: `Vind snel de juiste oefening:

- 🔍 **Zoeken** – Typ om te zoeken op naam of beschrijving
- 📊 **Filter op categorie** – Toon alleen één type
- ⭐ **Favorieten** – Alleen je opgeslagen favorieten
- 🏃 **Filter op discipline** – Sprint, afstand, werpen, etc.`
            },
            {
                title: 'Eigen Oefeningen',
                content: `Je kunt ook eigen oefeningen toevoegen:

1. Klik op **+ Nieuwe Oefening**
2. Vul naam en beschrijving in
3. Kies een categorie
4. Voeg optioneel een instructievideo toe (YouTube/Vimeo)
5. Sla op – de oefening verschijnt in je bibliotheek

**Tip:** Maak variaties van bestaande oefeningen door ze te dupliceren en aan te passen.`
            }
        ],
        nextDoc: 'ai-copilot',
        prevDoc: 'training-builder'
    },

    'ai-copilot': {
        title: 'AI Copilot',
        description: 'Laat kunstmatige intelligentie je helpen met trainingsplanning.',
        readTime: '10 min',
        sections: [
            {
                title: 'Wat is AI Copilot?',
                content: `De AI Copilot is je slimme assistent die trainingsadviezen geeft op basis van je doel, doelgroep en beschikbare tijd. Het is geen vervanging voor je expertise, maar een hulpmiddel om sneller tot goede trainingen te komen.`
            },
            {
                title: 'Functies',
                content: `De AI Copilot kan:

✅ **Complete trainingen genereren** – Beschrijf je doel en krijg een voorstel
✅ **Oefeningen suggereren** – Vraag om alternatieven of aanvullingen
✅ **Progressie plannen** – Bouw een seizoensplan op
✅ **Variaties bedenken** – Maak dezelfde oefening leuker
✅ **Vragen beantwoorden** – Krijg uitleg over trainingsmethoden`
            },
            {
                title: 'Hoe Gebruiken?',
                content: `**In de Training Builder:**
1. Klik op **🤖 AI Suggestie**
2. Beschrijf wat je wilt trainen
3. Selecteer suggesties of genereer opnieuw

**In de Chat:**
1. Open de AI Assistent via de sidebar
2. Stel je vraag in natuurlijke taal
3. Ontvang direct antwoord of een trainingsvoorstel

**Voorbeeld prompts:**
- "Maak een 60-minuten training voor benjamins gericht op coördinatie"
- "Geef me 5 variaties van de kniehefloop"
- "Wat is een goede opbouw voor snelheidstraining bij miniemen?"`
            },
            {
                title: 'Tips voor Betere Resultaten',
                content: `Hoe specifieker je vraag, hoe beter het antwoord:

🎯 **Noem de doelgroep** – Leeftijdscategorie en niveau
⏱️ **Geef tijdsduur** – Hoeveel minuten heb je?
🎓 **Beschrijf het doel** – Techniek, snelheid, kracht, plezier?
📍 **Locatie** – Binnenshuis, piste, grasveld?
🔧 **Beschikbaar materiaal** – Pionnen, horden, gewichten?`
            }
        ],
        nextDoc: 'competitions',
        prevDoc: 'exercises'
    },

    // ============ COMPETITIONS ============
    'competitions': {
        title: 'Wedstrijdbeheer',
        description: 'Beheer wedstrijden en houd resultaten bij.',
        readTime: '10 min',
        sections: [
            {
                title: 'Wedstrijdmodule',
                content: `Met de Wedstrijdmodule kun je alle competities beheren: van clubwedstrijden tot officiële kampioenschappen. Houd prestaties bij en volg de progressie van je atleten.`
            },
            {
                title: 'Wedstrijd Aanmaken',
                content: `1. Ga naar **Wedstrijden** → **Nieuwe Wedstrijd**
2. Vul de basisgegevens in:
   - **Naam** – bijv. "PK Indoor Gent"
   - **Datum** – wanneer vindt het plaats
   - **Locatie** – waar is de wedstrijd
   - **Type** – Indoor, Outdoor, Cross, etc.
3. Klik op **Opslaan**`
            },
            {
                title: 'Deelnemers Toevoegen',
                content: `Voeg atleten toe die meedoen:

1. Open de wedstrijd
2. Klik op **+ Deelnemers Toevoegen**
3. Selecteer leden uit de lijst
4. Wijs disciplines toe per atleet
5. Resultaten kun je later invullen of importeren`
            },
            {
                title: 'Resultaten Bijhouden',
                content: `Na de wedstrijd kun je resultaten invoeren:

- **Handmatig** – Klik op een atleet en vul prestatie en plaats in
- **Importeren** – Haal resultaten op via de Chrome-extensie

Resultaten worden automatisch vergeleken met:
- Persoonlijke records (PR)
- Seizoensbest (SB)  
- Clubrecords

Bij een nieuw PR zie je een 🎉 icoon!`
            }
        ],
        nextDoc: 'results-import',
        prevDoc: 'ai-copilot'
    },

    'results-import': {
        title: 'Resultaten Importeren',
        description: 'Haal wedstrijdresultaten automatisch op van atletiek.nu.',
        readTime: '8 min',
        sections: [
            {
                title: 'Chrome Extensie',
                content: `De Coach Portaal Chrome-extensie maakt het importeren van resultaten kinderspel. Bezoek een wedstrijdpagina op atletiek.nu en importeer met één klik.`
            },
            {
                title: 'Extensie Installeren',
                content: `1. Open de Chrome Web Store
2. Zoek naar "Coach Portaal Import"
3. Klik op **Toevoegen aan Chrome**
4. Log in met je Coach Portaal account
5. Je bent klaar!`
            },
            {
                title: 'Resultaten Importeren',
                content: `1. Ga naar de wedstrijdpagina op **atletiek.nu**
2. Klik op het Coach Portaal icoon in je browser
3. De extensie herkent automatisch:
   - De wedstrijd
   - Jouw atleten (op basis van naam)
   - Hun resultaten en plaatsen
4. Klik op **Importeren**
5. De resultaten verschijnen direct in Coach Portaal`
            },
            {
                title: 'Handmatig Importeren',
                content: `Geen Chrome? Je kunt ook handmatig JSON importeren:

1. Ga naar de wedstrijd in Coach Portaal
2. Klik op **Importeren** → **JSON Upload**
3. Plak de JSON met resultaten
4. Het systeem valideert en toont een preview
5. Bevestig om te importeren

**JSON formaat:**
\`\`\`json
{
  "athlete": "Jan Jansen",
  "discipline": "100m",
  "result": "12.34",
  "place": 3,
  "wind": "+1.2"
}
\`\`\``
            }
        ],
        nextDoc: 'club-records',
        prevDoc: 'competitions'
    },

    'club-records': {
        title: 'Clubrecords',
        description: 'Automatische tracking van clubrecords per discipline.',
        readTime: '6 min',
        sections: [
            {
                title: 'Automatische Tracking',
                content: `Coach Portaal houdt automatisch clubrecords bij. Wanneer een atleet een prestatie neerzet die beter is dan het huidige record, wordt dit automatisch geregistreerd.`
            },
            {
                title: 'Recordoverzicht',
                content: `Bekijk alle clubrecords via **Wedstrijden** → **Clubrecords**

Het overzicht toont:
- **Discipline** – bijv. 100m, Verspringen
- **Categorie** – Benjamins M, Pupillen V, etc.
- **Houder** – Naam van de recordhouder
- **Prestatie** – Het behaalde resultaat
- **Datum** – Wanneer het record gevestigd werd
- **Wedstrijd** – Waar het gebeurde`
            },
            {
                title: 'Records Beheren',
                content: `Soms wil je handmatig ingrijpen:

**Historisch record toevoegen:**
1. Klik op **+ Record Toevoegen**
2. Selecteer discipline en categorie
3. Voer de prestatie en atleet in
4. Voeg datum en bron toe

**Record verwijderen:**
- Bij foutieve invoer kun je een record verwijderen
- Het systeem zoekt automatisch het volgende beste resultaat`
            },
            {
                title: 'Recordcertificaten',
                content: `Vier nieuwe records met een officieel certificaat:

1. Ga naar het record
2. Klik op **Certificaat Genereren**
3. Pas de layout aan (kleuren, logo)
4. Download als PDF of deel direct

Ideaal om uit te printen en op te hangen in de kantine!`
            }
        ],
        nextDoc: 'organization',
        prevDoc: 'results-import'
    },

    // ============ ADMIN ============
    'organization': {
        title: 'Organisatie Instellen',
        description: 'Configureer je club en pas instellingen aan.',
        readTime: '8 min',
        sections: [
            {
                title: 'Organisatie-instellingen',
                content: `Na het aanmaken van je account kun je je organisatie volledig naar wens configureren. Ga naar **Instellingen** → **Organisatie**.`
            },
            {
                title: 'Basisgegevens',
                content: `Stel de kerngegevens van je club in:

- **Clubnaam** – Officiële naam
- **Logo** – Upload je clublogo (PNG of SVG)
- **Adres** – Locatie van de club
- **Website** – Externe clubwebsite
- **E-mail** – Algemeen contactadres
- **BTW-nummer** – Voor facturatie (optioneel)`
            },
            {
                title: 'Seizoensinstelling',
                content: `Coach Portaal werkt met seizoenen:

- **Huidig seizoen** – bijv. 2024-2025
- **Seizoensstart** – Standaard 1 september
- **Seizoenseinde** – Standaard 31 augustus

**Tip:** Begin elk seizoen met verse statistieken door een nieuw seizoen te starten. Historische data blijft altijd bewaard.`
            },
            {
                title: 'Leeftijdscategorieën',
                content: `Pas de leeftijdscategorieën aan naar je federatie:

1. Ga naar **Instellingen** → **Categorieën**
2. Standaard zijn Belgische VAL-categorieën ingesteld
3. Bewerk namen of geboortejaren indien nodig
4. Voeg eventueel eigen categorieën toe

**Let op:** Wijzigingen gelden voor nieuwe berekeningen. Bestaande leden worden automatisch geüpdatet.`
            }
        ],
        nextDoc: 'users-roles',
        prevDoc: 'club-records'
    },

    'users-roles': {
        title: 'Gebruikers & Rollen',
        description: 'Beheer teamleden en hun toegangsrechten.',
        readTime: '10 min',
        sections: [
            {
                title: 'Teamleden',
                content: `Coach Portaal is ontworpen voor samenwerking. Nodig andere trainers en bestuursleden uit om samen te werken in één omgeving.`
            },
            {
                title: 'Rollen',
                content: `Er zijn drie standaardrollen:

| Rol | Rechten |
|-----|---------|
| **Admin** | Volledige toegang, kan alles beheren |
| **Trainer** | Trainingen, leden en wedstrijden |
| **Volunteer** | Alleen lezen, beperkte acties |

**Admin** kan leden uitnodigen en rollen toewijzen.`
            },
            {
                title: 'Gebruiker Uitnodigen',
                content: `1. Ga naar **Instellingen** → **Gebruikers**
2. Klik op **+ Gebruiker Uitnodigen**
3. Vul het e-mailadres in
4. Kies een rol
5. De persoon ontvangt een uitnodigingsmail

De uitgenodigde maakt een account aan en heeft direct toegang tot de organisatie.`
            },
            {
                title: 'Toegang Beheren',
                content: `Je kunt op elk moment:

- **Rol wijzigen** – Upgrade of downgrade rechten
- **Toegang intrekken** – Verwijder een gebruiker
- **Activiteit bekijken** – Zie wat iemand heeft gedaan (audit log)

Verwijderde gebruikers verliezen direct toegang, maar hun eerdere bijdragen blijven bewaard.`
            }
        ],
        nextDoc: 'invite-codes',
        prevDoc: 'organization'
    },

    'invite-codes': {
        title: 'Uitnodigingscodes',
        description: 'Maak eenvoudig grote groepen gebruikers lid.',
        readTime: '5 min',
        sections: [
            {
                title: 'Wat zijn Uitnodigingscodes?',
                content: `Uitnodigingscodes maken het eenvoudig om meerdere mensen tegelijk toegang te geven. Deel één code met je hele trainersteam of bestuursleden.`
            },
            {
                title: 'Code Aanmaken',
                content: `1. Ga naar **Instellingen** → **Uitnodigingscodes**
2. Klik op **+ Nieuwe Code**
3. Configureer:
   - **Naam** – bijv. "Trainers 2024"
   - **Rol** – Welke rechten krijgen gebruikers
   - **Limiet** – Max aantal keer te gebruiken (optioneel)
   - **Vervaldatum** – Wanneer verloopt de code (optioneel)
4. Kopieer de gegenereerde code`
            },
            {
                title: 'Code Delen',
                content: `Deel de code via:

- **WhatsApp/Telegram** – Stuur direct in de groepschat
- **E-mail** – Verstuur naar meerdere ontvangers
- **Mondeling** – Tijdens een teammeeting

De ontvanger gaat naar **dashboard.coachportaal.be**, maakt een account aan, en voert de code in bij "Organisatie Joinen".`
            },
            {
                title: 'Codes Beheren',
                content: `In het overzicht zie je:

- 📊 **Aantal keer gebruikt**
- 👥 **Wie heeft de code gebruikt**
- ⏰ **Status** – Actief, Verlopen of Vol

Je kunt codes **uitschakelen** of **verwijderen** wanneer nodig.`
            }
        ],
        nextDoc: 'troubleshooting',
        prevDoc: 'users-roles'
    },

    // ============ SUPPORT ============
    'troubleshooting': {
        title: 'Probleemoplossing',
        description: 'Oplossingen voor veelvoorkomende problemen.',
        readTime: '10 min',
        sections: [
            {
                title: 'Veelvoorkomende Problemen',
                content: `Hier vind je oplossingen voor de meest gemelde problemen. Staat je vraag er niet tussen? Neem contact op via support@coachportaal.be.`
            },
            {
                title: 'Inlogproblemen',
                content: `**Ik kan niet inloggen**

1. Controleer of je het juiste e-mailadres gebruikt
2. Klik op "Wachtwoord vergeten" voor een reset-link
3. Check je spamfolder voor de verificatie-e-mail
4. Probeer een andere browser of incognitomodus

**Ik krijg "Account niet gevonden"**

- Je hebt mogelijk nog geen account. Klik op "Registreren".
- Je account kan zijn verwijderd. Neem contact op met de admin.`
            },
            {
                title: 'Import Problemen',
                content: `**Mijn Excel wordt niet herkend**

- Controleer of de eerste rij kolomkoppen bevat
- Gebruik datumnotatie DD/MM/JJJJ
- Vermijd lege rijen middenin het bestand
- Sla op als .xlsx (niet als .xls)

**Leden worden dubbel geïmporteerd**

- Het systeem matcht op e-mailadres
- Zorg dat bestaande leden hetzelfde e-mailadres hebben
- Gebruik "Update bestaande leden" optie`
            },
            {
                title: 'Prestatieproblemen',
                content: `**De app is traag**

1. Ververs de pagina (Ctrl+F5 / Cmd+Shift+R)
2. Sluit andere zware tabs
3. Controleer je internetverbinding
4. Probeer een andere browser (Chrome aanbevolen)

**Wijzigingen worden niet opgeslagen**

- Check of je een stabiele verbinding hebt
- Wacht even en probeer opnieuw
- Kopieer je tekst voordat je de pagina verlaat`
            },
            {
                title: 'Chrome Extensie',
                content: `**De extensie importeert niet**

1. Zorg dat je bent ingelogd in de extensie
2. Ververs de atletiek.nu pagina
3. Klik opnieuw op het extensie-icoon
4. Check of de wedstrijd al bestaat in Coach Portaal

**Atleten worden niet herkend**

- De namen moeten exact overeenkomen
- Controleer spelling en hoofdletters
- Voeg eventueel handmatig toe na import`
            }
        ],
        nextDoc: 'faq',
        prevDoc: 'invite-codes'
    },

    'faq': {
        title: 'Veelgestelde Vragen',
        description: 'Antwoorden op de meest gestelde vragen.',
        readTime: '8 min',
        sections: [
            {
                title: 'Algemeen',
                content: `**Is Coach Portaal gratis?**
Ja, er is een gratis versie met basisfunctionaliteit. Voor geavanceerde features zoals AI Copilot en onbeperkte leden is er een betaald abonnement.

**Kan ik Coach Portaal offline gebruiken?**
Nee, Coach Portaal vereist een internetverbinding. We werken aan offline ondersteuning voor de toekomst.

**Op welke apparaten werkt Coach Portaal?**
Coach Portaal werkt in elke moderne browser op desktop, tablet en mobiel. Er is geen aparte app – bookmark de website voor snelle toegang.`
            },
            {
                title: 'Privacy & Data',
                content: `**Waar wordt mijn data opgeslagen?**
Alle data wordt opgeslagen op beveiligde servers in de EU, conform AVG/GDPR-wetgeving.

**Kan ik mijn data exporteren?**
Ja, je kunt op elk moment je volledige data exporteren via Instellingen → Export. Je ontvangt een ZIP met alle leden, trainingen en resultaten.

**Wat gebeurt er als ik mijn account verwijder?**
Je persoonlijke account en toegang worden verwijderd. Als je admin bent, moet je eerst de organisatie overdragen aan iemand anders.`
            },
            {
                title: 'Functionaliteit',
                content: `**Kan ik meerdere organisaties beheren?**
Ja, je kunt lid zijn van meerdere organisaties. Wissel eenvoudig via het dropdown-menu linksboven.

**Ondersteunt Coach Portaal andere sporten?**
Coach Portaal is specifiek ontworpen voor atletiek. De leeftijdscategorieën, disciplines en trainingsmodules zijn hierop afgestemd.

**Komen er nieuwe features?**
Absoluut! We werken continu aan verbeteringen. Bekijk onze blog voor aankondigingen of stuur je suggesties naar feedback@coachportaal.be.`
            }
        ],
        nextDoc: 'contact',
        prevDoc: 'troubleshooting'
    },

    'contact': {
        title: 'Contact',
        description: 'Neem contact met ons op voor hulp of feedback.',
        readTime: '3 min',
        sections: [
            {
                title: 'Ondersteuning',
                content: `Heb je hulp nodig? We staan voor je klaar!

📧 **E-mail:** support@coachportaal.be
⏰ **Reactietijd:** Binnen 24 uur op werkdagen

Beschrijf je probleem zo gedetailleerd mogelijk:
- Wat probeerde je te doen?
- Welke foutmelding kreeg je?
- Welke browser en apparaat gebruik je?`
            },
            {
                title: 'Feedback & Suggesties',
                content: `We horen graag wat je vindt van Coach Portaal!

📧 **E-mail:** feedback@coachportaal.be

Of gebruik het feedbackformulier in de app:
1. Klik op je profiel rechtsboven
2. Selecteer "Feedback geven"
3. Vul het formulier in

Alle suggesties worden bekeken en de beste ideeën worden geïmplementeerd!`
            },
            {
                title: 'Socials',
                content: `Volg ons voor updates en tips:

🐦 **Twitter/X:** @coachportaal
📘 **Facebook:** /coachportaal.be
📸 **Instagram:** @coachportaal

We delen regelmatig trainingstips, feature-updates en succesverhalen van gebruikers.`
            }
        ],
        nextDoc: null,
        prevDoc: 'faq'
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

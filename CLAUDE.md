# Claude Stavros nettside

## Om prosjektet
Statisk HTML/CSS/JS-nettside, ingen rammeverk. Designet er kopiert i layout/seksjonsoppsett/bildeplassering fra [jankristian.no](https://www.jankristian.no/) (referansenettside for en kiropraktor), men fargeskjemaet er endret fra rødt/bordeaux til **blått/hvitt**, og alt identifiserende innhold (firmanavn, bilder, kontaktinfo, sitater) er erstattet med tydelige plassholdere siden originalinnholdet tilhører en annen, reell virksomhet.

**Filstruktur:**
- [index.html](index.html) — forsiden (header/nav, hero, bio-teaser, artikkel-teaser, sitatkarusell, footer)
- [tjenester.html](tjenester.html) — tjenesteliste (bilde + liste med "+"-ikoner) + CTA
- [priser.html](priser.html) — priser gruppert i kategorier
- [kontakt.html](kontakt.html) — kontaktinfo + skjema (skjemaet er ikke koblet til noen mottaker ennå, se `script.js`)
- [biografi.html](biografi.html) — full bio-tekst + punktliste "Jeg hjelper deg med"
- [aktuelt.html](aktuelt.html) — full blogglisting (6 plassholderartikler + "Eldre innlegg")
- [helsepersonell.html](helsepersonell.html) — infoside for samarbeidspartnere
- [booking.html](booking.html) — plassholder for bookingsystem (embed kommer senere)
- [style.css](style.css) — designtokens øverst (`:root`), navy/hvit/lyseblå palett
- [script.js](script.js) — header scroll-state, mobilmeny, sitatkarusell (kun forsiden), kontaktskjema-placeholder
- [images/](images/) — 18 bilder lastet inn (se README.md for detaljer og status på hvilke som gjenstår å koble inn)

**Sidestruktur:** Alle undersider deler samme header/footer og navigasjon (nav-lenkene peker til egne HTML-filer, ikke ankere). Aktiv side vises med understrek via `aria-current="page"` på nav-lenken. Header er solid (hvit) som standard på alle sider; kun forsiden (`<body class="has-hero">`) har den gjennomsiktige hero-varianten som blir hvit ved scroll (`.is-scrolled`).

**Forsidens seksjonsrekkefølge (identisk med referansen):**
1. Fast/sticky header — transparent over hero, blir hvit med navy tekst ved scroll (`.is-scrolled`)
2. Hero — fullskjerms bildeplassholder med mørk navy-gradient, stor stablet overskrift, cream/hvit pilleknapp
3. Bio-teaser — bilde + tekst side om side, "Hvem er [Navn]?", lenke til biografi.html
4. "Aktuelt nå"-teaser — 3-kolonners artikkelgrid + "Flere artikler"-lenke til aktuelt.html
5. Sitatkarusell — mørk navy bakgrunn, autoplay hvert 6. sekund, piler + dots
6. Footer — mørk navy, logo + 3 lenkekolonner (Lenker/Kontakt/Sosiale medier)

**Plassholdere som MÅ byttes ut før publisering:**
- Firmanavn "Ditt Firma" (header, footer, `<title>`)
- Hero-overskrift "OVERSKRIFT SOM FANGER OPPMERKSOMHET"
- Bio-tekst, "Hvem er [Navn]?"
- 3 artikkelkort (bilder + titler)
- 4 sitater i karusellen + kildeangivelser
- Kontaktinfo i footer (telefon, e-post, adresse, åpningstider)
- Alle `.placeholder-image`-blokker → egne bilder (bytt `<div class="... placeholder-image">` med `<img>`-tagger)

**Lokal visning:** `python3 -m http.server 8743` fra prosjektmappen, deretter åpne `http://localhost:8743`. (Merk: å åpne `index.html` direkte som `file://` fungerer ikke pålitelig i forhåndsvisnings-nettleseren her — bruk en lokal server.)

**Live nettside:** https://stavroslitsos.github.io/stavroslitsos.com/ (GitHub Pages, aktiv)
**GitHub-repo:** https://github.com/stavroslitsos/stavroslitsos.com (eget, separat repo — **ikke** samme som `sykkelutleie`-repoet til sykkelsiden). Ingen lokal git-auth satt opp (`git push` feiler med "could not read Username"); filene ble lastet opp via GitHub sin nettbaserte "Upload files"-side, kjørt gjennom nettleser-automatisering (Claude in Chrome).
**Custom domain:** koblet opp og live på **https://stavroslitsos.com** (HTTPS aktiv, 2026-07-23). github.io-adressen omdirigerer hit.

## Status og fast regel for økter

Prosjektstatusen ("hva som er gjort" / "neste steg") holdes **kun** i
[README.md](README.md), ikke her — README.md er maskin-uavhengig og leses av
enhver økt/verktøy på enhver datamaskin (Dropbox-synket), mens CLAUDE.md kun
lastes automatisk av Claude Code selv.

Når brukeren sier «nå avslutter jeg økten» (eller lignende formulering), skal
"Status"-seksjonen i README.md **alltid** oppdateres med hva som ble gjort og
hva som gjenstår / neste steg. Når en ny økt starter (på samme eller annen
maskin), les README.md og fortsett arbeidet derfra uten at brukeren trenger å
forklare noe på nytt.

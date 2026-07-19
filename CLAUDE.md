# Claude Stavros nettside

## Om prosjektet
Statisk HTML/CSS/JS-nettside, ingen rammeverk. Designet er kopiert i layout/seksjonsoppsett/bildeplassering fra [jankristian.no](https://www.jankristian.no/) (referansenettside for en kiropraktor), men fargeskjemaet er endret fra rødt/bordeaux til **blått/hvitt**, og alt identifiserende innhold (firmanavn, bilder, kontaktinfo, sitater) er erstattet med tydelige plassholdere siden originalinnholdet tilhører en annen, reell virksomhet.

**Filstruktur:**
- [index.html](index.html) — hele siden (header/nav, hero, "hvem er vi"-seksjon, artikkelgrid, sitatkarusell, footer)
- [style.css](style.css) — designtokens øverst (`:root`), navy/hvit/lyseblå palett
- [script.js](script.js) — header scroll-state, mobilmeny, sitatkarusell (autoplay + piler/dots)
- [images/](images/) — tom, venter på brukerens egne bilder

**Seksjonsrekkefølge (identisk med referansen):**
1. Fast/sticky header — transparent over hero, blir hvit med navy tekst ved scroll (`.is-scrolled`)
2. Hero — fullskjerms bildeplassholder med mørk navy-gradient, stor stablet overskrift, cream/hvit pilleknapp
3. Bio-seksjon — bilde + tekst side om side, "Hvem er [Navn]?"
4. "Aktuelt nå" — 3-kolonners artikkelgrid + "Flere artikler"-lenke
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

## Status

**Sist oppdatert:** 2026-07-19

**Gjort:**
- Analyserte jankristian.no i detalj (DOM-struktur, seksjonstemaer, fargepalett via CSS custom properties, bilde-/seksjonsplassering).
- Bygget hele nettsiden med identisk layout/seksjonsrekkefølge, men i blå/hvit fargeprofil istedenfor rød/bordeaux.
- Verifiserte i nettleser: hero, bio-seksjon, artikkelgrid (3 kolonner), sitatkarusell (autoplay + navigasjon) og footer rendrer og fungerer korrekt.
- Opprettet lokalt git-repo (`git init`), ingen GitHub-repo opprettet ennå.

**Neste steg:**
- Brukeren fyller inn eget innhold (firmanavn, tekst, kontaktinfo) og bytter ut plassholderbildene.
- Opprette GitHub-repo og publisere via GitHub Pages — samme fremgangsmåte som ble brukt for sykkelutleie-siden (`Claude nettside sykkel`-prosjektet): ingen lokal git-auth er satt opp, så opplasting skjer via GitHub sin web-opplasting i nettleseren, ikke `git push`. Se `../Claude nettside sykkel/CLAUDE.md` for detaljert fremgangsmåte (registrering av repo, custom domain via Domeneshop, DNS-oppsett).

## Fast regel for økter

Når brukeren sier «nå avslutter jeg økten» (eller lignende formulering), skal Status-seksjonen over **alltid** oppdateres med:
- Hva som ble gjort i økten.
- Hva som gjenstår / neste steg.

Når en ny økt starter, les Status-seksjonen og fortsett arbeidet derfra uten at brukeren trenger å forklare noe på nytt.

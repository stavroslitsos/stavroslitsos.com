# Stavros nettside

Statisk HTML/CSS/JS-nettside, ingen rammeverk. Designet er kopiert i
layout/seksjonsoppsett/bildeplassering fra [jankristian.no](https://www.jankristian.no/)
(referansenettside for en kiropraktor), men fargeskjemaet er endret fra
rødt/bordeaux til **blått/hvitt**, og alt identifiserende innhold (firmanavn,
bilder, kontaktinfo, sitater) er erstattet med tydelige plassholdere siden
originalinnholdet tilhører en annen, reell virksomhet.

Dette prosjektet ligger i Dropbox (`Programmer/Claude/Claude Code prosjekter/Claude Stavros nettside`)
og kan derfor åpnes og videreføres fra flere datamaskiner. Se
["Status – hvor arbeidet ble stoppet sist"](#status--hvor-arbeidet-ble-stoppet-sist)
nederst i denne filen før du starter en ny økt.

## Filstruktur

- `index.html` — hele siden (header/nav, hero, "hvem er vi"-seksjon, artikkelgrid, sitatkarusell, footer)
- `style.css` — designtokens øverst (`:root`), navy/hvit/lyseblå palett
- `script.js` — header scroll-state, mobilmeny, sitatkarusell (autoplay + piler/dots)
- `images/` — 18 bilder lastet inn (trolig fra en annen datamaskin, ikke ennå
  committet til git eller koblet inn i `index.html`) + 2 macOS alias-filer
  (`PrP behandling-alias`, `Promo-alias`) som er ødelagte snarveier til mapper
  i en annen, delt Dropbox-plassering (`1. House of Health/Bilder og promo/…`)
  — disse to kan trygt slettes, de peker ikke til noe som fungerer på tvers av
  maskiner

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

## Lokal visning

```bash
python3 -m http.server 8743
```

Åpne deretter `http://localhost:8743`. (Å åpne `index.html` direkte som
`file://` fungerer ikke pålitelig i forhåndsvisnings-nettleseren i Claude Code
— bruk en lokal server.)

## Live nettside og repo

- **Live:** https://stavroslitsos.github.io/stavroslitsos.com/ (GitHub Pages, aktiv)
- **GitHub-repo:** https://github.com/stavroslitsos/stavroslitsos.com (eget, separat repo —
  **ikke** samme som `sykkelutleie`-repoet til sykkelsiden)
- **Git-auth:** ikke satt opp lokalt (`git push` feiler med "could not read Username").
  Filer må derfor lastes opp via GitHub sin nettbaserte "Upload files"-side
  (kjørt gjennom nettleser-automatisering/Claude in Chrome), inntil lokal
  git-auth eventuelt settes opp.
- **Custom domain:** ikke satt opp ennå — kjører foreløpig på standard
  `github.io`-adressen.

## Faste regler for Claude (gjelder på alle maskiner, uavhengig av økt)

Disse reglene ligger normalt i Claude sitt minnesystem, men det er maskin-/
installasjonsspesifikt. Siden dette prosjektet skal kunne videreføres fra
flere datamaskiner via Dropbox, er reglene skrevet ned her også slik at en ny
økt/maskin følger samme standard uten at Stavros må forklare dem på nytt.

1. **Når en økt avsluttes** ("nå avslutter jeg økten" e.l.), skal
   "Status"-seksjonen under **alltid** oppdateres med hva som ble gjort og
   hva som gjenstår / neste steg.
2. **Når en ny økt starter** (på samme eller annen maskin), les
   "Status"-seksjonen under og fortsett arbeidet derfra uten at brukeren
   trenger å forklare noe på nytt.
3. Denne README.md er kilden til sannhet for prosjektstatus på tvers av
   maskiner. `CLAUDE.md` inneholder samme regel som en pekepinn for Claude
   Code spesifikt, men selve statusen skal kun holdes oppdatert **her**, for
   å unngå at de to filene kommer ut av synk.

## Status – hvor arbeidet ble stoppet sist

**Sist oppdatert: 2026-07-22**

**Gjort:**
- Analyserte jankristian.no i detalj og bygget hele nettsiden i blå/hvit
  fargeprofil, som egne undersider (`index.html`, `tjenester.html`,
  `priser.html`, `kontakt.html`, `biografi.html`, `aktuelt.html`,
  `helsepersonell.html`, `booking.html`) som deler header/footer/nav.
- **Fylt inn reelt innhold på nesten alle sider** (gjort i en økt på en annen
  datamaskin, 21.–22.07): firmanavn/branding endret fra "Ditt Firma" til
  "Stavros Litsos", ekte tekst i header/footer/bio/kontakt/tjenester/
  helsepersonell-siden, ekte adresser (Oslo – Fjordalléen 16, og Nesbru),
  ekte e-post (`stav.li@hotmail.com`), ekte bookinglenker til Aspit
  (helse.aspit.no for Oslo, timebestilling.aspit.no for Nesbru), ekte priser,
  SEO-metadata (title/description/OG/Twitter-tags + JSON-LD
  `MedicalBusiness`-schema) og `sitemap.xml`/`robots.txt`.
- Alle `.placeholder-image`-divs er byttet ut med ekte `<img>`-tagger som
  peker til `images/web/` (hero, portrett, biografi-portrett, tjenester,
  6 aktuelt-bilder).
- Kjøpt eget domene **stavroslitsos.com** (hos Domeneshop) og lagt til
  `CNAME`-fil i repoet.
- Mye av dette ble lastet opp **direkte via GitHub sitt nettgrensesnitt**
  (ikke via lokal `git push`, siden lokal git-auth fortsatt ikke er satt
  opp) — GitHub-repoet (`origin/main`) har derfor en helt egen, mye lengre
  commit-historikk (mange "Create X" / "Update X"-commits) enn den lokale
  `.git`-historikken i denne Dropbox-mappen (som stopper på `67eb25c`).
  **Lokal git og GitHub-repoet har med andre ord divergert** — de må
  avstemmes (se "Neste steg").

**Ikke ferdig / kjente hull:**
- **Bildene i `images/web/` er ikke pushet til GitHub** (bekreftet med
  `git ls-tree -r origin/main` — ingen `images/`-mappe der). Siden på GitHub
  Pages refererer til `images/web/hero.jpg` osv., så **når domenet kobles
  opp vil bildene mangle** med mindre `images/`-mappen lastes opp også.
- **Custom domain er ikke koblet opp ennå**: `https://stavroslitsos.com`
  viser Domeneshop sin "domenet er parkert"-side — DNS peker ikke mot
  GitHub Pages ennå (mangler A-records/CNAME hos Domeneshop + aktivering i
  GitHub Pages-innstillingene).
- **Gjenstående plassholdertekst** (bekreftet med `grep` i alle `.html`-filer):
  - Footer-tagline "Kort beskrivelse eller slagord for firmaet." på **alle**
    sider.
  - Forsidens bio-teaser: lede-teksten under "Hvem er Stavros Litsos?" er
    fortsatt plassholder (selve biografi.html-siden har derimot ekte tekst).
  - Forsidens 3 artikkelkort-overskrifter ("Overskrift på første/andre/
    tredje artikkel eller nyhet").
  - Alle 6 overskriftene på `aktuelt.html` ("Overskrift på artikkel eller
    nyhet 1–6") — bildene for disse er koblet til, inkl. to temaer det ligger
    ekstra kildebilder til i `images/prp/` og `images/ultralyd/` (trolig
    tiltenkt artikler om PRP-behandling og ultralydveiledet injeksjon).
  - Alle 4 sitatene i testimonial-karusellen på forsiden, inkl. kilde.
  - Sosiale medier-lenker i footer (LinkedIn/Facebook/Instagram) peker
    fortsatt til `#`.
  - Ingen telefonnummer er lagt inn noe sted.
- `images/`-mappen har fortsatt 2 ubrukelige macOS alias-filer
  (`PrP behandling-alias`, `Promo-alias`) som peker til en ødelagt sti i en
  annen, delt Dropbox-mappe (`1. House of Health/…`) — kan slettes.
- Kontaktskjemaet på `kontakt.html` er ikke koblet til noen mottaker ennå
  (har en synlig merknad om dette + anbefaling om Formspree/Web3Forms).

**Neste steg (i anbefalt rekkefølge):**
1. **Avstem lokal git mot GitHub** — avgjør om GitHub-versjonen (nyere,
   flere små commits) eller den lokale arbeidsmappen skal være
   utgangspunktet, siden historikken har divergert. Innholdet i
   arbeidsmappen her ser ut til å stemme godt overens med det som er live.
2. **Last opp `images/`-mappen til GitHub** slik at bildene faktisk vises på
   siden.
3. **Sett opp DNS hos Domeneshop** mot GitHub Pages og aktiver custom domain
   i repo-innstillingene, så `stavroslitsos.com` slutter å vise
   parkeringssiden.
4. Fyll inn de gjenstående plassholderne over (footer-tagline, forsidens
   bio-lede og artikkelkort-titler, 6 aktuelt-artikler, 4 sitater, sosiale
   medier-lenker, evt. telefonnummer).
5. Koble kontaktskjemaet til en reell mottaker.
6. Slett de 2 ubrukelige alias-filene i `images/`.

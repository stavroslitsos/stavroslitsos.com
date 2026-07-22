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

- **Live (deling):** https://stavroslitsos.github.io/stavroslitsos.com/
  (GitHub Pages, aktiv — dette er lenken som deles med venner/bekjente for
  tilbakemelding i denne fasen)
- **GitHub-repo:** https://github.com/stavroslitsos/stavroslitsos.com (eget, separat repo —
  **ikke** samme som `sykkelutleie`-repoet til sykkelsiden)
- **Git-auth (2026-07-22):** nå satt opp lokalt via GitHub CLI. `gh` er
  installert i `~/.local/bin/gh` (last ned på nytt fra
  github.com/cli/cli/releases hvis mappen mangler på en annen maskin), og
  autentisert med `gh auth login --web` mot kontoen `stavroslitsos` (token i
  macOS-keyring, scope `repo`). **`git push origin main` fungerer nå direkte**
  — ikke lenger behov for GitHub sin web-opplasting/nettleser-automatisering.
  Kjør `export PATH="$HOME/.local/bin:$PATH"` først hvis `git`/`gh` ikke finner
  credential-helperen.
- **Custom domain:** kjøpt (`stavroslitsos.com`, Domeneshop) men **bevisst
  ikke koblet opp ennå** — CNAME-fila er fjernet fra repoet med vilje slik at
  siden serveres på `github.io`-adressen i delingsfasen. Kobles opp helt til
  slutt (se "Neste steg").
- **Bildehåndtering i git:** kun `images/web/` versjoneres (bildene siden
  faktisk bruker). Råmateriale/kildebilder ellers i `images/` og lokal
  `.claude/`-config er `.gitignore`-t.

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
- Kjøpt eget domene **stavroslitsos.com** (hos Domeneshop).
- **2026-07-22 – git avstemt, autentisering satt opp, bilder pushet, side
  live på github.io:**
  - Satt opp ordentlig git-auth lokalt (GitHub CLI, se "Live nettside og
    repo" over). Slutt på web-opplasting.
  - Løste den divergerte historikken: arbeidsmappen (Dropbox-synket) viste
    seg å være **nyere** enn GitHub (ekte bilder i alle 6 aktuelt-kort,
    "Henvisning"-navn, canonical-URLer mot stavroslitsos.com), mens GitHub lå
    bak. Kjørte `git reset --mixed origin/main` (beholdt arbeidsmappen, la meg
    på toppen av den ekte GitHub-historikken) og laget én ren commit
    (`8aef649`). Sikkerhetskopi av gammel lokal historikk ligger i grenen
    `backup-local-pre-sync`.
  - Pushet `images/web/` (10 bilder) til GitHub — bildene vises nå live.
  - **Fjernet MAGNAT/House of Health-logoer** fra bildene med presis
    inpainting (ikke sladding): `portrett.jpg`, `tjenester.jpg`,
    `aktuelt-1.jpg` (MAGNAT) og `biografi-portrett.jpg` (House of Health).
  - **Byttet hero-bilde** til et ultralydundersøkelse-bilde av Stavros
    (`images/web/hero.jpg`, fra `IMG_5406.heic`). Det gamle "armer ut i
    trening"-bildet (MAGNAT fjernet) ble flyttet til tjenester-siden
    (`tjenester.jpg`).
  - Fjernet `CNAME`-fila → GitHub Pages tømte custom domain-innstillingen
    automatisk, og siden serveres nå på
    **https://stavroslitsos.github.io/stavroslitsos.com/** (verifisert live,
    alle bilder laster med HTTP 200). Dette er delingslenken.
  - **Endret hero-overskriften på forsiden** (commit `898c392`): fjernet det
    dobbelte navnet (stod både i header-logoen og som kjempeoverskrift).
    Hero viser nå rollen **FAGANSVARLIG MANUELLTERAPEUT** som stor overskrift,
    med spesialiseringene under i mindre, lesbar punktliste (ny
    `.hero-credentials`-stil i style.css): "Spes. klinisk ortopedisk medisin
    (OMI)", "Spes. ultralyddiagnostikk og injeksjonsbehandling", "Klinikk i
    Oslo og Nesbru". Verifisert på desktop + mobil.
- **2026-07-22 (kveld) – ren synk-sjekk, ingen nye endringer:** bekreftet at
  denne maskinen (Dropbox-synket arbeidsmappe) er 100 % i synk med
  `origin/main` (`git diff origin/main` tomt). Alt arbeidet fra økten på den
  andre maskinen samme dag (se punktet over) var allerede hentet inn via
  Dropbox+git — ingenting å committe. Viste brukeren skjermbilder av live
  siden (forside, biografi) til bekreftelse. Ingen kodeendringer denne
  økten.

**Ikke ferdig / kjente hull:**
- **Custom domain er bevisst ikke koblet opp ennå** (venter til delingsfasen
  er over). `https://stavroslitsos.com` viser fortsatt Domeneshop sin
  "parkert"-side. For å koble opp senere: legg CNAME-fila tilbake (innhold
  `stavroslitsos.com`), sett DNS hos Domeneshop (A-records mot GitHub Pages
  sine IP-er + `www` CNAME mot `stavroslitsos.github.io`), og legg inn custom
  domain i repoets Pages-innstillinger.
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
  annen, delt Dropbox-mappe (`1. House of Health/…`) — kan slettes. (Ligger
  utenfor git nå, siden kun `images/web/` versjoneres.)
- Kontaktskjemaet på `kontakt.html` er ikke koblet til noen mottaker ennå
  (har en synlig merknad om dette + anbefaling om Formspree/Web3Forms).

**Neste steg:**
1. **Del github.io-lenken** med venner/bekjente og samle tilbakemeldinger.
2. Fyll inn de gjenstående plassholderne over (footer-tagline, forsidens
   bio-lede og artikkelkort-titler, 6 aktuelt-artikler, 4 sitater, sosiale
   medier-lenker, evt. telefonnummer).
3. Koble kontaktskjemaet til en reell mottaker.
4. **Til slutt:** koble opp custom domain `stavroslitsos.com` (se "kjente
   hull" over for fremgangsmåte).
5. (Valgfritt opprydding) slett de 2 ubrukelige alias-filene i `images/`.

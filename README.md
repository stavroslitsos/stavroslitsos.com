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

- **Live:** **https://stavroslitsos.com** (custom domain, HTTPS, aktiv).
  github.io-adressen (https://stavroslitsos.github.io/stavroslitsos.com/)
  omdirigerer nå hit.
- **Engelsk versjon:** https://stavroslitsos.com/en/
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
- **Custom domain (2026-07-23): KOBLET OPP OG LIVE.** Siden kjører nå på
  **https://stavroslitsos.com** (HTTPS, sertifikat godkjent, "Enforce HTTPS"
  på). DNS hos Domeneshop peker til GitHub Pages: 4 A-oppføringer
  (185.199.108–111.153), 4 AAAA (2606:50c0:8000–8003::153) på apex, og
  `www` CNAME → `stavroslitsos.github.io`. CNAME-fila (`stavroslitsos.com`)
  ligger i repoet. `www` og github.io-adressen omdirigerer (301) til apex.
  Domenet hadde ingen aktiv e-post (null-MX), så ingenting ble påvirket der.
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
4. **LOGO-REGEL (gitt av Stavros 2026-07-23):** All logo/branding som vises i
   bilder og som **ikke** er House of Health, skal **alltid** redigeres bort –
   enten til ren flate (inpainting) eller erstattes med House of Health-logo.
   Gjelder f.eks. **MAGNAT** (tidligere arbeidsgiver) og klesmerker som
   **Under Armour**. House of Health er nåværende klinikk og skal beholdes.
   *Hvorfor:* andre virksomheters branding på Stavros' personlige nettside ser
   uprofesjonelt ut; delvis leger og kritiske kolleger besøker siden.
   *Hvordan:* sjekk hvert nytt bilde i `images/web/` for ikke-HoH-logoer
   (skjorte, vegg, utstyr) og fjern dem med presis inpainting (OpenCV
   `INPAINT_TELEA` er brukt så langt – se tidligere bilder som mal).
5. **Bump CSS-versjonen ved CSS-endringer:** alle sider lenker til
   `style.css?v=N`. GitHub Pages cacher i 10 min, så uten versjonsbump tror
   Stavros at endringen "ikke slo inn". Øk N (f.eks. `?v=4`) på **alle 16
   sider** (8 norske + 8 i `en/`) hver gang `style.css` endres.

## Status – hvor arbeidet ble stoppet sist

**Sist oppdatert: 2026-07-23**

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
- **2026-07-23 – stor batch med 14 innsamlede oppgaver fra brukeren
  (commits `35081d7` og `fb7d9f6`):**
  1. **Hero-tekst** gjort mindre og forankret nederst til venstre.
  2. **Hero-bilde** re-beskåret (mer utzoomet) så ultralydskjerm/plakat
     dominerer og hodet blir mindre (`images/web/hero.jpg`, øvre bånd av
     `IMG_5406`).
  3. **Bio-teaser (forsiden):** fjernet "Hvem er vi?"-etiketten, fylt inn
     ekte bio-tekst (fra House of Health-profilen).
  4. **Sitatkarusell:** 10 ekte pasientsitater hentet fra Legelisten
     (snitt 5,0★), kilde er nå "Legelisten"-lenke til profilen. JS lagde
     dots automatisk.
  5. **Footer-adresser:** Oslo v/House of Health (Fjordalléen 16,
     Spaces-bygget 4. et.) + Nesbru v/Nesbruklinikken (Holmqvistveien 1).
     Også oppdatert på kontakt- og booking-sidene for konsistens.
  6. **Footer sosiale medier:** Instagram, TikTok, LinkedIn, House of Health,
     Legelisten med ekte lenker. **Facebook fjernet** (brukeren ga ingen
     lenke – vurderes ved sluttgjennomgang).
  7. **Engelsk språkversjon:** hele siden oversatt til engelsk i `en/`-mappe
     (8 sider), med **NO/EN-språkbryter** i headeren på alle sider,
     hreflang-alternater og engelske URLer i `sitemap.xml`.
  8. **Responsivt:** verifisert på mobil (375px) og nettbrett (768px) –
     hero, mobilmeny og innholdssider fungerer.
  9. **Aktuelt-siden:** kort 4–6 (var 3 like bilder) fikk distinkte bilder
     (PRP-blodplate, ultralyd av kne, trening). 6 foreløpige overskrifter
     lagt inn (brukeren fyller inn selve innleggene senere).
  10. **Tjenester-siden:** byttet to tjenestelinjer → "Diagnostisk ultralyd
      og injeksjonsbehandling" og "PRP – injeksjonsbehandling med blodplater".
  11. **Meny-rekkefølge:** "Kontakt" flyttet bakerst (etter Henvisning, før
      Booking) i header + footer-Lenker, på alle sider.
  12. **Biografi:** "Manuellterapeut i Oslo og Nesbru" → "Fagansvarlig
      Manuellterapeut"; nytt portrettbilde (`Bilde 09.01.2023`).
  13. **Prisside:** full omstrukturering etter mønster fra jankristian.no
      (bilde til venstre, Tjenester + Injeksjoner til høyre) med nye priser
      og en tydelig **disclosure-seksjon** om medikamentell behandling /
      kortisoninjeksjoner (compliance-hensyn).
  14. **Tjenester-siden utvidet** med en original seksjon om diagnostisk
      ultralyd og injeksjonsbehandling (dekker samme temaer som
      osteraasklinikken.no, men skrevet fra bunnen for å unngå plagiat).
  - **Fyllte også inn footer-tagline** ("Fagansvarlig manuellterapeut i Oslo
    og Nesbru.") som erstattet plassholderen på alle sider.
- **2026-07-23 (senere samme dag) – finpuss, domene og delingskort:**
  - **Nytt hero-bilde:** byttet fra ultralyd-bildet (tatt bakfra) til
    **skjelett-undersøkelsen** (`IMG_5290`) der Stavros vises tydelig
    forfra. Han står til høyre, så hero-teksten ligger nede til venstre uten
    å dekke ham. `object-position: 70% 32%` holder ansiktet i bildet.
  - **Logo-regel innført (fast regel, se under):** fjernet både **MAGNAT**-
    og **Under Armour**-logo fra hero-skjorta, og regenererte `aktuelt-1.jpg`
    fra samme rensede kilde.
  - **Menyendringer:** "Aktuelt" → **"Faglig"**, "Aktuelt nå" →
    **"Faglig informasjon"**, "Biografi" → **"Om meg"** flyttet først i
    menyen. Ny rekkefølge: `Om meg · Faglig · Tjenester · Priser ·
    Henvisning · Kontakt`. Speilet på engelsk (About me · Articles · …).
  - **Prisside:** erstattet trykkbølge-bildet med **to temabilder** – ultralyd
    ved siden av "Tjenester", ultralydveiledet injeksjon ved siden av
    "Injeksjoner" (ny `.price-block-row`-layout, responsiv).
  - **Hero-tillegg:** "hos House of Health" lagt inn rett under overskriften
    (før punktlisten) for å presisere hvor han er fagansvarlig – deretter
    gjort ~15 % mindre og litt lettere etter ønske.
  - **CUSTOM DOMAIN KOBLET OPP** – se eget punkt under "Live nettside og repo".
  - **Delingskort (Open Graph) fikset:** siden hadde **ingen `og:image`**, så
    Facebook gjettet seg fram til et bilde og mistet det. La inn fast
    delingsbilde `images/web/share.jpg` (1200×630, laget fra hero) +
    `og:image:width/height/alt` og `twitter:card=summary_large_image` på alle
    16 sider. Delingstittelen (`og:title`/`twitter:title`) på forsiden er
    forkortet til **"Stavros Litsos – Manuellterapeut"** (engelsk: "Stavros
    Litsos – Manual Therapist"), mens `<title>` beholder "…i Oslo og Nesbru"
    for nettleserfane og lokal SEO. Verifisert i Facebook Sharing Debugger:
    kortet viser stort bilde + kort tittel.
  - **Cache-versjon på CSS:** `style.css?v=3` på alle sider, fordi GitHub
    setter 10 min cache og brukeren opplevde at endringer "ikke slo inn".
    **Husk å bumpe versjonen (`?v=4`, `?v=5` …) ved fremtidige CSS-endringer**
    så brukeren ser dem umiddelbart.

**Viktig funn: Messenger viser ikke bilde i delingskortet (ikke en feil på siden)**
Brukeren opplevde at lenken delt i Messenger ikke viste bilde. Grundig
feilsøking viste at **nettsiden er korrekt**: Facebooks egen Sharing Debugger
henter og viser det komplette kortet med bilde og kort tittel, og
`facebookexternalhit`-roboten får servert alle og:-taggene (bildet svarer
HTTP 200 som image/jpeg). Årsaken er at samtalen i Messenger er
**ende-til-ende-kryptert** – da kan ikke Metas servere lese meldingen og
lager derfor bare et minimalt tekstkort med domenenavnet. Bildet vises
normalt i Facebook-innlegg, LinkedIn, X, WhatsApp, e-post og som regel i
Messenger sin mobilapp. **Dette kan ikke fikses i koden.**

**Avgjørelser tatt underveis som brukeren bør vurdere ved sluttgjennomgang:**
- **Facebook** fjernet fra sosiale medier (ingen lenke oppgitt). Legg til
  igjen hvis ønskelig.
- **Biografi-portrettet** (`Bilde 09.01.2023`) har "House of Health"-logo i
  øvre høyre hjørne + på skjorta. Brukeren sa "ingen redigering", og HoH er
  nåværende klinikk, så det står urørt – men kan renses som de andre bildene
  hvis ønskelig.
- **Aktuelt-bilder til kort 4–6:** to er stockbilder (PRP-blodprøve fra
  `images/prp/`, ultralyd fra `images/ultralyd/`), ett er Stavros' eget
  (renset treningsbilde). Bytt gjerne når ekte innlegg skrives.
- **Testimonials på engelsk versjon** er oversatt fra de norske
  originalene (ikke ordrett kildesitat lenger, men lesbart for engelske
  besøkende).
- Bio-teaseren på forsiden bruker den fulle House of Health-bio-teksten;
  kan kortes ned hvis den blir for lang som "teaser".

**Ikke ferdig / kjente hull:**
- **Aktuelt-innleggene er fortsatt "tomme":** overskriftene er på plass
  (6 stk), men "Les mer"-lenkene peker til `#` – det finnes ingen faktiske
  artikkelsider ennå. Brukeren skriver innleggene selv senere.
- **Ingen telefonnummer** er lagt inn noe sted (kun e-post + bookinglenker).
- **"Ofte stilte spørsmål" / FAQ** i footer peker fortsatt til `#` (ingen
  FAQ-side finnes).
- Kontaktskjemaet på `kontakt.html` er ikke koblet til noen mottaker ennå
  (har en synlig merknad om dette + anbefaling om Formspree/Web3Forms).
- `images/`-mappen har fortsatt 2 ubrukelige macOS alias-filer
  (`PrP behandling-alias`, `Promo-alias`) — kan slettes. (Ligger utenfor git
  nå, siden kun `images/web/` versjoneres.)

**Neste steg:**
1. **Del lenken** – siden er live og ferdig for deling:
   norsk **https://stavroslitsos.com**, engelsk **https://stavroslitsos.com/en/**.
   Samle tilbakemeldinger fra venner/bekjente.
2. Gå gjennom "Avgjørelser tatt underveis" over og si fra om noe skal endres.
3. **Skriv de faktiske aktuelt-innleggene** (6 overskrifter er på plass) og
   koble "Les mer"-lenkene til ekte artikkelsider.
4. Koble kontaktskjemaet til en reell mottaker; evt. legg til telefonnummer.
5. Vurder FAQ-side (footer-lenken peker til `#` i dag).
6. (Valgfritt opprydding) slett de 2 ubrukelige alias-filene i `images/`.

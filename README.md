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
- **Git-auth:** satt opp via GitHub CLI (`gh`) på **to** maskiner nå (sist
  2026-07-22, og på nytt 2026-07-25 etter at det viste seg at `gh` ikke var
  installert på denne maskinen). `gh` installeres uten sudo til
  `~/.local/bin/gh` (last ned zip fra github.com/cli/cli/releases, arm64 for
  Apple Silicon), og autentiseres med `gh auth login --web` mot kontoen
  `stavroslitsos` (token i macOS-keyring, scope `repo`). **`git push origin
  main` fungerer nå direkte fra begge maskiner** — ikke lenger behov for
  GitHub sin web-opplasting/nettleser-automatisering. Kjør
  `export PATH="$HOME/.local/bin:$PATH"` først (lagt til i `~/.zshrc`) hvis
  `git`/`gh` ikke finner credential-helperen på en ny maskin/økt. **Husk:**
  hvis en ny maskin har gjort lokale commits mens en annen maskin har
  pushet via nettleser-metoden, kan historikken divergere — løs med
  `git merge -X theirs origin/main` (ikke `reset --hard`) og verifiser med
  `git diff HEAD origin/main` at innholdet faktisk stemmer overens først.
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

## Versjoner av nettsiden (to klinikker vs. kun House of Health)

Prosjektet har to parallelle versjoner. **Live-siden bygges alltid fra
`main`.**

| Versjon | Hvor | Hva |
|---|---|---|
| **Versjon 2: Kun House of Health** | grenen `main` (+ `v2-house-of-health`) | Viser visuelt kun Oslo/House of Health. SEO i `<head>` nevner fortsatt begge steder. **Dette er det som ligger LIVE nå (publisert 2026-07-23).** |
| **Versjon 1: To klinikker** | taggen `v1-to-klinikker` | Frosset øyeblikksbilde som viser både Oslo og Nesbru. Kan gjenopprettes byte for byte: `git reset --hard v1-to-klinikker && git push --force origin main`. |

**Bakgrunnen for Versjon 2** (Stavros' begrunnelse): unngå å blande offentlig
og privat praksis på samme side; "fagansvarlig" stemmer bare for Oslo, ikke
Nesbru; og prisene gjelder privatpraksis, ikke Nesbru som har avtalerefusjon –
noe kolleger har reagert på.

**Hva som ble endret i Versjon 2** (35 synlige steder over 16 sider): footer-
slagord, Nesbru-adresse i footer, hero-punktet ("Klinikk i Oslo og Nesbru" →
"Aker Brygge, Oslo"), Nesbru-kortet på booking-siden og Nesbru-blokka på
kontakt-siden. Booking-gridet ble gjort adaptivt (`auto-fit`) så ett kort
vises pent. `<head>`/SEO er bevisst urørt.

**Kommandoer:**
```bash
git checkout v2-house-of-health   # jobb videre på Versjon 2 (påvirker ikke live)
git checkout main                 # tilbake til Versjon 1 (= live)
git checkout v1-to-klinikker      # se det frosne øyeblikksbildet av Versjon 1
```

**Publisere Versjon 2 (når/hvis Stavros vil):**
```bash
git checkout main && git merge v2-house-of-health && git push origin main
```

**Angre og gå tilbake til Versjon 1 – helt identisk:**
```bash
git checkout main && git reset --hard v1-to-klinikker && git push --force origin main
```
Taggen `v1-to-klinikker` er et frosset øyeblikksbilde og endres aldri, så
Versjon 1 kan alltid gjenopprettes byte for byte.

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
6. **EXIF-ORIENTERING ved bildebehandling (bug rettet 2026-07-24):** Når du
   åpner et kildebilde med PIL (`Image.open`), **bruk alltid først**
   `PIL.ImageOps.exif_transpose(im)` før crop/resize. Mange kamerabilder
   (f.eks. `images/ultralyd bilder_K015296.JPG`, EXIF-orientation 8) lagrer
   pikslene i landskap + et rotasjonsflagg. Finder/Preview viser dem riktig,
   men PIL leser rå-piksler uten å rotere → bildet ble stående/rotert feil på
   siden. `sips -s format jpeg` baker inn orienteringen (trygt), men PIL alene
   gjør det ikke. Regel: aldri manuell rotasjon – bruk exif_transpose så
   pikslene matcher det Finder viser.

## Status – hvor arbeidet ble stoppet sist

**Sist oppdatert: 2026-08-06**

**Økt 2026-08-06 (nyeste – les denne først):**
- **Hero-teksten endret (NO+EN):** overskriften er nå kun
  **MANUELLTERAPEUT** på én linje, med *«Fagansvarlig hos House of Health»*
  som undertekst (EN: *MANUAL THERAPIST* / «Lead therapist at House of
  Health»). Tidligere sto «FAGANSVARLIG MANUELLTERAPEUT» over to linjer.
- **6 nye fagartikler skrevet (NO+EN = 12 sider) – ALLE SOM SKJULTE
  UTKAST**, se «Publiseringskø» under. Meniskskade, frossen skulder,
  tennisalbue, plantar fasciitt, hoppekne og trochanter bursitt.
- **TRE NYE FASTE REGLER gitt av Stavros denne økten** (også lagret i
  Claudes minnesystem, `article_sourcing_and_seo_rules.md`):
  1. **Gradvis publisering.** Ikke alt som er ferdigskrevet skal ut med én
     gang. Ferdige, ikke-publiserte artikler ligger som *skjulte utkast*:
     HTML-fila finnes i repoet, men er (a) ikke lenket fra `aktuelt.html`,
     `en/aktuelt.html` eller forsidene, (b) ikke i `sitemap.xml`, og (c)
     har `<meta name="robots" content="noindex, nofollow">`. Stavros
     slipper ut ca. **én i måneden**.
  2. **Kun anerkjente tidsskrifter.** Alle artikler skal bygge på forskning
     fra BMJ, Nature, Frontiers, NEJM, JAMA, Lancet, Cochrane o.l., pluss
     Stavros' egne kliniske innspill som han spesifiserer. **Aldri gjett
     på en referanse** – forfatter, tidsskrift, årstall og tall skal
     verifiseres med websøk før de skrives inn. Siden leses av leger og
     kritiske kolleger; en oppdiktet referanse ville vært skadelig.
  3. **Emneord på alle artikler.** Implementert som en synlig
     «Emneord»-rad med nøkkelord-chips nederst i artikkelen + `keywords`
     i JSON-LD. Bevisst **ikke** bokstavelige `#hashtags` – de gir ingen
     Google-effekt og ser uprofesjonelt ut på en klinisk side. Retrofittet
     på alle 8 allerede publiserte artikler (16 filer, NO+EN).
- **6 nye thumbnails prosessert** til `images/web/aktuelt-9.jpg` t.o.m.
  `aktuelt-14.jpg` (3:2, 1400×933, exif_transpose først). Ingen av disse
  er lenket noe sted ennå siden artiklene er skjult.
- Alle 12 nye sider er verifisert lokalt: gyldig JSON-LD, `noindex` til
  stede, emneord + kildeliste + språkbytte på plass, ikke i sitemap, ikke
  lenket noe sted.

### Publiseringskø (skjulte utkast – ferdig skrevet, ikke publisert)

Alle seks ligger klare i repoet med `noindex`. **Slik publiserer du én:**
(1) fjern `<meta name="robots" content="noindex, nofollow">` fra både
NO- og EN-fila, (2) legg inn artikkelkortet øverst i `aktuelt.html` og
`en/aktuelt.html` med riktig dato og bilde, (3) bytt inn i forsidens
3-korts-visning i `index.html` + `en/index.html`, (4) legg til begge
URL-ene i `sitemap.xml`, (5) kryss av under.

| # | Artikkel (NO) | Fil (slug) | Foreslått bilde | Publisert |
|---|---|---|---|---|
| 1 | Meniskskade – rehabilitering eller operasjon? | `meniskskade-rehabilitering-eller-operasjon` | `aktuelt-13.jpg` (PRP/ultralyd kne) | ☐ |
| 2 | Frossen skulder – hvorfor timing av behandlingen avgjør | `frossen-skulder-behandling` | `aktuelt-10.jpg` (konsultasjon skulderanatomi) | ☐ |
| 3 | Tennisalbue – hvorfor kortison sjelden er svaret | `tennisalbue-behandling` | `aktuelt-11.jpg` (trykkbølge albue) | ☐ |
| 4 | Plantar fasciitt – hælsmerter som krever tålmodighet | `plantar-fasciitt-behandling` | `aktuelt-12.jpg` (gangbilde klinikk) | ☐ |
| 5 | Hoppekne – senen som trenger belastning, ikke hvile | `hoppekne-patellar-tendinopati` | `aktuelt-9.jpg` (ultralyd kne) | ☐ |
| 6 | Smerter på utsiden av hoften – ikke alltid «slimposebetennelse» | `trochanter-bursitt-hoftesmerter` | `aktuelt-14.jpg` (hoftemobilisering) | ☐ |

Bildeforslagene er ikke låst – bytt gjerne. Alle seks bildene ligger
allerede ferdig beskåret i `images/web/`.

**Verifiserte kilder brukt i de seks artiklene** (alle sjekket mot
PubMed/tidsskrift denne økten): Kise m.fl. *BMJ* 2016;354:i3740 · Berg
m.fl. *BJSM* 2025;59(2):91–98 · Rangan m.fl. *Lancet*
2020;396(10256):977–989 (UK FROST) · Aly m.fl. *BJSM* 2015;49(16):1042–9 ·
Sun m.fl. *AJSM* 2017;45(9):2171–2179 · Coombes m.fl. *JAMA*
2013;309(5):461–469 · Xu m.fl. *AJSM* 2024;52(10):2646–2656 · Rathleff
m.fl. *Scand J Med Sci Sports* 2015;25(3):e292–e300 · Li m.fl. *Heliyon*
2024;10(21):e39171 · Mellor m.fl. *BMJ* 2018;361:k1662 (LEAP).

**Én ærlig nyansering som er bevisst bevart i teksten:** Stavros' kliniske
innspill var at PRP virker der kortison ikke gjør det, for *både*
tennisalbue og plantar fasciitt. Forskningen støtter dette godt for
tennisalbue, men er svakere for plantar fasciitt – der slår PRP kortison
ved 3 og 6 måneder, men uten sikker forskjell ved 1 og 12 måneder.
Plantar fasciitt-artikkelen sier dette rett ut framfor å overselge, siden
siden leses av leger og kritiske kolleger.

- Commit denne økten: `d587519`.

**Økt 2026-07-30:**
- **Ny fagartikkel publisert: «Smerte er ikke et skademåler» / EN: «Pain Is
  Not a Damage Meter»** (`smerte-er-ikke-et-skademaler.html` + `en/`).
  Egen norsk tekst (ikke oversatt fra kilder) om moderne smerteforskning –
  IASPs reviderte smertedefinisjon (2020), hvorfor bildediagnostikk viser
  anatomi og ikke smerte (med tall fra en stor systematisk oversikt om
  symptomfrie personer), biopsykososiale faktorer, hvorfor kommunikasjon
  om funn har betydning, og at bedring handler om mer enn å reparere vev.
  Samme mal/struktur som tidligere artikler (eyebrow → H1 → ingress → 5
  delkapitler → "Slik jobber jeg"-boks → CTA). Lagt inn øverst på
  Faglig-siden og i forsidens 3-korts-visning (NO+EN), og i sitemap.xml.
  Stavros ga eksplisitt positiv tilbakemelding på både tekst og bildevalg.
- **Ny fast regel (fra Stavros): hver artikkel skal ha et helt nytt,
  ubrukt thumbnail-bilde** — aldri gjenbruke et bilde som allerede vises
  et annet sted på siden. Lagt inn som fast regel i minnesystemet.
- **Grundig gjennomgang av hele `images/`-mappen** (alle rå kildebilder,
  MD5-sjekket for duplikater, kryssjekket mot faktisk bruk i HTML-en).
  Fant bl.a. at "Eksempel bilde.jpg" og "Stavros.jpg" er identiske filer,
  og full oversikt over hvilke rå kildebilder som allerede er brukt.
  **Viktig presisering fra Stavros underveis:** *alt* i `images/`-mappen
  (unntatt `images/web/`, som er "allerede brukt"-markøren) skal regnes
  som fritt tilgjengelig råmateriale – også bilder med gammel
  arbeidsgiver-logo (MAGNAT, Under Armour, "Nesbru Fysio- og
  Manuellterapi AS") eller video-stillbilder. De skal renskes opp
  (logofjerning/beskjæring) og brukes, ikke ekskluderes. Full,
  detaljert oversikt over hvert enkelt bilde og status ligger i
  minnesystemet (`article_thumbnail_image_rule.md`), ikke gjengitt her
  siden den endrer seg raskt.
- **Fikset feil bilde på McKenzie-artikkelen:** kortet for
  "McKenzie-metoden for rygg- og nakkeplager" (09.07.2026) brukte et
  trykkbølgebehandlings-bilde (feil metode). Byttet først til et
  nakkebehandlings-bilde, og deretter til `images/mcKenzie metoden.jpg`
  (et bilde Stavros selv valgte og la i mappen – hender som gir manuelt
  trykk på korsryggen), beskåret fra bredformat til sidens 3:2-mal.
  Endelig bilde: `images/web/aktuelt-8.jpg`, med oppdatert alt-tekst
  (NO+EN) på forsiden og Faglig-siden.
- Commits denne økten: `b093e5b` (ny artikkel), `800d774` (McKenzie-bilde
  v1), `cfa904c` (McKenzie-bilde v2, Stavros' eget valg).

**Økt 2026-07-27:**
- **Nyhetsbrev-abonnement satt opp via MailerLite (gratis, 14-dagers trial —
  se "viktig" under).** Stavros opprettet selv MailerLite-kontoen (Claude kan
  ikke opprette kontoer for brukeren, kun styre selve oppsettet etterpå).
  Embed-koden ble hentet ut fra MailerLite-editoren, og fullstendig redesignet
  (farger/fonter/radius/spacing) til å matche sidens navy/hvit/lyseblå palett,
  uten å røre den underliggende funksjonelle koden (dobbelt opt-in-skjema,
  suksess/feil-toggling). Lagt til nederst på Faglig-siden (NO + EN) og
  senere også **på forsiden, rett under "Flere artikler"-lenken** (etter
  eksplisitt ønske fra Stavros om bedre synlighet for besøkende som ikke går
  via Faglig-siden). Lagt til en kort oppfordring under hovedteksten: "Har du
  forslag til temaer? Send meg gjerne en e-post." — kortet ned til én linje
  med egen, litt mindre/kursiv stil etter at den først brakk over to linjer.
  Justerte også selve boks-tittelen ("Få beskjed når jeg publiserer nytt
  fagstoff") til å få plass på én linje (boks-bredde 700→760px, tittel
  maks-fontstørrelse 1.9rem→1.65rem).
- **Debugget "ingen bekreftelsesepost"-problem:** rotårsak var at MailerLite
  automatisk markerer kontoeierens egen e-post (samme som innlogging) som
  "verifisert via manual" og hopper over bekreftelsesmailen — ikke en feil i
  sidens integrasjon. Bekreftet ved å fjerne testabonnenten `stav.li@hotmail.com`
  og melde på `stavros.litsos@gmail.com` via det ekte, live skjemaet — riktig
  "Unconfirmed"-status og fungerende dobbelt opt-in-flyt.
- **Sendt første nyhetsbrev** ("Faglig nyhetsbrev #1 – Manuellterapeut vs.
  kiropraktor osv.", artikkelen fra 24.07) til de 2 bekreftede abonnentene
  (`stavros.litsos@gmail.com` og `helenebjerke@yahoo.com` — sistnevnte en
  ukjent, allerede bekreftet abonnent som Stavros selv godkjente å inkludere).
- **Bygget en gjenbrukbar artikkel-teaser-e-postmal** i MailerLite
  ("Artikkel-teaser (bilde + tekst + knapp)" under My templates): tittel +
  thumbnail-bilde fra artikkelen + kort teaser-tekst + navy CTA-knapp
  ("Read the full article") + navy footer med kontakt/sosiale medier/
  avmelding — samme fargepalett som nettsiden. Testet med ekte test-e-post
  til `stav.li@hotmail.com` i Outlook — renderte korrekt (bilde, tekst og
  knapp alt synlig). Denne malen bør gjenbrukes for fremtidige
  artikkel-kunngjøringer i stedet for å bygges fra bunnen.
- **VIKTIG – fast regel gitt av Stavros:** Nyhetsbrev-e-poster skal **som
  standard være på norsk**. Engelsk er kun en språkversjon av selve
  *nettsiden* (`en/`-sidene) — ikke noe som skal sendes som egen e-post til
  abonnenter, med mindre Stavros eksplisitt ber om det.
- **VIKTIG – MailerLite er på 14-dagers gratis trial** (startet 2026-07-27).
  Følg med på om Stavros må oppgradere til betalt plan for at sending skal
  fortsette å fungere etter trial-perioden.
- **MailerLite kontostiler (Brand styles) satt til sidens fargepalett:**
  primær `#0D2B46` (navy), sekundær `#2D6CDF` (blue-accent), heading
  `#0D2B46`, tekst `#4D5F7A`, kant `#DBE7F9`, bakgrunn `#EEF3FB` — så alle
  fremtidige maler/skjemaer/landingssider i MailerLite arver riktig
  merkevare-utseende automatisk, uten å måtte settes manuelt hver gang.
- **Domene-autentisering (SPF + DKIM) fullført for stavroslitsos.com i
  MailerLite** — "Sending domains"-status viser nå **"Authenticated"**
  (grønt). 3 nye DNS-poster lagt til hos Domeneshop (kun additive, rørte
  ikke eksisterende A/AAAA/CNAME for selve nettsiden, ingen konflikt siden
  domenet ikke hadde noen eksisterende TXT/MX-poster fra før):
  - CNAME `litesrv._domainkey` → `litesrv._domainkey.mlsend.com`
  - TXT `@` → `v=spf1 a mx include:_spf.mlsend.com ?all`
  - TXT `@` → `mailerlite-domain-verification=76ab217829b9aaed41a3b12f433fc2f0908dfdc0`
  Bedrer sjansen for at nyhetsbrev havner i innboks fremfor spam.
  Verifisert direkte mot Googles DNS (8.8.8.8) og i MailerLite-dashbordet.
  **Merk (nyttig for neste økt):** Claude ble blokkert av en automatisk
  sikkerhetsklassifiserer fra å skrive direkte i kontobekreftelses- og
  DNS-datafelt selv med eksplisitt tillatelse fra Stavros i chatten — måtte
  gi Stavros de eksakte verdiene og la ham selv skrive dem inn/lagre. Dette
  er en per-sesjon-begrensning, ikke noe som kan omgås; regn med samme
  mønster ved fremtidige kontoinnstillinger/DNS-endringer.
- Håndtert MailerLite sin automatiske "Getting started"-e-post (så ekte ut
  som phishing pga. Outlook Safe Links-innpakkede lenker, men er en helt
  vanlig, ufarlig onboarding-mail — Safe Links pakker inn *alle* lenker i
  Outlook, ikke bare mistenkelige). Sjekket status direkte i
  MailerLite-dashbordet i stedet for å klikke lenkene i selve mailen.
- Commits denne økten: `449ef78`, `5b5aca7`, `dfcfb1d`, `eae262b`, `e36be18`.

**Økt 2026-07-25:**
- **Besøksstatistikk satt opp — Cloudflare Web Analytics** på alle 30 sider
  (15 norske + 15 engelske, inkl. de 6 nye Faglig-artiklene). Valgt fordi det
  er gratis, ikke bruker cookies/fingerprinting, og derfor ikke krever
  cookie-samtykke-banner (relevant for en helsepersonell-side under norsk
  personvernlovgivning) — i motsetning til Google Analytics. Satt opp via
  manuelt JS-snippet (Stavros var selv innlogget i Cloudflare-dashbordet;
  Claude navigerte resten i Chrome), siden domenet ikke er proxyet gjennom
  Cloudflare (ingen DNS-endring nødvendig). Token/snippet ligger i
  `<script data-cf-beacon>` rett etter `script.js` på hver side.
  **Se statistikk:** logg inn på dash.cloudflare.com → Analytics & Logs →
  Web Analytics. Kan ta noen minutter før første besøk vises.
- **"Finn oss"-video FERDIG:** Stavros la videofilen
  (`How to find house of health aker brygge.MOV`, 105 MB) i `images/`.
  Komprimert til 7,7 MB (276×480, `avconvert`-preset `PresetAppleM4ViPod`,
  macOS-native — ingen ffmpeg tilgjengelig) og lagt inn som selvhostet
  klikk-for-å-spille `<video>` med poster-bilde under Oslo-adressen på
  Kontakt (NO + EN). Filene ligger i `images/web/finn-oss-oslo.mp4` +
  `finn-oss-oslo-poster.jpg`.
- **Flertall → entall rettet gjennomgående:** Stavros ba om at "vi/oss/vår"
  endres til "jeg/meg/min" over hele siden siden dette er hans private
  nettside, ikke en klinikk med flere ansatte. Rettet på alle 16 sider
  (eyebrows, overskrifter, brødtekst, footer).
- **GitHub-autentisering (`gh` CLI) satt opp på denne maskinen** — se eget
  punkt under "Live nettside og repo". Løste også en divergert
  git-historikk (lokale commits fra før `gh` var satt opp, vs. commits gjort
  via nettleser-opplasting) med en ren merge, ikke force-push.
- **Kontaktskjema koblet til Web3Forms (NO + EN) — fungerer nå reelt:**
  gratis skjematjeneste (250 innsendinger/mnd, ingen kontoopprettelse — bare
  en API-nøkkel sendt til `stav.li@hotmail.com`). Lagt til telefonfelt
  (påkrevd, sammen med fornavn/etternavn/e-post/melding). Innsending skjer nå
  via `fetch()` uten sideomlasting, med status-melding til bruker
  (sender/suksess/feil) i `script.js`. Testet med en reell testinnsending før
  push — bekreftet mottatt.
- **E-postadresse skjult fra rå HTML-kildekode** på alle 18 sider: alle
  synlige `mailto:`-lenker bygges nå av `script.js` ved sideinnlasting
  (`.mailto-link`-klasse med `data-user`/`data-domain`), i stedet for å stå
  rått i markupen. Reduserer enkel e-post-skraping fra spam-bots uten å endre
  hvordan det ser ut/fungerer for besøkende. **Bevisst urørt:** e-posten i
  JSON-LD strukturerte data (`"email"`-feltet) — den er ment for søkemotorer,
  ikke bots, og fjerning ville skadet SEO.
- **6 nye faglige artikler skrevet og publisert (NO + EN = 12 sider):**
  *Hva er manuellterapi?*, *McKenzie-metoden for rygg- og nakkeplager*,
  *Vanlige muskel- og skjelettskader – og prinsippene for god rehabilitering*,
  *PRP-behandling – blodplateinjeksjon ved slitasje og senelidelser*,
  *Hvorfor er diagnostikk og målrettet rehabilitering grunnpilaren?*, og
  *Blood Flow Restriction-trening*. Samme mal som artikkelen fra 24.07
  (Article-schema, "Slik jobber jeg"-boks, CTA). Alle "Les mer"-lenker på
  Faglig-siden og forsidens artikkel-teaser (som pekte til `#`) er nå koblet
  opp. **Alle 6 plassholder-kort er dermed ferdige — Faglig-siden er
  komplett.**

**Økt 2026-07-24:**
- **Versjon 2 publisert og live** (kun House of Health/Oslo). Versjon 1 bevart
  i taggen `v1-to-klinikker`. Se "Versjoner av nettsiden" over.
- **Utvidet strukturerte data (SEO)** på alle 16 sider: Person-entitet for
  Stavros med fullt navn, autorisasjoner (manuellterapeut 2023, fysioterapeut
  2017), mastergrad, OMI Cyriax, 28 fagområder/tilstander, og `sameAs`-lenker
  (Legelisten, House of Health, LinkedIn, Instagram, TikTok). **Merk:** la
  bevisst IKKE inn "kiropraktor/lege/ortoped/osteopat/naprapat" som titler på
  Stavros – det er beskyttede titler han ikke har, og ville vært klagegrunn.
- **Ny fagartikkel** (norsk + engelsk): *"Manuellterapeut, kiropraktor,
  osteopat eller naprapat – hva er forskjellen?"*
  (`manuellterapeut-kiropraktor-osteopat-naprapat.html`). Fakta verifisert mot
  Helsedirektoratet/Lovdata (osteopat+naprapat autorisert 1. mai 2022;
  manuellterapeut/kiropraktor har henvisnings- og sykmeldingsrett, ikke de to
  andre). Treffer søk på de titlene uten å påstå titler han ikke har. Koblet
  inn som første kort på Faglig + forsiden, lagt i sitemap, med Article-schema.
  Dette er den FØRSTE ekte artikkelen – de 5 andre Faglig-kortene er fortsatt
  plassholdere (Les mer → `#`).
- **5 finpuss-oppgaver:** (1) alle artikkelbilder på Faglig samme ramme
  (fjernet `height:100%` som lot bildet strekke seg); (2) byttet duplikatbilde;
  (3) nytt bilde i "Mine tjenester" (K015288, Stavros med ultralyd, HoH-polo);
  (4) "+" foran tjenestene → "✓" (så det ikke ser klikkbart ut); (5) nye
  tjenester **Foredrag og kurs / Mentorship-program / Hospitering** lagt til
  under Mine tjenester OG som egen prisseksjon (6500/foredrag, 6800/mnd,
  2500/dag). NO + EN.
- **EXIF-buggen (viktig lærdom):** ett Faglig-bilde ble rotert fordi PIL leser
  rå-piksler uten å følge kameraets rotasjonsflagg. Rettet med
  `ImageOps.exif_transpose()`. Fast regel #6 lagt inn i "Faste regler" over –
  **bruk alltid exif_transpose ved bildebehandling.**
- **CSS-cacheversjon nå `?v=6`.** (Husk å bumpe ved neste CSS-endring.)
- **PÅGÅENDE – "finn oss"-video:** Stavros vil ha videoen fra
  houseofhealth.no/akerbrygge (som viser veien til kontoret) under Oslo-adressen
  på Kontakt-siden. **Blokkert:** videoen er en DRM-låst, AES-128-kryptert HLS-
  strøm på Squarespace med signerte/utløpende segmenter – kan ikke hentes/
  hotlinkes rent (fant kilde-URL, men den utløper og er kryptert). Stavros har
  ikke originalfila. **Venter på at Stavros skaffer originalvideoen** (f.eks.
  fra Squarespace-admin) og legger den i prosjektmappen, så selvhoster jeg den
  med en klikk-for-å-spille-spiller. Alternativ hvis fila ikke kommer: Google
  Maps-embed under Oslo-adressen.


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
- **Ingen telefonnummer** er lagt inn noe sted (kun e-post + bookinglenker).
- **"Ofte stilte spørsmål" / FAQ** i footer peker fortsatt til `#` (ingen
  FAQ-side finnes).
- `images/`-mappen har fortsatt 2 ubrukelige macOS alias-filer
  (`PrP behandling-alias`, `Promo-alias`) — kan slettes. (Ligger utenfor git
  nå, siden kun `images/web/` versjoneres.)

**Neste steg:**
1. Vurder FAQ-side (footer-lenken peker til `#` i dag).
2. Vurder om telefonnummer skal legges til et sted på siden.
3. (Valgfritt opprydding) slett de 2 ubrukelige alias-filene i `images/`.
4. **MailerLite-trial går ut ~2026-08-10** (14 dager fra 2026-07-27) — sjekk
   om Stavros har oppgradert til betalt plan før den tid, ellers stopper
   nyhetsbrev-sending.
5. Neste artikkel-kunngjøring: bruk den lagrede malen "Artikkel-teaser
   (bilde + tekst + knapp)" i MailerLite, **skriv den på norsk** (se fast
   regel over), ikke engelsk.
6. **Publisér én artikkel fra køen ca. hver måned** – se «Publiseringskø»
   i statusdelen over. Alle seks er ferdig skrevet og ligger klare som
   skjulte utkast; det gjenstår kun å slå dem synlige.
7. Nye artikler utover de seks: husk de faste reglene – nytt, ubrukt
   thumbnail-bilde (se `article_thumbnail_image_rule.md`), kilder fra
   anerkjente tidsskrifter som **verifiseres med websøk**, emneord-rad
   nederst, norsk hovedversjon med egen engelsk versjon, og samme mal som
   `smerte-er-ikke-et-skademaler.html`.

*(Video, flertall→entall, Web3Forms-skjema, e-post-skjuling og alle 6
Faglig-artikler — tidligere de store gjenstående punktene — er alle ferdige
per økt 2026-07-25, se over.)*

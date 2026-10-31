# Masterstandard for stavroslitsos.com

Dette er den overordnede veilederen for alt arbeid med nettsiden. Den skal
leses etter `AGENTS.md` / `CLAUDE.md` og før endringer. Detaljreglene i
`ARTICLE_RULES.md` og `IMAGE_RULES.md` gjelder i tillegg. Løpende status og
publiseringskø finnes bare i `README.md`.

## Kilder til sannhet

1. `WEBSITE_GUIDE.md` beskriver samlet arbeidsflyt og beslutningsrekkefølge.
2. `README.md` er eneste kilde til aktuell status, publiseringskø og neste steg.
3. `ARTICLE_RULES.md` er detaljstandarden for research, tekst, kilder, SEO,
   språkversjoner og publisering.
4. `IMAGE_RULES.md` er detaljstandarden for bilder, video, Dropbox-innhold,
   rettigheter, personvern, redigering og teknisk behandling.
5. Ved motstrid gjelder den mest spesifikke regelen, men ingen detaljregel kan
   brukes til å omgå publiserings- eller personvernkravene her.

## Fast oppstart før arbeid

1. Les hele `README.md`, `UNDERCHATTER.md` og relevant chatnotat.
2. Les `ARTICLE_RULES.md` før artikkelarbeid og `IMAGE_RULES.md` før bilde-
   eller videoarbeid.
3. Kontroller `git status`. Når arbeidskopien er ren, hent siste versjon med
   `git pull --ff-only`. Overskriv aldri lokale endringer eller konflikter.
4. Arbeid bare i den registrerte Git-arbeidskopien. Dropbox er kilde til
   råmateriale, ikke nettsidens aktive kodebase.

## Standard for fagartikler

- Skriv originalt på norsk og lag en egen, idiomatisk engelsk versjon.
- Bruk én hovedkilde og normalt 5–9 selvstendig verifiserte støttekilder.
- Skill tydelig mellom dokumentert effekt, ekspertkonsensus, klinisk erfaring,
  hypotese og usikkerhet. Ikke overselg behandling eller prognose.
- Bruk samme tekniske artikkelstruktur som de eksisterende sidene: komplett
  metadata og Article JSON-LD, synlige emneord og kollapsbar kildeliste.
- Nye artikler er skjulte utkast med `noindex, nofollow`, uten artikkelkort,
  forsidelenke eller sitemap-oppføring, til Stavros ber om publisering.
- Publisering og nyhetsbrev er egne handlinger. Nyhetsbrev sendes bare når
  Stavros har autorisert utsending for den konkrete artikkelen.

## Fast medieflyt for personlig preg

Personlige bilder og videoer skal vurderes aktivt fordi de kan gjøre artiklene
mer gjenkjennelige og troverdige. De skal ikke brukes bare for å fylle plass:
tema, kvalitet, personvern og faglig relevans må være gode nok.

Dropbox-mappen er:

`/1. stavroslitsos.com/Bilde og Video Content/`

- `Kan Brukes/` er innboksen for ubrukt personlig bilde- og videomateriale.
- `Er Brukt/` er arkivet for materiale som allerede er brukt.

For hvert nytt eller revidert innlegg:

1. Se først etter relevant materiale i `Kan Brukes/`.
2. Vurder deretter annet eget materiale, en original KI-generert illustrasjon
   eller et bilde med dokumentert bruksrett. Velg det som forklarer temaet best.
3. Kontroller samtykke, pasientopplysninger, skjermtekst, synlige personer,
   logoer, opphav og bruksrett før redigering eller publisering.
4. Lag en separat, ferdigbehandlet webkopi i `images/web/`. Råfilen i Dropbox
   skal aldri brukes som direkte nettressurs eller committes til det offentlige
   repositoryet.
5. Sett mediet inn i både norsk og engelsk artikkel med presis alt-tekst,
   bildetekst eller videobeskrivelse når det er relevant.
6. Kontroller visningen på mobil og desktop. For video kontrolleres også
   posterbilde, avspilling, filstørrelse og eventuell teksting/transkripsjon.
7. Når mediet faktisk er satt inn, kontrollert og committet i et innlegg – også
   i et skjult utkast – flyttes originalen fra `Kan Brukes/` til `Er Brukt/`.
   Behold filnavnet og eventuell undermappestruktur. Ikke slett originalen.
8. Materiale som bare er vurdert, men ikke brukt, skal bli liggende i
   `Kan Brukes/`. Innhold i `Er Brukt/` velges ikke på nytt uten en bevisst,
   begrunnet beslutning.

En KI-generert original har ingen Dropbox-råfil som skal flyttes. Den ferdige
webfilen lagres i `images/web/` og merkes som KI-generert etter reglene i
`IMAGE_RULES.md`.

## Kvalitetskrav for bilde og video

- Hovedbilde til en ny artikkel skal være nytt og ubrukt.
- Prioriter autentisk materiale med Stavros når det er relevant og teknisk
  godt. Bruk KI når et konsept, anatomi eller behandlingsprinsipp forklares
  bedre med en original illustrasjon enn med et tilfeldig foto.
- KI-bilder skal ikke fremstille oppdiktede behandlingssituasjoner som om de
  var dokumentasjon av en virkelig pasient eller et faktisk resultat.
- Bilder følger normalt 1400 × 933 px (3:2). Video skal komprimeres til et
  nettvennlig format, ha posterbilde og ikke starte automatisk med lyd.
- Tale eller faglig nødvendig lyd i video skal ha teksting eller en tilgjengelig
  transkripsjon. Dekorativ video må ikke være nødvendig for å forstå teksten.
- House of Health-logo beholdes når den er ekte og korrekt. Fremmed branding
  fjernes etter `IMAGE_RULES.md`; en logo skal aldri diktes opp av KI.

## Kontroll, Git og avslutning

- Kontroller språkbytte, metadata, lenker, bilder/video, mobil/desktop,
  `noindex`/sitemap-status og at ingen personopplysninger følger med.
- Commit bare relevant, ferdig og kontrollert arbeid. Push automatisk til
  `origin/main`, og kontroller at lokal commit og `origin/main` er identiske.
- Oppdater `README.md`, `UNDERCHATTER.md` og relevant chatnotat ved nye
  beslutninger og før økten avsluttes.
- Rapportér presist hva som er et skjult utkast, hva som er live, hva som er
  sendt, og hvilke Dropbox-filer som eventuelt er flyttet.

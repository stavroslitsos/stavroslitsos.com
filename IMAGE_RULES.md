# Faste regler for nettsidebilder og -video

Denne filen følger prosjektet via Dropbox og GitHub og skal leses før bilder
eller video velges eller behandles. Den overordnede arbeidsflyten står i
`WEBSITE_GUIDE.md`, og løpende status ligger i `README.md`.

1. Hver ny fagartikkel skal ha et nytt, ubrukt thumbnail-bilde. Ikke gjenbruk
   et bilde som allerede vises på nettsiden.
2. `images/web/` inneholder ferdige bilder som er i bruk eller klargjort for
   siden. Øvrige bilder i `images/` er råmateriale og kan brukes etter kontroll
   og behandling.
3. All synlig logo eller branding som ikke er House of Health skal fjernes
   presist eller erstattes med House of Health. House of Health-logo kan
   beholdes.
4. Bruk alltid `PIL.ImageOps.exif_transpose()` umiddelbart etter åpning av et
   kildebilde og før crop/resize. Ikke roter manuelt.
5. Standard artikkelbilde er 1400 × 933 px (3:2), JPEG i god kvalitet. Kontroller
   utsnitt, ansikter, skarphet, skjermtekst og eventuelle personopplysninger
   visuelt før publisering.
6. Ved Canva Pro-stockbilder: opprett et midlertidig 1400 × 933-design, eksporter
   i høy kvalitet, last ned til prosjektet og flytt straks det midlertidige
   Canva-designet til papirkurven. Papirkurven skal ikke tømmes.
7. Oppdater alt-tekst på både norsk og engelsk slik at den beskriver bildet
   korrekt og naturlig.
8. Når Stavros vises med synlig T-skjorte eller poloskjorte i et redigert bilde,
   skal skjorten ha en tydelig, korrekt House of Health-logo. Behold en ekte
   logo som allerede finnes, eller bruk en verifisert logofil ved innsetting.
   Ikke finn på eller feilstav en logo med bildegenerering. Hvis korrekt logo
   ikke er tilgjengelig, avklar med Stavros før bildet publiseres. Dette gjelder
   fremtidige bilder; eksisterende publiserte bilder endres ikke automatisk.
9. For bilder lenger inne i artikkelteksten: start med et presist, relevant
   Google-bildesøk etter artikkelens konkrete tema og anatomi. Gå videre til
   den opprinnelige nettsiden, kontroller at motivet faktisk illustrerer
   teksten, og undersøk bruksretten før bildet lastes opp. Et funn i Google
   og en kildehenvisning gir ikke i seg selv rett til å kopiere bildet. Bruk
   bare egne bilder, bilder med dokumentert passende lisens/tillatelse eller
   en ny, original illustrasjon. Hvis originalen ikke kan gjenbrukes, kan
   den lenkes som faglig kilde uten å kopieres.
10. Gi hvert slikt bilde en kort, korrekt bildetekst rett under: hva det
    viser, original kilde/lenke og opphavsperson/lisens når relevant. Merk
    egen KI-generert illustrasjon tydelig som det; oppgi eventuelle faglige
    referanser som referanser, ikke som eier av det nye bildet. Skriv
    tilsvarende bildetekst og presis alt-tekst i begge språkversjoner.
11. Før bilde eller video velges til et innlegg, kontroller Dropbox-mappen
    `/1. stavroslitsos.com/Bilde og Video Content/Kan Brukes/`. Relevant,
    autentisk materiale herfra skal vurderes først fordi det gir nettsiden et
    mer personlig preg, men skal bare brukes når tema, kvalitet, samtykke og
    personvern passer.
12. Når en Dropbox-fil faktisk er satt inn i et norsk og engelsk innlegg,
    kontrollert visuelt og committet – også når innlegget fortsatt er et
    skjult utkast – skal originalen flyttes til
    `/1. stavroslitsos.com/Bilde og Video Content/Er Brukt/`. Behold filnavn
    og eventuell undermappestruktur. Ikke slett originalen og ikke flytt filer
    som bare er vurdert. `Er Brukt/` er inventaret som hindrer utilsiktet
    gjenbruk.
13. Dropbox-råfiler skal aldri lenkes direkte fra nettsiden eller committes til
    det offentlige repositoryet. Lag en behandlet kopi i `images/web/`, og
    kontroller at den ikke inneholder pasientnavn, fødselsdato, journaltekst,
    identifiserende ultralyd-/skjermtekst eller andre personopplysninger.
14. Hvis personlig materiale ikke passer, kan det brukes annet eget materiale,
    lisensiert innhold eller en ny original KI-generert illustrasjon. KI-bilder
    skal merkes som KI-genererte og må ikke presentere en oppdiktet pasient,
    behandling eller effekt som dokumentasjon av en virkelig hendelse.
15. Video skal behandles som webinnhold, ikke som en urørt råfil: bruk et
    nettvennlig format og filstørrelse, posterbilde, `controls`, `playsinline`
    og forsiktig `preload`. Ikke start automatisk med lyd. Tale eller faglig
    nødvendig lyd skal ha teksting eller tilgjengelig transkripsjon. Kontroller
    avspilling og layout på mobil og desktop før bruk.

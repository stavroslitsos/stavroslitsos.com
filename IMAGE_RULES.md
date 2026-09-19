# Faste regler for nettside- og artikkelbilder

Denne filen følger prosjektet via Dropbox og GitHub og skal leses før bilder
velges eller behandles. Løpende status ligger i `README.md`.

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

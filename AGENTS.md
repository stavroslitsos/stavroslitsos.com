# Oppstart for Codex – stavroslitsos.com

Les `README.md` i sin helhet før arbeid starter. Nyeste status og aktiv
publiseringskø står under «Status – hvor arbeidet ble stoppet sist».

Les også `ARTICLE_RULES.md` før artikkelarbeid og `IMAGE_RULES.md` før
bildearbeid. README er eneste kilde til løpende prosjektstatus og skal alltid
oppdateres når brukeren avslutter en økt.

Live-siden er https://stavroslitsos.com og bygges fra `main` i
https://github.com/stavroslitsos/stavroslitsos.com.

## Git og migrering

- Arbeid alltid fra den registrerte Git-arbeidskopien under den lokale
  `Codex Projects`-mappen, aldri fra den gamle Dropbox-kopien.
- GitHub-repositoryet er offentlig fordi det publiserer nettsiden. Alt som
  committes kan derfor leses av andre.
- Kontroller `git status` og kjør `git pull --ff-only` før arbeid når
  arbeidskopien er ren.
- Inspiser endringene, commit relevant ferdig og kontrollert arbeid og push
  automatisk til `origin/main`. Stavros skal ikke måtte be særskilt om push.
- Push aldri uferdig eller ukontrollert arbeid. Etter push skal lokal commit og
  `origin/main` være identiske og arbeidskopien ren.
- Dropbox-originalen skal ikke flyttes, slettes, omdøpes eller redigeres som del
  av migreringen. Stavros rydder den selv senere.
- Råbilder og video utenfor `images/web/`, MailerLite-filer,
  Physica-/pasientrelatert informasjon, credentials og maskinspesifikk
  `.claude/`-konfigurasjon skal aldri committes.
- Overskriv aldri lokale endringer eller Git-konflikter blindt.

## Codex-oppgaver på nye maskiner

`.codex/project-tasks.json` er den autoritative listen over faste
Codex-oppgaver. Ved førstegangsoppsett etter kloning skal Codex registrere
repositorymappen, lese manifestet og opprette bare oppgaver som mangler. Gamle
Dropbox-oppgaver skal ikke kobles til den nye Git-arbeidskopien, og duplikater
skal ikke opprettes.

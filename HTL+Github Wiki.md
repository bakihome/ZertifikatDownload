# Welcome to the HTL-Workshop-Certificate wiki!

practice, makes better:) 

Überlick:

- Wer macht was:?

- Next Week Abgabe Präsentation?:

- Was bisher geschah?:

- Was passieren sollte:

- Vorschläge: 

In den Readme dateien wird Markdown basierend geschrieben. 

Dokumentation mit Markdown Basics

Schreiben Sie README.md-Dateien und verwenden Sie Markdown, [Markdown Befehle GitHub ](https://docs.github.com/de/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), um den Code und das Projekt zu dokumentieren.
or have a look at [this](https://www.youtube.com/watch?v=q9_9EnowPho)

**Wichtige Punkte:**
1. Verwenden Sie Markdown-Syntax, um Text zu formatieren, Links einzufügen und Bilder hinzuzufügen.

## Interfaces und Konventionen
Befolgen von Namenskonventionen, Standards und Dokumentationsrichtlinien für eine konsistente Entwicklung.

**Wichtige Punkte:**
1. Klare Schnittstellen und Dokumentation für Funktionen und Klassen.
2. Aussagekräftige Namen für Variablen, Funktionen und Dateien.
3. Kommentieren des Codes, um die Funktionsweise und Absichten zu erklären.
4. Gemeinsame Ressourcen wie Styleguides und Best Practices für die Sprache oder das Framework, das wir verwenden Konsultieren.

# **kleine Übersicht über die wichtigsten GitHub Keywords sowie einige wesentlichen Funktionen** 

## Github Keywords und Begriffe sowie grundlegende Git-Befehle:

    Repository (Repo): Ein Repository ist ein Speicherort, in dem Ihre Projektdateien sowie die Versionsgeschichte und Metadaten gespeichert sind.

    Commit: Ein Commit ist eine einzelne Änderung an Ihren Projektdateien. Jedes Commit hat eine eindeutige Kennung und eine Beschreibung, die angibt, was geändert wurde.

    Branch: Ein Branch ist eine separate Entwicklungslinie in einem Repository. Sie können neue Funktionen in einem Branch entwickeln, ohne den Hauptcode zu beeinträchtigen.

    Merge: Das Zusammenführen (Merge) von Branches bedeutet, die Änderungen aus einem Branch in einen anderen zu integrieren.

    Pull Request (PR): Ein Pull Request ist eine Anfrage, um Änderungen aus einem Branch in einen anderen zu übernehmen. Andere Teammitglieder können den Code überprüfen, Kommentare hinterlassen und Änderungen vorschlagen, bevor der Pull Request zusammengeführt wird.

    Clone: Das Klonen (Clone) eines Repositorys bedeutet, eine Kopie des Repositorys auf Ihrem lokalen Computer zu erstellen.

    Push: Das Hochladen (Push) von Änderungen bedeutet, lokale Commits in das Remote-Repository hochzuladen.

    Pull: Das Herunterladen (Pull) von Änderungen bedeutet, Änderungen aus dem Remote-Repository auf Ihren lokalen Computer zu übertragen.

Hier sind einige grundlegende Git-Befehle, die Sie verwenden können, um mit einem Repository per Konsole zu arbeiten:

    git clone <repository-url>: Klonen Sie ein Repository auf Ihren lokalen Computer.
    git status: Zeigt den Status Ihrer lokalen Arbeitskopie an.
    git add <dateiname>: Fügen Sie eine Datei oder Änderungen hinzu, um sie für das nächste Commit vorzumerken.
    git commit -m "commit-nachricht": Committen Sie Ihre Änderungen mit einer beschreibenden Nachricht.
    git push: Laden Sie Ihre lokalen Commits in das Remote-Repository hoch.
    git pull: Aktualisieren Sie Ihren lokalen Branch mit den neuesten Änderungen aus dem Remote-Repository.
    git branch: Zeigt die Liste der Branches in Ihrem Repository an.
    git checkout <branch-name>: Wechseln Sie zu einem anderen Branch.
    git merge <branch-name>: Führen Sie Änderungen aus einem Branch in Ihren aktuellen Branch zusammen.

# Hier die Befehle und Funktionen genauer:

## Repository klonen

```markdown
git clone <Repository-URL>

```
Klonen Sie das Repository auf Ihren lokalen Computer, um mit dem Projekt zu arbeiten.

**Wichtige Punkte:**
1. `git clone`: Der Befehl, um ein Repository von GitHub zu klonen.
2. `<Repository-URL>`: Die URL des Repositorys, das Sie klonen möchten.
3. Stellen Sie sicher, dass Sie die notwendigen Berechtigungen haben, um das Repository zu klonen.
4. Der geklonte Ordner wird den Namen des Repositorys haben.

## Branches erstellen und wechseln
```markdown
git branch <Branch-Name>
git checkout <Branch-Name>
```
Erstellen Sie einen neuen Branch für Ihre Änderungen und wechseln Sie zu diesem Branch.

**Wichtige Punkte:**
1. `git branch`: Erstellt einen neuen Branch.
2. `git checkout`: Wechselt zu einem existierenden Branch oder erstellt einen neuen Branch.
3. `<Branch-Name>`: Der Name des Branches, den Sie erstellen oder zu dem Sie wechseln möchten.
4. Die Änderungen, die Sie committen, werden nur auf dem aktuellen Branch gespeichert.

## Änderungen committen
```markdown
git add .
git commit -m "Beschreibung der Änderungen"
```
Fügen Sie Ihre Änderungen zur Staging-Area hinzu und committen Sie sie mit einer kurzen Beschreibung.

**Wichtige Punkte:**
1. `git add .`: Fügt alle Änderungen im Arbeitsverzeichnis zur Staging-Area hinzu.
2. `git commit`: Speichert die Änderungen, die in der Staging-Area sind.
3. `-m "Beschreibung der Änderungen"`: Eine kurze Beschreibung der durchgeführten Änderungen.
4. Stellen Sie sicher, dass Ihre Commit-Nachrichten präzise und aussagekräftig sind.

"commit" im Kontext von Versionierungssysteme wie Git verwendet wird.

**Committen:** 
- **Bedeutung:** Beim Committen werden Änderungen, die Sie in Ihrem lokalen Arbeitsverzeichnis vorgenommen haben, dauerhaft im lokalen Repository festgehalten.
- **Vorgehensweise:**
   1. **Hinzufügen von Änderungen zur Staging-Area:** Zuerst müssen Sie Ihre Änderungen zur sogenannten "Staging-Area" hinzufügen. Das bedeutet, dass Sie festlegen, welche Änderungen Sie in Ihrem nächsten Commit festhalten möchten.
   2. **Durchführen des Commits:** Nachdem Sie Ihre Änderungen zur Staging-Area hinzugefügt haben, können Sie den Commit durchführen. Dabei wird ein Snapshot der Staging-Area erstellt und in das lokale Repository übertragen.
   3. **Hinzufügen einer Commit-Beschreibung:** Jeder Commit sollte eine aussagekräftige Beschreibung haben, die zusammenfasst, welche Änderungen vorgenommen wurden und warum sie vorgenommen wurden.

**Beispiel:**
```bash
git add .  # Fügt alle Änderungen zur Staging-Area hinzu
git commit -m "Füge Funktion für das Hinzufügen von Benutzern hinzu"  # Führt den Commit mit einer Beschreibung durch
```

**Wichtige Punkte:**
- Committen ist ein wichtiger Schritt im Git-Workflow, der sicherstellt, dass Ihre Änderungen im Versionskontrollsystem festgehalten werden.
- Jeder Commit sollte eine logische Einheit von Änderungen darstellen, die eine bestimmte Funktion hinzufügt, einen Fehler behebt oder eine Verbesserung vornimmt.
- Durch sinnvolle Commit-Beschreibungen können andere Teammitglieder leicht nachvollziehen, welche Änderungen vorgenommen wurden und warum.

## Branches pushen
```markdown
git push origin <Branch-Name>
```
Pushen Sie Ihren lokalen Branch auf GitHub, um ihn mit anderen zu teilen.

**Wichtige Punkte:**
1. `git push`: Sendet Ihre lokalen Änderungen zum Remote-Repository (z. B. GitHub).
2. `origin`: Der Name des Remote-Repositorys, zu dem Sie pushen möchten.
3. `<Branch-Name>`: Der Name des lokalen Branches, den Sie pushen möchten.
4. Stellen Sie sicher, dass Sie die Berechtigungen haben, um Änderungen auf das Remote-Repository zu pushen.

## Pull Requests erstellen
Erstellen Sie einen Pull Request auf GitHub, um Änderungen in den Haupt-Branch zu integrieren.

**Wichtige Punkte:**
1. Ein Pull Request ist eine Anfrage an den Projektmanager oder Maintainer, um Ihre Änderungen in den Haupt-Branch zu integrieren.
2. Beschreiben Sie Ihre Änderungen und warum sie gemacht wurden.
3. Fügen Sie Links zu relevanten Issues oder Dokumentationen hinzu.
4. Sie können weitere Benutzer als Reviewer hinzufügen, um Ihr Pull Request zu überprüfen.

## Code Reviews durchführen
Überprüfen Sie den Code in Pull Requests, geben Sie Feedback und stellen Sie Fragen.

**Wichtige Punkte:**
1. Überprüfen Sie den Code auf Lesbarkeit, Effizienz und Einhaltung von Standards.
2. Geben Sie konstruktives Feedback und schlagen Sie Verbesserungen vor.
3. Stellen Sie sicher, dass der Code den Anforderungen und dem Zweck des Pull Requests entspricht.
4. Seien Sie respektvoll und unterstützend gegenüber Ihren Teammitgliedern.

## Pull Requests mergen
```markdown
git merge <Branch-Name>
```
Mergen Sie einen Pull Request, nachdem er überprüft und getestet wurde.

**Wichtige Punkte:**
1. Ein Pull Request kann nur gemerged werden, wenn er von mindestens einem Reviewer genehmigt wurde.
2. Stellen Sie sicher, dass alle Konflikte behoben und Tests durchgeführt wurden, bevor Sie den Pull Request mergen.
3. Führen Sie nach dem Mergen weitere Tests durch, um sicherzustellen, dass keine neuen Probleme eingeführt wurden.
4. Geben Sie klare Anweisungen und Hinweise für das Mergen des Pull Requests.

## Projektmanagement mit Issues
Verwenden Sie GitHub Issues, um Aufgaben, Fehler und Verbesserungsvorschläge zu verfolgen.

**Wichtige Punkte:**
1. Erstellen Sie Issues für jede Aufgabe, die erledigt werden muss.
2. Verwenden Sie Labels, um Issues zu kategorisieren und Prioritäten festzulegen.
3. Weisen Sie Issues Teammitgliedern zu und verfolgen Sie den Fortschritt.
4. Schließen Sie Issues, sobald die entsprechenden Aufgaben abgeschlossen sind, und referenzieren Sie sie in Pull Requests.


---

   

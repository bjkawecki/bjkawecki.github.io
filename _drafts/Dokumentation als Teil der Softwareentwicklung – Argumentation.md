Dokumentation ist keine Aufgabe am Ende eines Projekts
Gute Dokumentation entsteht während der Entwicklung
Warum Dokumentation selten am fehlenden Willen scheitert
Documentation Engineering erklärt
Wann README-Dateien nicht mehr ausreichen

Dokumentation in Readme von Repo bezieht sich auf Code. Was fehlt ist Kontext: welches Produkt, welches System, welche Abläufe, welcher Kunde. Das kann in Teilen noch in eine Readme oder die Repo-Docs Für ein Repo ist das noch ok. was ist aber bei 5 oder mehreren?  Dann braucht es eine zentralisierte Zusammenführung des Wissens die über die bloße Code-Definition hinausgeht. Es läuft darauf hinaus, dass es eines Systems braucht, um unterschiedliche Wissensquellen zusammenzuhalten und zu kontextualisieren

---

1. Dokumente haben Kontexte

Kontexte sind notwendig, damit Leser Informationen finden, einordnen und ihre Relevanz beurteilen können.

Dabei können unterschiedliche Kontextdimensionen zusammenwirken:
- Metadaten: Was ist das für ein Dokument? Wer ist verantwortlich? Wie aktuell ist es?
- Zugehörigkeit: Zu welchem Produkt, System, Team oder Prozess gehört es?
- Beziehungen: Auf welche anderen Dokumente, Systeme oder Sachverhalte bezieht es sich?


2. Kontexte müssen zentral verwaltet werden
Hier kommt der entscheidende Übergang: Solange ein Repository für sich steht, kann es seinen Kontext weitgehend selbst verwalten. Mit wachsender Systemlandschaft funktioniert das nicht mehr.

Wenn jedes Repository seine Zugehörigkeiten und Beziehungen selbst beschreibt, entstehen Parallelität und Redundanz. Informationen werden mehrfach gepflegt, Zusammenhänge unterschiedlich dargestellt und Beschreibungen laufen auseinander.

Daraus folgt eine wichtige Erkenntnis:

Nicht nur Dokumente müssen organisiert werden. Auch die Kontexte, in denen sie stehen, müssen organisiert und verwaltet werden.

Ein zentrales System muss deshalb nicht sämtliche Dokumente selbst enthalten. Es muss vielmehr die Kontexte und Beziehungen der verschiedenen Wissensquellen zusammenführen.

Das ist für mich eine sehr gute Grundlage, um deine Vorstellung von DocsOps zu erklären.

Kontexte werden nicht erst geschaffen, sondern sind bereits vorhanden. Sie ergeben sich aus der Organisation, der Zugehörigkeit von Dokumenten, ihren Metadaten und ihren Beziehungen zu anderen Wissensquellen.


System: Nächster Artikel

3. Anforderungen an ein solches System
Ich würde die Anforderungen etwas präziser formulieren:
Anforderung	Bedeutung
Parallelität vermeiden	Zugehörigkeiten und Zusammenhänge sollen nicht an verschiedenen Stellen unabhängig voneinander definiert werden.
Eindeutigkeit herstellen	Dokumente, Zuständigkeiten und Beziehungen müssen eindeutig zugeordnet sein.
Wissensquellen verbinden	Das System soll unterschiedliche Quellen kontextualisieren, ohne sie zwangsläufig zu ersetzen.
Regeln durchsetzen	Die Anwendung soll durch ihre Struktur und Funktionsweise möglichst viel Ordnung bereits vorgeben, statt sie den Anwendern als zusätzliche Aufgabe zu überlassen.

Besonders wichtig: Die Source-of-Truth-Unterscheidung
Deine Formulierung finde ich konzeptionell sehr stark:
Das zentrale System soll nicht die einzige Source of Truth für Wissen sein, sondern eine Source of Truth für Wissensquellen.

Ich würde sie vielleicht noch etwas ausformulieren:

Ein Unternehmen benötigt nicht zwangsläufig ein einziges System, in dem sämtliches Wissen gespeichert wird. Unterschiedliche Informationen haben unterschiedliche Anforderungen und gehören deshalb möglicherweise in unterschiedliche Systeme. Was fehlt, ist eine zentrale Instanz, die verlässlich beschreibt, welche Wissensquellen existieren, wofür sie stehen und wie sie miteinander zusammenhängen.

Damit wird das zentrale System gewissermaßen zur Ordnungsstruktur über den Wissensquellen.

Das ist eine wichtige Abgrenzung zu klassischen Dokumentationsplattformen und Wikis.
Zur Durchsetzung von Regeln
Auch hier steckt ein wesentlicher Teil deiner Philosophie drin: Ordnung soll nicht hauptsächlich durch Disziplin und Verhalten der Anwender entstehen, sondern durch das System selbst.

Ich würde das nicht als möglichst starke Einschränkung formulieren, sondern als Gestaltungsprinzip:

Das System gibt die Struktur vor und lässt dort Freiheit, wo sie sinnvoll ist.

Das ist ein Unterschied zwischen einem System, das lediglich Möglichkeiten zur Ordnung anbietet, und einem System, das Ordnung zu einem Bestandteil seiner Funktionsweise macht.

Mein Vorschlag für die zentrale These des Artikels
Ich würde versuchen, die gesamte Argumentation auf diesen Gedanken zulaufen zu lassen:

Mit wachsender Komplexität müssen nicht nur Dokumente, sondern auch ihre Kontexte zentral organisiert werden.

Denn genau das ist die Erkenntnis, die aus deinem README-Beispiel entsteht. Und sie führt unmittelbar zu den Anforderungen an DocsOps.

Eine kleine begriffliche Anmerkung: „Source of Truth für Wissensquellen“ ist als eigene Formulierung interessant, aber etwas erklärungsbedürftig. Vielleicht lässt sich später ein präziserer Begriff finden, etwa Source of Truth for Knowledge Architecture. Ich würde die Formulierung im deutschen Text aber zunächst behalten. Sie bringt deine Unterscheidung sehr direkt auf den Punkt.
---
layout: post
title: ""
description: ""
date: 2026-09-05
lang: de
locale: de
page_id: schmiermittel-wissensmanagement
category: Wissenskultur
---
## Was ist der Unterschied zwischen Wissen und Dokumentation?

In meinen vorherigen Beiträgen habe ich die Begriffe Wissen und Dokumentation ganz selbstverständlich verwendet, ohne sie genauer bestimmt zu haben. Es ist klar, dass sich beide Begriffe auf geordnete Informationen beziehen, was sie aber nicht austauschbar oder sogar synonym macht.

Während wir über die Frage, was Wissen ist, lange philosophieren können, ist eine Dokumentation oder ein Dokument eigentlich etwas sehr Konkretes. Sagen wir, dass Wissen etwas wie die Verinnerlichung einer erlebten Erfahrung ist, dann ist ein Dokument dessen materielle Repräsentation, eine Form, durch die das Wissen abrufbar, greifbar und in zweiter Hand erfahrbar wird. 



Wissen kann verschiedene Formen annehmen, im Fall einer Dokumentation ist es allgemein in Form eines formalisierten Schriftstücks. Das Dokument wählt Wissen aus bestimmten Quellen aus und strukturiert es nach einem logischen Schema. Noch wichtiger: Im Dokument manifestiert sich das immaterielle Wissen als Materie, sei es Papier oder Bits und Bytes in einem Speicher oder einer Festplatte. Wenn die Quelle das menschliche Gedächtnis war, war es fließend, nicht greifbar. Als Dokument unterliegt es, nachdem es in die Welt gekommen ist, fortan dem irdischen Gesetz. Es lebt, altert, wandert ins Archiv und wird irgendwann gelöscht.

## Was muss ein Dokument für den Leser leisten?

Damit ein Dokument leben kann, gelesen wird, muss es nützlich sein und als die Quelle von Wissen akzeptiert werden. Ein gutes Dokument ist kurz gesagt eines, dass die Erwartungen des Lesers erfüllt. Die Erwartungen des Lesers an das Dokument stammen zunächst aus den Metainformationen des Dokuments; seinen Namen, seinen Ort, seinen angegebenen Stand und den vorgegebenen Inhalt.

Nehmen wir als triviales Beispiel eine typische README.md in einem Code-Repository. Der Name folgt einer Konvention, die dem Kenner der Konvention besagt, dass hier wichtige Informationen über das Repository dargestellt werden. Das Alter der Datei lässt sich im Dateien-Verzeichnis ablesen. Der Ort ist ebenfalls klar. Wenn die Readme-Datei länger ist, haben wir hoffentlich ein Inhaltsvzerzeichnis zu Beginn oder eine Einleitung – Informationen, die wir schnell scannen können, z. B. um zu sehen, ob wir hier finden werden, was wir suchen.

## Was sind Kontexte?

Diese Metainformationen haben uns bereits viel Informationen geliefert, ohne dass wir überhaupt mit dem Lesen begonnen haben. Die Informationen waren weniger Text als viel mehr Kontext, der uns bei der Einordnung des Dokuments immens helfen wird.

Wir lesen nun das Dokument und verstehen, dass dieses Repository nicht für sich alleine steht. Es ist von anderen Repositorys die Rede und es wird auch erklärt wie diese zusammenhängen. Wir haben als viel Neues erfahren und außerdem noch zusätzlichen Kontext erhalten, nämlich an welchem Ort wir noch mehr verknüpfte Informationen in Form von weiteren Readme-Dateien finden. Aus Sicht des Lesers könnten wir nun eine Wette abschließen, und zwar ob wir diese ausführliche Struktur spiegelnd, im anderen Repository analog Informationen über dieses finden werden. Dann hätte sich der Autor eventuell zweimal die Mühe gemacht, oder Autoren hätten an zwei Stellen dasselbe gesagt.

Noch interessanter wäre hier zu fragen, was ist, wenn sich nicht zwei Repositorys aufeiander, sondern fünf oder zehn auch jeweils auf einander beziehen und nicht nur über sich, sondern auch über jedes der anderen analoge Informationen über den Zusammenhang anbieten. Das wäre eine Menge redundanter Inhalte, die, wie man sage könnte, nicht wirklich skaliert. Die vereinzelten Dokumente mit Verweisen tragen nicht mehr. Und wir haben hier zunächst die Wahl zwischen Redundanz oder zwischen Datensilos. Die dritte, beste Option ist jedoch ein System zur Verwaltung von Kontexten.

Statt von Repository können wir auch von Daten- oder Informations-„Silo“ sprechen. 
In der IT bedeuten Silos, dass Daten in einer bestimmten Software, Datenbank oder Abteilung eingeschlossen und nicht vernetzt sind. Wie Getreide in einem landwirtschaftlichen Silo sind die Informationen zwar hoffentlich gut verwahrt, aber vom Rest abgeschottet. Dies führt zu einer eingeschränkten Sicht: Keine Abteilung sieht das gesamte Bild, was zu fragmentierten Auswertungen führt.

Datensilos sind aus Nutzersicht problematisch, weil Informationen müssen aufwendig und manuell zusammengeführt werden, verschiedene Abteilungen besitzen unterschiedliche oder veraltete Informationen zum selben Kunden oder Produkt und Unternehmensentscheidungen basieren oft nur auf unvollständigen Daten.

Das System muss zwei Dinge leisten können. Es muss allgeine Regeln vorgeben, als auch den Anwendern seine eigenen Regeln für ihren Anwendungsfalls zu bestimmen. Im besten Fall finden die Anwenderregeln innerhalb der allgemeinen Regeln statt.

Nicht verwaltete Kontexte führen notwendig zu Informationssilos und Parallelät oder Redundanz.

## Wie müssen Kontexte verwaltet werden?


Kontexte sind notwendig, damit Leser Informationen finden, einordnen und ihre Relevanz beurteilen können.

Dabei können unterschiedliche Kontextdimensionen zusammenwirken:
- Metadaten: Was ist das für ein Dokument? Wer ist verantwortlich? Wie aktuell ist es?
- Zugehörigkeit: Zu welchem Produkt, System, Team oder Prozess gehört es?
- Beziehungen: Auf welche anderen Dokumente, Systeme oder Sachverhalte bezieht es sich?

Wenn jedes Repository seine Zugehörigkeiten und Beziehungen selbst beschreibt, entstehen Parallelität und Redundanz. Informationen werden mehrfach gepflegt, Zusammenhänge unterschiedlich dargestellt und Beschreibungen laufen auseinander.

Daraus folgt eine wichtige Erkenntnis:

Nicht nur Dokumente müssen organisiert werden. Auch die Kontexte, in denen sie stehen, müssen organisiert und verwaltet werden.
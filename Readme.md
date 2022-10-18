# Bewerbungsaufgabe
Willkommen bei der Bewerbungsaufgabe für das duale Studium Angewandte Informatik. Hier hast du die Möglichkeit, dein Können unter Beweis zu stellen.
In diesem Repository befindet sich ein Simulationsprogramm für Ampeln.
Deine Aufgabe ist es, das Programm zu vervollständigen.
Die genaue Aufgabenbeschreibung findest du weiter unten.
## Installation und Vorbereitung
### Download
Um die Dateien herunterzuladen, kannst du diese oben bei dem grünen Code Butten als ZIP herunterladen oder über git clonen. Für das Clonen musst du dir git herunterladen (https://git-scm.com/downloads). Dann musst du eine Konsole öffnen und dort hin navigieren, wo du die Dateien haben möchtest und dies eintippen: 
```console
git clone https://github.com/Draegerwerk/Studium-Angewandte-Informatik---Programmieraufgabe.git
```
 Der schnellste Weg eine Konsole zu öffnen ist über die Tastenkombination WIN+R und das Eintippen von "cmd". (https://github.com/git-guides/git-clone) Navigieren in der Konsole kannst du hier lernen <https://riptutorial.com/cmd/example/8646/navigating-in-cmd>. 
### NodeJS
Nun, da du den Code auf deinem Rechner hast, benötigst du noch NodeJS, um das Programm auszuführen. Dafür musst du dir die aktuelle NodeJS Version herunterladen (https://nodejs.org/en/download/).
### NPM setup
Um die Abhängigkeiten von dem Projekt zu installieren nutzen wir nun NPM, was mit NodeJS bereits installiert wurde. Dafür benötigen wir wieder eine Konsole und müssen jetzt zu dem Ordner navigieren, wohin du die Dateien gecloned oder heruntergeladen hast.
Um jetzt die Abhängigkeiten zu installieren, musst du folgendes ausführen
```console
npm install
```
Dabei können Fehler auftreten, welche vor dem Ausführen noch behoben werden müssen. Schau dir die Fehlermeldung genau an und versuch sie zu lösen. Dabei können für dich auch die Tipps in Abschnitt Hilfe und Tipps nützlich sein.
Sollte der Befehl ohne Fehler durchlaufen, hat die Installation geklappt.
## Aufgabe
Deine Aufgabe ist es, die Ampelschaltung zu implementieren.
Die Ampel besteht dabei aus einer Autoampel, einer Fußgängerampel und einem Knopf für die Fußgänger.

Im Normalzustand ist die Ampel der Autofahrer grün und die der Fußgänger rot.
Wenn ein Fußgänger den Knopf drückt, wird die Autoampel zuerst gelb und dann rot. In Folge darauf wird die Ampel für die Fußgänger grün und die Fußgänger können die Straße queren. Nach 15 Sekunden wird die Fußgängerampel wieder Rot und nach weiteren 5 Sekunden wird die Ampel der Autofahrer wieder grün. Zwischen den Farbwechseln ist je eine Sekunde Pause.

Die Implementierung für die Ampellogik befindet sich in der EnvironmentBuilder.js Datei in der Funktion build. Momentan befindet sich in dieser Funktion eine Ampellogik, welche sich für eine normale Ampel nicht eignet. Bau diese Logik um, sodass sich die Ampel verhält, wie im vorherigen Absatz beschrieben.

Wenn du Lust hast eine noch kompliziertere Ampellogik zu programmieren, probiere dich gerne aus, vergiss aber nicht deinen Stand zur Lösung der Aufgabe zu sichern.

Programmieren kannst du in jedem Texteditor. Empfohlen wird aber Visual Studio Code (https://code.visualstudio.com/), da es viele Funktionen wie Syntaxhighlighting und Autovervollständigung bietet. 
## Das Programm
Das Programm ist in JavaScript geschrieben und benutzt Electron zu Visualisierung.
Die gesamte Ampel Logik kann in der build function in EnvironmentBuilder.js implementiert werden.

Innerhalb der build Funktion stehen folgende Funktionen zum Erstellen der Ampel Logik zur Verfügung:

| Function                                      | Meaning |
| :---                                          | :--- |
| senvironment.addTrafficLight()                | Erzeugt ein Auto Ampel Objekt. |
| environment.addPedestrianTrafficLight()       | Erzeugt ein Fußgänger Ampel Objekt. |
| environment.addButton( *function* )           | Erzeugt einen Knopf, welcher beim Klicken die *function* ausführt. |
| environment.setStartState( *function* )       | Führt die *function* am Anfang des Programms aus, gedacht um den Startzustand herzustellen. |
| environment.pause( *time* )                   | Pausiert die Ausführung für *time* in ms. |
| *trafficLight*.turnLightOn( *color* )         | Schaltet Licht der Farbe *color* an. *trafficLight* ist dabei entweder ein TrafficLight oder ein PedestrianTrafficLight Objekt. Die *color* wird als String übergeben und kann bei beide Objekttypen 'red' und 'green' sein. Bei einer Autoampel kann es auch 'yellow' sein. |
| *trafficLight*.turnLightOff( *color* )        | Die gleiche Funktion wie *trafficLight*.turnLightOn( *color* ), nur dass diese Funktion ein Ampellicht ausschaltet. |

Um das Programm zu starten, musst du folgenden Befehl in die Konsole im Codeverzeichnis eintippen.

```consol
npm run startSim
```
Dann sollte sich ein Fenster öffnen, wo du deinen Simulationsaufbau sehen kannst. Falls nicht, versuche die Fehlermeldung zu interpretieren und das Problem zu lösen. Dabei kann für dich auch der Abschnitt Hilfe und Tipps nützlich sein.

## Abgabe des Programms
Um das Programm später benutzen zu können, sende bitte den EnvironmentBuilder.js vor dem nächsten Bewerbungsgespräch zu. Zusätzlich kannst du deinen eigenen Laptop mitbringen und noch andere Möglichkeiten zur Distribution deines Programms verwenden.

## Hilfe und Tipps
Falls du kein JavaScript kannst, ist das kein Problem. Auf Seiten wie <https://www.w3schools.com/js/> kann man JavaScript schnell lernen.
Für das vorliegende Programm ist es auch nicht nötig JavaScript zu können, durch den vorliegendem Code und die Erklärungen in diesem Text, ist es möglich das Programm zu erstellen.

Wenn du beim Ausführen des Programms, oder beim *npm install* Probleme hast, kann das verschiedenen Ursachen haben. In manchen Fällen ist es zusätzlich noch nötig "npm install electron" auszuführen, falls Electron nicht richtig installiert wurde. In anderen Fällen kann es sein, dass Abhängigkeiten zu Johnny-Five fehlen, meistens muss man dafür einmal Visual Studio installieren, mit den C++ und windows buildtool.

Falls du Fragen oder Probleme hast, kannst du gerne per Mail Fragen stellen.
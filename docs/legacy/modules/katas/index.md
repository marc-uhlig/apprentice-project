# Katas

Katas sind Übungsaufgaben, die man alleine oder im Team löst. Hierbei steht der Lernerfolg aller Beteiligten im Vordergrund.

## Warum schreibst du Katas?

Worauf es beim Lösen der Katas ankommt:

- Es geht um den Prozess/die Methode und weniger darum schwierige Katas zu lösen
- TDD (Testdriven Development)
  - Inkrementelles arbeiten (kleine Tests, schnelle Iterationen)
  - Katas oft wiederholen, ggf. mit anderem Pairing Partner, anderem Ansatz oder anderer Sprache
- Shortcuts/Umgang mit der IDE lernen
- 4 Rules of Simple Design (Kent Beck)
- Clean Code/Refactoring
  - Code ist lesbar, Variablen- und Methoden-Namen sind eindeutig und hilfreich
  - Code ist nicht zu aufgeblasen (kleine Teilprobleme kann man auch klein lösen)
  - Duplikate auslagern

Mit der Zeit verinnerlichen sich diese Punkte und werden automatisch. Der Apprentice braucht nicht mehr über die Ausführung nachzudenken, sondern kann sich voll und ganz auf das eigentliche Problem konzentrieren.

## Deine ersten Katas

Für den Anfang absolviere folgende Katas in der gegebenen Reihenfolge:

1. FizzBuzz - [coding dojo](https://codingdojo.org/kata/FizzBuzz/)
2. Christmas Tree - [ccd-school](https://ccd-school.de/en/coding-dojo/function-katas/christmas-tree/) | [codewars](https://www.codewars.com/kata/52755006cc238fcae70000ed)
3. Tennis - [coding dojo](https://codingdojo.org/kata/Tennis/)
4. Prime Factors - [butuncleblob.com](http://www.butunclebob.com/files/downloads/Prime%20Factors%20Kata.ppt)
5. Roman Numerals - [coding dojo](https://codingdojo.org/kata/RomanNumerals/)
6. Mars Rover - [kata-log](https://kata-log.rocks/mars-rover-kata)
7. Game of Life - [coding dojo](https://codingdojo.org/kata/GameOfLife/)

Weitere Katas findest du auf [codewars](https://codewars.com/).

### Mögliche Constraints sind:

- nur Immutables verwenden
- keine Schleifen
- Methoden mit begrenzter Einrückungstiefe
- [weitere Constraints](https://gist.github.com/asierba/5028e63991ce787fe383)

## Wie schreibst du deine Katas

Schreibe immer zuerst einen Test. Implementiere danach nur so viel, dass dieser Test läuft. Nutze 'Fake it till you make it'. Wenn dein Test läuft, und nur dann, kannst du deinen Code refactoren. Nutze dafür kleine, inkrementelle Schritte. Verbessere nur einen Punkt und führe die Tests erneut aus. Sofern alle Tests laufen, kannst du den nächsten Punkt refactoren, bis du mit deinem Code zufrieden bist.

Schreibe nun den nächsten Test und wiederhole den beschriebenen Ablauf, bis alle Testfälle abgedeckt sind.

Beim Refactoring kannst du:

- Variablen extrahieren
- Methoden extrahieren
- aussagekräftige Namen vergeben
- komplexe Konzepte simpler herunterbrechen
- Klassen erstellen
- u.v.m.

## Nach dem Kata

Nachdem du ein Kata geschrieben hast, schreibe es nochmal. Das muss **nicht** sofort im Anschluss erfolgen und auch nicht am selben Tag. Es ist gewollt, ein Kata viele Male zu machen und jedesmal einen Aspekt zu verbessern. Das kann sein, mehr Shortcuts zu verwenden, bessere Tests zu schreiben oder das Kata unter 'Constraints' zu schreiben.

## Review

Wenn du mit der Art und Weise, wie du dein Kata geschrieben hast, zufrieden bist, tue folgendes: Schreibe es nochmal :), aber nimm es auf. Erstelle also einen Screencast davon. Hier sollten keine großen Pausen mehr entstehen. Zeige deinen Screencast deinem Introducer, Mentor oder einem anderen erfahrenen Entwickler. Bitte ihn respektvoll um Verbesserungsvorschläge.

## Friday Katas

Jeden Freitag treffen wir uns remote oder vor Ort und bearbeiten gemeinsam ein Kata. Genauere Anleitung dazu findest du unter [Friday Katas](https://klosebrothers.atlassian.net/wiki/spaces/KB/pages/954990618).

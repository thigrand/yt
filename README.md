# Napisz aplikacje, ktora bedzie uzywac:
. stacku angularowego (angular, bower, grunt)
. stacku testowego (karma, chai, sinon)
. twitter bootstrap (nie mylic z angular bootstrap - do ogarniecia
responsywnosci)
. API zewnetrznych (np. youtube API)
. node.js (w razie potrzeby)

Aplikacja ma za zadanie przechowywac ulubione filmy uzytkownika w
ramach strony. (TYMCZASOWO obslugujemy filmy z youtube)

Uzytkownik moze dodac film na strone poprzez input dostepny na stronie
glownej i wklejenie:
. paska adresu filmu, czyli np.:
https://www.youtube.com/watch?v=4JOAqRS_lms lub
https://youtu.be/vJ3a_AuEW18
. identyfikatora filmu, czyli np.: vJ3a_AuEW18

Filmy powinny byc wylistowane z danymi takimi jak:
. ilosc odtworzen
. ilosc polubien
. nazwe filmu
. miniaturka filmu
i akcjami takimi jak:
. obejrzyj (rowniez po kliknieciu w miniaturke, film wtedy otwiera sie w modalu)
. usun
. przesun (drag&drop)

Lista filmow powinna posiadac paginacje (poprzednie / nastepne), z
informacja o ogolnej liczbie stron i wyswietlac po 10 filmow na
strone.

Filmy powinny byc dostepne rowniez po zamknieciu i ponownym otworzeniu
przegladarki.


dodatkowe zadania:
. pokrycie testowe
. checkbox, ktory po podaniu adresu do inputa pobierze WSZYSTKIE filmy
widoczne na danej stronie

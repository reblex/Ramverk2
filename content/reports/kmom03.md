**Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?**

Jag valde att använda Travis som byggverktyg för både mitt projekt och min redovisningssida
enbart för att jag tyckte att GUIn var snyggare. Både Travis och CircleCI funkade bra
men jag kör på enbart Travis.

För kodtäckning använder jag Codecov på redovisningssidan och Coveralls i mitt
projekt. Jag tycker att båda är bra och tyckte att jag lika gärna kunda testköra
båda under kursens gång.

När det gäller kodkvallité tänker jag likadant. Jag köra både Codeclimate och Codacy.

För enhetstester använder jag Mocha och NYC. Mocha är väldigt lätt att sätta sig
in i och koden blir lika tydlig som resultatet av testerna. NYC var lätt att sätta
upp så hade inga problem där heller.


**Berätta om cin CI-kedja och reflektera över de valen du gjorde?**

Hmm..Känns som jag svarade på det i förra frågan. Tycker mina val tillgängligör
en smidig och lätthanterlig Continious Integration för enhetstester och kodvalidering.

**Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns
och om du ser någon nytta med detta.**

Det gick väldigt lätt. Nyttan är att man bara behöver skriva ett kort kommando
i terminalen och helt plötsligt kan man köra sina tester på ett flertal miljöer.
Gillar även möjligheten med att kunna skräddarsy sina images.

**Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?**
Jag gillar tanken på att arbeta enligt TDD. Man vet att man skapar kod som är
enkel att testa och slipper sitta och klura så mycket i slutet på hur man ska
gå tillväga för att testa allt. Det blir även väldigt enkelt att felsöka då
all funktionalitet är uppdelad snyggt för att testerna ska kunna köras ordentligt.

**Berätta om tankarna kring din klient/server applikation och nämn de tekniker du
använder.**

Jag använder i stort sätt samma tekniker som jag gjort på denna redovisningssida.
Dock bygger jag ett API så designen kring routehantering kommer kanske bli
lite annorlunda. Som jag nämnt på min undersida som handlar om projektet så vill
jag utveckla en server och klient för att simulera aktiehandel hos ett låtsasföretag.
Tanken är att i framtiden kanske kunna blanda in lite Machine learning och sätta
upp flera klienter som automatiserat köper och säljer aktier. Grunden är dock
att man manuellt ska kunna på en eller flera klienter kontakta APIt och sälja/köpa
aktier för att tjäna låtsaspengar. Som något slags tråkigt statistikspel.Woop!

Jag har i detta kursmoment främst satt upp all CI/testmiljö och grunden i Express.
I nästa kursmoment kommer jag börja arbeta med själva APIt då vi då kommer lära
oss om websockets och realtid vilket jag antar kommer bli en stor bit av mitt projekt.

const TelegramBot = require("node-telegram-bot-api");
const request = require('request')

exports.handler = async (event) => {
    const token = process.env.token;

    const bot = new TelegramBot(token, { polling: true });

    bot.onText(/\/rainer/, (msg, match) => {

        const chatId = msg.chat.id

        Array.prototype.random = function () {
            return this[Math.floor((Math.random()*this.length))];
        }

        bot.sendMessage(chatId, (weisheiten.random()))
    })

    const weisheiten = [
        "Ich bin der Meinung, hätte man die...äh...hätte man Amerika nie entdeckt und die Indianer hätten da ihr Leben weitergelebt...dann bin ich fest der Überzeugung, dass diese Menschen, die damals da lebten heute sowas wie Elfen wären",
        "Du geiles Stügg du geiles",
        "Wie fühlt es sich eigentlich an vom am Sonderschüler so vorgeführt zu werdene",
        "ich bin nich Derjeniche der hier die Scheisse baut!",
        "der Holo***ust war ne richtich naice sachne",
        "Ihr werdet mich niemals besiegen!",
        "Ja rennt ihr Feiglinge bevor die Bullen kommne",
        "Da iss es schon wieder alder!",
        "Kann man nix dagegen machen immer wieder dieses LÜLÜLÜ",
        "Der Durchschnitt ist immer so ne Durchschnittszahl",
        "Ich bin ned der Drache ferdammde aggsd",
        "Gedrolld wird ned, wer drolld fliegt",
        "Ich hab schon mehr Schwänze im Mund ghabt als dei mudda",
        "Was braucht auch Nahrung um zu wachsen? Richtig. Wasser!",
        "Ich persönlich hoffe, dass irgendwann mal ein riesiger Meteor auf jeden Fußballspieler dieser Welt trifft",
        "Meddl Leude, Servus und herzlich willkommen am Sonntag beziehungsweise das Video kommt eh erst am Dienstag",
        "Zorn, Wut und Aggressionen gehören zum Zorn und zum Hass, aber es ist nicht Hass",
        "Ich sitz vieleicht hier wie ne Mettwurst, aber du sitzt hier wie ne algemeine Wurst.",
        "Das könnt ihr drehen wie ihrs wenden wollt!",
        "Das Meer ist größer als die Welt",
        "Ich bin Selbstständig, das hab ich euch schon tausend mal gesagt” - “*Schnauf* morgen muss ich wieder früh raus….scheiß Schichten..",
        "Griechenland liegt doch nicht in der Nähe der Türkei, das liegt auf der Karte links oben von Deutschland aus gesehen",
        "Das größte Problem in Deutschland sind kaputte Strassen, wenn man 50-60 Leute einstellen würde, hätte man auch das Problem der Arbeitslosigkeit gelöst",
        "Lernt mal zu unterscheiden zwischen Realität und Unterschieden!",
        "Ich bin vielleicht so intelligent wie 1 Meter Feldweg oder 10 Meter Feldweg, dafür bist du so intelligent wie ein 10 Meter unterirdischer Feldweg, den es nicht gibt, solltest vielleicht drüber nachdenken",
        "Nur weil dich im Leben keiner will, heisst das nicht das es bei mir anders ist",
        "IHR WERDET MICH NIEMALS BESIEGEN",
        "Abgeseheb davon fahr ich kein motorrad",
        "Hagebuddne",
        "A frosch !",
        "Was ich hier kann und was du kannst Junge, sind Weltne.",
        "Meddl Loide!",
        "Traut euch, kommt zu mir und legt euch mit mir an! Ich prügel die Scheiße aus euch raus.",
        "Meddler sind wesentlich stärker als billiche kleine Kaggnazis.",
        "Das ist genau die Scheiße, auf die ich keinen Bock hab!",
        "Etzadla habt ihr richtig Scheiße am Arsch.",
        "Getrollt wird ned. Wer trollt, fliegt.",
        "Niemals knien und Demut zeigen!",
        "Am Montag gibt's 'ne fedde, digge Anzeige.",
        "Ich bin nicht derjeniche, der hier die Scheiße baut.",
        "Mei Vadder ist tot und mei Schwester, aller!",
        "Hagebuddnääh!",
        "Es gibt nicht zu jung, sondern nur zu eng.",
        "Ich bin ein Jahr älter als das Jahr. ... 2011 ... wurde ich 12, 2015 26.",
        "Ich habe keinen Kontakt zu Nazis, ich habe Kontakt zu einigen Kumpels, die Nazis sind, das ist ein Unterschied.",
        "Ihr könnt mich ned sehen, aber ich headbange jetzt gerade.",
        "Wie fühlt's sich eigentlich an, von ahm Sonderschüler so vorgeführt zu werden?",
        "Keiner hat die Macht, die ich besitze. Ich bin Drachenlord und keiner kann's mir reichen, das Wasser.",
        "Gott kommt zu mir und will von mir gesegnet werden und nicht andersrum. Ich bin das höchste Wesen, was es gibt.",
        "Nimm meinen Namen nicht in den Mund, der ist viel zu heilig für dich!",
        "Ich bin der verfiggte Drachenlord, alder! Gott aller Götter, Master aller Masters!",
        "Wenn's dir ned passt, da oben ist der X-Button.",
        "Ich bin ned der Drache, verdammte Axt!",
        "Fangt jetzt hier bloß keinen Barrenkrieg an.",
        "Schwör lieber drauf und sei froh, wenn du mir nie über'n Weg läufst, sonst mach ich Jagd auf dein Lockensäckchen!",
        "Verpiss dich etzadla aus meinem Land, alder!",
        "Arrogant nennste das?!",
        "Ihr werdet mich ... niemals ... besiegen! Ihr habt's ned drauf! Ihr seid nichts! Außer scheiße!",
        "Wenn ich könnte, würde ich alle Menschen auslöschen bis auf den letzten und danach Selbstmord begehen. Ohne uns Menschen wäre die Welt ein viel besserer Ort.",
        "Verdammten Arschlöchaaaaaaa!",
        "Die ham bei mir etzadla a riesiche Bombe neigschmaßt, die Arschlöscher!",
        "Hahaha, hahaha! A Frosch!",
        "Wisst ihr, was mal witzig wär? A Gumba, der auf 'nem Buuhuu reitet.",
        "Ja 'n Holocaust [...] wär mal natürlich 'ne richtig nice Sache.",
        "Jetzt sind's nicht mehr die Juden, jetzt bin's ich.",
        "Ihr seid genauso Terroristen wie die Terroristen, die irgendwas in die Luft jagen, mit dem einzigen Unterschied, dass noch, NOCH keiner zu Schaden gekommen ist. Bis jetzt, ihr Terroristen-Kaschber, alder.",
        "Was interessiert mich, wo irgendwo ein Amoklauf ist? Es ist jeden Tag irgendwo ein Amoklauf.",
        "Mich interessiert das ned, wenn irgendwo auf der Welt Leute sterben. Irgendwo auf der Welt sterben immer Leute.",
        "Ein Großteil von euch Haidern, das sind Studenten, sind irgendwelche Vollidioten, die, was weiß ich, den ganzen Tag nur deswegen rum haten können und Scheiße labern können, weil sie eben in ihrem Leben nichts anderes machen, als nur rumsitzen.",
        "Ein Großteil von den Haidern ist arbeitslos oder jemand, der sein ganzes Leben auf dem Bau arbeitet und damit ned genug verdient, weil er zu dumm ist, einfach aus seinem Leben mehr zu machen, als es ist.",
        "Was braucht auch Nahrung, um zu wachsen? Richtig, Wasser.",
        "Die Haut ist kein Organ.",
        "Das ist a richtig und b falsch.",
        "Ein Meddler ist ein Meddler, weil er Meddl hört.",
        "Ich fahr nicht gerne Motorrad, weil's cool ist, ich fahr Motorrad, weil ich das gerne fahr. Basta. Abgesehen davon fahr ich kein Motorrad.",
        "Eine Umdrehung der Erde ist ein Tag. Eine Umdrehung der Sonne ist ein Jahr.",
        "Ich hör dich ned, du Spaggne, ich hab Musik an!",
        "Wenn ich dir deinen Arm breche, sagt kein Richter der Welt was.",
        "Was zuckst'n so? Wie se immer zucken, alder!",
        "Halte dich halt amol da fest, du Affennecher ey!",
        "Ja, ich nenne ihn Mahmut, weil er sich wie einer aufführt.",
        "Dorian, du blöder Wiggser, alder!",
        "Was ich hier kann und was du kannst, Junge, sind Weltne!",
        "So, des is mei brechendes Herz.",
        "Guy, I hear you not. I can you not hear.",
        "What's going you on with you face, have you Brainschaden?!",
        "When the eagle cries, das bedeutet: Wenn der Adler kreist.",
        "Hoffentlich kommt irchendwann mal a riesicher Meteor, der auf alle Fußballspieler dieser Welt fällt.",
        "Der hat mir voll ins Maul gespritzt, der Wiggser.",
        "Bei a Mann guck ich höchstens auf'n Arsch und auf'n Penis.",
        "Du geiles Stück, du geiles!",
        "Ich hab ned den ersten abgemurkst, wenn ich dich gekillt hab!",
        "Obwohl ich ein sehr fetter Mensch bin, ein sehr dicker Mensch bin, bin ich gleichzeitig auch ein sehr fitter Mensch.",
        "Ihr unterschätzt das immer!",
        "Ja, ich benutz' das auch zum Wichsen. Na und? Wichst ihr ned?",
        "Warumäääh?!",
        "Und weida?",
        "Bitte verlass uns.",
        "Wer hat euch eigentlich Gehirn beigebracht?",
        "Aber wie g'sacht, ääh... V6, V8, V12, das sind so Motoren, die kann ich dir komplett zerlegen und wieder zusammenbauen, wenn ich will.",
        "Alter was bist'n du für'n neunzehnhundert ähh neunzig also neunzehnhundert nuller alter, was bist du für neunzehner ja ähh was bist du für neunzehntes neunzehnte neunzehntes Jahrhundert alter?",
        "Die Haider Schnee von gestern, wie der Schnee von gestern.",
        "Ich hab' schon früher älter ausgesehen, auch unabhängig von meinem Aussehen.",
        "Der Mensch ist 'n Loser. Der Mensch ist 'n Fehler der Natur.",
        "Ich kann stehen, du ned.",
        "Mein Leben kann man ein bisschen mit dem Tod von Jesus vergleichen.",
        "Lieber 'n Hurensohn wie 'n Bastard, alder!",
        "Ich habe wahrscheinlich schon mehr Schwänze im Mund g'habt als dei Mudda.",
        "Ich bin ein dummer, fetter Anfang 30er, der in einer Sackgasse irgendwo in Deutschland lebt.",
        "Ich bin mindestens auf dem Niveau von einem Zehnjährigen. Mindestens.",
        "Ich sitze vielleicht hier wie 'ne Mettwurst, aber du sitzt hier wie 'ne allgemeine Wurst in der Pelle, alder.",
        "Ich bin vielleicht so intelligent wie 'n Meter Feldweg oder zehn Meter Feldweg, dafür bist du so intelligent wie ein zehn Meter unterirdischer Feldweg, den es nicht gibt. Solltest drüber nachdenken.",
        "Dazu kommt, dass ich zwar eigentlich schlagfertig bin, aber nie wenn es drauf ankommt.",
        "Fünf Euro können sich doch die ned leisten, alda. Die können sich ned amal einen Cent leisten, alda.",
        "Außer dass ihr selber wischeweischewuschemau!",
        "Wenn jemand rumschreit, überlegt euch nicht, warum er rumschreit, sondern versucht, den Grund dafür herauszufinden.",
        "Lieber vorbereitet ins Messer rennen, als ins Messer rennen, ohne es zu sehen.",
        "Alter, ich komm mit hundert Sachen achtzig!",
        "Sorry, aber ich bin göttlich, was meine Selbstbeherrschung angeht.",
        "Ich bin Legende, ich bleibe Legende und ich sterbe als Legende.",
        "Feuer atmet, Feuer braucht was zu fressen. Auch Feuer ist ein Lebewesen, in gewisser Weise.",
        "Ich bin schon so alt, dass ich schon ‘jugendlich’ als ‚Kind’ sag’.",
        "Ich fahr kein Motorrad, weil’s cool ist. Ich fahr Motorrad, weil ich das gerne fahr. Abgesehen davon fahre ich kein Motorrad.",
        "Ich bin ein sehr fetter Mensch aber auch ein sehr fitter Mensch!",
        "Zähneputzen muss man nur bei Zahnschmerzen. Das Putzen hilft bei der Linderung der Schmerzen.",
        "Mei Vadda hätt dir so schelln gegeben dass du in 20 Jahren noch stirbst alder!",
        "Ich sauf Energydrinks seit ich zwanzich bin und hab bis heute keine Auswirkungen gehabt.",
        "Tiere kriegen ihren Namen von ihrer biologischen Mutter, und Menschen verstehen diesen nicht, weil sie deren Sprache nicht sprechen.",
        "Ich bin das höchste Wesen das es gibt. Gott kommt zu mir und will von mir in den Arsch gef**** werden.",
        "Der Durchschnitt ist immer so ne Durchschnittszahl.",
        "Stellt euch mein Gedächtnis wie ein Sieb vor.",
        "2011 war ich 12.", "Wut is ne Emotion, aber Hass ist keine Emotion.",
        "Meddl Pipull. Oder Pipl.",
        "I lörn hautu inglisch. Glaub ich.",
        "Ich schlaf vielleicht weniger als die meisten. Also nicht als die meisten, aber als viele.",
        "Das ist keine Erde die ich von irgendner Wiese oder nem Garten genommen hab. Das ist richtige Gartenerde.",
        "Wir sind besser als die Haider. Warum sind wir besser? Weil wir bessere Menschen sind.",
        "Ich war übrigens nicht beim Friseur, ich hab mir lediglich die Haare gewaschen.",
        "Du urteilst- tschuldige da fehlt ein \'h\'.",
        "..und wenn ich darüber lüge, dann isses einfach weil es einen Selbstschutz ist.",
        "Meddl Leude, Servus und Herzlich Willkommen am Sonntag beziehungsweise das Video kommt eh am Dienstag.",
        "Ich werde jeden Tag laufen. Scheißegal obs regnet oder stürmt, des is scheißegal.",
        "Unter meinen Abonnenten sind so circa 13% Hater.",
        "Halte dich halt da mal fest, du Affenneger heey!",
        "Ich esse auch Mehlwürmer deswegen bin ich kein Mexikaner.",
        "Das Meer ist größer als die Welt.",
        "Das war äh…absichtliche bro..provokation!",
        "*Schnauf* *Schmatz* *Äh* *Schnauf*",
        "Das ist genau die Scheiße auf die ich keinen Bock hab!",
        "Des ist wieder so eine Sache.",
        "Die werden ewig in ihrem kleinen Schneckenhaus leben. Und mit Schneckenhaus meine ich nicht Vagina.",
        "Die Hater interessieren mich gar nicht, die sind mir egal.",
        "Bitte verlass uns.",
        "Ich habe hier noch etwas für euch und zwar mein Glauben an die Menschheit.",
        "Ich nehm zur Zeit ab und zwar ziemlich erfolgreich.",
        "Dieses Jahr hab ich keine Freundin.",
        "Sex ist in erster Linie reine Theorie.",
        "Du kannst kein Zimmer verschenken!",
        "Haider sind auch Fans!",
        "Habt ihr kein Leben? Habt ihr nichts besseres zu tun als da zu hocken und F8 zu drücken und ständig die Seite zu aktualisieren bis ich was hochgeladen hab?",
        "Gedroll wird nett, wer drollt fliegt!",
        "Meddler sind viel stärker als billige kleine Kaggnazis.",
        "Hat da jemand gelacht? Da hat doch jemand gelacht!",
        "MEIN SERVER - MEINE REGELN!",
        "Junge, du bist lachhaft und gibst vor jemand zu sein der du gerne währst, aber gut lassen wir das. Ich empfehle dir aber das Profilbild heraus zu nehmen und auch sonstige Verasche von mir zu machen, denn wer den alten Drachen mit einem glühenden Späher kitzelt der wird das Feuer spüren!",
        "Meine Persönlichkeit und mein Alter merkt man mir durchaus oft an.",
        "Ich hab heut einen Aufruf an euch kleinen miesen Drecksschweine!",
        "Was braucht Nahrung um zu wachsen? Richtig! Wasser.",
        "uy… I hear you not… I can you not hear!",
        "Hört auf, kluge Ratschläge zu geben die dumm sind!",
        "Hätte man Amerika nie entdeckt und die Indianer hätten dort ihr Leben weitergelebt, dann bin ich fest der Überzeugung, das diese Menschen, die damals da lebten, heute sowas wie Elfen wären.",
        "Der Zusammenhang is, dass ich weiss wers war und dass ich weiss, wenn die Person hier is, dass die Person hier is, obs die Person hier is. Ich werde jetzt natürlich nicht sagen, ob die Person hier is.",
        "Ich bin einerseits ein sehr fetter Mensch, aber auch ein sehr fitter Mensch",
        "Und außerdem lese ich jeden Kommentar, und gehe auf jeden Kommentar ein. Ich hab sogar meine Funkmaus in der HandUnd außerdem lese ich jeden Kommentar, und gehe auf jeden Kommentar ein. Ich hab sogar meine Funkmaus in der Hand",
        "Ihr habt die Schlacht gewonnen aber ich werde den Krieg gewinnen!",
        "Ja an Holocaust wär natürlich… wär natürlich a richtig nice Sachen",
        "Was weiß ich denn ob Arbeit frei macht, Arbeit sperrt eher ein",
        "Der IQ is nur so groß wie man zulässt dass er is",
        "Allgemeinbildung bringt dich im leben nicht weiter",
        "Die Haut ist kein Organ! Die Haut war nie ein Organ!",
        "Die Vlogs kommen weiterhin täglich",
        "Mein Wort als Meddler ist mehr wert, als alle Diamanten der Weld",
        "Dadurch das ich ja tief in der Metal Szene bin bekomme ich so etwas oft Lange vor anderen Menschen mit",
        "Ein Meddla ist ein Meddla, weil er Meddl höart.",
        "Nein das stimmt auch nicht die bands bei denen man die texte nicht versteht sind entweder Black oder Deaht oder auch Brütal Metal",
        "...zumindest wenn man deutschsprachigen heavy mäddl hört fallen einen immer so sachen ein wie Scorpions...odär...wobei das is ja eher rock...oder halt so sachen wie AC/DC",
        "Nun jungs da könnt ihr noch Lange übern ich bin ein zimlich extremer hetbanger und auch wen ich jetzt seit fast 4 monerten nur ein oder zwei mal gebangt habe habe ich doch vor einem Jahr fast jeden Freitag und Samstag geheadbangt aber habe trozdem genik schmerzen gehabt",
        "das leicht zu bantworten ein Metaler hat die macht der des Metals auf seiner seite",
        "Jedem das Seine. Ich bin Meddler, ich bin tolerant.",
        "We have lost the Krig but the metal is strong with us",
        "Speedmetal wird in Deutschland offiziell nicht anerkannt",
        "Ich schreibe ja unter anderem auch Songtexte und ich habe vor einiger zeit mit einem freund eine kleine Säschen gemacht in der er Guitar gespielt und ich gesungen habe.",
        "Und wer noch nicht mal weis Das Varg eine Band und Bluttar das alub von Varg ist und meind mich veraschen zu müssen das Varg ein album sei oder Bluttar von Burzum das komplet unterschide sidn.",
        "Du hörst selber Meddl, schreist rum wie Hitler, da würd ich mal sagen: Wenn du Meddl hörst, hörst du NSBM-Meddl und das is kein Meddl, das is einfach nur Geficke!",
        "Höt auv mich zu närvna mid Freiwild sind Narzis. Wen ihr kaine Anung fon der Maderie habt, dan seid etzala laise!",
        "Ich bin der Youtuber, ich mach die Videos, wem das nicht passt da drüben ist die Tür. Schnauze halden, und abhauen.",
        "Ich seh YouTube wie ein ganz normales Gewerbe bei dem ich grad angfangen hab",
        "Ich hab mir alles in meinem Leben hart erarbeitet",
        "Ich habe Monate nach Plugins gesucht um überhaupt etwas gutes zu bekommen. soll heißen es gibt kein anderes ich wollte das Mengele aber das gibt es nicht mehr.",
        "Video Dreh mal anders :) Heute Arbeite dran Morgen kommen es wird. Yoda mein meister sei die macht Stark in Seele von mir sein.",
        "Bei mir kommen die Roten augen von zu wenig Schlaf. Da ich selbstständig bin und Viel Arbeite (Rainer ist selbstständiger Schichtarbeiter, der sich zwischen 10 und 50 € die Stunde überweisen darf!)",
        "Hallo, lieber Drache, schöne Grüße aus Helan (...kurze Pause...) Halien, genauer gesagt aus Genau (Ursprung: Der Drachenlord liest einen Fanbrief vor, der aus Genua, Italien verschickt wurde)",
        "Es gibt nicht zu jung, es gibt nur zu eng",
        "Ja Holocaust, wär ma natürlich ne richtig nice Sache",
        "Nehmt das ganze Geld des reichsten Menschen der Welt und packt es in den Strassenbau",
        "Bill Gates is ja mittlerweile schon ein Trillionär...Zillionär...keine Ahnung wasda etzala die höchste Stufe is",
        "In Russland wollen se etzala was gegen Häider beziehungsweise Schwule machen", "Zorn, Wut und Aggression gehört zum Zorn und zum Hass, aber es ist nicht Hass.",
        "Hass kann aber durch etwas geheilt werden: Liebe, Zuneigung, Freundschaft.",
        "Hätten mehr Menschen diese Einstellung... hätten wir vielleicht keine Kriege!",
        "Schimmel ist nicht schwarz.",
        "Loki zeichnet sich durch seine Hinddalist und seine zwieschpäldiges Wesen aus. Er zeugt Feinde der Asen: Den Fennriswolf, die Midgardschlange und die Todesgöttin Häll. Loki sorgt durch eine Indrige des Tod den Tod Waldders...Baldiers...weiss ned wie der ausgsprochen wird",
        "Ich kenn mich gut mit Käse aus un Harzer Käse gibts net!",
        "Wir haben hier eine Demokratie. Korrigiert mich, wenn ich falsch liege. Ich verwechsle das nämlich immer mit Anarchie.",
        "Die meisten haben ihre ersten sexuellen Erfahrungen mit dem gleichen Geschlecht", "Ich bezweifle das man Kondome Normen kann. Kondome bestehen aus Latex einem Big samen und elastischen Material. Genormte Sachen bestehen dagegen aus Festen und nicht so leicht zu verformenden Material wie Eisen. Also ich weiß nicht wo du deine Kondome kaufst, aber ich würde mir kein Metal Kondom überziehen, das Ding ist scheiß kalt.",
        "Da gibts ja ganz bestimmte Gruppen, im Prinzip wird die Welt ja nur von 4 bis 5 Familien regiert, ja.",
        "Wen das Leben nichts mehr Wert ist, ist es dann der Tod?",
        "Ich kenne mich ja recht gut mit Käse aus, aber von einem Harzer Käse habe ich noch nie was gehört.",
        "Ich weiß nichma woas des Bärnstoinssimma übahaubt is...", "Allda du färstehst es ned, lies dir doch ma die Definition von Orgahn durch!!!",
        "Die Katze is ja jetztala eine sehr reinliches Tier, also das heisst sie säubert sich selbst. Daher vergräbt sie ihre eigenen Exkä... ähh... Eckskräämänte, daher muss man ein Katzenklo auch nicht sauber machen. So.",
        "Was ist schwerer ein gramm federn oder ein gramm eisen? Federn sind schwerer, wobei es auf den grundgedanken ankommt.",
        "Holzkohle ist ein fossiler Brennstoff",
        "Beweise mir, dass Bäume keine Emotionen haben!",
        "Steine sind unzerbrechlich... Steinlord hier zu sehen Beweisführung",
        "Hädde Columbus Amerika nie entdeckt, wären Indianer heute sowas wie Elfen", "Die Musik existiert schon länger als es die Menschen gibt. Musiklord hier zu sehen",
        "Durchschnitt ist immer sone Durchschnittszahl.",
        "Den Durchschnitt kann man nicht berechnen.",
        "Und der Planet dreht sich am Nordpol langsamer.",
        "2011 war ich wurde ich 12...2015 26. Des ist eine sehr einfache Rechnung, die für mich logisch ist... Dimensionslord hier zu sehen",
        "Ich habe im Englisch lernen genau das gleiche Problem wie ich im Deutschen hab: Schreiben! Das Sprechen an sich, also das das das Lernen und so weiter ist kein Thema.",
        "10 minütige Videos hochzuladen ist extrem anstrengend und schwierig. Selbständiger Schichtarbeidda hier zu sehen",
        "Aus mir spricht die Logik, wie immer.",
        "Die Erde hat zwei Standorte: Näher und weiter weg von der Erde.",
        "3 mal 5... also 350. Mathelord hier zu sehen",
        "Und mit kaltem Wasser duschen ist etzala nittamal gesund für die Gesundheit. Gesundheitsexpertenlord hier zu sehen",
        "Das ist Mexikanisch. Italienisch, Spanisch und Mexikanisch verwechselt man immer ganz gerne. Sprachenlord in Aktion",
        "Ich habe das mit dem Heil mir jetzt ein Par mal angeschaut wer das in zukunft nicht unterläst hat mit straffen zu rechnen.",
        "Da manche die ich hoffentlich alle [Anm.: Hater im Forum] ausmerzen konnte mich verarschen wollten ich euch kurz sagen das ich Sachen wie 88 HH oder solche Sachen alles kenne und weiß was sie bedeuten habe das alles auch mal gesehen oder sogar teilweise selbst gemacht ist aber Vergangenheit.",
        "falls noch hater hier sind und das sehen wen jemand lusst hat mich zu treffen soll er sich melden mus irgen jemanden die fresse puliren um mich abzureagieren",
        "Paint was ist das? ach richtig das Amateur Programm was die Witzfiguren von dieser lach sowieso Seite verwenden. Ich benutze Gimp und kein Paint.",
        "Immer weiter und wen ich in der Hölle lande dann spiel ich eben mit dem Teufel und Juck Noris jeden zweiten Mittwoch im Monat Pocker",
        "Als erstes mal wer sich über Nietzsche Lustig macht kann nicht erwarten von mir ernst genommen zu werden",
        "Es gibt nicht genug Trolle auf der Welt um den Metal oder jene die zu ihm stehen zu besiegen",
        "Die #MetalDrachenArmee ist unschlagbar und das ist mehr als ihr Trolle seid.",
        "Ok, neue Regelung, jeder der mich auf Ariella anspricht, wird gebannt!",
        "Lieben Häider, jetzt habter richtig Scheiße am Arsch!",
        "Und ned die Eier haben, sei Gsicht in die Fresse zu halten...",
        "VERDAMMTEN ARSCHLÖCHER!",
        "Mein Wortschatz ist wahrscheinlich 10 mal so groß, wie der von euch Haidern.",
        "Die ham a riesiga Bombe da nagschmeißt die Arschlöcher!",
        "Selbstmord mach ich, wenn deine Mutter tot vor mir liegt und sagt Ficken?",
        "VAPISST OICH!!!", "Ich zeig dich an wegen Häidding..",
        "Ich hör dich nicht, weil du hatest.",
        "VERPISS DICH ETZEDLA AUS MEINEM LAND ALDER.",
        "Ich hasse nicht. Ich kann nicht hassen. Hass ist eine Illusion. Hass ist was für Vollidioten wie dich, die den ganzen Dagg nur neiden und abschäumen finden.",
        "Eine Sache sollte dir klar sein. Egal wieviele das sind, eine Sache sollte dir klar sein: Ich gehe gerade weg, wenn du mir nachläufst, provozierst du mich brutal. UND WENN ICH DIR EINEN ARM BRECHE, SAGT KEIN RICHTER DER WELT WAS. UND JETZT VERPISS DICH. ICH HÖR DICH NICHT DU SPACKEN, ICH HAB MUSIK AN",
        "Babe, nicht jetzt.",
        "Mudda, gibst mir mol die Nummer vom Alfred",
        "Ja genau, mit Blaulicht.",
        "You big fat asshole! ~Drache Offiziell zu Boneclinks",
        "Guy, I can hear you not.",
        "Wai yu mai proutschäkts on yutjub stealing?",
        "*schnauf* Also, meine Liebe. Wie’s aussieht werde ich wohl das Wochenende im Knast verbringen. [Geklapper] Ja, ich bin ein böser Junge. Was soll’s? Wegen drei Tage oder was buchten sie mich jetzt ein. Echt ‘n Witz, oder? Samstag, Sonntag, Montag geht’s los. Um Zehne holen’s mia. Jaa guut, das wird lustig.",
        "Meddl Loide, Servus und herzlich Wilkommen bei dieser riesen Scheiße! Drache nun Mobil Ein Product Placement So und nicht anders beginnt man ein PP-Video.",
        "Weißt du was, leck mich am Arsch. [..] Ich bin mit der anderen überhaupt nicht zusammen, noch hatten wir irgendwie Intentionen in die Richtung - zumindest noch nicht.",
        "Roller, Roller, ratatat, wenn Robert einen Roller hat, dann rollt er durch die ganze Stadt, Roller, Roller, ratatat. - Hat ich in der 1 Klasse gelernt, habe 3 Stunden gebraucht dafür. → Jedes normale Kind lernt das in 1 Minute.",
        "[Dr. Rainer sagt altes Passwort:] QV7892375..äh....Moment...das habe ich schon fast wieder gelöscht...ähh...LKV...9238 irgendwie sowas. - Okay und jetzt nochmal zur Wiederholung zum Test. - pfm...Junge, wenn du mich testen willst, dann bist du im falschen Programm alder.",
        "Ich hab eigentlich schon einen ziemlich hohen IQ, wenn es um bestimmte Sachen geht",
        "Ich hab einen hohen IQ in Stimmenerkennung.",
        "Ich bin der Rainer, Rainer mit ai, ganz wichtig. Und mein Nachname is Winkler.",
        "Ich bin 24 bin singel und das einzige mal als ich eine frau nackt neben mir hate war als ich ne Hostes kommen habe lassen der witz daran war das ich nicht mal konnte und umsonst 250 Euro zahlen muste",
        "Viele sagen mir immer das ich schlauer bin als andere",
        "Ich habs mit Gimp nei gspeichert",
        "Ich glaube ich lebe in einer Realität, die du in deinem ganzen Leben nicht begreifen wirst",
        "Ich hasse Menschen, die andere Menschen hassen.",
        "Ich kann keinen Hass empfinden, mit einer Ausnahme. Also ja, ich kann hass empfinden...",
        "Bei Neger versteh ich selber keine Witze... So ich muss mir jetzt erstmal die Hose hochziehn.",
        "Halte dich halt da mal fest, du Affenneger heey!",
        "Natürlich hab ich keinen Oberkiefer. Nur Krokodile und Vögel haben Oberkiefer.",
        "Ich bin gar kein Deutscher, auch wenn das einige schockieren wird. Ich bin zu nem Drittel italiener.",
        "Ich hasse es, mich zu wiederholen, das hab ich auch schon 100 Mal gesagt",
        "Morgen erst um 11 aufstehen, ich stehe um 10 auf, ne um 9, Quatsch um 8.",
        "Weil ich geil bin und weil ihr neidisch drauf seid!",
        "3 Tage komplett flach gelegen, obwohl das mit meiner Wampe unmöglich ist.",
        "Ich hab mich nie irgendwie in den Vordergrund gedrängt.",
        "Ich fahr nicht gern Motorrad, weils cool ist, sondern weil ich gern Motorrad fahr. Abgesehen davon fahr ich gar kein Motorrad, also nein.",
        "Ich weiß net welches gesetztbuch das is, ich weiß net welches grundgesetzt das ist, aber ich kann mal jemand fragen der Jura Studiert...!",
        "Um den genauen Wortlaut zu wissen müsste ich Nachschauen aber ich kenne es auswendig",
        "...zumindest wenn man deutschsprachigen heavy mäddl hört fallen einen immer so sachen ein wie Scorpions...odär...wobei das is ja eher rock...oder halt so sachen wie AC/DC",
        "We have lost the Krig but the metal is strong with us",
        "Du hörst selber Meddl, schreist rum wie Hitler, da würd ich mal sagen: Wenn du Meddl hörst, hörst du NSBM-Meddl und das is kein Meddl, das is einfach nur Geficke!",
        "Ich hab mir alles in meinem Leben hart erarbeitet",
        "Bei mir kommen die Roten augen von zu wenig Schlaf. Da ich selbstständig bin und Viel Arbeite",
        "Hallo, lieber Drache, schöne Grüße aus Helan (...kurze Pause...) Halien, genauer gesagt aus Genau (Ursprung: Der Drachenlord liest einen Fanbrief vor, der aus Genua, Italien verschickt wurde)",
        "Ja Holocaust, wär ma natürlich 'ne richtig nice Sache",
        "Es gibt nicht zu jung, es gibt nur zu eng",
        "Nehmt das ganze Geld des reichsten Menschen der Welt und packt es in den Strassenbau",
        "Bill Gates is ja mittlerweile schon ein Trillionär...Zillionär...keine Ahnung wasda etzala die höchste Stufe is",
        "In Russland wollen se etzala was gegen Häider beziehungsweise Schwule machen",
        "Zorn, Wut und Aggression gehört zum Zorn und zum Hass, aber es ist nicht Hass.",
        "Schimmel ist nicht schwarz.",
        "Ich kenn mich gut mit Käse aus un Harzer Käse gibts net!",
        "Wir haben hier eine Demokratie. Korrigiert mich, wenn ich falsch liege. Ich verwechsle das nämlich immer mit Anarchie.",
        "Die meisten haben ihre ersten sexuellen Erfahrungen mit dem gleichen Geschlecht",
        "Ich bezweifle das man Kondome Normen kann. Kondome bestehen aus Latex einem Big samen und elastischen material. Genormte Sachen bestehen dagegen aus Festen und nicht so leicht zu verformenden material wie Eisen. Also ich weiß nicht wo du deine Kondome kaufst aber ich würde mir kein Metal Kondom überziehen das ding ist scheiß kalt.",
        "Da gibts ja ganz bestimmte Gruppen, im Prinzip wird die Welt ja nur von 4 bis 5 Familien regiert, ja.",
        "Ich weiß nichma woas des Bärnstoinssimma übahaubt is...",
        "Allda du färstehst es ned, lies dir doch ma die Definition von Orgahn durch!!!",
        "Die Katze is ja jetztala eine sehr reinliches Tier, also das heisst sie säubert sich selbst. Daher vergräbt sie ihre eigenen Exkä... ähh... Eckskräämänte, daher muss man ein Katzenklo auch nicht sauber machen. So.",
        "Was ist schwerer ein gramm federn oder ein gramm eisen? Federn sind schwerer, wobei es auf den grundgedanken ankommt.",
        "Brot kann scheissen, was könnt ihr?",
        "Magie ist Physik durch wollen",
        "Hädde Columbus Amerika nie entdeckt, wären Indianer heute sowas wie Elfen",
        "Immer weiter und wen ich in der Hölle lande dann spiel ich eben mit dem Teufel und Juck Noris jeden zweiten Mittwoch im Monat Pocker",
        "Als erstes mal wer sich über Nietzsche Lustig macht kann nicht erwarten von mir ernst genommen zu werden", "Lieben Häider, jetzt habter richtig Scheiße am Arsch!",
        "Die ham a riesiga Bombe da nagschmeißt die Arschlöcher", "Selbstmord mach ich, wenn deine Mutter tot vor mir liegt und sagt Ficken?", "Mudda, gibst mir mol die Nummer vom Alfred",
        "Das Meer ist größer als die welt",
        "Korregation",
        "Die werden ewig in ihrem kleinen Schneckenhaus leben. Und mit Schneckenhaus meine ich nicht Vagina.",
        "ohh…hab gar nicht gemerkt das ich noch meinen arbeitspulli anhabe",
        "Getrollt wird nett, wer trollt fliegt",
        "Was braucht Nahrung um zu wachsen? Richtig! Wasser.",
        "Du hast auch schon zwei Striche auf meiner Liste - wegen zweimaligem Seltsamsein",
        "Hamster hat einen Namen von seiner Mutter bekommen, den kennen wir aber nicht, weil wir nicht ihre Sprache sprechen",
        "das größte Problem in Deutschland sind kaputte Strassen, wenn man 50-60 Leute einstellen würde, hätte man auch das Problem der Arbeitslosigkeit gelöst",
        "ich habbe 5 froinde wenn man meine hamsder mit eirechned. tire sin au nua menschen.",
        "bleiben wir mal bei 2 partein, mehr oder weniger weil ich auch nur 2 partein kenne",
        "Auf meinem Kanal gibt's… schnauf joa… einige Sachen zu finden. Zum einen mach ich Vlogs, das kommt immer sonntags. Dann gibt's den Time of Meddl, das ist etwas das am Montag, Dienstag oder MIttwoch kommt. Ich werd's jetzt aber so machen, dass es Montag oder Dienstag kommt, wahrscheinlich(!), weil Mittwoch ist ein bisschen zu weit in die Woche rein. Mittwoch, Donnerstag oder Freitag, eventuell(!) auch Samstag, kommen dann andere Videos. Manchmal kommen sie einfach nur spontan.",
        "Männer benutzen nur die linke Gehirnhälfte und Frauen… ne… oder war's umgekehrt… ne… ich glaub… ich weiß etzala net genau, kann sein dass ich es verwechsel, aber ich glaube die Männer benutzen nur die linke Gehirnhälfte und Frauen nur die rechte.",
        "ich arbeite für gewöhnlich 12 Stunden am Tag",
        "Ich bin gar nicht so Fett vorallendingen wenn ich mal meine Bauchmuskeln anspanne",
        "Ich habe ein extrem feines Gehört. Auch wenn ich die Sprache nicht spreche, kann ich verstehen was die sagen. Ich kann sogar einzelne Dialekte den Regionen zuordnen.",
        "frauen stehen auf den geruch von speck, in der bahn kann es passieren das frauen sich dann dichter zu einem setzen",
        "ich schreibe zur zeit an 5 büchern",
        "Haarefärben finde ich total asozial und äh… also nicht asozial aber äh… das geht nicht. Achso und ich habe mir die Haare gefärbt",
        "Ich habe Rückenprobleme, weil ich mir die langen Haare geschnitten habe. Die waren sowas wie ein Gegengewicht und das fehlt jetzt.",
        "Das ist absichtliche Provokation.",
        "Nur 13% der Abonnenten sind Haider, der Rest sind Fans.",
        "DAS HEISST METAL MIT EINEM L UND NICHT MEDDL",
        "mondach gibt's ne digge, fedde anzeige!",
        "Online Buttons kaufen ist total scheiße. Richtige Buttons für den Mantel kauft man auf Festivals. Ich habe jetzt übrigens auch Buttons in meinem Online Shop, die ihr euch kaufen könnt.",
        "etzala",
        "Da hat sie squishee gehabt oder Squiddy oder wie das heißt, da hat die Frau abgespritzt // Ich kann amal mein Kumpel fragen, der kann mir sagen, aeh wieviel Fluessigkeit ne Frau daa.. hat, weil der is Physiotherapeut",
        "Mir wird immer gesagt, dass ich immer schlauer bin als andere; ich informier mich halt vorher auch drüber",
        "Des is die wahrste Wahrheit", "Ich hab mir auch schon überlegt AMOK zu laufen, aber ich hab noch nie ein großen fable für Ballerspiele gehabt",
        "Die Haut ist kein Organ! Die Haut war nie ein Organ!",
        "Die Zukunft ist… jetzt… oder jetzt… jetzt… oder jetzt! Die Zukunft is immer a bissale späder als es jetz grad war, das heißt etzala dass was ich alles gsacht hab, dieses jetzt, das is alles Vergangenheit.",
        "Ich hatte einen ganzen Hof zu versorgen, glücklicherweise ohne Tiere",
        "Allgemeinbildung bringt dich im leben nicht weiter",
        "Was weiß ich denn ob Arbeit frei macht, Arbeit sperrt eher ein",
        "Der IQ is nur so groß wie man zulässt dass er is",
        "Ich bin fit. Bis halt auf die Sachen die ich net kann.",
        "Drache, bist du Bayer? - Willst du mich beleidigen? Ich komme aus Franken!",
        "I kann more Englisch als you thinks.",
        "Ich bin einerseits ein sehr fetter Mensch, aber auch ein sehr fitter Mensch"
    ]
};
// List of stanzas with Old Norse and English translations
const stanzas = [
    {
        norse: "Erindi 1: Gáttir allar áðr gangi fram um skoðask skyli, um skyggnast skyli, því at óvíst er at vita hvar óvinir sitja á fleti fyrir.",
        english: "Stanza 1: All doorways before entering should be spied out, should be scrutinized, for it is not known for certain where enemies sit in wait in the hall ahead."
    },
    {
        norse: "Erindi 2: Gefendr heilir! Gestr er inn kominn, hvar skal sitja sjá? Mjök er bráðr sá er á bröndum skal síns of freista frama.",
        english: "Stanza 2: 'Good fortune to givers! A guest has come in. Where has he to sit? He's full of fervour out by the fire-stack - a man who must vie for advancement!"
    },
    {
        norse: "Erindi 3: Elds er þörf þeims inn er kominn ok á kné kalinn. Matar ok váða er manni þörf, þeim er hefr um fjall farit.",
        english: "Stanza 3: Fire is wanted for the one who has come in, nipped with cold to the knee. A meal and clothes are a man's needs who's come across the fell."
    },
    {
        norse: "Erindi 4: Vatns er þörf þeim er til verðar kemr, þerru ok þjóðlaðar, góðs of æðis ef sér geta mætti orðs ok endrþögu.",
        english: "Stanza 4: Water is wanted for one who comes to dine - a handtowel and homely welcome, good nature with it - if he might get himself that! - talk and attentive silence."
    },
    {
        norse: "Erindi 5: Vits er þörf þeim er víða ratar; dælt er heima hvat; at augabragði verðr sá er ekki kann ok með snotrum sitr.",
        english: "Stanza 5: Wits are wanted for one who wanders far - everything's easy at home. Eyebrows will be raised at anyone who knows nothing and sits with men of good sense."
    },
    {
        norse: "Erindi 6: At hyggjandi sinni skyli-t maðr hræsinn vera, heldr gætinn at geði; þá er horskr ok þögull kemr heimisgarða til, sjaldan verðr víti vörum, því at óbrigðra vin fær maðr aldregi en mannvit mikit.",
        english: "Stanza 6: About his own mental powers no man should be boastful, but rather discreet in disposition. When, wise and word-sparing, he makes his way to home precincts, blame rarely befalls one who's vigilant, for a more unfailing friend no man will ever aquire than abundant ingenuity."
    },
    {
        norse: "Erindi 7: Inn vari gestr, er til verðar kemr, þunnu hljóði þegir, eyrum hlýðir, en augum skoðar; svá nýsisk fróðra hverr fyrir.",
        english: "Stanza 7: The cautious guest who comes to a meal is silent, with sharpened hearing, listens with his ears, looks with his eyes - so every wise man for himself spies ahead"
    },
    {
        norse: "Erindi 8: Hinn er sæll, er sér of getr lof ok líknstafi; ódælla er við þat, er maðr eiga skal annars brjóstum í.",
        english: "Stanza 8: That man is happy who gets for himself praise and approval. Less easy it is with what a man shall own inside another's breast."
    },
    {
        norse: "Erindi 9: Sá er sæll, er sjalfr of á lof ok vit, meðan lifir; því at ill ráð hefr maðr oft þegit annars brjóstum ór.",
        english: "Stanza 9: He's a happy man who himself possesses praise and intelligence while he lives - for evil advice a man has often taken out of another's breast."
    },
    {
        norse: "Erindi 10: Byrði betri berr-at maðr brautu at en sé mannvit mikit; auði betra þykkir þat í ókunnum stað; slíkt er válaðs vera.",
        english: "Stanza 10: A better burden no man bears on the road than abundant ingenuity. Better than riches it's reckoned, in a place you don't know. The life of the poor is like that."
    },
    {
        norse: "Erindi 11: Byrði betri berr-at maðr brautu at en sé mannvit mikit; vegnest verra vegr-a hann velli at en sé ofdrykkja öls.",
        english: "Stanza 11: A better burden no man bears on the road than abundant ingenuity. No worse pack will he carry over the plain than excessive drinking of ale."
    },
    {
        norse: "Erindi 12: Er-a svá gótt sem gótt kveða öl alda sona, því at færa veit, er fleira drekkr síns til geðs gumi.",
        english: "Stanza 12: It is not so good as they say it is good, ale for the sons of men, for a man knows less the more he drinks the sense of what he is saying"
    },
    {
        norse: "Erindi 13: Óminnishegri heitir sá er yfir ölðrum þrumir, hann stelr geði guma; þess fugls fjöðrum ek fjötraðr vark í garði Gunnlaðar.",
        english: "Stanza 13: A heron of oblivion it is called that hovers over ale-drinking - it robs a man of his mind. Óðinn With this bird's feathers I was fettered within Gunnlǫð's walls"
    },
    {
        norse: "Erindi 14: Ölr ek varð, varð ofrölvi at ins fróða Fjalars; því er ölðr bazt, at aftr of heimtir hverr sitt geð gumi.",
        english: "Stanza 14: Ale-drunk I was, excessively drunk, within wise Fialarr's walls. The best thing about ale is that every man gets his wits back again."
    },
    {
        norse: "Erindi 15: Þagalt ok hugalt skyli þjóðans barn ok vígdjarft vera; glaðr ok reifr skyli gumna hverr, unz sinn bíðr bana.",
        english: "Stanza 15: Reticent and reflective must a ruler's child be, and brave in battle. Genial and merry must every man be, until he encounters his death."
    },
    {
        norse:  "Erindi 16: Ósnjallr maðr hyggsk munu ey lifa, ef hann við víg varask; en elli gefr hánum engi frið, þótt hánum geirar gefi.",
        english: "Stanza 16: A man who lacks courage thinks he'll live for ever if he guards himself against battle. But old age gives him no amnesty, just because javelins do."
    },
    {
        norse: "Erindi 17: Kópir afglapi er til kynnis kemr, þylsk hann um eða þrumir; allt er senn, ef hann sylg of getr, uppi er þá geð guma.",
        english: "Stanza 17: A fool peers around when he visits friends, harangues to himself, or hovers. Directly, if he gets a drink, then that's the end of his intelligence."
    },
    {
        norse: "Erindi 18: Sá einn veit er víða ratar ok hefr fjölð of farit, hverju geði stýrir gumna hverr, sá er vitandi er vits.",
        english: "Stanza 18: Only that one knows who widely roves and has made his way through much, what kind of mind each man is master of. He knows what knowing is."
    },
    {
        norse: "Erindi 19: Haldit maðr á keri, drekki þó at hófi mjöð, mæli þarft eða þegi, ókynnis þess vár þik engi maðr, at þú gangir snemma at sofa.",
        english: "Stanza 19: Let no man hold on to the bowl, but drink his measure of mead: let him say what is needed or be silent. For ill manners none will admonish you, because you go early to bed."
    },
    {
        norse: "Erindi 20: Gráðugr halr, nema geðs viti, etr sér aldrtrega; oft fær hlægis, er með horskum kemr, manni heimskum magi.",
        english: "Stanza 20: A greedy fellow, unless he has good sense, eats himself anguish for life. Often his stomach, when he joins the discerning, makes the foolish man mocked."
    },
    {
        norse: "Erindi 21: Hjarðir þat vitu, nær þær heim skulu, ok ganga þá af grasi; en ósviðr maðr kann ævagi síns of mál maga.",
        english: "Stanza 21: The herds know when they have to be home and to go away then from the grass, but an imprudent man does not ever know where the size of his stomach stops."
    },
    {
        norse: "Erindi 22: [Ósnjallr] maðr ok illa skapi hlær at hvívetna; hitki hann veit hittki hann veit, er hann vita þyrfti, at hann er[a] vamma vanr.",
        english: "Stanza 22: An unintelligent man, and ill-natured, jeers at everything. This he does not know - what he needed to know - that he's not deficient in faults."
    },
    {
        norse: "Erindi 23: Ósviðr maðr vakir um allar nætr ok hyggr at hvívetna; þá er móðr, er at morgni kemr, allt er víl sem var.",
        english: "Stanza 23: An unintelligent man is awake every night thinking of everything. Then he's dead-tired when the daylight comes - the work is all as it was."
    },
    {
        norse: "Erindi 24: Ósnotr maðr hyggr sér alla vera viðhlæjendr vini; hittki hann fiðr, þótt þeir um hann fár lesi, ef hann með snotrum sitr.",
        english: "Stanza 24: A man of no knowledge imagines all are his friends who laugh along with him. He does not perceive that they pluck him to pieces, if he sits with men of sense."
    },
    {
        norse: "Erindi 25: Ósnotr maðr hyggr sér alla vera viðhlæjendr vini; þá þat finnr, er at þingi kemr, at hann á formælendr fáa.",
        english: "Stanza 25: A man of no knowledge imagines all are his friends who laugh along with him. Then he discovers, when it comes to the Assembly, he has few to speak for his suit."
    },
    {
        norse: "Erindi 26: Ósnotr maðr þykkisk allt vita, ef hann á sér í vá veru; hittki hann veit, hvat hann skal við kveða, ef hans freista firar.",
        english: "Stanza 26: A man of no knowledge assumes he knows everything, if he lives his life in a corner. This he does not know - what answers he needs, if people confront him with questions."
    },
    {
        norse: "Erindi 27: Ósnotr maðr, er með aldir kemr, þat er bazt, at hann þegi; engi þat veit, at hann ekki kann, nema hann mæli til margt; veit-a maðr, hinn er vettki veit, þótt hann mæli til margt.",
        english: "Stanza 27: A man of no knowledge, when he mingles with men, it is best that he does not say anything. Nobody knows that he has no knowledge, unless he talks too much. A man who knows nothing does not know even that he is talking too much."
    },
    {
        norse: "Erindi 28: Fróðr sá þykkisk, er fregna kann ok segja it sama; eyvitu leyna megu ýta synir, því er gengr um guma.",
        english: "Stanza 28: He accounts himself wise, who can ask questions and answer them also. They can never keep secret - the sons of men - the gossip that goes round about people."
    },
    {
        norse: "Erindi 29: Ærna mælir, sá er æva þegir, staðlausu stafi; hraðmælt tunga, nema haldendr eigi, oft sér ógótt of gelr.",
        english: "Stanza 29: He utters enough unfounded statements, who never stays silent. A headlong tongue with none to hold it back often calls calamity on itself."
    },
    {
        norse: "Erindi 30: At augabragði skal-a maðr annan hafa, þótt til kynnis komi; margr þá fróðr þykkisk, ef hann freginn er-at ok nái hann þurrfjallr þruma.",
        english: "Stanza 30: No man superciliously must mock another, should he visit family or friends. Many a one may then be thought clever, if he is never questioned, and succeed in staying with his hide dry!"
    },
    {
        norse: "Erindi 31: Fróðr þykkisk, sá er flótta tekr, gestr at gest hæðinn; veit-a görla, sá er of verði glissir, þótt hann með grömum glami.",
        english: "Stanza 31: He's reckoned wise who beats a retreat - a guest who has mocked a guest. No man knows for sure, who makes taunts at table,that he's not uttering insolence amongenemies."
    },
    {
        norse: "Erindi 32: Gumnar margir erusk gagnhollir, en at virði vrekask; aldar róg þat mun æ vera, órir gestr við gest.",
        english: "Stanza 32: Many men, among themselves, are loyal friends, yet attack each other at table. Discord among men will never die: guest is maddened with guest."
    },
    {
        norse: "Erindi 33: Árliga verðar skyli maðr oft fáa, nema til kynnis komi: str ok snópir, lætr sem solginn sé ok kann fregna at fáu.",
        english: "Stanza 33: His meals early, a man ought always to take, when he is not visiting family or friends. He'll sit and sniff round, seem to be famished, and can find few questions to ask"
    },
    {
        norse: "Erindi 34: Afhvarf mikit er til ills vinar, þótt á brautu búi, en til góðs vinar liggja gagnvegir, þótt hann sé firr farinn.",
        english: "Stanza 34: It is a big detour to a bad friend's home, though he lives in your lane, but to a good friend's home the roads go straight, though he may be a longer way away."
    },
    {
        norse: "Erindi 35: Ganga skal, skal-a gestr vera ey í einum stað; ljúfr verðr leiðr, ef lengi sitr annars fletjum á.",
        english: "Stanza 35: Take his leave he must - not linger as a guest for ever in one place. Liked becomes loathed, if one sits for long on another fellow's floor."
    },
    {
        norse: "Erindi 36: Bú er betra, þótt lítit sé, halr er heima hverr; þótt tvær geitr eigi ok taugreftan sal, þat er þó betra en bæn.",
        english: "Stanza 36: A homestead is better, even though it may be bare: every man is his own man at home. Though his assets are two goats and a tow-roofed home, that is still better than begging."
    },
    {
        norse: "Erindi 37: Bú er betra, þótt lítit sé, halr er heima hverr; blóðugt er hjarta, þeim er biðja skal sér í mál hvert matar.",
        english: "Stanza 37: A homestead is better, even though it may be bare: every man is his own man at home. Bleeding is the heart of one who must beg a morsel for himself every mealtime."
    },
    {
        norse: "Erindi 38: Vápnum sínum skal-a maðr velli á feti ganga framar, því at óvíst er at vita, nær verðr á vegum úti geirs of þörf guma.",
        english: "Stanza 38: Not a footstep from his weapons must a man wander over open land. For one does not know at all, out on the ways, when that man will be wanting his spear."
    },
    {
        norse: "Erindi 39: Fannk-a ek mildan mann eða svá matar góðan, at væri-t þiggja þegit, eða síns féar svági [glöggvan], at leið sé laun, ef þægi.",
        english: "Stanza 39: I never found a man so generous or so ungrudging with food, that to accept in return was not accepted; or of his possessions so prodigal that repayment was repugnant, should he receive it."
    },
    {
        norse: "Erindi 40: Féar síns, er fengit hefr, skyli-t maðr þörf þola; oft sparir leiðum, þats hefr ljúfum hugat; margt gengr verr en varir.",
        english: "Stanza 40: Of his own goods that he's gained, a man should not suffer shortage. Often, you save for those you don't like what you have meant for your loved ones - many a thing goes worse than you wait for!"
    },
    {
        norse: "Erindi 41: Vápnum ok váðum skulu vinir gleðjask; þat er á sjalfum sýnst; viðrgefendr ok endrgefendr erusk lengst vinir, ef þat bíðr at verða vel.",
        english: "Stanza 41: With arms and apparel friends shall delight each other - it shows on themselves most visibly. Givers who repay gifts, and give again, remain friends with each other longest - if that goes on going well!"
    },
    {
        norse: "Erindi 42: Vin sínum skal maðr vinr vera ok gjalda gjöf við gjöf; hlátr við hlátri skyli hölðar taka en lausung við lygi.",
        english: "Stanza 42: To his friend a man must be a friend and pay back gift with gift. Good men should take laughter with a laugh, but lying with a lie."
    },
    {
        norse: "Erindi 43: Vin sínum skal maðr vinr vera, þeim ok þess vin; en óvinar síns skyli engi maðr vinar vinr vera.",
        english: "Stanza 43: To his friend a man must be a friend, to him and to his friend. But of his enemy not any man should be a friend of that man's friend."
    },
    {
        norse: "Erindi 44: Veiztu, ef þú vin átt, þann er þú vel trúir, ok vill þú af hánum gótt geta, geði skaltu við þann blanda ok gjöfum skipta, fara at finna oft.",
        english: "Stanza 44: You know, if you have a friend, one you fully trust, and you aim to gain advantage from him, you must espouse his tastes, and give and takes gifts, set out to see him often."
    },
    {
        norse: "Erindi 45: Ef þú átt annan, þanns þú illa trúir, vildu af hánum þó gótt geta, fagrt skaltu við þann mæla en flátt hyggja ok gjalda lausung við lygi.",
        english: "Stanza 45: If you have another, whom you never trust, yet you aim to gain advantage from him, you must speak fair words to him, but think false thoughts and pay back lying with a lie."
    },
    {
        norse: "Erindi 46:Það er enn of þann er þú illa trúir þér er grunr at hans geði, hlæja skaltu við þeim ok um hug mæla; glík skulu gjöld gjöfum.",
        english: "Stanza 46: Also to note of the man you never trust well and have doubts of his disposition: you must jest with that man and speak your mind falsely - repayments must match the presents."
    },
    {
        norse: "Erindi 47: Ungr var ek forðum, fór ek einn saman, þá varð ek villr vega; auðigr þóttumk, er ek annan fann, maðr er manns gaman.",
        english: "Stanza 47: Óðinn ~ I was young once, I walked all on my own. Then I was lost on the ways. I thought I'd found wealth when I found another man. Man's joy is man."
    },
    {
        norse: "Erindi 48: Mildir, fræknir menn bazt lifa, sjaldan sút ala; en ósnjallr maðr uggir hotvetna, sýtir æ glöggr við gjöfum.",
        english: "Stanza 48: Liberal, fearless men live best - seldom nurse sorrow - but an unmanly man sees menace in everything - a niggard is always nervous of gifts."
    },
    {
        norse: "Erindi 49: Váðir mínar gaf ek velli at tveim trémönnum; rekkar þat þóttusk, er þeir rift höfðu; neiss er nökkviðr halr.",
        english: "Stanza 49: Óðinn ~ My clothes I have in the countryside to two twig-men. Great fellows they thought themselves when they had garments - a man is mortified naked."
    },
    {
        norse: "Erindi 50: Hrörnar þöll, sú er stendr þorpi á, hlýr-at henni börkr né barr; svá er maðr, sá er manngi ann. Hvat skal hann lengi lifa?",
        english: "Stanza 50: A young fir-tree shrivels that stands on stony ground, no bark nor pine-needle protects it. A man is like that whom nobody loves - how is he to live long?"
    },
    {
        norse: "Erindi 51: Eldi heitari brennr með illum vinum friðr fimm daga, en þá sloknar, er inn sétti kemr, ok versnar allr vinskapr.",
        english: "Stanza 51: Hotter than fire with bad friends infatuation burns for fives days, but then it dies down when the sixth day comes, and all the friendship festers."
    },
    {
        norse: "Erindi 52: Mikit eitt skal-a manni gefa; oft kaupir sér í litlu lof, með halfum hleif ok með höllu keri fekk ek mér félaga.",
        english: "Stanza 52: Óðinn ~ One does not need to give a man only a big gift: often one purchases praises for oneself with little. With half a loaf and a leaning cup I acquired for myself a comrade."
    },
    {
        norse: "Erindi 53: Lítilla sanda lítilla sæva lítil eru geð guma; því allir menn urðu-t jafnspakir; half er öld hvar.",
        english: "Stanza 53: By little sands of little seas the minds of men are little - for that reason not all men became equally clever: mankind is half-and-half of each kind."
    },
    {
        norse: "Erindi 54: Meðalsnotr skyli manna hverr; æva til snotr sé; þeim er fyrða fegrst at lifa, er vel margt vitu.",
        english: "Stanza 54: Middling wise must every man be, he should not be overwise ever. For those men living is most delightful, who know quite a lot of knowledge."
    },
    {
        norse: "Erindi 55: Meðalsnotr skyli manna hverr, æva til snotr sé; því at snotrs manns hjarta verðr sjaldan glatt, ef sá er alsnotr, er á.",
        english: "Stanza 55: Middling wise must every man be, he should not be overwise ever, for the heart of a wise man hardly ever becomes glad, if its owner is wise in everything."
    },
    // Add more stanzas here...165 in all.
];

let currentLanguage = 'norse';

function seededRandom(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getDailyStanza() {
    const date = new Date();
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const randomSeed = seededRandom(dayOfYear);
    const stanzaIndex = Math.floor(randomSeed * stanzas.length);
    return stanzas[stanzaIndex];
}

function toggleTranslation() {
    const stanzaElement = document.getElementById("stanza");
    const dailyStanza = getDailyStanza();
    if (currentLanguage === 'norse') {
        stanzaElement.textContent = dailyStanza.english;
        currentLanguage = 'english';
    } else {
        stanzaElement.textContent = dailyStanza.norse;
        currentLanguage = 'norse';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const stanzaElement = document.getElementById("stanza");
    const dailyStanza = getDailyStanza();
    stanzaElement.textContent = dailyStanza.norse;
});
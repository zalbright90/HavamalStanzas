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
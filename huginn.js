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
    }
    // Add more stanzas here...165 in all.
];

let currentLanguage = 'norse';

function getDailyStanza() {
    const date = new Date();
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const stanzaIndex = dayOfYear % stanzas.length;
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
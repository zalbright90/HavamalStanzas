// List of stanzas with Old Norse and English translations
const stanzas = [
    {
        norse: "Stanza 1: Gáttir allar áðr gangi fram um skoðask skyli, um skyggnast skyli, því at óvíst er at vita hvar óvinir sitja á fleti fyrir.",
        english: "Stanza 1: All doorways before entering should be spied out, should be scrutinized, for it is not known for certain where enemies sit in wait in the hall ahead."
    },
    {
        norse: "Stanza 2: Gefendr heilir! Gestr er inn kominn, hvar skal sitja sjá? Mjök er bráðr sá er á bröndum skal síns of freista frama.",
        english: "Stanza 2: 'Good fortune to givers! A guest has come in. Where has he to sit? He's full of fervour out by the fire-stack - a man who must vie for advancement!"
    },
    {
        norse: "Stanza 3: Elds er þörf þeims inn er kominn ok á kné kalinn. Matar ok váða er manni þörf, þeim er hefr um fjall farit.",
        english: "Stanza 3: Fire is wanted for the one who has come in, nipped with cold to the knee. A meal and clothes are a man's needs who's come across the fell."
    },
    {
        norse: "Stanza 4: Vatns er þörf þeim er til verðar kemr, þerru ok þjóðlaðar, góðs of æðis ef sér geta mætti orðs ok endrþögu.",
        english: "Stanza 4: Water is wanted for one who comes to dine - a handtowel and homely welcome, good nature with it - if he might get himself that! - talk and attentive silence."
    },
    // Add more stanzas here...
];

let currentLanguage = 'norse'; // Initially display in Old Norse

// Function to get the stanza of the day
function getDailyStanza() {
    const date = new Date();
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const stanzaIndex = dayOfYear % stanzas.length;
    return stanzas[stanzaIndex];
}

// Function to toggle between Old Norse and English
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

// Display the stanza of the day in Old Norse
document.addEventListener("DOMContentLoaded", () => {
    const stanzaElement = document.getElementById("stanza");
    const dailyStanza = getDailyStanza();
    stanzaElement.textContent = dailyStanza.norse;
});
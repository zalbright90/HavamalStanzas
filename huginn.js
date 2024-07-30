let stanzas = [];        
let currentLanguage = 'norse';

async function loadStanzas() {
    try {
        const response = await fetch('havamal_stanzas.json');
        stanzas = await response.json();
        displayDailyStanza();
    } catch (error) {
        console.error('Error loading stanzas:', error);
    }
}

function seededRandom(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getDailyStanza() {
    if (stanzas.length === 0) {
        console.error('Stanzas not loaded yet, function getDailyStanza');
        return null;
    }
    const date = new Date();
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const randomSeed = seededRandom(dayOfYear);
    const stanzaIndex = Math.floor(randomSeed * stanzas.length);
    return stanzas[stanzaIndex];
}

function displayDailyStanza() {
    const stanzaElement = document.getElementById("stanza");
    const tiktokElement = document.getElementById("tiktok-embed");
    const dailyStanza = getDailyStanza();
    if (dailyStanza) {
        stanzaElement.textContent = dailyStanza.norse;
        updateRunicTranslation();
    } else {
        console.error('No stanza available');
    }
    if (dailyStanza.tiktokId) {
        setMessage();
        setTimeout(() => {
            tiktokElement.innerHTML = `
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@huginn001/video/${dailyStanza.tiktokId}" data-video-id="${dailyStanza.tiktokId}">
                    <section><p>Huginn001's Humorous Havamal</p></section>
                </blockquote>
            `;
            const script = document.createElement('script');
            script.src = "https://www.tiktok.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        }, 1000);
    } else {
        tiktokElement.innerHTML = '<p>No additional context available for this stanza.</p>';
        console.log("No TikTok ID available for this stanza");
    }
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
    updateRunicTranslation();
}

function updateRunicTranslation() {
    const stanzaElement = document.getElementById("stanza");
    const runicTranslationElement = document.getElementById("runic-translation");
    const text = stanzaElement.textContent;
    
    runicTranslationElement.textContent = convertToRunes(text);
    addRunicFunctionality();
}

function addRunicFunctionality() {
    const stanzaElement = document.getElementById("stanza");
    const text = stanzaElement.textContent;
    const words = text.split(/\s+/);

    stanzaElement.innerHTML = '';
    
    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';
        
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            const span = document.createElement('span');
            span.textContent = char;
            
            const lowerChar = char.toLowerCase();
            const currentRune = runeMap[lowerChar];
            
            if (currentRune) {
                span.className = 'runic-text';
                span.setAttribute('data-latin', currentRune);
                addTouchEventListeners(span);
            }
            
            wordSpan.appendChild(span);
        }
        
        stanzaElement.appendChild(wordSpan);
        
        if (index < words.length - 1) {
            stanzaElement.appendChild(document.createTextNode(' '));
        }
    });
}

function convertToRunes(text) {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());
    return sentences.map((sentence, index) => {
        const words = sentence.trim().split(/\s+/);
        const runicWords = words.map(word => {
            let lastRune = '';
            return word.split('')
                .map(char => {
                    const currentRune = runeMap[char.toLowerCase()] || char;
                    if (currentRune === lastRune) {
                        return '';
                    } else {
                        lastRune = currentRune;
                        return currentRune;
                    }
                })
                .join('')
                .replace(/[^ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛈᛇᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ]/g, '');
        }).filter(word => word.length > 0);
        const processedSentence = runicWords.join('·');
        return (index === 0 ? ':' : '') + processedSentence + ':';
    }).join('');
}

function setMessage() {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = `<p>Here's Huginn's Humorous Havamal video: (Main translation from Hollander, Stanza number may be slightly different)</p>`;
}

function adjustTikTokHeight() {
    const iframe = document.querySelector('.tiktok-embed iframe');
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
}

function cleanTikTokEmbed() {
    const embed = document.querySelector('.tiktok-embed');
    if (embed) {
        Array.from(embed.children).forEach(child => {
            if (child.tagName !== 'IFRAME') {
                child.remove();
            }
        });
        adjustTikTokHeight();
    }
}

function addTouchEventListeners(element) {
    element.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.classList.add('touch-active');
    });

    element.addEventListener('touchend', function(e) {
        e.preventDefault();
        this.classList.remove('touch-active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadStanzas();  // This will load stanzas and then display one

    const container = document.querySelector('.container');
    
    container.addEventListener('touchstart', function(e) {
        this.classList.add('touch-active');
    });

    container.addEventListener('touchend', function(e) {
        this.classList.remove('touch-active');
    });

    document.addEventListener('click', function(e) {
        const runicElements = document.querySelectorAll('.runic-text');
        runicElements.forEach(el => el.classList.remove('touch-active'));
        
        if (e.target.classList.contains('runic-text')) {
            e.target.classList.add('touch-active');
        }
    });
});

const runeMap = {
    'a': 'ᚨ', 'á': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ', 'e': 'ᛖ', 'é': 'ᛖ', 'f': 'ᚠ',
    'g': 'ᚷ', 'h': 'ᚺ', 'i': 'ᛁ', 'í': 'ᛁ', 'j': 'ᛃ', 'k': 'ᚲ', 'l': 'ᛚ',
    'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ', 'ó': 'ᛟ', 'p': 'ᛈ', 'q': 'ᚲ', 'r': 'ᚱ',
    's': 'ᛊ', 't': 'ᛏ', 'u': 'ᚢ', 'ú': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᚲᛊ',
    'y': 'ᛃ', 'ý': 'ᛃ', 'z': 'ᛉ', 'æ': 'ᚨᛖ', 'ð': 'ᚦ', 'þ': 'ᚦ',
    'ø': 'ᛟ', 'å': 'ᛟ', 'ö': 'ᛟ'
};

const message = 'I fear for Huginn, that he come not back, yet more anxious am I for Muninn.';
console.log(message);
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
    {
        norse: "Erindi 56: Meðalsnotr skyli manna hverr, æva til snotr sé; örlög sín viti engi fyrir, þeim er sorgalausastr sefi.",
        english: "Stanza 56: Middling wise must every man be - he should not be overwise ever. Of his own fate let no man know beforehand - for him his mind is most free of sorrow."
    },
    {
        norse: "Erindi 57: Brandr af brandi brenn, unz brunninn er, funi kveikisk af funa; maðr af manni verðr at máli kuðr, en til dælskr af dul.",
        english: "Stanza 57: Brand from Brand burns till it is burnt, flame is kindled from flame; Man from man gets mastery of speech, and too slow a wit from seclusion."
    },
    {
        norse: "Erindi 58: Ár skal rísa, sá er annars vill fé eða fjör hafa; sjaldan liggjandi ulfr lær of getr né sofandi maðr sigr.",
        english: "Stanza 58: He must wake early who wants to have another's belongings, or blood; A lounging wolf seldom seizes the ham, nor a sleeping man supremacy."
    },
    {
        norse: "Erindi 59: Ár skal rísa, sá er á yrkjendr fáa, ok ganga síns verka á vit; margt of dvelr, þann er um morgin sefr, hálfr er auðr und hvötum.",
        english: "Stanza 59: He must wake early who has few workers, and go to look to his own labour. Many a thing slows a man down who sleeps in the morning - half of wealth hangs on alacrity."
    },
    {
        norse: "Erindi 60: Þurra skíða ok þakinna næfra, þess kann maðr mjöt, þess viðar, er vinnask megi mál ok misseri.",
        english: "Stanza 60: Of dry tinder and birch bark for tiling a man can know the measure he needs, and of the wood that may be wanted for three months and for six."
    },
    {
        norse: "Erindi 61: Þveginn ok mettr ríði maðr þingi at, þótt hann sé-t væddr til vel; skúa ok bróka skammisk engi maðr né hests in heldr, þótt hann hafi-t góðan",
        english: "Stanza 61: Having washed and eaten a man may ride to the Assembly, even though he's not too well attired. Of shoes and breeches shall no man feel ashamed, nor of his horse either - even if he has not got a good one."
    },
    {
        norse: "Erindi 62: Snapir ok gnapir, er til sævar kemr, örn á aldinn mar; svá er maðr, er með mörgum kemr ok á formælendr fáa.",
        english: "Stanza 62: He snaps and cranes when he comes to the sea, an eagle on the old ocean - just like a man who comes among many, and has few to speak for his suit."
    },
    {
        norse: "Erindi 63: Fregna ok segja skal fróðra hverr, sá er vill heitinn horskr; einn vita né annarr skal, þjóð veit, ef þrír ro.",
        english: "Stanza 63: To ask and to answer is every learned man's duty, if he desires to be called discerning. One man shall know, but not another, the nation knows, if they are three."
    },
    {
        norse: "Erindi 64: Ríki sitt skyli ráðsnotra hverr í hófi hafa; þá hann þat finnr, er með fræknum kemr at engi er einna hvatastr.",
        english: "Stanza 64: His own authority every man of wise judgement whould maintain with measure. Then he finds, when he meets fearless men, that no one outpaces every one."
    },
    {
        norse: "Erindi 65: Orða þeira, er maðr öðrum segir oft hann gjöld of getr...",
        english: "Stanza 65: For the words, one man says to another he often receives some return..."
    },
    {
        norse: "Erindi 66: Mikilsti snemma kom ek í marga staði, en til síð í suma; öl var drukkit, sumt var ólagat, sjaldan hittir leiðr í líð.",
        english: "Stanza 66: Óðinn ~ Much too early I came to many a place and to some too late: the ale had been drunk, some was unbrewed - one who's not liked rarely hits the right moment."
    },
    {
        norse: "Erindi 67: Hér ok hvar myndi mér heim of boðit, ef þyrftak at málungi mat, eða tvau lær hengi at ins tryggva vinar, þars ek hafða eitt etit.",
        english: "Stanza 67: Óðinn ~ Here and everywhere I'd have been invited home, if I should not need food at meal-time or two hams would be hanging in a true friend's house, when I had already eaten one!"
    },
    {
        norse: "Erindi 68: Eldr er beztr með ýta sonum ok sólar sýn, heilyndi sitt, ef maðr hafa náir, án við löst at lifa.",
        english: "Stanza 68: Fire is best for the sons of men, and the sight of the sun - to have his good health - if a man might get that - to live a life without fault."
    },
    {
        norse: "Erindi 69: Er-at maðr alls vesall, þótt hann sé illa heill; sumr er af sonum sæll, sumr af frændum, sumr af fé ærnu, sumr af verkum vel.",
        english: "Stanza 69: No man is wholly hopeless, even though he may have horrid luck: some man is happy in his sons, some in his kinsmen, some in sufficient wealth, some greatly elated by achievements."
    },
    {
        norse: "Erindi 70: Betra er lifðum en sé ólifðum, ey getr kvikr kú; eld sá ek upp brenna auðgum manni fyrir, en úti var dauðr fyr durum.",
        english: "Stanza 70: It's better for the living than the not-living: it's always the live one who catches the cow. ~ Óðinn ~ I saw the fire rise up blazing for a rich man - while outside, at the door, he was dead."
    },
    {
        norse: "Erindi 71: Haltr ríðr hrossi, hjörð rekr handar vanr, daufr vegr ok dugir, blindr er betri en brenndr séi, nýtr manngi nás.",
        english: "Stanza 71: A lame man rides a horse, a man with one hand drives a flock, a deaf man fights and does bravely, a blind man is better than a burnt one - a corpse is no use to anyone."
    },
    {
        norse: "Erindi 72: Sonr er betri, þótt sé síð of alinn eftir genginn guma; sjaldan bautarsteinar standa brautu nær, nema reisi niðr at nið.",
        english: "Stanza 72: A son is better, even though he may be born late, after the father has died. Seldom do gravestones stand by the road, unless kin erects them for kin."
    },
    {
        norse: "Erindi 73: Tveir ro eins herjar, tunga er höfuðs bani; er mér í heðin hvern handar væni.",
        english: "Stanza 73: Two are destroyers of one, tongue is killer of head - for me in every hooded cloak a hand is coming."
    },
    {
        norse: "Erindi 74: Nótt verðr feginn sá er nesti trúir, skammar ro skips ráar; hverf er haustgríma; fjölð of viðrir á fimm dögum en meira á mánuði.",
        english: "Stanza 74: He welcomes the night, who never doubts his food-pack. Short are a ship's mast-yards, moody is the mask of an autumn night. There are many diverse weathers in five days, but more in a month."
    },
    {
        norse: "Erindi 75: Veit-a hinn, er vettki veit, margr verðr af aurum api; maðr er auðigr, annar óauðigr, skyli-t þann vítka váar.",
        english: "Stanza 75: The man who knows nothing does not know this: many men become fools through money. One man is wealthy, another is not - one must not make his misfortune his fault."
    },
    {
        norse: "Erindi 76: Deyr fé, deyja frændr, deyr sjalfr it sama, en orðstírr deyr aldregi, hveim er sér góðan getr.",
        english: "Stanza 76: Cattle die, kinsmen die, one dies oneself just the same, but the fame of renown never dies for any who earns himself that excellence."
    },
    {
        norse: "Erindi 77: Deyr fé, deyja frændr, deyr sjalfr it sama, ek veit einn, at aldrei deyr: dómr um dauðan hvern.",
        english: "Stanza 77: Cattle die, kinsmen die, one dies oneself just the same. ~ Óðinn ~ I know one thing that never dies: judgement on every man dead."
    },
    {
        norse: "Erindi 78: Fullar grindr sá ek fyr Fitjungs sonum, nú bera þeir vánar völ; svá er auðr sem augabragð, hann er valtastr vina.",
        english: "Stanza 78: Óðinn ~ Full sheep-pens I saw for Fitiungr's sons - now they bear the beggar's staff. Wealth is just like the wink of an eye - it is the most fallible of friends."
    },
    {
        norse: "Erindi 79: Ósnotr maðr, ef eignask getr fé eða fljóðs munuð, metnaðr hánum þróask, en mannvit aldregi, fram gengr hann drjúgt í dul.",
        english: "Stanza 79: A foolish man, if he finds he can win wealth or a woman's love, his self-esteem thrives, but his good sense never - ahead he goes, deep in delusion."
    },
    {
        norse: "Erindi 80: Þat er þá reynt, er þú að rúnum spyrr inum reginkunnum, þeim er gerðu ginnregin ok fáði fimbulþulr, þá hefir hann bazt, ef hann þegir.",
        english: "Stanza 80: That is then attested true, what you ask of the runes, the divinely descended, those the great gods made and the mighty chanter marked. Then it would be best for him to stay silent."
    },
    {
        norse: "Erindi 81: At kveldi skal dag leyfa, konu, er brennd er, mæki, er reyndr er, mey, er gefin er, ís, er yfir kemr, öl, er drukkit er.",
        english: "Stanza 81: At evening one shall praise a day, a wife when she's burnt, a blade when it's tried, a maid when she's married, ice when it's crossed, ale when it has been drunk."
    },
    {
        norse: "Erindi 82: Í vindi skal við höggva, veðri á sjó róa, myrkri við man spjalla, mörg eru dags augu; á skip skal skriðar orka, en á skjöld til hlífar, mæki höggs, en mey til kossa.",
        english: "Stanza 82: In wind one shall hew wood, in good weather row out to sea, gossip with a girl in the dark - day's eyes are many. From a ship one must get gliding, from a shield protection, from a sword a stroke, and from a girl kisses."
    },
    {
        norse: "Erindi 83: Við eld skal öl drekka, en á ísi skríða, magran mar kaupa, en mæki saurgan, heima hest feita, en hund á búi.",
        english: "Stanza 83: Beside the fire one shall drink ale, but on ice one shall skate, buy a nag skinny, and sword unscoured - fatten the horse at home, but your hound at a neighbour's."
    },
    {
        norse: "Erindi 84: Meyjar orðum skyli manngi trúa né því, er kveðr kona, því at á hverfanda hvéli váru þeim hjörtu sköpuð, brigð í brjóst of lagið.",
        english: "Stanza 84: A maiden's words must no man trust, nor what a woman says, for on a whirling wheel where hearts fashioned for them and fickleness fixed in their breast."
    },
    {
        norse: "Erindi 85: Brestanda boga, brennanda loga, gínanda ulfi, galandi kráku, rýtanda svíni, rótlausum viði, vaxanda vági, vellanda katli.",
        english: "Stanza 85: A breaking bow, a burning flame, a wolf yawning, a crow cawing, a grunting pig, a rootless tree, a rising sea, a seething cauldron,"
    },
    {
        norse: "Erindi 86: Fljúganda fleini, fallandi báru, ísi einnættum, ormi hringlegnum, brúðar beðmálum eða brotnu sverði, bjarnar leiki eða barni konungs.",
        english: "Stanza 86: A flying arrow, a falling wave, ice of a single night, a coiling serpent, a bride's bed-talk, or a broken sword, a bear's play, or the child of a king,"
    },
    {
        norse: "Erindi 87: Sjúkum kalfi, sjalfráða þræli, völu vilmæli, val nýfelldum.",
        english: "Stanza 87: a sick calf, a self-willed thrall, fair words from a prophetess, the dead newly slain,"
    },
    {
        norse: "Erindi 88: Akri ársánum trúi engi maðr né til snemma syni, - veðr ræðr akri. en vit syni; hætt er þeira hvárt.",
        english: "Stanza 88: a field sown early - let no man trust them, nor his son too soon - weather controls the field and wits the son - each of them has its risk."
    },
    {
        norse: "Erindi 89: Bróðurbana sínum þótt á brautu mæti, húsi hálfbrunnu, hesti alskjótum - þá er jór ónýtr, ef einn fótr brotnar - verði-t maðr svá tryggr at þessu trúi öllu.",
        english: "Stanza 89: his brother's killer, if he crosses his path, a half-burnt house, an over-speedy horse - the best is then useless if one foot breaks! Let no man be so trusting as to trust in all these!"
    },
    {
        norse: "Erindi 90: Svá er friðr kvenna, þeira er flátt hyggja, sem aki jó óbryddum á ísi hálum, teitum, tvévetrum ok sé tamr illa, eða í byr óðum beiti stjórnlausu, eða skyli haltr henda hrein í þáfjalli.",
        english: "Stanza 90: So the loving of women - is just like driving a horse smooth-shod over skidding ice - a lively two- year-old, and badly trained - or in a mad wind manuevring a rudderless boat - or like a lame man having to reach a reindeer on a thawing hillside on skis."
    },
    {
        norse: "Erindi 91: Bert ek nú mæli, því at ek bæði veit, brigðr er karla hugr konum; þá vér fegrst mælum, er vér flást hyggjum: þat tælir horska hugi.",
        english: "Stanza 91: Óðinn ~ I now state a bare fact - for I know both sexes - men's devotion to women is not dependable. We speak fairest words when we foster slyest thoughts - that deceives a delicate mind."
    },
    {
        norse: "Erindi 92: Fagrt skal mæla ok fé bjóða, sá er vill fljóðs ást fá, líki leyfa ins ljósa mans, sá fær, er fríar.",
        english: "Stanza 92: One must speak fair words and offer something of worth, if one wants to win a lady's love - praise the body of the brilliant creature - he wins who woos."
    },
    {
        norse: "Erindi 93: Ástar firna skyli engi maðr annan aldregi; oft fá á horskan, er á heimskan né fá, lostfagrir litir.",
        english: "Stanza 93: For being in love no man should blame another ever. Often a wise man is moved - when a foolish man is not - by delectable looks."
    },
    {
        norse: "Erindi 94: Eyvitar firna er maðr annan skal,þess er um margan gengr guma; heimska ór horskum gerir hölða sonu sá inn máttki munr.",
        english: "Stanza 94: A man must never blame another for what happens to many men. Sensible sons of sound family are changed info fools by the powerful passion of love."
    },
    {
        norse: "Erindi 95: Hugr einn þat veit, er býr hjarta nær, einn er hann sér of sefa; öng er sótt verri hveim snotrum manni en sér engu at una.",
        english: "Stanza 95: Óðinn ~ Only thought knows what lives near the heart - a man is alone with himself in his feeling. No malady is worse for thinking man than to have no happiness for himself in anything."
    },
    {
        norse: "Erindi 96: Þat ek þá reynda, er ek í reyri sat, ok vættak míns munar; hold ok hjarta var mér in horska mær; þeygi ek hana at heldr hefik.",
        english: "Stanza 96: Óðinn ~ Then I proved that to be so, when I sat in a reed-patch, and waited for my loved one. She was flesh and heart to me, that fine-witted girl, but nonetheless I may not have her."
    },
    {
        norse: "Erindi 97: Billings mey ek fann beðjum á sólhvíta sofa; jarls ynði þótti mér ekki vera nema við þat lík at lifa.",
        english: "Stanza 97: Óðinn ~ The daughter of Billingr I found in bed, shining like the sun, sleeping. No earl's pleasure I imagined could be, except to live beside that body."
    },
    {
        norse: "Erindi 98: Auk nær aftni skaltu, Óðinn, koma, ef þú vilt þér mæla man; allt eru ósköp, nema einir viti slíkan löst saman.",
        english: "Stanza 98: Billings mœr ~ 'Also near evening, Óðinn, you must come, if you want to talk to a girl into taking you. It will all be disaster, unless we alone know of such shamelessness together."
    },
    {
        norse: "Erindi 99: Aftr ek hvarf ok unna þóttumk vísum vilja frá; hitt ek hugða, at ek hafa mynda geð hennar allt ok gaman.",
        english: "Stanza 99: Óðinn ~ I turned back and believed I loved beyond known bliss. It was my thought that I might have all her liking, and love's play."
    },
    {
        norse: "Erindi 100: Svá kom ek næst, at in nýta var vígdrótt öll of vakin með brennandum ljósum ok bornum viði, svá var mér vílstígr of vitaðr.",
        english: "Stanza 100: Óðinn ~ When I arrived, all the brisk band of warriors was awake, with blazing torches and timber piled - such was the sorry path assigned me!"
    },
    {
        norse: "Erindi 101: Auk nær morgni, er ek var enn of kominn, þá var saldrótt of sofin; grey eitt ek þá fann innar góðu konu bundit beðjum á.",
        english: "Stanza 101: Óðinn ~ And close to morning, when I'd come again, then the household were asleep. Then I found a bitch tethered, on the bed of that good girl."
    },
    {
        norse: "Erindi 102: Mörg er góð mær, ef görva kannar, hugbrigð við hali; þá ek þat reynda, er it ráðspaka teygða ek á flærðir fljóð; háðungar hverrar leitaði mér it horska man, ok hafða ek þess vettki vífs.",
        english: "Stanza 102: Óðinn ~ There is many a good maiden, if one gets to know her well, who is shifting of mind towards men. then I proved that to be so, when I urged improprieties on that woman of wise judgement. Every degradation the shrewd damsel sought for me, and I got nothing out of the girl at all."
    },
    {
        norse: "Erindi 103: Heima glaðr gumi ok við gesti reifr, sviðr skal um sig vera, minnigr ok málugr, ef hann vill margfróðr vera, oft skal góðs geta; fimbulfambi heitir, sá er fátt kann segja, þat er ósnotrs aðal.",
        english: "Stanza 103: At home a man shall be happy and heart with guests - act sagely himself, full of memories of fluent talk. If he wants to be wise in many ways he must often mention what is good. He is called a numbskull who can speak of few things - that is the stamp of the stupid."
    },
    {
        norse: "Erindi 104: Inn aldna jötun ek sótta, nú em ek aftr of kominn: fátt gat ek þegjandi þar; mörgum orðum mælta ek í minn frama í Suttungs sölum.",
        english: "Stanza 104: Óðinn ~ I visited the ancient giant, just now I have come back - little did I win by keeping quiet there! With many a word I talked my way to success inside Suttungr's halls."
    },
    {
        norse: "Erindi 105: Gunnlöð mér of gaf gullnum stóli á drykk ins dýra mjaðar; ill iðgjöld lét ek hana eftir hafa síns ins heila hugar, síns ins svára sefa.",
        english: "Stanza 105: Óðinn ~ Gunnlöð gave me on a golden throne a drink of the dearly priced mead. Poor return I made her take for her whole hearted love, for her sunken spirit."
    },
    {
        norse: "Erindi 106: Rata munn létumk rúms of fá ok um grjót gnaga; yfir ok undir stóðumk jötna vegir, svá hætta ek höfði til.",
        english: "Stanza 106: Óðinn ~ I made Rati's mouth make room for me and gnaw its way through granite. Over me and under giants' avenues stood - I put my head in such danger to do it!"
    },
    {
        norse: "Erindi 107: Vel keypts litar hefi ek vel notit, fás er fróðum vant, því at Óðrerir er nú upp kominn á alda vés jaðar.",
        english: "Stanza 107: Óðinn ~ Fraud-bought fortune I have made fine use of - little is lacking for the wise - for Óðrerir has now come up on the rim of men's hallowed realm."
    },
    {
        norse: "Erindi 108: Ifi er mér á, at ek væra enn kominn jötna görðum ór, ef ek Gunnlaðar né nytak, innar góðu konu, þeirar er lögðumk arm yfir.",
        english: "Stanza 108: Óðinn ~ A doubt is in my mind, that I might not have come back from the grounds of the giants, had I not used Gunnlöð - that good woman I laid my arm over."
    },
    {
        norse: "Erindi 109: Ins hindra dags gengu hrímþursar. Háva ráðs at fregna Háva höllu í; at Bölverki þeir spurðu, ef hann væri með böndum kominn eða hefði hánum Suttungr of sóit.",
        english: "Stanza 109: On the following day the frost ogres went to ask Havi's advice in Havi's hall. After Bölverkr they asked - whether he'd arrived among the gods or had Suttungr stifled him?"
    },
    {
        norse: "Erindi 110: Baugeið Óðinn, hygg ek, at unnit hafi; hvat skal hans tryggðum trúa? Suttung svikinn hann lét sumbli frá bok grætta Gunnlöðu.",
        english: "Stanza 110: Jongleur ~ An oath on the ring, I think, Óðinn will have sworn - how is one to trust his troth? Suttungr he left defrauded of the divine drink and gave Gunnlöð tears."
    },
    {
        norse: "Erindi 111: Mál er at þylja þular stóli á Urðarbrunni at, sá ek ok þagðak, sá ek ok hugðak, hlýdda ek á manna mál; of rúnar heyrða ek dæma, né of ráðum þögðu, Háva höllu at, Háva höllu í, heyrða ek segja svá:",
        english: "Stanza 111: It is time to chat on the chanter's throne at the fountain of Fate. I saw and I did not speak, I saw and I meditated, I listened to the murmur of men. Of runes I heard debating - they were not reticent in reading meanings! - at the High One's hall, in High One's hall. I heard this said:"
    },
    {
        norse: "Erindi 112: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: nótt þú rís-at nema á njósn séir eða þú leitir þér innan út staðar.",
        english: "Stanza 112: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: do not get up at night, unless you are on guard, or you seek a place for yourself outside."
    },
    {
        norse: "Erindi 113: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: fjölkunnigri konu skal-at-tu í faðmi sofa, svá at hon lyki þik liðum.",
        english: "Stanza 113: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: in the arms of a sorceress you must never sleep, so she can lock you with her limbs."
    },
    {
        norse: "Erindi 114: Hon svá gerir, at þú gáir eigi þings né þjóðans máls; mat þú vill-at né mannskis gaman, ferr þú sorgafullr at sofa.",
        english: "Stanza 114: By this she makes you care no more for assembly or overlord's word. You desire no food nor any human diversion - you go to your sleep full of sorrow."
    },
    {
        norse: "Erindi 115: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: annars konu teygðu þér aldregi eyrarúnu at.",
        english: "Stanza 115: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: never entice another man's wife to you to be a sharer of your secrets."
    },
    {
        norse: "Erindi 116: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: á fjalli eða firði, ef þik fara tíðir, fásktu at virði vel.",
        english: "Stanza 116: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: if by fell or fjord you feel a longing to travel, provide yourself well with provisions."
    },
    {
        norse: "Erindi 117: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: illan mann láttu aldregi óhöpp at þér vita, því at af illum manni fær þú aldregi gjöld ins góða hugar.",
        english: "Stanza 117: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: never allow an evil man to learn of bad luck befalling you, for from an evil man you'll never obtain the compensation of kindness."
    },
    {
        norse: "Erindi 118: Ofarla bíta ek sá einum hal orð illrar konu; fláráð tunga varð hánum at fjörlagi ok þeygi of sanna sök.",
        english: "Stanza 118: I saw the words of an evil woman bite into a man beyond bearing. A lie-telling tongue led to his dying, and by no means by honest arraignment."
    },
    {
        norse: "Erindi 119: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: veistu, ef þú vin átt, þann er þú vel trúir, far þú at finna oft, því at hrísi vex ok hávu grasi vegr, er vættki treðr.",
        english: "Stanza 119: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: you know, if you have a friend, one you fully trust, set out often to see him, for thicket grows and high grass on a track that nobody treads."
    },
    {
        norse: "Erindi 120: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: góðan mann teygðu þér at gamanrúnum ok nem líknargaldr, meðan þú lifir.",
        english: "Stanza 120: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: draw a good man to you for the delight of wise words and learn mercy's magic as you live."
    },
    {
        norse: "Erindi 121:Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: vin þínum ver þú aldregi fyrri at flaumslitum; sorg etr hjarta, ef þú segja né náir einhverjum allan hug.",
        english: "Stanza 121: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: with your friend never be first to cut the flow of good feeling. Sorrow eats your heart, if you do not manage to say all of your thought to anyone."
    },
    {
        norse: "Erindi 122: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: orðum skipta þú skalt aldregi við ósvinna apa.",
        english: "Stanza 122: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: you must not ever argue with ignorant apes"
    },
    {
        norse: "Erindi 123: Því at af illum manni mundu aldregi góðs laun of geta, en góðr maðr mun þik gerva mega líknfastan at lofi.",
        english: "Stanza 123: for from an ill-natured man you will never get recompense for a kindness, while a good man will be able to make you confirmed in your courtesy by his praise."
    },  
    {
        norse: "Erindi 124: Sifjum er þá blandat, hver er segja ræðr einum allan hug; allt er betra en sé brigðum at vera; er-a sá vinr öðrum, er vilt eitt segir.",
        english: "Stanza 124: It is then a blending of kind when a man is bent on saying all his thoughts to antoher. All is better than there should be a breakdown of trust. He is no friend to another who only tells facts that please."
    },
    {
        norse: "Erindi 125: Ráðumk, þér Loddfáfnir,  en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: þrimr orðum senna skal-at-tu þér við verra mann oft inn betri bilar, þá er inn verri vegr.",
        english: "Stanza 125: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: don't bandy three words with a man worse than yourself - often the better man falters, while the worse one fights!"
    },
    {
        norse: "Erindi 126: Ráðumk þér, Loddfáfnir,en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: skósmiðr þú verir né skeftismiðr, nema þú sjalfum þér séir: skór er skapaðr illa eða skaft sé rangt, þá er þér böls beðit.",
        english: "Stanza 126: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: you should not be a maker of shoes or a maker of shafts, unless you be so for yourself. A shoe is shaped ill - or shaft may be bent - then on you the curses are called down!"
    },
    {
        norse: "Erindi 127: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: hvars þú böl kannt, kveð þú þér bölvi at ok gef-at þínum fjándum frið.",
        english: "Stanza 127: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: where you know there's malevolence, call it malevolence - and allow no peace to your enemies."
    },
    {
        norse: "Erindi 128: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: illu feginn ver þú aldregi, en lát þér at góðu getit.",
        english: "Stanza 128: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: take no joy ever in anything evil, but get your pleasure from good."
    },
    {
        norse: "Erindi 129: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: upp líta skal-at-tu í orrustu, gjalti glíkir verða gumna synir, síðr þitt of heilli halir.",
        english: "Stanza 129: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: be sure not to look up in a battle - men's sons become like maniacs - in case blackguards bewitch you."
    },
    {
        norse: "Erindi 130: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: ef þú vilt þér góða konu kveðja at gamanrúnum ok fá fögnuð af, fögru skaltu heita ok láta fast vera; leiðisk manngi gótt, ef getr.",
        english: "Stanza 130:I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: if you wish to invite a good woman to give you her love in secret, and to find felicity in that, you must make fair vows and let them be firm - no one dislikes a good thing, if one gets it!"
    },
    {
        norse: "Erindi 131: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: varan bið ek þik vera ok eigi ofvaran; ver þú við öl varastr ok við annars konu ok við þat it þriðja, at þjófar né leiki.",
        english: "Stanza 131: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: I beg you to be wary, but no over-wary, most warily guard against ale and against another man's wife and against a third thing - that thives don't trick you."
    },
    {
        norse: "Erindi 132: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: at háði né hlátri hafðu aldregi gest né ganganda.",
        english: "Stanza 132: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: with scorn or ribaldry never deride a guest or a poor man going on foot."
    },
    {
        norse: "Erindi 133: Oft vitu ógörla, þeir er sitja inni fyrir, hvers þeir ro kyns, er koma; er-at maðr svá góðr at galli né fylgi, né svá illr, at einugi dugi.",
        english: "Stanza 133: Often they don't know for certain, those who sit indoors waiting, what kin or kind they are, who are coming. No man is so good that no fault goes with him, nor so bad that he's useless for anything."
    },
    {
        norse: "Erindi 134: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: at hárum þul hlæ þú aldregi, oft er gótt, þat er gamlir kveða; oft ór skörpum belg skilin orð koma þeim er hangir með hám ok skollir með skrám ok váfir með vílmögum.",
        english: "Stanza 134: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: at a grey-haired chanter you must never guffaw - often it is excellent, what old men say - often from a shrivelled skin bag shrewd words come - from one who hangs among the hids, vacillates among the vellums and sidles to and fro among the house servants."
    },
    {
        norse: "Erindi 135: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: gest þú né geyja né á grind hrekir; get þú váluðum vel.",
        english: "Stanza 135: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: do not jibe at a guest, nor drive him off at your gate. Warmly welcome a poor man yourself."
    },
    {
        norse: "Erindi 136: Rammt er þat tré, er ríða skal öllum at upploki; baug þú gef, eða þat biðja mun þér læs hvers á liðu.",
        english: "Stanza 136: Massive is the tree that has to move when the lock is lifted for all. You pay a ring - or else that will provoke all manner of maladies in your joints!"
    },
    {
        norse: "Erindi 137: Ráðumk þér, Loddfáfnir, en þú ráð nemir, njóta mundu, ef þú nemr, þér munu góð, ef þú getr: hvars þú öl drekkir, kjós þér jarðar megin, því at jörð tekr við ölðri, en eldr við sóttum, eik við abbindi, ax við fjölkynngi, höll við hýrógi, heiftum skal mána kveðja, beiti við bitsóttum, en við bölvi rúnar, fold skal við flóði taka.",
        english: "Stanza 137: I advise you, Loddfáfnir, to accept advice - you'll do well if you do it will be good for you if you get it: where you drink ale, take `earth's power` for yourself, for earth absorbs ale, fire consumes plagues, oak cures the bowels, and ear of corn defeats witchery, a hall stops married strife - for hatreds one must invoke the moon - an earthworm cures bite-infections, but for bad luck runes are required. Land must take the tide."
    },
    {
        norse: "Erindi 138: Veit ek, at ek hekk vindga meiði á nætr allar níu, geiri undaðr ok gefinn Óðni, sjalfr sjalfum mér, á þeim meiði, er manngi veit hvers af rótum renn.",
        english: "Stanza 138: Óðinn ~ I know that I was hanging on a windswept tree nine whole nights, gashed with a spear and given to Óðinn - myself to myself - on that tree of which no one knows from roots of what it originates."
    },
    {
        norse: "Erindi 139: Við hleifi mik sældu né við hornigi; nýsta ek niðr, nam ek upp rúnar, æpandi nam, fell ek aftr þaðan.",
        english: "Stanza 139: Óðinn ~ They did not hearten me with a loaf or a horn of ale. I peered down - prying. I caught up the runes - crying out in triumph I caught them. Back I fell from beyond."
    },
    {
        norse: "Erindi 140: Fimbulljóð níu nam ek af inum frægja syni Bölþorns, Bestlu föður, ok ek drykk of gat ins dýra mjaðar, ausinn Óðreri.",
        english: "Stanza 140: Óðinn ~ Nine powerful lays I learned from the famous son of Bölþorn, Bestla's father, and a drink I procured of the priceless mead - I, irrigated with Óðrerir!"
    },
    {
        norse: "Erindi 141: Þá nam ek frævask ok fróðr vera ok vaxa ok vel hafask, orð mér af orði orðs leitaði, verk mér af verki verks leitaði.",
        english: "Stanza 141: Óðinn ~ Then I began to be fertile and fruitfully wise and to grow and feel good. Word from word sought a word for me, deed from deed sought a deed for me."
    },
    {
        norse: "Erindi 142: Rúnar munt þú finna ok ráðna stafi, mjök stóra stafi, mjök stinna stafi, er fáði fimbulþulr ok gerðu ginnregin ok reist hroftr rögna.",
        english: "Stanza 142: You will find runes, and staves full of meaning - very tall staves, very stiff staves - which the powerful sage painted and the vast gods devised and Hroptr of the ruling gods engraved."
    },
    {
        norse: "Erindi 143: Óðinn með ásum, en fyr alfum Dáinn, Dvalinn ok dvergum fyrir, Ásviðr jötnum fyrir, ek reist sjalfr sumar.",
        english: "Stanza 143: Óðinn among the Æsir, and for the elves Dáinn, Dvalinn for the dwarfs, Ásviðr for the giants - I carved some myself!"
    },
    {
        norse: "Erindi 144: Veistu, hvé rísta skal? Veistu, hvé ráða skal? Veistu, hvé fáa skal? Veistu, hvé freista skal? Veistu, hvé biðja skal? Veistu, hvé blóta skal? Veistu, hvé senda skal? Veistu, hvé sóa skal?",
        english: "Stanza 144: Do you know how one must carve them? Do you know how one must construe them? Do you know how one must tint them? Do you know how one must test them? Do you know how one must supplicate? Do you know how one must sacrifice? Do you know how one must send of the soul? Do you know how one must stop up the breath?"
    },
    {
        norse: "Erindi 145: Betra er óbeðit en sé ofblótit, ey sér til gildis gjöf; betra er ósent en sé ofsóit. Svá Þundr of reist fyr þjóða rök, þar hann upp of reis, er hann aftr of kom.",
        english: "Stanza 145: Better to have asked for nothing than sacrificed excessively - always a gift expects to be paid for. Better no souls escorted than too many lives smothered. Þundr-Óðinn carved that before the close of men's history, at the place where he rose up, when he returned."
    },
    {
        norse: "Erindi 146: Ljóð ek þau kann, er kann-at þjóðans kona ok mannskis mögr. Hjalp heitir eitt,en þat þér hjalpa mun við sökum ok sorgum ok sútum görvöllum.",
        english: "Stanza 146: Óðinn ~ Such lays I know that a lord's wife does not, and no man's son. Lay One is called Help, and that will help you against lawsuits and sorrows and every sort of affliction."
    },
    {
        norse: "Erindi 147: Þat kann ek annat, er þurfu ýta synir, þeir er vilja læknar lifa.",
        english: "Stanza 147: I know the second that sons of mankind need, those who wish to lead a healer's life..."
    },
    {
        norse: "Erindi 148: Það kann ek þriðja: ef mér verðr þörf mikil hafts við mína heiftmögu, eggjar ek deyfi minna andskota, bíta-t þeim vápn né velir.",  
        english: "Stanza 148: I know the third: if I greatly need my raging enemies restrained, I blunt the edges of my adversaries' blades - neither weapons nor bludgeons will bite for them."
    },
    {
        norse: "Erindi 149: Þat kann ek it fjórða: ef mér fyrðar bera bönd að boglimum, svá ek gel, at ek ganga má, sprettr mér af fótum fjöturr, en af höndum haft.",
        english: "Stanza 149: I know the fourth: if men fasten locks on my limbs, I sing a spell so I may step free - the fetter snaps off my feet, the hasp off my hands!"
    },
    {
        norse: "Erindi 150: Þat kann ek it fimmta: ef ek sé af fári skotinn flein í folki vaða, fýgr-a hann svá stinnt, at ek stöðvig-a-k, ef ek hann sjónum of sék.",
        english: "Stanza 150: I know the fifth: if I see - fatally aimed - an arrow enter the fighting, it does not fly so inflexibly that I do not forestall it, if I, with my eyes, see it."
    },
    {
        norse: "Erindi 151: Þat kann ek it sétta: ef mik særir þegn á vrótum hrás viðar, ok þann hal er mik heifta kveðr, þann eta mein heldr en mik.",
        english: "Stanza 151: I know the sixth: if a man scrapes wounds for me on roots of raw wood, then it's that brave fellow, who breathes curses on me, that the ulcers eat - and not me!"
    },
    {
        norse: "Erindi 152: Þat kann ek it sjaunda: ef ek sé hávan loga sal of sessmögum, brennr-at svá breitt, at ek hánum bjargig-a-k; þann kann ek galdr at gala.",
        english: "Stanza 152: I know the seventh: if I see a hall of sleeping men catch fire over my comrades, it does not burn so insatiably thatt I do not save it - I know how to chant that chant!"
    },
    {
        norse: "Erindi 153: Þat kann ek it átta, er öllum er nytsamligt at nema: hvars hatr vex með hildings sonum þat má ek bæta brátt.",
        english: "Stanza 153: I know the eighth: which it is for all men expedient to acquire: wherever hatred sprouts among a warlord's sons, I can remedy that rapidly."
    },
    {
        norse: "Erindi 154: Þat kann ek it níunda: ef mik nauðr of stendr at bjarga fari mínu á floti, vind ek kyrri vági á ok svæfik allan sæ.",
        english: "Stanza 154: I know the ninth: if the need confronts me of saving my boat on the sea, the wind I calm over the wave, and I soothe the whole ocean to sleep."
    },
    {
        norse: "Erindi 155: Þat kann ek it tíunda: ef ek sé túnriður leika lofti á, ek svá vinnk, at þær villar fara sinna heimhama, sinna heimhuga.",
        english: "Stanza 155: I know the tenth: if I see riders of fence-tops sporting in the sky, I work it so that they wander astray - from the bodies they have at home, from the minds they have at home."
    },
    {
        norse: "Erindi 156: Þat kann ek it ellifta: ef ek skal til orrostu leiða langvini, und randir ek gel, en þeir með ríki fara heilir hildar til, heilir hildi frá, koma þeir heilir hvaðan.",
        english: "Stanza 156: I know the eleventh: if I am to lead into war long-loved friends, I chant beneath their shields, and dominant they stride safe into battle, safe out of battle - they come back from anywhere unharmed."
    },
    {
        norse: "Erindi 157: Þat kann ek it tolfta: ef ek sé á tré uppi váfa virgilná, svá ek ríst ok í rúnum fák, at sá gengr gumi ok mælir við mik.",
        english: "Stanza 157: I know the twelfth: if I see on a tree up high a corpse dangling in its collar, I carve in such a way and colour-in the runes, that that man walks and talks with me."
    },
    {
        norse: "Erindi 158: Þat kann ek it þrettánda: ef ek skal þegn ungan verpa vatni á, mun-at hann falla, þótt hann í folk komi, hnígr-a sá halr fyr hjörum.",
        english: "Stanza 158: I know the thirteenth: if on a young thane I shall sprinkle water, he will not fall though he fights in a battle - that stalwart does not sink before the swords."
    },
    {
        norse: "Erindi 159: Þat kann ek it fjögurtánda: ef ek skal fyrða liði telja tíva fyrir, ása ok alfa ek kann allra skil; fár kann ósnotr svá.",
        english: "Stanza 159: I know the fourteenth: if I must before a forum of men give the numbers of the gods, of Æsir and Elves, I know every detail - few without wisdom can do that."
    },
    {
        norse: "Erindi 160: Þat kann ek it fimmtánda er gól Þjóðreyrir dvergr fyr Dellings durum: afl gól hann ásum,en alfum frama, hyggju Hroftatý.",
        english: "Stanza 160: I know the fifteenth: which Þjóðreyrir chanted, the dwarf before Dellingr's door: he chanted strength to the Æsir, prosperity to the Elves and insight to Óðinn"
    },
    {
        norse: "Erindi 161: Þat kann ek it sextánda: ef ek vil ins svinna mans hafa geð allt ok gaman, hugi ek hverfi hvítarmri konu, ok sný ek hennar öllum sefa.",
        english: "Stanza 161: I know the sixteenth: if I want from a girl of good sense to have all her liking and love, I make the mind whirl in Lady White-Arm and turn all her thought about."
    },
    {
        norse: "Erindi 162: Þat kann ek it sjautjánda at mik mun seint firrask it manunga man. Ljóða þessa mun þú, Loddfáfnir, lengi vanr vera; þó sé þér góð, ef þú getr, nýt ef þú nemr, þörf ef þú þiggr.",
        english: "Stanza 162: I know the seventeenth, that will make her slow to leave me, the maidenly young maid..."
    },
    {
        norse: "Erindi 163: Lióða þessa munðu, Loddfáfnir, lengi van vera, þó sé þér góð ef þú getr,",
        english: "Stanza 163: These lays, Loddfáfnir, you will long feel the lack of - though they would be good for you if you get them, useful if you absorb them, indispensible if you adopt them."
    },
    {
        norse: "Erindi 164: Þat kann ek it átjánda, er ek æva kennik mey né manns konu, allt er betra, er einn of kann; þat fylgir ljóða lokum, nema þeiri einni, er mik armi verr, eða mín systir sé.",
        english: "Stanza 164: I know the eighteenth, that I never impart to maid or man's wife - (everything is better tha only one man knows of: with this conclusion the lays close) - except to that one who shields me in her arm, or , might be, my sister."
    },
    {
        norse: "Erindi 165: Nú eru Háva mál kveðin Háva höllu í, allþörf ýta sonum, óþörf jötna sonum; heill sá, er kvað, heill sá, er kann, njóti sá, er nam, heilir, þeirs hlýddu.",
        english: "Stanza 165: Now High One's words are spoken in High One's hall - essential for the sons of men, useless for the sons of giants! Fortune to him who spoke! Fortune to him who knows! Let him profit who learnt! Fortune to those who listened!"
    }
];
/*
After English translation, store all on db and reconfigure*/        


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
    addRunicFunctionality();
}

document.addEventListener("DOMContentLoaded", () => {
    const stanzaElement = document.getElementById("stanza");
    const dailyStanza = getDailyStanza();
    stanzaElement.textContent = dailyStanza.norse;
    addRunicFunctionality();
});

const message = 'I fear for Huginn, that he come not back, yet more anxious am I for Muninn.';
console.log(message);

// Add letters until complete
const runeMap = {
    'a': 'ᚨ', 'á': 'ᚨ', 'b': 'ᛒ', 'c': 'ᚲ', 'd': 'ᛞ', 'e': 'ᛖ', 'é': 'ᛖ', 'f': 'ᚠ',
    'g': 'ᚷ', 'h': 'ᚺ', 'i': 'ᛁ', 'í': 'ᛁ', 'j': 'ᛃ', 'k': 'ᚲ', 'l': 'ᛚ',
    'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᛟ', 'ó': 'ᛟ', 'p': 'ᛈ', 'q': 'ᚲ', 'r': 'ᚱ',
    's': 'ᛊ', 't': 'ᛏ', 'u': 'ᚢ', 'ú': 'ᚢ', 'v': 'ᚹ', 'w': 'ᚹ', 'x': 'ᚲᛊ',
    'y': 'ᛃ', 'ý': 'ᛃ', 'z': 'ᛉ', 'æ': 'ᚨᛖ', 'ð': 'ᚦ', 'þ': 'ᚦ',
    'ø': 'ᛟ', 'å': 'ᛟ'
};

function addRunicFunctionality() {
    const stanzaElement = document.getElementById("stanza");
    const text = stanzaElement.textContent;

    const stanzaContainer = document.createElement('div');
    stanzaContainer.className = 'stanza-container';
    stanzaElement.parentNode.insertBefore(stanzaContainer, stanzaElement);
    stanzaContainer.appendChild(stanzaElement);

    const runicOverlay = document.createElement('div');
    runicOverlay.className = 'runic-overlay';
    runicOverlay.textContent = convertToRunes(text);
    stanzaContainer.appendChild(runicOverlay);

    stanzaElement.innerHTML = '';
    
    let previousRune = null;
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement('span');
        span.textContent = char;
        
        const lowerChar = char.toLowerCase();
        const currentRune = runeMap[lowerChar];
        
        if (currentRune) {
            span.className = 'runic-text';
            span.setAttribute('data-latin', currentRune);
            addTouchEventListeners(span);
        }
        
        stanzaElement.appendChild(span);
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

function convertToRunes(text) {
    return text.split('').map(char => runeMap[char.toLowerCase()] || char).join('');
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

document.addEventListener('click', function(e) {
    const runicElements = document.querySelectorAll('.runic-text');
    runicElements.forEach(el => el.classList.remove('touch-active'));
    
    if (e.target.classList.contains('runic-text')) {
        e.target.classList.add('touch-active');
    }
});
// ==============================
// PERSONAL CUSTOMIZATION
// ==============================
// Edit everything in this section to make the app yours.

const CONFIG = {
  // Her name (used in greetings if you want — currently soft & general)
  herName: "Krystel",

  // Optional custom greeting override (leave empty for default)
  customGreeting: "Hello, Tel",
};

// ==============================
// SPECIAL DATE MESSAGES
// ==============================

const specialDates = {
  "01-01": {
    loading: "Happy New Year, Tel ♡",
    greeting: "Happy New Year, Tel!",
  },

  "02-14": {
    loading: "Happy Valentine's Day, Tel ♡",
    greeting: "Happy Valentine's Day, Tel!",
  },

  "09-22": {
    loading: "Happy Birthday, Tel ♡",
    greeting: "Happy Birthday, Tel!",
  },

  "12-25": {
    loading: "Merry Christmas, Tel ♡",
    greeting: "Merry Christmas, Tel!",
  },
};


function getTodaySpecialDate() {
  const specialDates = {
  "01-01": {
    loading: "Happy New Year, Tel ♡",
    greeting: "Happy New Year, Tel! :))))",
  },

  "02-14": {
    loading: "Happy Valentine's Day, Tel ♡",
    greeting: "Happy Valentine's Day, Tel! <3333",
  },

  "09-22": {
    loading: "Happy Birthday, Tel ♡",
    greeting: "Happy Birthday, Tel! Ienjoy mo yung day mo wag ka mag pa stress ng sobra. And sana lagi mong tatandaan na ikaw ay mahalaga. Araw mo to so wag mong sayangin. Smile kana pleaseee :)) Happy Birthday Tel!! Ingat ka paagi!!!",
  },

  "12-25": {
    loading: "Merry Christmas, Tel ♡",
    greeting: "Merry Christmas, Tel! :)",
  },
};


function getTodaySpecialDate() {
  const today = new Date();

  const month = String(
    today.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    today.getDate()
  ).padStart(2, "0");

  return (
    specialDates[`${month}-${day}`] ||
    null
  );
}
}

// ---------- Personal messages ("Something I want you to remember") ----------
// Replace these with your own words. They rotate randomly.
const personalMessages = [
  "Slowly lang Tel, you are doing better than you think.",
  "Pray ka Tel! God is always with you.",
  "Wag mo kakalimutan Tel, you are loved and cherished.",
  "MAGANDA KA Tel PERIOD!",
  "AMAZE. AMAZE. AMAZE!!",
  "FIST MY BUMP!",
  "Tiger, fix Tel, keep Tel happy.",
  "TEL, SMILE KA DYAN!",
   "No sad Tel allowed!",
    "TEL, YOU ARE MORE THAN ENOUGH!",
     "No overthinking allowed, Tel.",
     "GO TEL GO!!",
     "MOU APPROVES. TEL IS DOING GREAT.",
     "ATTENTION EVERYONE: TEL IS AMAZING.",
     "Tel, today’s goal: survive and be cute.",
     "Tel, ikaw muna. You deserve it.",


];

// ---------- Open When letters ----------
// Replace the message fields with your personal letters.
// Keep the titles or change them to fit.
const openWhenLetters = [
  {
    id: "ow-sad",
    title: "you're sad",
    message: "Hello, Baket naman sad ka? :(\n\n It's okay Tel!, whatever it is alam ko na kayang kaya mo yan. Smile kana PLEASE MASTER! :))",
  },
  {
    id: "ow-terrible",
    title: "you're having a terrible day",
    message: "Aww bad day?\n\nHmm let's make it better together with God. Pray ka Tel! :))",
  },
  {
    id: "ow-alone",
    title: "you're feeling alone",
    message: "Kamusta ka naman?.\n\nAlam mo naman na isang message mo lang kay Gar mag rereply sha sayo if gusto mo ng kausap wag ka mag dalawang isip na magreach out! Sabihin mo lang Hello, HAHAHAHAHA! smileee kanaaa :)).",
  },
  {
    id: "ow-sleep",
    title: "you can't sleep",
    message: "Bakit hindi kana naman makatulog?\n\nAno nasa isip mo? Nag PRAY kanaba? Chat ka langggg ha if hindi kaya.. \npagusapan naten at baka makatulong na gumaan yung nararamdaman mo.. \nyung mga worries mo ipag pabukas mo na... \nKailangan mo din mag rest Tel! Goodnight and Sleepwell!! :))",
  },
  {
    id: "ow-doubt",
    title: "you doubt yourself",
    message: "Ohh bakit mo naman yan nararamdaman.\n\nWag ka magdoubt, you are capable and strong. You are DR. Tel! :))",
  },
  {
    id: "ow-encourage",
    title: "you need encouragement",
  message: "Hmmm KAYA MO YANNNN.\n\nano man yan sigurado ako na kayang kaya mo yan.\n GO GO GO TEL! :)) WOOOOO!!!!! \n ",
  },
  {
    id: "ow-laugh",
    title: "you need to laugh",
    message: "sige eto.\n\nRemember that time you forgot my name? Don’t worry, I still remember:) HAHAHAHAHA smile kana!!. \n Imagine mo nakasalubong moko sa daan tapos bigla ko ginawa yung \n mukbang with tirik na mata. \nHAHAHHAHAHAHAHHAHAH!",
  },
  {
    id: "ow-angry",
    title: "you're angry",
    message: "PSHHHH KALMA PO!.\n\nOkay lang na makaramdam ka ng galit normal yan Tel! Wag mo lang masyado i overthink yan, breathe in and out. Smile kanaaa :))",
  },
  
  {
    id: "ow-reminder",
    title: "you need a reminder",
    message: "YOUR DAILY REMINDER!.\n\nWAG KANA MAGPUPUYAT! :).",
  },
  {
    id: "ow-good",
    title: "something good happens",
    message: "YEHEYYYYY!!!!.\n\nCONGRATULATIONS TEL!!! CHEERSSSSS!!! :)))",
  },
  {
    id: "ow-proud",
    title: "you're proud of yourself",
    message: "AWWW.\n\nDESERVE MO YAN TEL! :))",
  },
];

// ---------- Memories ----------
// Replace title, date, description, and optionally image URL.
// Use a real image path/URL or leave image empty for a soft placeholder.

// ---------- Music / calming links ----------
// Add Spotify, YouTube, or any playlist/song links.

// ---------- Personal comfort voicemails ----------
// Add your recordings here whenever you feel the time is right.
// Put the audio files in an "audio" folder in the project.
// A voicemail disappears from Tel's inbox after the recording finishes.
const voicemailMessages = [
  {
    id: "vm-001",
    title: "Hello Tel!!!",
    date: "August 30, 2026",
    audio: "audio/1.mp3",
  },
  {
    id: "vm-002",
    title: "Hi! Ingat!!",
    date: "August 30, 2026",
    audio: "audio/2.mp3",
  },
   {
    id: "vm-003",
    title: "Hindi ka namamansin!",
    date: "August 30, 2026",
    audio: "audio/3.mp3",
  },

  // Add future messages like this:
  // {
  //   id: "vm-002",
  //   title: "Take a little breath",
  //   date: "September 5, 2026",
  //   audio: "audio/take-a-breath.mp3",
  // },
];

const musicItems = [
  {
    id: "song-1",
    title: "You got this",
    artist: "Artist or 'Various'",
    description: "Motivation?",
    url: "https://open.spotify.com/track/5MDMFoTpN4ZIDUjNRt3AoN?si=281f74715aa24d16", // ← replace with real link
  },
  {
    id: "song-2",
    title: ":)",
    artist: "Artist",
    description: "For the nights that need something gentle.",
    url: "https://open.spotify.com/track/3NYgpHe5Lcz0LoXVeZwmRN?si=dac9b75699e24c3b", // ← replace
  },
  {
    id: "song-3",
    title: "Sing along",
    artist: "Artist",
    description: "When words feel like too much.",
    url: "https://open.spotify.com/track/4w1lzcaoZ1IC2K5TwjalRP?si=4ecb51d24387480c", // ← replace
  },
];

// ---------- Comfort messages by mood ----------
// Feel free to rewrite these in your own voice.
const comfortMessages = {
  sad: [
    "You don't have to rush through this feeling. It can sit here with you for a while.",
    "Sadness is not a failure. It's just a heavy guest that will eventually leave.",
    "Even on the days that feel gray, you are still held and still worthy of care.",
    "It's okay if today is just about getting through. That is enough.",
  ],
  anxious: [
    "Take one slow breath. You don't have to solve the whole thing right now.",
    "Anxiety often lies about how urgent everything is. Most of it can wait.",
    "You have survived every difficult moment so far. That is not nothing.",
    "Right now, all you need to do is the next small thing. Just that.",
  ],
  lonely: [
    "Feeling alone does not mean you are forgotten. You are thought of more than you know.",
    "This quiet space is here so you don't have to carry the silence by yourself.",
    "Connection isn't only measured by who is in the room. You are still connected.",
    "Even in loneliness, you are allowed to be soft with yourself.",
  ],
  overwhelmed: [
    "You don't have to hold everything at once. Set one thing down.",
    "Overwhelm is a signal, not a verdict. You are allowed to rest before you continue.",
    "Break it into pieces small enough to hold. Then take the next piece.",
    "It's okay to need a pause. Pausing is part of how people keep going.",
  ],
  badDay: [
    "Some days are just hard. That doesn't mean anything is wrong with you.",
    "You made it to this moment. That counts, even if nothing else felt successful today.",
    "Tomorrow is allowed to be different. Tonight, be gentle with what is.",
    "A bad day is still just one day. It does not get to define the whole story.",
  ],
  cantSleep: [
    "The night can feel longer when your mind won't rest. You are safe here.",
    "You don't have to force sleep. Just let your body be still for a little while.",
    "Tomorrow's worries can wait. Right now is only this quiet room.",
    "Even if rest comes in pieces, those pieces still matter.",
  ],
  insecure: [
    "The critical voice in your head is not the most accurate one.",
    "You are allowed to take up space exactly as you are.",
    "Doubt is loud, but it is rarely wise. Softness is a better teacher.",
    "You don't have to earn the right to be kind to yourself.",
  ],
  encouragement: [
    "You are doing better than you think. Keep going, even if the steps feel small.",
    "Courage isn't the absence of fear — it's moving while the fear is still there.",
    "There is strength in simply continuing. You have that strength.",
    "Someone believes in you on the days you can't believe in yourself.",
  ],
  needGod: [
    "You can bring every unfinished thought and every tired feeling to Him. He already knows.",
    "You don't have to have the perfect prayer. Honest is enough.",
    "Even when faith feels thin, you are still held by something larger than this moment.",
    "Rest in the truth that you are seen, known, and not alone.",
  ],
  happy: [
    "Let yourself fully feel the good. You don't have to shrink it or apologize for it.",
    "Joy is allowed here too. Celebrate the light when it comes.",
    "This happiness is real. Hold it gently and share it if you want to.",
    "Good days are part of the story. Enjoy this one.",
  ],
  missing: [
    "Missing someone is a form of love that still has somewhere to go.",
    "The ache means the connection mattered. That is not a small thing.",
    "You can miss them and still take care of yourself at the same time.",
    "Distance doesn't erase what was real between you.",
  ],
  comfort: [
    "You came here looking for comfort. That is a brave and kind thing to do for yourself.",
    "You are allowed to need softness. Needing it does not make you weak.",
    "Stay as long as you need. This space isn't going anywhere.",
    "Sometimes the most important thing is simply being somewhere that feels safe.",
  ],
};

// ---------- Reflection / journal prompts by mood ----------
const reflectionPrompts = {
  sad: [
    "What does this sadness need from you right now — not forever, just for the next hour?",
    "If a close friend felt the way you do, what would you gently tell them?",
  ],
  anxious: [
    "What is worrying you right now?",
    "Which part of this situation is actually within your control?",
  ],
  lonely: [
    "When was the last time you felt genuinely connected? What was present then?",
    "What is one small way you could offer yourself company today?",
  ],
  overwhelmed: [
    "If you could only do one thing today, what would matter most?",
    "What can you set down, even temporarily, without everything falling apart?",
  ],
  badDay: [
    "What is one tiny thing that still went okay today?",
    "What would 'being kind to yourself' look like for the rest of this evening?",
  ],
  cantSleep: [
    "What thoughts keep circling? Can you set them on a shelf until morning?",
    "What does your body need more than another hour of trying to sleep?",
  ],
  insecure: [
    "Whose voice is the critical one borrowing? Is it actually yours?",
    "What is one true thing about yourself that the insecurity is ignoring?",
  ],
  encouragement: [
    "What have you already overcome that you tend to forget?",
    "What would 'enough for today' look like, without comparison?",
  ],
  needGod: [
    "What do you most need to hand over right now?",
    "Where have you already seen quiet faithfulness in your life?",
  ],
  happy: [
    "What made this goodness possible? Can you name the pieces?",
    "Who might be glad to hear about this with you?",
  ],
  missing: [
    "What do you miss most — and is there a gentle way to honor that today?",
    "What would the person you miss want you to know about taking care of yourself?",
  ],
  comfort: [
    "What does comfort look like for you in this exact moment?",
    "Is there anything you've been holding that you're ready to put down for a little while?",
  ],
};

// ---------- Bible verses (real references & text, public domain / common translations) ----------
// Category keys match mood ids where possible.
const bibleVerses = [
  // SAD / COMFORT
  { reference: "Psalm 34:18", text: "The Lord is near to the brokenhearted and saves the crushed in spirit.", category: "sad" },
  { reference: "Psalm 147:3", text: "He heals the brokenhearted and binds up their wounds.", category: "sad" },
  { reference: "Matthew 5:4", text: "Blessed are those who mourn, for they shall be comforted.", category: "sad" },
  { reference: "John 16:33", text: "I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.", category: "sad" },
  { reference: "Psalm 42:11", text: "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.", category: "sad" },
  { reference: "2 Corinthians 1:3-4", text: "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction.", category: "comfort" },
  { reference: "Isaiah 41:10", text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.", category: "anxious" },
  { reference: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.", category: "anxious" },
  { reference: "Matthew 6:34", text: "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.", category: "anxious" },
  { reference: "Psalm 55:22", text: "Cast your burden on the Lord, and he will sustain you; he will never permit the righteous to be moved.", category: "anxious" },
  { reference: "1 Peter 5:7", text: "Casting all your anxieties on him, because he cares for you.", category: "anxious" },
  { reference: "Joshua 1:9", text: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.", category: "encouragement" },
  { reference: "Isaiah 40:31", text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.", category: "encouragement" },
  { reference: "Deuteronomy 31:8", text: "It is the Lord who goes before you. He will be with you; he will not leave you or forsake you. Do not fear or be dismayed.", category: "lonely" },
  { reference: "Psalm 23:4", text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.", category: "lonely" },
  { reference: "Matthew 28:20", text: "And behold, I am with you always, to the end of the age.", category: "lonely" },
  { reference: "Psalm 4:8", text: "In peace I will both lie down and sleep; for you alone, O Lord, make me dwell in safety.", category: "cantSleep" },
  { reference: "Psalm 127:2", text: "It is in vain that you rise up early and go late to rest, eating the bread of anxious toil; for he gives to his beloved sleep.", category: "cantSleep" },
  { reference: "Proverbs 3:24", text: "If you lie down, you will not be afraid; when you lie down, your sleep will be sweet.", category: "cantSleep" },
  { reference: "Psalm 139:14", text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.", category: "insecure" },
  { reference: "Ephesians 2:10", text: "For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.", category: "insecure" },
  { reference: "Romans 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.", category: "needGod" },
  { reference: "Psalm 46:1", text: "God is our refuge and strength, a very present help in trouble.", category: "needGod" },
  { reference: "Hebrews 4:16", text: "Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.", category: "needGod" },
  { reference: "Psalm 62:8", text: "Trust in him at all times, O people; pour out your heart before him; God is a refuge for us.", category: "needGod" },
  { reference: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.", category: "badDay" },
  { reference: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", category: "badDay" },
  { reference: "Psalm 30:5", text: "Weeping may tarry for the night, but joy comes with the morning.", category: "badDay" },
  { reference: "Philippians 4:13", text: "I can do all things through him who strengthens me.", category: "encouragement" },
  { reference: "2 Timothy 1:7", text: "For God gave us a spirit not of fear but of power and love and self-control.", category: "encouragement" },
  { reference: "Psalm 121:1-2", text: "I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth.", category: "overwhelmed" },
  { reference: "Matthew 11:28", text: "Come to me, all who labor and are heavy laden, and I will give you rest.", category: "overwhelmed" },
  { reference: "Psalm 55:6", text: "And I say, 'Oh, that I had wings like a dove! I would fly away and be at rest.'", category: "overwhelmed" },
  { reference: "John 14:27", text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.", category: "anxious" },
  { reference: "Isaiah 26:3", text: "You keep him in perfect peace whose mind is stayed on you, because he trusts in you.", category: "anxious" },
  { reference: "Psalm 16:8", text: "I have set the Lord always before me; because he is at my right hand, I shall not be shaken.", category: "encouragement" },
  { reference: "Zephaniah 3:17", text: "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.", category: "needGod" },
  { reference: "Psalm 91:1-2", text: "He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, 'My refuge and my fortress, my God, in whom I trust.'", category: "comfort" },
  { reference: "Isaiah 43:1-2", text: "Fear not, for I have redeemed you; I have called you by name, you are mine. When you pass through the waters, I will be with you.", category: "comfort" },
  { reference: "Psalm 139:7-10", text: "Where shall I go from your Spirit? Or where shall I flee from your presence? If I ascend to heaven, you are there! If I make my bed in Sheol, you are there!", category: "lonely" },
  { reference: "Romans 15:13", text: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.", category: "happy" },
  { reference: "Psalm 118:24", text: "This is the day that the Lord has made; let us rejoice and be glad in it.", category: "happy" },
  { reference: "James 1:17", text: "Every good gift and every perfect gift is from above, coming down from the Father of lights.", category: "happy" },
  { reference: "Psalm 34:4", text: "I sought the Lord, and he answered me and delivered me from all my fears.", category: "anxious" },
  { reference: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.", category: "needGod" },
  { reference: "Psalm 27:1", text: "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?", category: "encouragement" },
  { reference: "Isaiah 40:29", text: "He gives power to the faint, and to him who has no might he increases strength.", category: "overwhelmed" },
  { reference: "Psalm 73:26", text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.", category: "sad" },
  { reference: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'", category: "insecure" },
  { reference: "Psalm 3:5", text: "I lay down and slept; I woke again, for the Lord sustained me.", category: "cantSleep" },
  { reference: "John 14:1", text: "Let not your hearts be troubled. Believe in God; believe also in me.", category: "anxious" },
  { reference: "Psalm 9:9-10", text: "The Lord is a stronghold for the oppressed, a stronghold in times of trouble. And those who know your name put their trust in you.", category: "comfort" },
  { reference: "Hebrews 13:5", text: "Keep your life free from love of money, and be content with what you have, for he has said, 'I will never leave you nor forsake you.'", category: "lonely" },
  { reference: "Psalm 56:3", text: "When I am afraid, I put my trust in you.", category: "anxious" },
  { reference: "Isaiah 30:15", text: "In returning and rest you shall be saved; in quietness and in trust shall be your strength.", category: "overwhelmed" },
  { reference: "Psalm 94:19", text: "When the cares of my heart are many, your consolations cheer my soul.", category: "sad" },
  { reference: "Romans 5:5", text: "And hope does not put us to shame, because God's love has been poured into our hearts through the Holy Spirit who has been given to us.", category: "encouragement" },
  { reference: "Psalm 121:7-8", text: "The Lord will keep you from all evil; he will keep your life. The Lord will keep your going out and your coming in from this time forth and forevermore.", category: "comfort" },
];

// ---------- Mood definitions (for home grid & flow) ----------
const moods = [
  { id: "sad", label: "I'm sad" },
  { id: "comfort", label: "I need comfort" },
  { id: "anxious", label: "I'm anxious" },
  { id: "lonely", label: "I feel alone" },
  { id: "cantSleep", label: "I can't sleep" },
  { id: "encouragement", label: "I need encouragement" },
  { id: "needGod", label: "I need God" },
  { id: "badDay", label: "I'm having a bad day" },
  { id: "overwhelmed", label: "I'm overwhelmed" },
  { id: "insecure", label: "I feel insecure" },
  { id: "happy", label: "I'm happy" },
  { id: "missing", label: "I'm missing someone" },
  { id: "surprise", label: "Surprise me", special: true },
];

// ==============================
// STATE
// ==============================
const state = {
  currentView: "home",
  currentMood: null,
  comfortStep: 0,
  lastSurpriseId: null,
  lastVerseIndex: -1,
  lastComfortIndex: -1,
  lastPromptIndex: -1,
  lastPersonalIndex: -1,
  editingEntryId: null,
  favFilter: "all",
  confirmCallback: null,
};

// ==============================
// LOCAL STORAGE HELPERS
// ==============================
const STORAGE_KEYS = {
  journal: "forYou_journal",
  favorites: "forYou_favorites",
  theme: "forYou_theme",
  voicemailHeard: "forYou_voicemail_heard",
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    showToast("Could not save — storage may be full.");
  }
}

function getJournal() {
  return loadJSON(STORAGE_KEYS.journal, []);
}

function saveJournal(entries) {
  saveJSON(STORAGE_KEYS.journal, entries);
}

function getFavorites() {
  return loadJSON(STORAGE_KEYS.favorites, []);
}

function saveFavorites(favs) {
  saveJSON(STORAGE_KEYS.favorites, favs);
}

function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.theme) || "light";
}

function getHeardVoicemails() {
  return loadJSON(STORAGE_KEYS.voicemailHeard, []);
}

function saveHeardVoicemails(ids) {
  saveJSON(STORAGE_KEYS.voicemailHeard, ids);
}

function setTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    const active = btn.dataset.theme === theme;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

// ==============================
// UTILITIES
// ==============================
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function randomFrom(arr, lastIndexRef) {
  if (!arr || arr.length === 0) return null;
  if (arr.length === 1) return { item: arr[0], index: 0 };
  let idx;
  do {
    idx = Math.floor(Math.random() * arr.length);
  } while (idx === lastIndexRef && arr.length > 1);
  return { item: arr[idx], index: idx };
}

function showToast(message, duration = 2800) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    el.hidden = true;
  }, duration);
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const focusable = modal.querySelector("button, [href], input, textarea, select");
  if (focusable) focusable.focus();
}

function closeModal(modal) {
  if (typeof modal === "string") modal = document.getElementById(modal);
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((m) => {
    m.hidden = true;
  });
  document.body.style.overflow = "";
}

function confirmAction(title, message, onConfirm) {
  document.getElementById("confirm-title").textContent = title;
  document.getElementById("confirm-message").textContent = message;
  state.confirmCallback = onConfirm;
  openModal("confirm-modal");
}

// ==============================
// NAVIGATION
// ==============================
function navigateTo(viewId) {
  if (viewId === "more") viewId = "settings";

  document.querySelectorAll(".view").forEach((v) => {
    v.classList.remove("active");
    v.hidden = true;
  });

  const target = document.getElementById("view-" + viewId);
  if (target) {
    target.hidden = false;
    target.classList.add("active");
  }

  state.currentView = viewId;

  document.querySelectorAll(".nav-link, .mobile-nav-btn").forEach((btn) => {
    const isActive = btn.dataset.view === viewId;
    btn.classList.toggle("active", isActive);
  });

  // Render view-specific content
  if (viewId === "journal") renderJournalList();
  if (viewId === "favorites") renderFavorites();
  if (viewId === "openWhen") renderOpenWhen();
  if (viewId === "memories") renderMemories();
  if (viewId === "music") renderMusic();
  if (viewId === "voicemail") renderVoicemails();
  if (viewId === "home") {
    // reset comfort flow if returning home
    state.currentMood = null;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==============================
// HOME / MOODS
// ==============================
function renderMoodGrid() {
  const grid = document.getElementById("mood-grid");
  grid.innerHTML = moods
    .map((m) => {
      const cls = m.special ? "mood-btn surprise" : "mood-btn";
      return `<button class="${cls}" data-mood="${m.id}" role="listitem">
        <span class="mood-label">${escapeHtml(m.label)}</span>
      </button>`;
    })
    .join("");

  grid.querySelectorAll(".mood-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const moodId = btn.dataset.mood;
      if (moodId === "surprise") {
        runSurprise();
      } else {
        startComfortFlow(moodId);
      }
    });
  });
}

// ==============================
// COMFORT FLOW
// ==============================
function startComfortFlow(moodId) {
  state.currentMood = moodId;
  state.comfortStep = 1;
  navigateTo("comfort");
  renderComfortStep();
}

function renderComfortStep() {
  const container = document.getElementById("comfort-step");
  const mood = state.currentMood;

  if (state.comfortStep === 1) {
    container.innerHTML = `
      <p class="comfort-message">Okay. SMILE KA MUNA.</p>
      <div class="comfort-options">
        <button class="option-btn" data-next="2">I'm ready</button>
      </div>
    `;
    container.querySelector("[data-next]").addEventListener("click", () => {
      state.comfortStep = 2;
      renderComfortStep();
    });
  } else if (state.comfortStep === 2) {
    container.innerHTML = `
      <p class="comfort-message">What would help?</p>
      <div class="comfort-options">
        <button class="option-btn" data-choice="verse">A verse</button>
        <button class="option-btn" data-choice="comfort">A little reminder</button>
        <button class="option-btn" data-choice="prompt">Something to reflect on</button>
        <button class="option-btn" data-choice="journal">A journal prompt</button>
        <button class="option-btn" data-choice="surprise">Surprise me</button>
      </div>
    `;
    container.querySelectorAll("[data-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const choice = btn.dataset.choice;
        if (choice === "surprise") {
          showComfortContent(randomComfortType());
        } else if (choice === "journal") {
          // jump to journal with a prompt prefilled
          const prompts = reflectionPrompts[mood] || reflectionPrompts.comfort;
          const { item } = randomFrom(prompts, state.lastPromptIndex);
          state.lastPromptIndex = prompts.indexOf(item);
          navigateTo("journal");
          const body = document.getElementById("journal-body");
          const title = document.getElementById("journal-title");
          title.value = "";
          body.value = item + "\n\n";
          body.focus();
          updateCharCount();
        } else {
          showComfortContent(choice);
        }
      });
    });
  }
}

function randomComfortType() {
  const types = ["verse", "comfort", "prompt"];
  return types[Math.floor(Math.random() * types.length)];
}

function showComfortContent(type) {
  state.comfortStep = 3;
  const container = document.getElementById("comfort-step");
  const mood = state.currentMood;
  let html = "";

  if (type === "verse") {
    const pool = bibleVerses.filter((v) => v.category === mood || v.category === "comfort");
    const source = pool.length ? pool : bibleVerses;
    const { item, index } = randomFrom(source, state.lastVerseIndex);
    state.lastVerseIndex = index;
    html = `
      <div class="content-card" data-type="verse" data-ref="${escapeHtml(item.reference)}" data-text="${escapeHtml(item.text)}">
        <p class="verse-text">"${escapeHtml(item.text)}"</p>
        <p class="verse-ref">${escapeHtml(item.reference)}</p>
        <div class="content-actions">
          <button class="btn btn-ghost btn-sm" data-action="another" data-type="verse">Another one</button>
          <button class="btn btn-ghost btn-sm" data-action="save" data-type="verse">Save this</button>
          <button class="btn btn-ghost btn-sm" data-action="copy" data-type="verse">Copy</button>
          <button class="btn btn-ghost btn-sm" data-action="share" data-type="verse">Share</button>
        </div>
      </div>
    `;
  } else if (type === "comfort") {
    const msgs = comfortMessages[mood] || comfortMessages.comfort;
    const { item, index } = randomFrom(msgs, state.lastComfortIndex);
    state.lastComfortIndex = index;
    html = `
      <div class="content-card" data-type="comfort" data-text="${escapeHtml(item)}">
        <p class="comfort-text">${escapeHtml(item)}</p>
        <div class="content-actions">
          <button class="btn btn-ghost btn-sm" data-action="another" data-type="comfort">Another one</button>
          <button class="btn btn-ghost btn-sm" data-action="save" data-type="comfort">Save this</button>
        </div>
      </div>
    `;
  } else if (type === "prompt") {
    const prompts = reflectionPrompts[mood] || reflectionPrompts.comfort;
    const { item, index } = randomFrom(prompts, state.lastPromptIndex);
    state.lastPromptIndex = index;
    html = `
      <div class="content-card" data-type="prompt" data-text="${escapeHtml(item)}">
        <p class="prompt-text">${escapeHtml(item)}</p>
        <div class="content-actions">
          <button class="btn btn-ghost btn-sm" data-action="another" data-type="prompt">Another one</button>
          <button class="btn btn-ghost btn-sm" data-action="journal-this">Write about this</button>
        </div>
      </div>
    `;
  }

  html += `<div style="text-align:center;margin-top:20px">
    <button class="btn btn-ghost" data-action="back-options">Back to options</button>
  </div>`;

  container.innerHTML = html;
  bindComfortActions(container, type);
}

function bindComfortActions(container, currentType) {
  container.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      const type = btn.dataset.type || currentType;
      const card = container.querySelector(".content-card");

      if (action === "another") {
        showComfortContent(type);
      } else if (action === "back-options") {
        state.comfortStep = 2;
        renderComfortStep();
      } else if (action === "save") {
        if (type === "verse") {
          addFavorite({
            type: "verse",
            text: card.dataset.text,
            meta: card.dataset.ref,
            id: "verse-" + card.dataset.ref,
          });
        } else if (type === "comfort") {
          addFavorite({
            type: "comfort",
            text: card.dataset.text,
            meta: "Reminder",
            id: "comfort-" + uid(),
          });
        }
      } else if (action === "copy") {
        const text = `"${card.dataset.text}" — ${card.dataset.ref}`;
        navigator.clipboard.writeText(text).then(() => showToast("Copied")).catch(() => showToast("Could not copy"));
      } else if (action === "share") {
        const text = `"${card.dataset.text}" — ${card.dataset.ref}`;
        if (navigator.share) {
          navigator.share({ text }).catch(() => {});
        } else {
          navigator.clipboard.writeText(text).then(() => showToast("Copied (share not available)"));
        }
      } else if (action === "journal-this") {
        navigateTo("journal");
        document.getElementById("journal-title").value = "";
        document.getElementById("journal-body").value = card.dataset.text + "\n\n";
        document.getElementById("journal-body").focus();
        updateCharCount();
      }
    });
  });
}

// ==============================
// SURPRISE ME
// ==============================
function runSurprise() {
  const options = [
    () => {
      state.currentMood = "comfort";
      navigateTo("comfort");
      showComfortContent("verse");
    },
    () => {
      state.currentMood = "comfort";
      navigateTo("comfort");
      showComfortContent("comfort");
    },
    () => {
      state.currentMood = "comfort";
      navigateTo("comfort");
      showComfortContent("prompt");
    },
    () => {
      const letter = openWhenLetters[Math.floor(Math.random() * openWhenLetters.length)];
      openLetter(letter);
    },
    () => {
      showPersonalMessage();
    },
  ];
  const pick = options[Math.floor(Math.random() * options.length)];
  pick();
}

// ==============================
// OPEN WHEN
// ==============================
function renderOpenWhen() {
  const grid = document.getElementById("openwhen-grid");
  grid.innerHTML = openWhenLetters
    .map(
      (l) => `
    <button class="envelope-card" data-id="${l.id}" role="listitem">
      <span class="envelope-label">Open when</span>
      <span class="envelope-title">${escapeHtml(l.title)}</span>
    </button>
  `
    )
    .join("");

  grid.querySelectorAll(".envelope-card").forEach((card) => {
    card.addEventListener("click", () => {
      const letter = openWhenLetters.find((l) => l.id === card.dataset.id);
      if (letter) openLetter(letter);
    });
  });
}

function openLetter(letter) {
  document.getElementById("letter-modal-title").textContent = "Open when " + letter.title;
  document.getElementById("letter-modal-body").textContent = letter.message;
  const saveBtn = document.getElementById("letter-save-fav");
  saveBtn.onclick = () => {
    addFavorite({
      type: "openWhen",
      text: letter.message,
      meta: "Open when " + letter.title,
      id: letter.id,
    });
  };
  openModal("letter-modal");
}

// ==============================
// JOURNAL
// ==============================
function updateCharCount() {
  const body = document.getElementById("journal-body");
  const count = document.getElementById("char-count");
  count.textContent = `${body.value.length} / 5000`;
}

function saveJournalEntry() {
  const title = document.getElementById("journal-title").value.trim();
  const body = document.getElementById("journal-body").value.trim();
  if (!body) {
    showToast("Write something first");
    return;
  }
  const entries = getJournal();
  entries.unshift({
    id: uid(),
    title: title || "Untitled",
    body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  saveJournal(entries);
  document.getElementById("journal-title").value = "";
  document.getElementById("journal-body").value = "";
  updateCharCount();
  renderJournalList();
  showToast("Entry saved");
}

function renderJournalList(filter = "") {
  const list = document.getElementById("journal-list");
  let entries = getJournal();
  if (filter) {
    const q = filter.toLowerCase();
    entries = entries.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.body.toLowerCase().includes(q)
    );
  }

  if (entries.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <p>${filter ? "No matching entries" : "No entries yet"}</p>
        <span>${filter ? "Try a different search" : "When you're ready, write whatever is on your heart."}</span>
      </div>
    `;
    return;
  }

  list.innerHTML = entries
    .map(
      (e) => `
    <button class="journal-entry-card" data-id="${e.id}" role="listitem">
      <div class="entry-card-date">${formatDate(e.createdAt)}</div>
      <div class="entry-card-title">${escapeHtml(e.title)}</div>
      <div class="entry-card-preview">${escapeHtml(e.body.slice(0, 120))}${e.body.length > 120 ? "…" : ""}</div>
    </button>
  `
    )
    .join("");

  list.querySelectorAll(".journal-entry-card").forEach((card) => {
    card.addEventListener("click", () => openEntry(card.dataset.id));
  });
}

function openEntry(id) {
  const entry = getJournal().find((e) => e.id === id);
  if (!entry) return;
  state.editingEntryId = id;

  document.getElementById("entry-view-mode").hidden = false;
  document.getElementById("entry-edit-mode").hidden = true;
  document.getElementById("entry-modal-date").textContent = formatDate(entry.createdAt);
  document.getElementById("entry-modal-title").textContent = entry.title;
  document.getElementById("entry-modal-body").textContent = entry.body;
  openModal("entry-modal");
}

function startEditEntry() {
  const entry = getJournal().find((e) => e.id === state.editingEntryId);
  if (!entry) return;
  document.getElementById("entry-view-mode").hidden = true;
  document.getElementById("entry-edit-mode").hidden = false;
  document.getElementById("entry-edit-title").value = entry.title;
  document.getElementById("entry-edit-body").value = entry.body;
}

function saveEditedEntry() {
  const title = document.getElementById("entry-edit-title").value.trim();
  const body = document.getElementById("entry-edit-body").value.trim();
  if (!body) {
    showToast("Entry cannot be empty");
    return;
  }
  const entries = getJournal();
  const idx = entries.findIndex((e) => e.id === state.editingEntryId);
  if (idx === -1) return;
  entries[idx] = {
    ...entries[idx],
    title: title || "Untitled",
    body,
    updatedAt: new Date().toISOString(),
  };
  saveJournal(entries);
  closeModal("entry-modal");
  renderJournalList(document.getElementById("journal-search").value);
  showToast("Changes saved");
}

function deleteEntry() {
  confirmAction("Delete this entry?", "This cannot be undone.", () => {
    const entries = getJournal().filter((e) => e.id !== state.editingEntryId);
    saveJournal(entries);
    closeModal("entry-modal");
    closeModal("confirm-modal");
    renderJournalList(document.getElementById("journal-search").value);
    showToast("Entry deleted");
  });
}

// ==============================
// FAVORITES
// ==============================
function addFavorite(item) {
  const favs = getFavorites();
  if (favs.some((f) => f.id === item.id)) {
    showToast("Already saved");
    return;
  }
  favs.unshift({ ...item, savedAt: new Date().toISOString() });
  saveFavorites(favs);
  showToast("Saved to favorites");
}

function removeFavorite(id) {
  const favs = getFavorites().filter((f) => f.id !== id);
  saveFavorites(favs);
  renderFavorites();
  showToast("Removed");
}

function renderFavorites() {
  const list = document.getElementById("favorites-list");
  let favs = getFavorites();
  if (state.favFilter !== "all") {
    favs = favs.filter((f) => f.type === state.favFilter);
  }

  if (favs.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <p>Nothing saved yet</p>
        <span>When something resonates, you can keep it here.</span>
      </div>
    `;
    return;
  }

  const typeLabels = { verse: "Verse", comfort: "Comfort", openWhen: "Open When" };

  list.innerHTML = favs
    .map(
      (f) => `
    <div class="fav-card" role="listitem">
      <div class="fav-type">${typeLabels[f.type] || f.type}</div>
      <div class="fav-content">${escapeHtml(f.text.length > 200 ? f.text.slice(0, 200) + "…" : f.text)}</div>
      ${f.meta ? `<div class="fav-meta">${escapeHtml(f.meta)}</div>` : ""}
      <button class="fav-remove" data-id="${f.id}" aria-label="Remove from favorites">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
  `
    )
    .join("");

  list.querySelectorAll(".fav-remove").forEach((btn) => {
    btn.addEventListener("click", () => removeFavorite(btn.dataset.id));
  });
}

// ==============================
// MEMORIES
// ==============================
function renderMemories() {
  const grid = document.getElementById("memories-grid");
  if (memories.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>No memories added yet</p><span>You can add them in the customization section of the script.</span></div>`;
    return;
  }

  grid.innerHTML = memories
    .map((m) => {
      const img = m.image
        ? `<img class="memory-img" src="${escapeHtml(m.image)}" alt="" loading="lazy">`
        : `<div class="memory-img" style="display:flex;align-items:center;justify-content:center;color:var(--text-faint);font-family:var(--font-serif);font-size:1.1rem;">♡</div>`;
      return `
      <article class="memory-card" role="listitem">
        ${img}
        <div class="memory-body">
          <div class="memory-date">${escapeHtml(m.date)}</div>
          <h3 class="memory-title">${escapeHtml(m.title)}</h3>
          <p class="memory-desc">${escapeHtml(m.description)}</p>
        </div>
      </article>
    `;
    })
    .join("");
}

// ==============================
// MUSIC
// ==============================
function renderMusic() {
  const list = document.getElementById("music-list");
  list.innerHTML = musicItems
    .map(
      (s) => `
    <a class="music-item" href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer" role="listitem">
      <div class="music-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      </div>
      <div class="music-info">
        <div class="music-title">${escapeHtml(s.title)}</div>
        <div class="music-artist">${escapeHtml(s.artist)}</div>
        <div class="music-desc">${escapeHtml(s.description)}</div>
      </div>
    </a>
  `
    )
    .join("");
}


// ==============================
// VOICEMAIL
// ==============================
function formatAudioTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function renderVoicemails() {
  const list = document.getElementById("voicemail-list");
  const heard = getHeardVoicemails();

  // Always show all voicemail messages.
  const available = voicemailMessages;

  if (!available.length) {
    list.innerHTML = `
      <div class="empty-state voicemail-empty">
        <div class="voicemail-empty-icon" aria-hidden="true">♡</div>
        <p>No messages right now.</p>
        <span>Maybe I'll leave you another one sometime.</span>
      </div>
    `;
    return;
  }

  const newCount = available.filter(
    (message) => !heard.includes(message.id)
  ).length;

  list.innerHTML = `
    ${newCount > 0 ? `
      <div class="voicemail-count">
        ${newCount === 1 ? "1 NEW MESSAGE" : `${newCount} NEW MESSAGES`}
      </div>
    ` : ""}

    ${available.map((message) => {
      const isNew = !heard.includes(message.id);

      return `
        <article class="voicemail-card ${isNew ? "is-new" : "is-heard"}"
          data-voicemail-id="${escapeHtml(message.id)}"
          role="listitem">

          <div class="voicemail-card-top">
            <div class="voicemail-avatar" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5">
                <path d="M6 10.5a6 6 0 0 1 12 0v1.5a3 3 0 0 1-3 3h-1.5"/>
                <path d="M6 10.5V12a3 3 0 0 0 3 3h1.5"/>
                <path d="M4 11v1M20 11v1M9 19h6"/>
              </svg>
            </div>

            <div class="voicemail-meta">
              ${isNew ? `<div class="voicemail-new">NEW</div>` : ""}
              <h3 class="voicemail-title">${escapeHtml(message.title)}</h3>
              <div class="voicemail-date">${escapeHtml(message.date)}</div>
            </div>
          </div>

          <audio
            class="voicemail-audio"
            preload="metadata"
            src="${escapeHtml(message.audio)}">
          </audio>

          <div class="voicemail-player">
            <button
              class="voicemail-play"
              type="button"
              aria-label="Play voicemail">

              <svg class="play-icon" width="18" height="18"
                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13L18.5 12 8 5.5z"/>
              </svg>

              <svg class="pause-icon" width="18" height="18"
                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 5h3v14H7zM14 5h3v14h-3z"/>
              </svg>

            </button>

            <div class="voicemail-track-wrap">
              <input
                class="voicemail-progress"
                type="range"
                min="0"
                max="100"
                value="0"
                step="0.1"
                aria-label="Voicemail progress">

              <div class="voicemail-times">
                <span class="voicemail-current">0:00</span>
                <span class="voicemail-duration">0:00</span>
              </div>
            </div>
          </div>

        </article>
      `;
    }).join("")}
  `;

  list.querySelectorAll(".voicemail-card").forEach((card) => {
    const audio = card.querySelector(".voicemail-audio");
    const play = card.querySelector(".voicemail-play");
    const progress = card.querySelector(".voicemail-progress");
    const current = card.querySelector(".voicemail-current");
    const duration = card.querySelector(".voicemail-duration");
    const id = card.dataset.voicemailId;

    audio.addEventListener("loadedmetadata", () => {
      duration.textContent = formatAudioTime(audio.duration);
    });

    play.addEventListener("click", () => {
      list.querySelectorAll(".voicemail-audio").forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.closest(".voicemail-card")?.classList.remove("is-playing");
        }
      });

      if (audio.paused) {
        audio.play().catch(() => {
          showToast("Could not play this message.");
        });
      } else {
        audio.pause();
      }
    });

    audio.addEventListener("play", () => {
      card.classList.add("is-playing");
    });

    audio.addEventListener("pause", () => {
      card.classList.remove("is-playing");
    });

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        progress.value = (audio.currentTime / audio.duration) * 100;
      }

      current.textContent = formatAudioTime(audio.currentTime);
    });

    progress.addEventListener("input", () => {
      if (audio.duration) {
        audio.currentTime =
          (Number(progress.value) / 100) * audio.duration;
      }
    });

    // When the recording finishes, keep the voicemail.
    // Only remove the NEW indicator.
    audio.addEventListener("ended", () => {
      const updated = [...new Set([...getHeardVoicemails(), id])];
      saveHeardVoicemails(updated);

      const newBadge = card.querySelector(".voicemail-new");

      if (newBadge) {
        newBadge.remove();
      }

      card.classList.remove("is-new");
      card.classList.add("is-heard");
    });
  });
}

// ==============================
// PERSONAL MESSAGE
// ==============================
function showPersonalMessage() {
  const { item, index } = randomFrom(personalMessages, state.lastPersonalIndex);
  state.lastPersonalIndex = index;
  document.getElementById("personal-modal-body").textContent = item;
  openModal("personal-modal");
}

// ==============================
// EVENT BINDINGS
// ==============================
function bindEvents() {
  // Navigation
  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => navigateTo(btn.dataset.view));
  });

  document.getElementById("logo-btn").addEventListener("click", () => navigateTo("home"));

  // Comfort back
  document.getElementById("comfort-back").addEventListener("click", () => {
    if (state.comfortStep > 1) {
      state.comfortStep = Math.max(1, state.comfortStep - 1);
      if (state.comfortStep === 3) state.comfortStep = 2;
      renderComfortStep();
    } else {
      navigateTo("home");
    }
  });

  // Personal message
  document.getElementById("personal-msg-btn").addEventListener("click", showPersonalMessage);
  document.getElementById("personal-another").addEventListener("click", showPersonalMessage);

  // Journal
  document.getElementById("journal-body").addEventListener("input", updateCharCount);
  document.getElementById("journal-save").addEventListener("click", saveJournalEntry);
  document.getElementById("journal-clear").addEventListener("click", () => {
    document.getElementById("journal-title").value = "";
    document.getElementById("journal-body").value = "";
    updateCharCount();
  });
  document.getElementById("journal-search").addEventListener("input", (e) => {
    renderJournalList(e.target.value);
  });

  // Entry modal
  document.getElementById("entry-edit-btn").addEventListener("click", startEditEntry);
  document.getElementById("entry-delete-btn").addEventListener("click", deleteEntry);
  document.getElementById("entry-edit-cancel").addEventListener("click", () => {
    document.getElementById("entry-view-mode").hidden = false;
    document.getElementById("entry-edit-mode").hidden = true;
  });
  document.getElementById("entry-edit-save").addEventListener("click", saveEditedEntry);

  // Favorites filters
  document.getElementById("fav-filters").addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    document.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    state.favFilter = chip.dataset.filter;
    renderFavorites();
  });

  // Theme
  document.getElementById("theme-light").addEventListener("click", () => setTheme("light"));
  document.getElementById("theme-dark").addEventListener("click", () => setTheme("dark"));

  // Settings destructive
  document.getElementById("reset-favorites").addEventListener("click", () => {
    confirmAction("Clear all favorites?", "This cannot be undone.", () => {
      saveFavorites([]);
      closeModal("confirm-modal");
      showToast("Favorites cleared");
      if (state.currentView === "favorites") renderFavorites();
    });
  });

  document.getElementById("reset-journal").addEventListener("click", () => {
    confirmAction("Clear entire journal?", "All entries will be permanently deleted.", () => {
      saveJournal([]);
      closeModal("confirm-modal");
      showToast("Journal cleared");
      if (state.currentView === "journal") renderJournalList();
    });
  });

  document.getElementById("reset-all").addEventListener("click", () => {
    confirmAction("Clear all data?", "Journal, favorites, theme preference, and heard voicemail history will be removed.", () => {
      localStorage.removeItem(STORAGE_KEYS.journal);
      localStorage.removeItem(STORAGE_KEYS.favorites);
      localStorage.removeItem(STORAGE_KEYS.theme);
      localStorage.removeItem(STORAGE_KEYS.voicemailHeard);
      setTheme("light");
      closeModal("confirm-modal");
      showToast("All data cleared");
      if (state.currentView === "journal") renderJournalList();
      if (state.currentView === "favorites") renderFavorites();
    });
  });

  // Confirm OK
  document.getElementById("confirm-ok").addEventListener("click", () => {
    if (typeof state.confirmCallback === "function") {
      state.confirmCallback();
      state.confirmCallback = null;
    }
  });

  // Modal close
  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", () => {
      const modal = el.closest(".modal");
      if (modal) closeModal(modal);
    });
  });

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllModals();
  });
}

// ==============================
// INIT
// ==============================
function init() {

  setTheme(getTheme());

  renderMoodGrid();

  bindEvents();

  updateCharCount();

  // Greeting
  const specialDate = getTodaySpecialDate();

  if (specialDate) {

    document.getElementById("greeting-text").textContent =
      specialDate.greeting;

  } else if (CONFIG.customGreeting) {

    document.getElementById("greeting-text").textContent =
      CONFIG.customGreeting;

  }
}

init();
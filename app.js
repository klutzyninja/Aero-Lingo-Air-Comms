// Main application state and functionality

// Aviation Communications database
const aviationTerms = [
    // Emergency Communications Procedures (moved to first)
    { japanese: "緊急事態宣言", english: "Declaring an Emergency", romaji: "kinkyuu jitai sengen", category: "Emergency Communications Procedures", emoji: "🚨" },
    { japanese: "ATC困難状況", english: "ATC Difficult Situation", romaji: "ei-ti-shii konnan joukyou", category: "Emergency Communications Procedures", emoji: "📡" },
    { japanese: "緊急事態の性質", english: "Nature of the Emergency", romaji: "kinkyuu jitai no seishitsu", category: "Emergency Communications Procedures", emoji: "❗" },
    { japanese: "搭乗者数", english: "Souls on Board", romaji: "toujou-sha suu", category: "Emergency Communications Procedures", emoji: "👥" },
    { japanese: "燃料残量時間", english: "Remaining Fuel in Time", romaji: "nenryou zanryou jikan", category: "Emergency Communications Procedures", emoji: "⛽" },
    { japanese: "医療緊急事態", english: "Medical Emergency", romaji: "iryou kinkyuu jitai", category: "Emergency Communications Procedures", emoji: "🏥" },
    { japanese: "機械的緊急事態", english: "Mechanical Emergency", romaji: "kikai-teki kinkyuu jitai", category: "Emergency Communications Procedures", emoji: "⚙️" },
    { japanese: "エンジン故障", english: "Engine Failure", romaji: "enjin koshuu", category: "Emergency Communications Procedures", emoji: "🔥" },
    { japanese: "煙と火災", english: "Smoke and Fire", romaji: "kemuri to kasai", category: "Emergency Communications Procedures", emoji: "🔥" },
    { japanese: "客室与圧", english: "Cabin Pressure", romaji: "kyakushitsu yoatsu", category: "Emergency Communications Procedures", emoji: "💨" },
    { japanese: "乗務員行動不能", english: "Crew Incapacitation", romaji: "joumu-in koudou funou", category: "Emergency Communications Procedures", emoji: "😵" },
    { japanese: "鳥衝突", english: "Bird Strike", romaji: "tori shoutotsu", category: "Emergency Communications Procedures", emoji: "🐦" },
    { japanese: "燃料最低限", english: "Minimum Fuel", romaji: "nenryou saitei-gen", category: "Emergency Communications Procedures", emoji: "⛽" },
    { japanese: "保安問題", english: "Security Issue", romaji: "hoan mondai", category: "Emergency Communications Procedures", emoji: "🔒" },
    { japanese: "乗客避難", english: "Passenger Evacuation", romaji: "joukyaku hinan", category: "Emergency Communications Procedures", emoji: "🚨" },
    
    // Preflight Communications
    { japanese: "出発前点検", english: "Pre-Flight Inspection", romaji: "shuppatsu mae tenken", category: "Preflight Communications", emoji: "🔍" },
    { japanese: "機体点検", english: "Aircraft Inspection", romaji: "kitai tenken", category: "Preflight Communications", emoji: "✈️" },
    { japanese: "燃料確認", english: "Fuel Check", romaji: "nenryou kakunin", category: "Preflight Communications", emoji: "⛽" },
    { japanese: "重量バランス", english: "Weight and Balance", romaji: "juuryou baransu", category: "Preflight Communications", emoji: "⚖️" },
    { japanese: "気象ブリーフィング", english: "Weather Briefing", romaji: "kishou buriifingu", category: "Preflight Communications", emoji: "🌤️" },
    { japanese: "フライトプラン", english: "Flight Plan", romaji: "furaito puran", category: "Preflight Communications", emoji: "📋" },
    { japanese: "搭乗準備完了", english: "Ready for Boarding", romaji: "toujou junbi kanryou", category: "Preflight Communications", emoji: "🚪" },
    
    // Ground Crew and Gate Communications
    { japanese: "いらっしゃいませ", english: "Welcome Aboard", romaji: "irasshaimase", category: "Ground Crew and Gate Communications", emoji: "👋" },
    
    // Taxi, Takeoff, and Climb Communications
    { japanese: "離陸前客室乗務員連絡", english: "Pre-Takeoff Communication to Cabin Crew", romaji: "riryoku mae kyakushitsu joumu-in renraku", category: "Taxi, Takeoff, and Climb Communications", emoji: "📞" },
    
    // Cruise Flight Communications
    { japanese: "高度", english: "Altitude", romaji: "koudo", category: "Cruise Flight Communications", emoji: "📊" },
    { japanese: "飛行時間", english: "Flight Time", romaji: "hikou jikan", category: "Cruise Flight Communications", emoji: "⏰" },
    { japanese: "気象状況", english: "Weather Conditions", romaji: "kishou joukyou", category: "Cruise Flight Communications", emoji: "🌤️" },
    { japanese: "サービス期待", english: "Service Expectations", romaji: "saabisu kitai", category: "Cruise Flight Communications", emoji: "🍽️" },
    { japanese: "運航最新情報", english: "Operational Updates", romaji: "un'kou saishin jouhou", category: "Cruise Flight Communications", emoji: "📢" },
    
    // Irregular Operations Communications
    { japanese: "地上待機遅延", english: "Tarmac Delays", romaji: "chijou taiki chien", category: "Irregular Operations Communications", emoji: "⏳" },
    { japanese: "機械的遅延", english: "Mechanical Delays", romaji: "kikai-teki chien", category: "Irregular Operations Communications", emoji: "🔧" },
    { japanese: "気象遅延", english: "Weather Delays", romaji: "kishou chien", category: "Irregular Operations Communications", emoji: "🌧️" },
    { japanese: "航空管制遅延", english: "Air Traffic Control Delays", romaji: "koukuu kansei chien", category: "Irregular Operations Communications", emoji: "📡" },
    { japanese: "ゲート帰投", english: "Gate Returns", romaji: "geeto kitou", category: "Irregular Operations Communications", emoji: "🔄" },
    { japanese: "目的地変更", english: "Diversions", romaji: "mokuteki-chi henkou", category: "Irregular Operations Communications", emoji: "🔀" },
    { japanese: "地上管制調整", english: "Coordination With Ground Control", romaji: "chijou kansei chousei", category: "Irregular Operations Communications", emoji: "📞" },
    { japanese: "離陸中止", english: "Aborted Takeoff", romaji: "riryoku chuushi", category: "Irregular Operations Communications", emoji: "🛑" },
    { japanese: "進入復行", english: "Missed Approach", romaji: "shin'nyuu fukkou", category: "Irregular Operations Communications", emoji: "🔄" },
    
    // Descent and Landing Communications
    { japanese: "現地時間", english: "Local Time", romaji: "genchi jikan", category: "Descent and Landing Communications", emoji: "🕐" },
    { japanese: "気象状況", english: "Weather Conditions", romaji: "kishou joukyou", category: "Descent and Landing Communications", emoji: "🌤️" },
    { japanese: "到着情報", english: "Arrival Information", romaji: "touchaku jouhou", category: "Descent and Landing Communications", emoji: "🛬" },
    
    // Turbulence Communication
    { japanese: "乱気流予報通知", english: "Anticipated Turbulence Advisories", romaji: "rankiyuu yohou tsuchi", category: "Turbulence Communication", emoji: "💨" },
    { japanese: "緊急乱気流通知", english: "Immediate Turbulence Announcements", romaji: "kinkyuu rankiyuu tsuchi", category: "Turbulence Communication", emoji: "⚠️" }
];


// Application state
let currentPage = 'homePage';
let selectedCategories = [];
let selectedMastery = 'all';
let studyOptions = {
    shuffle: false,
    audio: true
};

let currentStudySet = [];
let currentCardIndex = 0;
let isFlipped = false;
let sessionStats = {
    studied: 0,
    mastered: 0,
    practicing: 0
};

// Local storage for mastery tracking
let masteryData = {};
let markedTerms = new Set(); // Store terms marked for review
let bookmarkData = null;
let userAudioData = {};
let customAudioData = {};
let customTitles = {}; // Store custom titles for each term
let customVideoData = {}; // Store custom video files for each term
let userVideoData = {}; // Store user practice video files for each term

// Pre-populate demo data for "Declaring an Emergency" card
function initializeDemoData() {
    const emergencyTerm = "Declaring an Emergency";
    
    // Create demo audio using text-to-speech
    const demoAudio = new Audio();
    // We'll use a data URL with a simple beep sound as placeholder
    demoAudio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT";
    
    customAudioData[emergencyTerm] = {
        audio: demoAudio,
        url: demoAudio.src,
        fileName: "emergency_demo.wav",
        isSaved: true,
        id: "demo_audio_1"
    };
    
    // Create demo video data (placeholder)
    customVideoData[emergencyTerm] = {
        url: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAr1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1MiByMjg1NCBlOWE1OTAzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNyAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTYgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuY0EA=",
        name: "emergency_demo.mp4",
        isSaved: true,
        id: "demo_video_1"
    };
    
    // Demo user practice video
    userVideoData[emergencyTerm] = {
        url: "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAr1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE1MiByMjg1NCBlOWE1OTAzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNyAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTYgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuY0EA=",
        name: "practice_demo.mp4",
        isSaved: true,
        id: "demo_video_2"
    };
}

// Audio synthesis for pronunciation
function speakText(text, lang = 'en-US') {
    if (!studyOptions.audio) return;
    
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = lang;
    speech.rate = 0.8;
    speechSynthesis.speak(speech);
}

// Initialize application
async function initializeApp() {
    loadMasteryData();
    loadMarkedTerms();
    loadBookmarkData();
    populateCategories();
    setupEventListeners();
    updateResumeButton();
    initializeDemoData(); // Initialize demo data for emergency card
    
    // Initialize cards in database
    await initializeCardsInDatabase();
}

// Initialize cards in database
async function initializeCardsInDatabase() {
    try {
        const response = await fetch('/api/initialize_cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        const result = await response.json();
        if (!result.success) {
            console.error('Failed to initialize cards:', result.error);
        }
    } catch (error) {
        console.error('Error initializing cards:', error);
    }
}

// Load existing files for a card
async function loadCardFiles(englishTerm) {
    try {
        const response = await fetch(`/api/get_card_files/${encodeURIComponent(englishTerm)}`);
        const result = await response.json();
        
        if (result.audio_files) {
            result.audio_files.forEach(audioFile => {
                if (audioFile.file_type === 'custom') {
                    const audio = new Audio();
                    audio.src = audioFile.url;
                    customAudioData[englishTerm] = {
                        id: audioFile.id,
                        audio: audio,
                        url: audioFile.url,
                        fileName: audioFile.file_name,
                        isSaved: true
                    };
                } else if (audioFile.file_type === 'user') {
                    userAudioData[englishTerm] = {
                        id: audioFile.id,
                        url: audioFile.url,
                        fileName: audioFile.file_name,
                        isSaved: true
                    };
                }
            });
        }
        
        if (result.video_files) {
            result.video_files.forEach(videoFile => {
                if (videoFile.file_type === 'custom') {
                    customVideoData[englishTerm] = {
                        id: videoFile.id,
                        url: videoFile.url,
                        name: videoFile.file_name,
                        isSaved: true
                    };
                } else if (videoFile.file_type === 'user') {
                    userVideoData[englishTerm] = {
                        id: videoFile.id,
                        url: videoFile.url,
                        name: videoFile.file_name,
                        isSaved: true
                    };
                }
            });
        }
        
        // Update UI status displays
        updateCustomAudioStatus();
        updateCustomVideoStatus();
        updateUserVideoStatus();
        
    } catch (error) {
        console.error('Error loading card files:', error);
    }
}

// Load mastery data from localStorage
function loadMasteryData() {
    const saved = localStorage.getItem('aviationFlashcardsMastery');
    if (saved) {
        masteryData = JSON.parse(saved);
    }
}

// Save mastery data to localStorage
function saveMasteryData() {
    localStorage.setItem('aviationFlashcardsMastery', JSON.stringify(masteryData));
}

// Load bookmark data
function loadBookmarkData() {
    const saved = localStorage.getItem('aviationFlashcardsBookmark');
    if (saved) {
        bookmarkData = JSON.parse(saved);
    }
}

// Save bookmark data
function saveBookmarkData() {
    localStorage.setItem('aviationFlashcardsBookmark', JSON.stringify(bookmarkData));
}

// Update resume button visibility
function updateResumeButton() {
    const resumeBtn = document.getElementById('resumeButton');
    if (resumeBtn) {
        resumeBtn.style.display = bookmarkData ? 'block' : 'none';
    }
}

// Populate category options
function populateCategories() {
    const categories = [...new Set(aviationTerms.map(term => term.category))];
    const container = document.getElementById('categoryOptions');
    
    if (!container) return;
    
    // Map categories to relevant aviation icons
    const categoryIcons = {
        "Preflight Communications": "🔍",
        "Ground Crew and Gate Communications": "🚪", 
        "Taxi, Takeoff, and Climb Communications": "🛫",
        "Cruise Flight Communications": "✈️",
        "Irregular Operations Communications": "⚠️",
        "Descent and Landing Communications": "🛬",
        "Turbulence Communication": "💨",
        "Emergency Communications Procedures": "🚨"
    };
    
    container.innerHTML = '';
    
    categories.forEach(category => {
        const count = aviationTerms.filter(term => term.category === category).length;
        const icon = categoryIcons[category] || "📚"; // Fallback to book if not found
        const div = document.createElement('div');
        div.className = 'option-card';
        div.setAttribute('data-category', category);
        div.innerHTML = `
            <div class="icon">${icon}</div>
            <div class="title">${category}</div>
            <div class="count">${count} terms</div>
        `;
        container.appendChild(div);
    });
    
    // Start with no categories selected
    selectedCategories = [];
}

// Setup event listeners
function setupEventListeners() {
    // Category selection
    document.addEventListener('click', (e) => {
        if (e.target.closest('[data-category]')) {
            toggleCategory(e.target.closest('[data-category]'));
        }
        
        if (e.target.closest('[data-mastery]')) {
            selectMastery(e.target.closest('[data-mastery]'));
        }
        
        if (e.target.closest('[data-option]')) {
            toggleOption(e.target.closest('[data-option]'));
        }
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('focus', () => {
            const results = document.getElementById('searchResults');
            if (results && results.innerHTML) {
                results.classList.add('show');
            }
        });
        
        // Hide search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                document.getElementById('searchResults').classList.remove('show');
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
    
    // Touch events for mobile
    setupTouchEvents();
    
    // Card click to flip
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
        flashcard.addEventListener('click', (e) => {
            // Don't flip if clicking on buttons
            if (!e.target.closest('button') && !e.target.closest('input')) {
                flipCard(e);
            }
        });
    }
}

// Toggle category selection
function toggleCategory(element) {
    const category = element.getAttribute('data-category');
    element.classList.toggle('selected');
    
    if (selectedCategories.includes(category)) {
        selectedCategories = selectedCategories.filter(c => c !== category);
    } else {
        selectedCategories.push(category);
    }
}

// Select mastery level
function selectMastery(element) {
    document.querySelectorAll('[data-mastery]').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedMastery = element.getAttribute('data-mastery');
}

// Toggle study option
function toggleOption(element) {
    const option = element.getAttribute('data-option');
    element.classList.toggle('selected');
    studyOptions[option] = element.classList.contains('selected');
}

// Handle search functionality
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResults');
    
    if (query.length < 2) {
        resultsContainer.classList.remove('show');
        return;
    }
    
    const results = aviationTerms.filter(term => 
        term.english.toLowerCase().includes(query) ||
        term.japanese.includes(query) ||
        term.romaji.toLowerCase().includes(query) ||
        term.category.toLowerCase().includes(query)
    );
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div style="padding: 10px; text-align: center;">No results found</div>';
        resultsContainer.classList.add('show');
        return;
    }
    
    const resultsHTML = results.map(term => `
        <div class="search-result-item" onclick="selectSearchResult('${term.english}')">
            <div class="search-result-english">${term.english}</div>
            <div class="search-result-japanese">${term.japanese}</div>
            <div class="search-result-romaji">${term.romaji}</div>
            <div class="search-result-category">${term.category}</div>
        </div>
    `).join('');
    
    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.classList.add('show');
}

// Select search result
function selectSearchResult(englishTerm) {
    const term = aviationTerms.find(t => t.english === englishTerm);
    if (term) {
        // Start study session with just this term
        currentStudySet = [term];
        currentCardIndex = 0;
        sessionStats = { studied: 0, mastered: 0, practicing: 0 };
        
        showPage('studyPage');
        displayCurrentCard();
        updateStudyStats();
        
        // Hide search results
        document.getElementById('searchResults').classList.remove('show');
        document.getElementById('searchInput').value = '';
    }
}

// Start study session
function startStudySession() {
    if (selectedCategories.length === 0) {
        alert('Please select at least one category to study.');
        return;
    }
    
    // Filter terms by selected categories
    let filteredTerms = aviationTerms.filter(term => 
        selectedCategories.includes(term.category)
    );
    
    // Filter by mastery level
    if (selectedMastery === 'unmastered') {
        filteredTerms = filteredTerms.filter(term => 
            !masteryData[term.japanese] || masteryData[term.japanese] !== 'mastered'
        );
    } else if (selectedMastery === 'practicing') {
        filteredTerms = filteredTerms.filter(term => 
            masteryData[term.japanese] === 'practicing'
        );
    } else if (selectedMastery === 'marked') {
        filteredTerms = filteredTerms.filter(term => 
            markedTerms.has(term.japanese)
        );
    } else if (selectedMastery === 'mastered') {
        filteredTerms = filteredTerms.filter(term => 
            masteryData[term.japanese] === 'mastered'
        );
    }
    
    if (filteredTerms.length === 0) {
        alert('No terms match your criteria. Try selecting different options.');
        return;
    }
    
    // Shuffle if enabled
    if (studyOptions.shuffle) {
        filteredTerms = shuffleArray([...filteredTerms]);
    }
    
    currentStudySet = filteredTerms;
    currentCardIndex = 0;
    sessionStats = { studied: 0, mastered: 0, practicing: 0 };
    
    showPage('studyPage');
    displayCurrentCard();
    updateStudyStats();
}

// Resume from bookmark
function resumeFromBookmark() {
    if (!bookmarkData) return;
    
    selectedCategories = bookmarkData.categories;
    selectedMastery = bookmarkData.mastery;
    studyOptions = bookmarkData.options;
    currentStudySet = bookmarkData.studySet;
    currentCardIndex = bookmarkData.cardIndex;
    sessionStats = bookmarkData.sessionStats;
    
    showPage('studyPage');
    displayCurrentCard();
    updateStudyStats();
}

// Save current progress as bookmark
function saveBookmark() {
    bookmarkData = {
        categories: selectedCategories,
        mastery: selectedMastery,
        options: studyOptions,
        studySet: currentStudySet,
        cardIndex: currentCardIndex,
        sessionStats: sessionStats,
        timestamp: Date.now()
    };
    
    saveBookmarkData();
    alert('Progress saved! You can resume later from the home page.');
}

// Display current card
function displayCurrentCard() {
    if (!currentStudySet || currentCardIndex >= currentStudySet.length) {
        showCompletionPage();
        return;
    }
    
    const term = currentStudySet[currentCardIndex];
    const card = document.getElementById('flashcard');
    
    // Update card content (use custom title if available)
    const displayTitle = customTitles[term.english] || term.english;
    document.getElementById('englishTerm').textContent = displayTitle;
    document.getElementById('englishTermBack').textContent = displayTitle;
    document.getElementById('currentCategory').textContent = term.category;
    
    // Update illustrations
    const frontIllustration = document.getElementById('frontIllustration');
    const backIllustration = document.getElementById('backIllustration');
    if (frontIllustration) frontIllustration.textContent = term.emoji || '✈️';
    if (backIllustration) backIllustration.textContent = term.emoji || '✈️';
    
    // Update audio upload buttons based on whether audio exists for this term
    const hasAudio = userAudioData[term.english];
    const playBtn = document.getElementById('playUserAudioBtn');
    const removeBtn = document.getElementById('removeAudioBtn');
    const audioStatus = document.getElementById('audioStatus');
    
    if (playBtn) playBtn.disabled = !hasAudio;
    if (removeBtn) removeBtn.disabled = !hasAudio;
    
    // Update audio status
    if (audioStatus) {
        if (hasAudio) {
            audioStatus.textContent = `Audio: ${hasAudio.fileName}`;
        } else {
            audioStatus.textContent = '';
        }
    }
    
    // Update custom audio status for this term
    updateCustomAudioStatus();
    
    // Update video status for this term
    updateCustomVideoStatus();
    updateUserVideoStatus();
    
    // Load any existing files for this card
    loadCardFiles(term.english);
    
    // Apply emergency card styling after a short delay to ensure DOM is ready
    setTimeout(() => {
        applyEmergencyCardStyling(term);
    }, 100);
    
    // Reset card state
    if (card) {
        card.classList.remove('flipped', 'new-card', 'swipe-left', 'swipe-right');
        setTimeout(() => card.classList.add('new-card'), 50);
    }
    
    // Update review mark button appearance
    updateReviewMarkButton();
    
    isFlipped = false;
    updateProgress();
}

// Apply special styling for emergency card
function applyEmergencyCardStyling(term) {
    const isEmergencyCard = term.english === "Declaring an Emergency";
    const flashcardContainer = document.getElementById('flashcardContainer');
    
    if (isEmergencyCard) {
        console.log("Applying emergency card styling for:", term.english);
        
        // Add emergency card class to container
        if (flashcardContainer) {
            flashcardContainer.classList.add('emergency-card');
        }
        
        // Hide all upload/save/remove sections for emergency card
        const sectionsToHide = [
            '.custom-audio-section',
            '.custom-video-section', 
            '.recording-controls',
            '.user-video-section',
            '.recording-section'
        ];
        
        sectionsToHide.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element) {
                    element.style.display = 'none';
                    console.log(`Hidden: ${selector}`);
                }
            });
        });
        
        // Show only speaker button in audio controls
        const audioControls = document.querySelector('.audio-controls');
        if (audioControls) {
            audioControls.innerHTML = `
                <button class="audio-btn" onclick="playEnglishAudio(event)">🔊</button>
            `;
        }
        
        // Show only play button in video controls (front)
        const videoControls = document.querySelector('.video-controls');
        if (videoControls) {
            videoControls.innerHTML = `
                <button class="play-video-btn" onclick="playCustomVideo(event)" title="Play demonstration video">▶️ Play Video</button>
            `;
            // Enable the play button since we have demo video
            const playBtn = videoControls.querySelector('.play-video-btn');
            if (playBtn) {
                playBtn.disabled = false;
            }
        }
        
        // Show only play button in back video controls
        const backVideoControls = document.querySelector('.video-controls-back');
        if (backVideoControls) {
            backVideoControls.innerHTML = `
                <button class="play-video-btn" onclick="playUserVideo(event)" title="Play practice video">▶️ Play Practice Video</button>
            `;
            // Enable the play button since we have demo video
            const playBtn = backVideoControls.querySelector('.play-video-btn');
            if (playBtn) {
                playBtn.disabled = false;
            }
        }
        
        // Hide the recording section title on back
        const recordingSection = document.querySelector('.recording-section');
        if (recordingSection) {
            recordingSection.style.display = 'none';
        }
        
    } else {
        console.log("Removing emergency card styling for:", term.english);
        
        // Remove emergency card class
        if (flashcardContainer) {
            flashcardContainer.classList.remove('emergency-card');
        }
        
        // Show all sections for normal cards
        const sectionsToShow = [
            '.custom-audio-section',
            '.custom-video-section', 
            '.recording-controls',
            '.user-video-section',
            '.recording-section'
        ];
        
        sectionsToShow.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element) {
                    element.style.display = '';
                }
            });
        });
        
        // Restore full audio controls
        const audioControls = document.querySelector('.audio-controls');
        if (audioControls) {
            audioControls.innerHTML = `
                <button class="audio-btn" onclick="playEnglishAudio(event)">🔊</button>
                <div class="custom-audio-section">
                    <input type="file" id="customAudioInput" accept="audio/*,video/mp4" onchange="handleCustomAudioUpload(event)" style="display: none;">
                    <button class="upload-btn custom-audio-btn" onclick="document.getElementById('customAudioInput').click()" title="Upload MP4 audio for this term">🎵 Upload Audio</button>
                    <button class="save-btn" id="saveCustomAudioBtn" onclick="saveCustomAudio(event)" disabled title="Save audio permanently">💾 Save</button>
                    <button class="remove-audio-btn" id="removeCustomAudioBtn" onclick="removeCustomAudio(event)" disabled title="Remove custom audio">❌</button>
                    <div class="custom-audio-status" id="customAudioStatus">No custom audio</div>
                </div>
            `;
        }
        
        // Restore full video controls
        const videoControls = document.querySelector('.video-controls');
        if (videoControls) {
            videoControls.innerHTML = `
                <div class="custom-video-section">
                    <input type="file" id="customVideoInput" accept="video/*" onchange="handleCustomVideoUpload(event)" style="display: none;">
                    <button class="upload-btn custom-video-btn" onclick="document.getElementById('customVideoInput').click()" title="Upload video for this term">🎬 Upload Video</button>
                    <button class="play-video-btn" id="playCustomVideoBtn" onclick="playCustomVideo(event)" disabled title="Play custom video">▶️ Play Video</button>
                    <button class="save-btn" id="saveCustomVideoBtn" onclick="saveCustomVideo(event)" disabled title="Save video permanently">💾 Save</button>
                    <button class="remove-video-btn" id="removeCustomVideoBtn" onclick="removeCustomVideo(event)" disabled title="Remove custom video">❌</button>
                    <div class="custom-video-status" id="customVideoStatus">No custom video</div>
                </div>
            `;
        }
        
        // Restore back video controls
        const backVideoControls = document.querySelector('.video-controls-back');
        if (backVideoControls) {
            backVideoControls.innerHTML = `
                <div class="user-video-section">
                    <input type="file" id="userVideoInput" accept="video/*" onchange="handleUserVideoUpload(event)" style="display: none;">
                    <button class="upload-btn user-video-btn" onclick="document.getElementById('userVideoInput').click()" title="Upload your practice video">🎥 Upload Practice Video</button>
                    <button class="play-video-btn" id="playUserVideoBtn" onclick="playUserVideo(event)" disabled title="Play practice video">▶️ Play Video</button>
                    <button class="save-btn" id="saveUserVideoBtn" onclick="saveUserVideo(event)" disabled title="Save video permanently">💾 Save</button>
                    <button class="remove-video-btn" id="removeUserVideoBtn" onclick="removeUserVideo(event)" disabled title="Remove practice video">🗑️ Remove</button>
                    <div class="user-video-status" id="userVideoStatus">No practice video</div>
                </div>
            `;
        }
    }
}

// Update study statistics
function updateStudyStats() {
    document.getElementById('currentCard').textContent = currentCardIndex + 1;
    document.getElementById('totalCards').textContent = currentStudySet.length;
    document.getElementById('studiedCards').textContent = sessionStats.studied;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentCardIndex) / currentStudySet.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Flip card
function flipCard(event) {
    if (event) event.stopPropagation();
    
    const card = document.getElementById('flashcard');
    card.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

// Show page
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;
}

// Handle keyboard navigation
function handleKeyboard(e) {
    if (currentPage !== 'studyPage') return;
    
    switch(e.key) {
        case ' ':
        case 'Enter':
            e.preventDefault();
            flipCard();
            break;
        case 'ArrowUp':
            e.preventDefault();
            playJapaneseAudio();
            break;
        case 'ArrowDown':
            e.preventDefault();
            playEnglishAudio();
            break;
        // Removed keyboard shortcuts for mastery buttons - must use actual buttons
    }
}

// Touch events for mobile swipe
function setupTouchEvents() {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    
    const card = document.getElementById('flashcard');
    if (!card) return;
    
    card.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    });
    
    card.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;
        
        const deltaX = currentX - startX;
        const deltaY = currentY - startY;
        
        // Only process horizontal swipes
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
            
            if (deltaX < -50) {
                card.classList.add('swiping-left');
                card.classList.remove('swiping-right');
                document.getElementById('swipeLeftIndicator').classList.add('show');
                document.getElementById('swipeRightIndicator').classList.remove('show');
            } else if (deltaX > 50) {
                card.classList.add('swiping-right');
                card.classList.remove('swiping-left');
                document.getElementById('swipeRightIndicator').classList.add('show');
                document.getElementById('swipeLeftIndicator').classList.remove('show');
            } else {
                card.classList.remove('swiping-left', 'swiping-right');
                document.getElementById('swipeLeftIndicator').classList.remove('show');
                document.getElementById('swipeRightIndicator').classList.remove('show');
            }
        }
    });
    
    card.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        const deltaX = currentX - startX;
        
        // Hide indicators
        document.getElementById('swipeLeftIndicator').classList.remove('show');
        document.getElementById('swipeRightIndicator').classList.remove('show');
        
        // Removed swipe gestures for mastery - must use actual buttons
        // Cards will only advance when explicitly clicking "Keep Studying" or "I got it!" buttons
        
        card.classList.remove('swiping-left', 'swiping-right');
    });
}

// Utility function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the application when DOM is loaded
// Audio upload and playback state
let currentAudio = null; // Currently playing audio

// Handle audio file upload
function handleAudioUpload(event) {
    event.stopPropagation();
    const file = event.target.files[0];
    if (!file) return;
    
    const term = currentStudySet[currentCardIndex];
    if (!term) return;
    
    // Validate file type
    if (!file.type.startsWith('audio/')) {
        document.getElementById('audioStatus').textContent = 'Please select an audio file';
        return;
    }
    
    // Create URL for the audio file temporarily
    const audioUrl = URL.createObjectURL(file);
    userAudioData[term.english] = {
        url: audioUrl,
        fileName: file.name,
        file: file, // Store original file for saving later
        isSaved: false
    };
    
    // Update UI
    document.getElementById('playUserAudioBtn').disabled = false;
    document.getElementById('saveUserAudioBtn').disabled = false;
    document.getElementById('removeAudioBtn').disabled = false;
    document.getElementById('audioStatus').textContent = `Audio ready to save: ${file.name}`;
    
    // Clear file input
    event.target.value = '';
}

// Play user uploaded audio
function playUserAudio(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    if (!term || !userVideoData[term.english]) return;
    
    // For emergency card, play demo video
    if (term.english === "Declaring an Emergency" && userVideoData[term.english]) {
        playUserVideo(event);
        return;
    }
    
    if (!userAudioData[term.english]) return;
    
    // Stop any currently playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    const audio = new Audio(userAudioData[term.english].url);
    currentAudio = audio;
    
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
        document.getElementById('audioStatus').textContent = 'Error playing audio';
    });
    
    audio.onended = () => {
        currentAudio = null;
    };
}

// Remove user uploaded audio
async function removeUserAudio(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    if (!term) return;
    
    if (userAudioData[term.english]) {
        try {
            const response = await fetch(`/api/delete_audio/${userAudioData[term.english].id}`, {
                method: 'DELETE'
            });
            
            const result = await response.json();
            if (result.success) {
                delete userAudioData[term.english];
                
                // Update UI
                document.getElementById('playUserAudioBtn').disabled = true;
                document.getElementById('removeAudioBtn').disabled = true;
                document.getElementById('audioStatus').textContent = '';
            } else {
                console.error('Failed to delete audio:', result.error);
                document.getElementById('audioStatus').textContent = 'Failed to delete audio. Please try again.';
            }
        } catch (error) {
            console.error('Error deleting audio:', error);
            document.getElementById('audioStatus').textContent = 'Error deleting audio. Please try again.';
        }
    }
}

// Handle custom audio upload for speaker button (supports MP4)
function handleCustomAudioUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const term = currentStudySet[currentCardIndex];
    if (!term) return;
    
    // Support both audio files and MP4 video files (for audio extraction)
    if (!file.type.startsWith('audio/') && file.type !== 'video/mp4') {
        alert('Please upload an audio file or MP4 file.');
        return;
    }
    
    // Create audio element and URL for temporary storage
    const audio = new Audio();
    const audioUrl = URL.createObjectURL(file);
    audio.src = audioUrl;
    
    // Store audio data temporarily (not saved to database yet)
    customAudioData[term.english] = {
        audio: audio,
        url: audioUrl,
        fileName: file.name,
        file: file, // Store original file for saving later
        isSaved: false
    };
    
    updateCustomAudioStatus();
    
    // Clear the file input
    event.target.value = '';
}

// Remove custom audio for current term
async function removeCustomAudio(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    if (customAudioData[term.english]) {
        try {
            const response = await fetch(`/api/delete_audio/${customAudioData[term.english].id}`, {
                method: 'DELETE'
            });
            
            const result = await response.json();
            if (result.success) {
                delete customAudioData[term.english];
                updateCustomAudioStatus();
            } else {
                console.error('Failed to delete audio:', result.error);
                alert('Failed to delete audio. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting audio:', error);
            alert('Error deleting audio. Please try again.');
        }
    }
}

// Update custom audio status display
function updateCustomAudioStatus() {
    const term = currentStudySet[currentCardIndex];
    const statusElement = document.getElementById('customAudioStatus');
    const removeButton = document.getElementById('removeCustomAudioBtn');
    const saveButton = document.getElementById('saveCustomAudioBtn');
    
    if (!term || !statusElement) return;
    
    if (customAudioData[term.english]) {
        const audioData = customAudioData[term.english];
        if (removeButton) removeButton.disabled = false;
        
        if (audioData.isSaved) {
            statusElement.textContent = `✅ Saved: ${audioData.fileName}`;
            statusElement.style.color = '#4CAF50';
            if (saveButton) saveButton.disabled = true;
        } else {
            statusElement.textContent = `💾 Ready to save: ${audioData.fileName}`;
            statusElement.style.color = '#FFC107';
            if (saveButton) saveButton.disabled = false;
        }
    } else {
        statusElement.textContent = 'No custom audio';
        statusElement.style.color = 'rgba(255,255,255,0.7)';
        if (removeButton) removeButton.disabled = true;
        if (saveButton) saveButton.disabled = true;
    }
}

// Edit card title functionality
function editCardTitle() {
    const term = currentStudySet[currentCardIndex];
    const titleElement = document.getElementById('englishTerm');
    const editContainer = document.getElementById('editContainer');
    const editElement = document.getElementById('englishTermEdit');
    
    if (!titleElement || !editContainer || !editElement) return;
    
    // Get current display title
    const currentTitle = customTitles[term.english] || term.english;
    
    // Hide title, show edit container
    titleElement.style.display = 'none';
    editContainer.style.display = 'block';
    editElement.value = currentTitle;
    editElement.focus();
    editElement.select();
}

function saveCardTitle() {
    const term = currentStudySet[currentCardIndex];
    const titleElement = document.getElementById('englishTerm');
    const editContainer = document.getElementById('editContainer');
    const editElement = document.getElementById('englishTermEdit');
    
    if (!titleElement || !editContainer || !editElement) return;
    
    const newTitle = editElement.value.trim();
    
    if (newTitle && newTitle !== term.english) {
        // Save custom title
        customTitles[term.english] = newTitle;
        titleElement.textContent = newTitle;
        const backElement = document.getElementById('englishTermBack');
        if (backElement) backElement.textContent = newTitle;
    } else if (!newTitle) {
        // Revert to original if empty
        delete customTitles[term.english];
        titleElement.textContent = term.english;
        const backElement = document.getElementById('englishTermBack');
        if (backElement) backElement.textContent = term.english;
    } else {
        // Use original title
        titleElement.textContent = term.english;
        const backElement = document.getElementById('englishTermBack');
        if (backElement) backElement.textContent = term.english;
    }
    
    // Hide edit container, show title
    editContainer.style.display = 'none';
    titleElement.style.display = 'block';
}

function cancelEdit() {
    const term = currentStudySet[currentCardIndex];
    const titleElement = document.getElementById('englishTerm');
    const editContainer = document.getElementById('editContainer');
    
    if (!titleElement || !editContainer) return;
    
    // Revert to current title without saving
    const currentTitle = customTitles[term.english] || term.english;
    titleElement.textContent = currentTitle;
    
    // Hide edit container, show title
    editContainer.style.display = 'none';
    titleElement.style.display = 'block';
}

function handleTitleKeydown(event) {
    if (event.key === 'Enter') {
        event.target.blur(); // This will trigger saveCardTitle
    } else if (event.key === 'Escape') {
        // Cancel editing
        const term = currentStudySet[currentCardIndex];
        const titleElement = document.getElementById('englishTerm');
        const editElement = document.getElementById('englishTermEdit');
        
        // Revert to current title
        const currentTitle = customTitles[term.english] || term.english;
        titleElement.textContent = currentTitle;
        
        editElement.style.display = 'none';
        titleElement.style.display = 'block';
    }
}

// Video upload functions

// Handle custom video upload (front of card)
function handleCustomVideoUpload(event) {
    const file = event.target.files[0];
    const term = currentStudySet[currentCardIndex];
    
    if (!file || !term) return;
    
    // Store video file temporarily as blob URL
    const videoUrl = URL.createObjectURL(file);
    customVideoData[term.english] = {
        url: videoUrl,
        name: file.name,
        file: file, // Store original file for saving later
        isSaved: false
    };
    
    updateCustomVideoStatus();
    
    // Reset input
    event.target.value = '';
}

// Handle user practice video upload (back of card)
function handleUserVideoUpload(event) {
    const file = event.target.files[0];
    const term = currentStudySet[currentCardIndex];
    
    if (!file || !term) return;
    
    // Store video file temporarily as blob URL
    const videoUrl = URL.createObjectURL(file);
    userVideoData[term.english] = {
        url: videoUrl,
        name: file.name,
        file: file, // Store original file for saving later
        isSaved: false
    };
    
    updateUserVideoStatus();
    
    // Reset input
    event.target.value = '';
}

// Save functions to permanently store files in database

// Save custom audio to database
async function saveCustomAudio(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    if (!term || !customAudioData[term.english] || !customAudioData[term.english].file) return;
    
    const file = customAudioData[term.english].file;
    
    try {
        // Convert file to base64
        const reader = new FileReader();
        reader.onload = async function(e) {
            const fileData = e.target.result;
            
            const response = await fetch('/api/upload_audio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    english_term: term.english,
                    file_data: fileData,
                    file_name: file.name,
                    mime_type: file.type,
                    file_type: 'custom'
                })
            });
            
            const result = await response.json();
            if (result.success) {
                // Update with database reference
                customAudioData[term.english].id = result.audio_id;
                customAudioData[term.english].isSaved = true;
                delete customAudioData[term.english].file; // Remove file reference
                
                updateCustomAudioStatus();
                alert('Custom audio saved successfully!');
            } else {
                console.error('Failed to save audio:', result.error);
                alert('Failed to save audio. Please try again.');
            }
        };
        reader.readAsDataURL(file);
        
    } catch (error) {
        console.error('Error saving audio:', error);
        alert('Error saving audio. Please try again.');
    }
}

// Save user audio to database
async function saveUserAudio(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    if (!term || !userAudioData[term.english] || !userAudioData[term.english].file) return;
    
    const file = userAudioData[term.english].file;
    
    try {
        // Convert file to base64
        const reader = new FileReader();
        reader.onload = async function(e) {
            const fileData = e.target.result;
            
            const response = await fetch('/api/upload_audio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    english_term: term.english,
                    file_data: fileData,
                    file_name: file.name,
                    mime_type: file.type,
                    file_type: 'user'
                })
            });
            
            const result = await response.json();
            if (result.success) {
                // Update with database reference
                userAudioData[term.english].id = result.audio_id;
                userAudioData[term.english].isSaved = true;
                delete userAudioData[term.english].file; // Remove file reference
                
                document.getElementById('saveUserAudioBtn').disabled = true;
                document.getElementById('audioStatus').textContent = `Audio saved: ${userAudioData[term.english].fileName}`;
                alert('Audio saved successfully!');
            } else {
                console.error('Failed to save audio:', result.error);
                document.getElementById('audioStatus').textContent = 'Failed to save audio. Please try again.';
            }
        };
        reader.readAsDataURL(file);
        
    } catch (error) {
        console.error('Error saving audio:', error);
        document.getElementById('audioStatus').textContent = 'Error saving audio. Please try again.';
    }
}

// Save custom video to database
async function saveCustomVideo(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    if (!term || !customVideoData[term.english] || !customVideoData[term.english].file) return;
    
    const file = customVideoData[term.english].file;
    
    try {
        // Convert file to base64
        const reader = new FileReader();
        reader.onload = async function(e) {
            const fileData = e.target.result;
            
            const response = await fetch('/api/upload_video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    english_term: term.english,
                    file_data: fileData,
                    file_name: file.name,
                    mime_type: file.type,
                    file_type: 'custom'
                })
            });
            
            const result = await response.json();
            if (result.success) {
                // Update with database reference
                customVideoData[term.english].id = result.video_id;
                customVideoData[term.english].isSaved = true;
                delete customVideoData[term.english].file; // Remove file reference
                
                updateCustomVideoStatus();
                alert('Custom video saved successfully!');
            } else {
                console.error('Failed to save video:', result.error);
                alert('Failed to save video. Please try again.');
            }
        };
        reader.readAsDataURL(file);
        
    } catch (error) {
        console.error('Error saving video:', error);
        alert('Error saving video. Please try again.');
    }
}

// Save user video to database
async function saveUserVideo(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    if (!term || !userVideoData[term.english] || !userVideoData[term.english].file) return;
    
    const file = userVideoData[term.english].file;
    
    try {
        // Convert file to base64
        const reader = new FileReader();
        reader.onload = async function(e) {
            const fileData = e.target.result;
            
            const response = await fetch('/api/upload_video', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    english_term: term.english,
                    file_data: fileData,
                    file_name: file.name,
                    mime_type: file.type,
                    file_type: 'user'
                })
            });
            
            const result = await response.json();
            if (result.success) {
                // Update with database reference
                userVideoData[term.english].id = result.video_id;
                userVideoData[term.english].isSaved = true;
                delete userVideoData[term.english].file; // Remove file reference
                
                updateUserVideoStatus();
                alert('Practice video saved successfully!');
            } else {
                console.error('Failed to save video:', result.error);
                alert('Failed to save video. Please try again.');
            }
        };
        reader.readAsDataURL(file);
        
    } catch (error) {
        console.error('Error saving video:', error);
        alert('Error saving video. Please try again.');
    }
}

// Play custom video (front of card)
function playCustomVideo(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    if (!term || !customVideoData[term.english]) return;
    
    const videoData = customVideoData[term.english];
    const video = document.createElement('video');
    video.src = videoData.url;
    video.controls = false; // No controls for 3-second video
    video.autoplay = true; // Auto-play when opened
    video.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 80vw;
        max-height: 80vh;
        z-index: 10000;
        background: black;
        border-radius: 10px;
    `;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    overlay.appendChild(video);
    document.body.appendChild(overlay);
    
    video.play();
    
    // Close video when clicking overlay or when video ends
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    video.addEventListener('ended', () => {
        document.body.removeChild(overlay);
    });
}

// Play user practice video (back of card)
function playUserVideo(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    if (!term || !userVideoData[term.english]) return;
    
    const videoData = userVideoData[term.english];
    const video = document.createElement('video');
    video.src = videoData.url;
    video.controls = false; // No controls for 3-second video
    video.autoplay = true; // Auto-play when opened
    video.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 80vw;
        max-height: 80vh;
        z-index: 10000;
        background: black;
        border-radius: 10px;
    `;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    overlay.appendChild(video);
    document.body.appendChild(overlay);
    
    video.play();
    
    // Close video when clicking overlay or when video ends
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    video.addEventListener('ended', () => {
        document.body.removeChild(overlay);
    });
}

// Remove custom video (front of card)
async function removeCustomVideo(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    if (!term) return;
    
    if (customVideoData[term.english]) {
        try {
            const response = await fetch(`/api/delete_video/${customVideoData[term.english].id}`, {
                method: 'DELETE'
            });
            
            const result = await response.json();
            if (result.success) {
                delete customVideoData[term.english];
                updateCustomVideoStatus();
            } else {
                console.error('Failed to delete video:', result.error);
                alert('Failed to delete video. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting video:', error);
            alert('Error deleting video. Please try again.');
        }
    }
}

// Remove user practice video (back of card)
async function removeUserVideo(event) {
    event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    if (!term) return;
    
    if (userVideoData[term.english]) {
        try {
            const response = await fetch(`/api/delete_video/${userVideoData[term.english].id}`, {
                method: 'DELETE'
            });
            
            const result = await response.json();
            if (result.success) {
                delete userVideoData[term.english];
                updateUserVideoStatus();
            } else {
                console.error('Failed to delete video:', result.error);
                alert('Failed to delete video. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting video:', error);
            alert('Error deleting video. Please try again.');
        }
    }
}

// Update custom video status display (front of card)
function updateCustomVideoStatus() {
    const term = currentStudySet[currentCardIndex];
    const statusElement = document.getElementById('customVideoStatus');
    const playBtn = document.getElementById('playCustomVideoBtn');
    const removeBtn = document.getElementById('removeCustomVideoBtn');
    const saveBtn = document.getElementById('saveCustomVideoBtn');
    
    if (!term || !statusElement) return;
    
    if (customVideoData[term.english]) {
        const videoData = customVideoData[term.english];
        if (playBtn) playBtn.disabled = false;
        if (removeBtn) removeBtn.disabled = false;
        
        if (videoData.isSaved) {
            statusElement.textContent = `✅ Saved: ${videoData.name}`;
            statusElement.style.color = '#4CAF50';
            if (saveBtn) saveBtn.disabled = true;
        } else {
            statusElement.textContent = `💾 Ready to save: ${videoData.name}`;
            statusElement.style.color = '#FFC107';
            if (saveBtn) saveBtn.disabled = false;
        }
    } else {
        statusElement.textContent = 'No custom video';
        statusElement.style.color = 'rgba(255, 255, 255, 0.8)';
        if (playBtn) playBtn.disabled = true;
        if (removeBtn) removeBtn.disabled = true;
        if (saveBtn) saveBtn.disabled = true;
    }
}

// Update user video status display (back of card)
function updateUserVideoStatus() {
    const term = currentStudySet[currentCardIndex];
    const statusElement = document.getElementById('userVideoStatus');
    const playBtn = document.getElementById('playUserVideoBtn');
    const removeBtn = document.getElementById('removeUserVideoBtn');
    const saveBtn = document.getElementById('saveUserVideoBtn');
    
    if (!term || !statusElement) return;
    
    if (userVideoData[term.english]) {
        const videoData = userVideoData[term.english];
        if (playBtn) playBtn.disabled = false;
        if (removeBtn) removeBtn.disabled = false;
        
        if (videoData.isSaved) {
            statusElement.textContent = `✅ Saved: ${videoData.name}`;
            statusElement.style.color = '#4CAF50';
            if (saveBtn) saveBtn.disabled = true;
        } else {
            statusElement.textContent = `💾 Ready to save: ${videoData.name}`;
            statusElement.style.color = '#FFC107';
            if (saveBtn) saveBtn.disabled = false;
        }
    } else {
        statusElement.textContent = 'No practice video';
        statusElement.style.color = 'rgba(255, 255, 255, 0.8)';
        if (playBtn) playBtn.disabled = true;
        if (removeBtn) removeBtn.disabled = true;
        if (saveBtn) saveBtn.disabled = true;
    }
}

// Audio functions
function playJapaneseAudio(event) {
    if (event) event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    speakText(term.japanese, 'ja-JP');
}

function playEnglishAudio(event) {
    if (event) event.stopPropagation();
    const term = currentStudySet[currentCardIndex];
    
    // Check for custom audio first
    const customAudioData_term = customAudioData[term.english];
    if (customAudioData_term && customAudioData_term.audio) {
        customAudioData_term.audio.currentTime = 0;
        customAudioData_term.audio.play().catch(console.error);
    } else {
        // Fall back to text-to-speech
        speakText(term.english, 'en-US');
    }
}

// Mark card as practicing
function markAsPracticing() {
    const term = currentStudySet[currentCardIndex];
    masteryData[term.japanese] = 'practicing';
    sessionStats.practicing++;
    sessionStats.studied++;
    saveMasteryData();
    nextCard();
}

// Mark card as mastered
function markAsMastered() {
    const term = currentStudySet[currentCardIndex];
    masteryData[term.japanese] = 'mastered';
    sessionStats.mastered++;
    sessionStats.studied++;
    saveMasteryData();
    nextCard();
}

// Navigation functions
function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= currentStudySet.length) {
        showCompletionPage();
    } else {
        displayCurrentCard();
        updateStudyStats();
    }
}

function previousCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        displayCurrentCard();
        updateStudyStats();
    }
}

// Return to home page
function returnHome() {
    showPage('homePage');
    // Reset study session
    currentStudySet = [];
    currentCardIndex = 0;
    sessionStats = { studied: 0, mastered: 0, practicing: 0 };
}

// Show completion page
function showCompletionPage() {
    document.getElementById('sessionStudied').textContent = sessionStats.studied;
    document.getElementById('sessionMastered').textContent = sessionStats.mastered;
    document.getElementById('sessionPracticing').textContent = sessionStats.practicing;
    
    // Calculate total mastered
    const totalMastered = Object.values(masteryData).filter(status => status === 'mastered').length;
    document.getElementById('totalMastered').textContent = totalMastered;
    
    // Clear bookmark since session is complete
    bookmarkData = null;
    saveBookmarkData();
    updateResumeButton();
    
    showPage('completionPage');
}

// Study unmastered terms
function studyUnmastered() {
    selectedMastery = 'unmastered';
    startStudySession();
}

document.addEventListener('DOMContentLoaded', initializeApp);

// Export for debugging
window.aviationFlashcards = {
    aviationTerms,
    masteryData,
    currentStudySet,
    sessionStats
};



// Initialize demo data for emergency card
setTimeout(() => {
    const emergencyTerm = "Declaring an Emergency";
    
    // Add demo audio
    const demoAudio = new Audio();
    demoAudio.src = "./PilotDeclaringanEmergency.mp4";
    customAudioData[emergencyTerm] = {
        audio: demoAudio,
        url: demoAudio.src,
        fileName: "PilotDeclaringanEmergency.mp4",
        isSaved: true
    };
    
    // Add demo video
    customVideoData[emergencyTerm] = {
        url: "./PilotDeclaringanEmergency.mp4",
        name: "PilotDeclaringanEmergency.mp4",
        isSaved: true
    };
}, 1000);



// Toggle review mark for current term
function toggleReviewMark() {
    const term = currentStudySet[currentCardIndex];
    if (!term) return;
    
    const reviewBtn = document.getElementById('reviewMarkBtn');
    
    if (markedTerms.has(term.japanese)) {
        markedTerms.delete(term.japanese);
        reviewBtn.style.backgroundColor = '#6c757d'; // Gray when unmarked
        reviewBtn.style.color = 'white';
    } else {
        markedTerms.add(term.japanese);
        reviewBtn.style.backgroundColor = '#ffc107'; // Bright yellow when marked
        reviewBtn.style.color = 'black';
    }
    
    // Save marked terms to localStorage
    localStorage.setItem('aviationFlashcardsMarked', JSON.stringify([...markedTerms]));
    
    // Update the marked count display
    updateMarkedCount();
}

// Load marked terms from localStorage
function loadMarkedTerms() {
    const saved = localStorage.getItem('aviationFlashcardsMarked');
    if (saved) {
        markedTerms = new Set(JSON.parse(saved));
    }
    // Update the count display after loading
    updateMarkedCount();
}

// Update review mark button appearance
function updateReviewMarkButton() {
    const term = currentStudySet[currentCardIndex];
    if (!term) return;
    
    const reviewBtn = document.getElementById('reviewMarkBtn');
    if (!reviewBtn) return;
    
    if (markedTerms.has(term.japanese)) {
        reviewBtn.style.backgroundColor = '#ffc107'; // Bright yellow when marked
        reviewBtn.style.color = 'black';
    } else {
        reviewBtn.style.backgroundColor = '#6c757d'; // Gray when unmarked
        reviewBtn.style.color = 'white';
    }
}


// Update the marked count display
function updateMarkedCount() {
    const markedCountElement = document.getElementById('markedCount');
    if (markedCountElement) {
        const count = markedTerms.size;
        markedCountElement.textContent = `${count} marked`;
    }
}


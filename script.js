// ==========================================
// 1. LETTER LOCK & COUNTDOWN LOGIC
// ==========================================
function checkLetterLock() {
    const letterBox = document.getElementById('letterBoxContent');
    const lockNotice = document.getElementById('letterLockNotice');
    
    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMins = document.getElementById('cdMins');
    const cdSecs = document.getElementById('cdSecs');
    
    // Set target date: October 28 of current year (or next year if passed)
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`September 1, ${currentYear} 00:00:00`);
    const now = new Date();

    if (letterBox && lockNotice) {
        if (now < targetDate) {
            // Locked state
            letterBox.classList.add('locked');
            lockNotice.style.display = 'block';

            const diffTime = targetDate - now;
            
            const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diffTime % (1000 * 60)) / 1000);

            if (cdDays) cdDays.innerText = String(days).padStart(2, '0');
            if (cdHours) cdHours.innerText = String(hours).padStart(2, '0');
            if (cdMins) cdMins.innerText = String(mins).padStart(2, '0');
            if (cdSecs) cdSecs.innerText = String(secs).padStart(2, '0');
        } else {
            // Unlocked state (October 28 onwards)
            letterBox.classList.remove('locked');
            lockNotice.style.display = 'none';
        }
    }
}

// Run countdown every second in the background so it ticks live
setInterval(checkLetterLock, 1000);

// ==========================================
// 2. GALLERY DATA & LOGIC
// ==========================================
const memories = [
    { src: "photos/a/a.jpeg", date: "Youuu - 😝" },
    { src: "photos/a/a1.jpeg", date: "Youuu - luv it" },
    { src: "photos/a/a2.jpeg", date: "Youuu - gwaps" },
    { src: "photos/a/a3.mp4", date: "Youuu - nostalgic" },
    { src: "photos/a/a4.mp4", date: "Youuu - ugh" },
    { src: "photos/a/a5.mp4", date: "Youuu - prettyeyez" },
    { src: "photos/a/a6.mp4", date: "Youuu - sofine" },
    { src: "photos/a/a7.jpg", date: "Youuu - hehe" },
    { src: "photos/a/a9.mp4", date: "Youuu - shyt" },
    { src: "photos/a/a10.mp4", date: "Youuu - imongeyeesss" },
    { src: "photos/a/a11.jpg", date: "Youuu - kulit" },
    { src: "photos/a/a12.mp4", date: "Youuu - soprettygurl" },
    { src: "photos/a/a13.mp4", date: "Youuu - spaglangakin" },
    { src: "photos/a/a14.jpg", date: "Youuu - bat nag cry2?" },
    { src: "photos/a/a15.jpg", date: "Youuu" },
    { src: "photos/a/a16.jpg", date: "Youuu" },
    { src: "photos/a/a17.jpg", date: "Youuu - 🤨" },
    { src: "photos/a/a18.jpg", date: "Youuu - nc brows" },
    { src: "photos/a/a19.jpg", date: "Youuu - nc brows" },
    { src: "photos/a/a20.jpg", date: "Youuu - :/" },
    { src: "photos/a/a21.jpg", date: "Youuu - ..." },
    { src: "photos/a/a22.jpg", date: "Youuu" },
    { src: "photos/a/a23.jpg", date: "Youuu - ss kay di sendan" },
    
    { src: "photos/b/b1.jpg", date: "Youuu - dis wan" },
    { src: "photos/b/b3.jpg", date: "Youuu" },
    { src: "photos/b/b4.jpg", date: "Youuu" },
    { src: "photos/b/b5.jpg", date: "Youuu" },
    { src: "photos/b/b7.jpg", date: "Youuu" },
    
    { src: "photos/f/f1.jpg", date: "Treat - fav spag" },
    { src: "photos/f/f2.jpg", date: "Treat - ur mcflurry" },
    { src: "photos/f/f3.jpg", date: "Treat - habol bes" },
    { src: "photos/f/f1.jpg", date: "Treat - lami" },
    { src: "photos/f/f1.jpg", date: "Treat - lami" },

    { src: "photos/k/k1.jpg", date: "aguroy" },
    { src: "photos/k/k2.jpg", date: "Kai" },
    { src: "photos/k/k3.jpg", date: "anlala" },
    { src: "photos/k/k4.jpg", date: '"himala na abot ug suarez"' },
    { src: "photos/k/k5.jpg", date: "Youuu" },
    { src: "photos/k/k6.jpg", date: "batak" },

    { src: "photos/m/m1.jpg", date: "Mariya Era" },
    { src: "photos/m/m2.jpg", date: "Mariya Era" },
    { src: "photos/m/m3.jpg", date: "Mariya Era" },
    { src: "photos/m/m5.jpg", date: "Mariya Era" },
    { src: "photos/m/m6.jpg", date: "Mariya Era" },
    { src: "photos/m/m7.jpg", date: "Mariya Era" },
    { src: "photos/m/m8.jpg", date: "Mariya Era" },
    { src: "photos/m/m9.jpg", date: "Mariya Era" },
    { src: "photos/m/m10.jpg", date: "Mariya Era" },
    { src: "photos/m/m11.jpg", date: "Mariya Era" },
    { src: "photos/m/m12.jpg", date: "Mariya Era" },
    { src: "photos/m/m13.jpg", date: "Mariya Era" },
    { src: "photos/m/m14.jpg", date: "Mariya Era" },
    { src: "photos/m/m15.jpg", date: "Mariya Era - luoya ni sofie uy" },

    { src: "photos/r/r1.jpg", date: "randoms - ur lola?" },
    { src: "photos/r/r2.jpg", date: "randoms - paldo" },
    { src: "photos/r/r3.jpg", date: "randoms" },
    { src: "photos/r/r4.jpg", date: "randoms - congrats bes, proud of you" },
    { src: "photos/r/r5.jpg", date: "randoms - akoang pets :/" },
    { src: "photos/r/r6.jpg", date: "randoms - batak" },
    { src: "photos/r/r7.jpg", date: "randoms" },
    { src: "photos/r/r8.jpg", date: "randoms" },
    { src: "photos/r/r9.jpg", date: "randoms - engr pajud waw" },
    { src: "photos/r/r10.jpg", date: "randoms" },
    { src: "photos/r/r11.jpg", date: "randoms - di pa hulam oh" },
    { src: "photos/r/r12.jpg", date: "randoms - rashes rato biya" },
    { src: "photos/r/r13.jpg", date: "randoms" },
    { src: "photos/r/r14.jpg", date: "randoms" },
    { src: "photos/r/r15.jpg", date: "randoms" },
    { src: "photos/r/r16.jpg", date: "randoms - when?" },
    { src: "photos/r/r17.jpg", date: "randoms - naimly." },
    { src: "photos/r/r19.jpg", date: "randoms - nya ichi ni san nya arigato" },
    { src: "photos/r/r20.jpg", date: "randoms" },
    { src: "photos/r/r21.jpg", date: "randoms - ayaw pag awol2" },
    { src: "photos/r/r22.jpg", date: "randoms - Starrrrr" },
    { src: "photos/r/r23.jpg", date: "randoms" },
    { src: "photos/r/r24.jpg", date: "randoms" },
    { src: "photos/r/r25.jpg", date: "randoms - visit yarn" },
    { src: "photos/r/r26.jpg", date: "randoms" },
    { src: "photos/r/r27.jpg", date: "randoms" },
    { src: "photos/r/r28.jpg", date: "randoms - gi librehan ug McFlurry ang Maldita" },
    { src: "photos/r/r29.jpg", date: "randoms" },
    { src: "photos/r/r30.jpg", date: "randoms - Regie, is that you?" },
    { src: "photos/r/r31.jpg", date: "randoms" },
    { src: "photos/r/r32.jpg", date: "randoms - hadlok" },
    { src: "photos/r/r33.jpg", date: "randoms - my pichu, nawa  :(" },
    { src: "photos/r/r34.jpg", date: "randoms" },
    { src: "photos/r/r35.jpg", date: "randoms - di ko kilala" },

    { src: "photos/s/s1.mp4", date: "Sofielat momentz" },
    { src: "photos/s/s2.jpg", date: "Sofielat momentz" },
    { src: "photos/s/s3.jpg", date: "Taga UM" },
    { src: "photos/s/s4.jpg", date: "Sofielat momentz" },
    { src: "photos/s/s5.jpg", date: "Sofielat momentz" },
    { src: "photos/s/s6.jpg", date: "Sofielat momentz" },
    { src: "photos/s/s7.jpg", date: "Sofielat momentz" },

    { src: "photos/y/y1.jpg", date: "Yayay - please lang take care imong sarili" },
    { src: "photos/y/y2.1.mp4", date: "Yayay - ayaw na ni usba please lang zel" },
    { src: "photos/y/y2.jpg", date: "Yayay - aray ko" },
    { src: "photos/y/y3.jpg", date: "Yayay - lalom pa jud" },

    { src: "photos/z/z1.jpg", date: "Zayne - naunsa mani" },
    { src: "photos/z/z2.jpg", date: "Zayne - comfy" },
    { src: "photos/z/z3.jpg", date: "Zayne - tarungag hawid" },
    { src: "photos/z/z4.mp4", date: "Zayne - cutee" },
    { src: "photos/z/z6.jpg", date: "Zayne" },
    { src: "photos/z/z7.jpg", date: "Zayne - my fav 🥺" },
    { src: "photos/z/z8.jpg", date: "Zayne - my fav 🥺" },
    { src: "photos/z/z9.jpg", date: "Zayne - my fav 🥺" },
    { src: "photos/z/z10.jpg", date: "Zayne - my fav 🥺" },
    { src: "photos/z/z11.jpg", date: "Zayne - my fav 🥺" },
    { src: "photos/z/z12.jpg", date: "Zayne - my fav 🥺" },
    { src: "photos/z/z13.jpg", date: "Zayne" },
    { src: "photos/z/z14.jpg", date: "Zayne" },
    { src: "photos/z/z15.mp4", date: "Zayne" },
    { src: "photos/z/z16.mp4", date: "Zayne - gwapo" },
    { src: "photos/z/z17.jpg", date: "Zayne" },
    { src: "photos/z/z18.mp4", date: "Zayne" },
    { src: "photos/z/z19.jpg", date: "Zayne" },
    { src: "photos/z/z20.jpg", date: "Zayne" },
    { src: "photos/z/z21.mp4", date: "Zayne" },
    { src: "photos/z/z22.mp4", date: "Zayne - Ineffable" },

    { src: "photos/u/u1.jpeg", date: "Us - FPT?" },
    { src: "photos/u/u2.jpeg", date: "Us - hmm" },
    { src: "photos/u/u3.jpeg", date: "Us - iluvursmile" },
    { src: "photos/u/u4.jpeg", date: "Us - rawr 🦖" },
    { src: "photos/u/u5.jpg", date: "Us - ga piggyback maynoon" },
    { src: "photos/u/u6.jpg", date: "Us - libre icecream bi" },
    { src: "photos/u/u7.jpg", date: "Us - mahiyaan yarn?" },
    { src: "photos/u/u8.jpg", date: "Us - wa ko ganahi ni M" },
    { src: "photos/u/u9.jpg", date: "Us - idk" },
    { src: "photos/u/u10.jpg", date: "Us - wa ga eat oh" },
    { src: "photos/u/u11.jpg", date: "Us - :/" },
    { src: "photos/u/u12.jpg", date: "Us - :/" },
    { src: "photos/u/u13.jpg", date: "Us - aslom haha jk" },
    { src: "photos/u/u14.jpg", date: "Us - 😘" },
    { src: "photos/u/u15.jpg", date: "Us - 😍" },
    { src: "photos/u/u16.1.jpeg", date: "Us - 💋" },
    { src: "photos/u/u16.jpg", date: "Us - bffpremiumpromax daw" },
    { src: "photos/u/u17.jpg", date: "Us - bestie" },
    { src: "photos/u/u18.jpg", date: "Us - bes" },
    { src: "photos/u/u19.jpg", date: "Us - Thank you" },
    { src: "photos/u/u20.jpg", date: "Us - sa libre mwa" },
    { src: "photos/u/u21.jpg", date: "Us - Very soft" },
    { src: "photos/u/u22.1.jpg", date: "Us - kept this moment close to my heart." },
    { src: "photos/u/u22.jpg", date: "Us - gi mog man ko" },
    { src: "photos/u/u23.1.jpg", date: "Us - hoy bad yan" },
    { src: "photos/u/u23.2.jpg", date: "Us - ulawon kaayo" },
    { src: "photos/u/u23.3.jpg", date: "Us - cutie kaykaaa" },
    { src: "photos/u/u23.4.jpg", date: "Us - isog lagi" },
    { src: "photos/u/u23.jpg", date: "Us - libre mo?" },
    { src: "photos/u/u24.jpg", date: "Us - lami ang beef" },
    { src: "photos/u/u25.jpg", date: "Us - maka mingaw" },
    { src: "photos/u/u26.jpg", date: "Us - still here" },
    { src: "photos/u/u27.jpg", date: "Us - always here" },
    { src: "photos/u/u28.jpg", date: "Us - sleep ang maldita" },
    { src: "photos/u/u29.jpg", date: "Us - ngik" },
    { src: "photos/u/u30.jpg", date: "Us - bff ni Star" },
];

let currentIndex = 0;

// Page Navigation Function
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    if (pageId === 'page-gallery') {
        initGallery();
    }
    
    // Kung gusto mong automatic din i-check ang lock kapag binuksan ang letter page:
    if (pageId === 'page-letter') { // Palitan ang 'page-letter' ng actual ID ng letter page mo kung iba
        checkLetterLock();
    }
}

// Initialize Gallery
function initGallery() {
    updateCarousel();
    renderThumbnails();
    renderFullGrid();
}

function updateCarousel() {
    const currentItem = memories[currentIndex];
    const imageWrapper = document.getElementById('imageWrapper') || document.querySelector('.image-wrapper');
    
    if (!imageWrapper) return;

    if (currentItem.src.endsWith('.mp4')) {
        imageWrapper.innerHTML = `<video src="${currentItem.src}" controls autoplay muted loop style="width:100%; height:100%; object-fit:contain;"></video>`;
    } else {
        imageWrapper.innerHTML = `<img id="mainPhoto" src="${currentItem.src}" alt="Memory">`;
    }

    const photoDateEl = document.getElementById('photoDate');
    if (photoDateEl) photoDateEl.textContent = currentItem.date;
    
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add('active-thumb');
        } else {
            thumb.classList.remove('active-thumb');
        }
    });
}

function renderThumbnails() {
    const strip = document.getElementById('thumbnailStrip');
    if (!strip) return;
    
    strip.innerHTML = '';
    memories.forEach((memory, index) => {
        let thumbElement;
        if (memory.src.endsWith('.mp4')) {
            thumbElement = document.createElement('video');
            thumbElement.src = memory.src;
        } else {
            thumbElement = document.createElement('img');
            thumbElement.src = memory.src;
        }
        thumbElement.className = 'thumb';
        if (index === currentIndex) thumbElement.classList.add('active-thumb');
        thumbElement.onclick = () => {
            currentIndex = index;
            updateCarousel();
        };
        strip.appendChild(thumbElement);
    });
}

function renderFullGrid() {
    const container = document.getElementById('fullGridContainer');
    if (!container) return;
    
    container.innerHTML = '';
    memories.forEach((memory, index) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        
        if (memory.src.endsWith('.mp4')) {
            item.innerHTML = `<video src="${memory.src}" style="width:100%; height:100%; object-fit:cover; border-radius:6px;"></video>`;
        } else {
            item.innerHTML = `<img src="${memory.src}" alt="Memory">`;
        }

        item.onclick = () => {
            currentIndex = index;
            toggleGridView();
        };
        container.appendChild(item);
    });
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % memories.length;
    updateCarousel();
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + memories.length) % memories.length;
    updateCarousel();
}

function toggleGridView() {
    const carouselView = document.getElementById('carouselView');
    const gridView = document.getElementById('gridView');
    const gridToggleBtn = document.getElementById('gridToggleBtn');

    if (!carouselView || !gridView) return;

    if (carouselView.classList.contains('active')) {
        carouselView.classList.remove('active');
        gridView.classList.add('active');
        if (gridToggleBtn) gridToggleBtn.textContent = "✨ Carousel";
    } else {
        gridView.classList.remove('active');
        carouselView.classList.add('active');
        if (gridToggleBtn) gridToggleBtn.textContent = "🖼️ Show All";
        updateCarousel();
    }
}


// ==========================================
// 3. MUSIC PLAYER & HIGHLIGHT CHECKPOINT
// ==========================================
const playlist = [
    { title: "Risk it All", artist: "Bruno Mars", src: "music/riskitall.mp3", highlightTime: 65.2 },
    { title: "13", artist: "LANY", src: "music/13.mp3", highlightTime: 122.6 },
    { title: "Dalangin", artist: "Earl Agustin", src: "music/dalangin.mp3", highlightTime: 52.5 },
    { title: "Libu-Libong Buwan", artist: "Kyle Raphael", src: "music/libu-libongbuwan.mp3", highlightTime: 72 },
    { title: "Sa Bawat Sandali", artist: "Amiel Sol", src: "music/sabawatsandali.mp3", highlightTime: 160 },
    { title: "Totoong Tayo", artist: "Jin DC", src: "music/totoongtayo.mp3", highlightTime: 45.7 },
    { title: "Larawan", artist: "JRoa ft. Flow G", src: "music/larawan.mp3", highlightTime: 236.5 }
];

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const progressBar = document.getElementById('progressBar');
const highlightDot = document.getElementById('highlightDot');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');
const trackTitleEl = document.getElementById('trackTitle');
const trackArtistEl = document.getElementById('trackArtist');

function loadSong(index) {
    if (!audioPlayer) return;
    const song = playlist[index];
    audioPlayer.src = song.src;
    if (trackTitleEl) trackTitleEl.textContent = song.title;
    if (trackArtistEl) trackArtistEl.textContent = song.artist;
    audioPlayer.load();
    
    audioPlayer.onloadedmetadata = () => {
        updateHighlightPosition();
    };
}

function updateHighlightPosition() {
    if (!highlightDot) return;
    const song = playlist[currentSongIndex];
    if (audioPlayer && !isNaN(audioPlayer.duration) && audioPlayer.duration > 0) {
        const percent = (song.highlightTime / audioPlayer.duration) * 100;
        highlightDot.style.left = `${Math.min(Math.max(percent, 0), 100)}%`;
    } else {
        highlightDot.style.left = `50%`;
    }
}

if (highlightDot) {
    highlightDot.addEventListener('click', (e) => {
        e.stopPropagation();
        const song = playlist[currentSongIndex];
        if (audioPlayer && !isNaN(audioPlayer.duration)) {
            audioPlayer.currentTime = song.highlightTime;
            if (audioPlayer.paused) {
                togglePlayMusic();
            }
        }
    });
}

function togglePlayMusic() {
    if (!audioPlayer) return;
    if (audioPlayer.paused) {
        audioPlayer.play().then(() => {
            if (playIcon) playIcon.textContent = "❚❚";
        }).catch(err => {
            console.log("Audio play error:", err);
            if (playIcon) playIcon.textContent = "❚❚";
        });
    } else {
        audioPlayer.pause();
        if (playIcon) playIcon.textContent = "▶";
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    if (audioPlayer) {
        audioPlayer.play().then(() => {
            if (playIcon) playIcon.textContent = "❚❚";
        });
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    if (audioPlayer) {
        audioPlayer.play().then(() => {
            if (playIcon) playIcon.textContent = "❚❚";
        });
    }
}

if (audioPlayer) {
    audioPlayer.addEventListener('ended', () => {
        nextSong();
    });

    audioPlayer.addEventListener('timeupdate', () => {
        if (!isNaN(audioPlayer.duration)) {
            const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            if (progressBar) progressBar.style.width = `${progressPercent}%`;

            if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
            if (durationTimeEl) durationTimeEl.textContent = "-" + formatTime(audioPlayer.duration - audioPlayer.currentTime);
        }
    });
}

function seekAudio(event) {
    const container = event.currentTarget;
    const clickX = event.offsetX;
    const width = container.clientWidth;
    if (audioPlayer && !isNaN(audioPlayer.duration)) {
        audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
    }
}

function setVolume(val) {
    if (audioPlayer) {
        audioPlayer.volume = val;
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}


// ==========================================
// 4. WINDOW LOAD INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // Run letter lock check immediately on load
    checkLetterLock();

    // Load initial song
    loadSong(currentSongIndex);

    const polaroidImg = document.getElementById('polaroidImage');
    if(polaroidImg) {
        polaroidImg.onload = () => { 
            const placeholder = document.getElementById('polaroidPlaceholder');
            if (placeholder) placeholder.style.display = 'none'; 
        };
    }

    const playerArt = document.getElementById('playerArtImage');
    if(playerArt) {
        playerArt.onload = () => { 
            const placeholder = document.getElementById('artPlaceholder');
            if (placeholder) placeholder.style.display = 'none'; 
        };
    }
});

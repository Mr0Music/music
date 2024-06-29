const songs = [
    {
        title: 'WAAD 7AB',
        artist: 'M.Y',
        coverPath: '../public/WAAD 7AB.jpg',
        audioPath: '../public/WAAD 7AB.mp3'
    },
    {
        title: 'pilot',
        artist: 'M.Y',
        coverPath: '../public/pilot.webm',
        audioPath: '../public/pilot.mp3'
    }
    // Add more songs as needed
];

let currentSongIndex = 0;
const audio = new Audio();
const cover = document.getElementById('cover');
const title = document.getElementById('music-title');
const artist = document.getElementById('music-artist');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function loadSong(song) {
    audio.src = song.audioPath;
    cover.src = song.coverPath;
    title.textContent = song.title;
    artist.textContent = song.artist;
}

function playSong() {
    audio.play();
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
}

function pauseSong() {
    audio.pause();
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

playBtn.addEventListener('click', () => {
    const isPlaying = !audio.paused;
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Load the first song
loadSong(songs[currentSongIndex]);

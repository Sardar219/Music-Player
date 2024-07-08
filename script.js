let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.querySelector(".audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
  {
    img: "image/image1.jpg",
    name: "Falling Down",
    artist: "Unknown artist",
    music: "music/music1.mp3",
  },
  {
    img: "image/image2.jpg",
    name: "Faded",
    artist: "Unknown artist",
    music: "music/music2.mp3",
  },
  {
    img: "image/image3.jpg",
    name: "Rather Be",
    artist: "Unknown artist",
    music: "music/music3.mp3",
  },
  {
    img: "image/image4.jpg",
    name: "Falling Down",
    artist: "Unknown artist",
    music: "music/music4.mp3",
  },
  {
    img: "image/image5.jpg",
    name: "Falling Down",
    artist: "Unknown artist",
    music: "music/music5.mp3",
  },
];
loadTrack(track_index);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();
  track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
}

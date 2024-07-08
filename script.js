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
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

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

function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();

  curr_track.src = music_list[track_index].music;
  curr_track.load();
  track_art.style.backgroundImage =
    "url('" + music_list[track_index].img + "')";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;
  now_playing.textContent =
    "Playing music" + (track_index + 1) + " of " + music_list.length;

  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}
loadTrack(track_index);
function random_bg_color() {
  let hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let a;
  function populate(a) {
    for (let i = 0; i < 6; i++) {
      let x = Math.round(Math.random() * 14);
      let y = hex[x];
      a += y;
    }
    return a;
  }
  let Color1 = populate("#");
  let Color2 = populate("#");
  var angle = "to right";

  let gradient = "linear-gradient(" + angle + "," + Color1 + "," + Color2 + ")";
  document.body.style.background = gradient;
}
function reset() {
  curr_time.textContent = "00:00";
}

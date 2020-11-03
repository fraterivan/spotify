let playpause = document.getElementById("play_pause");
let play_music = false;
let audio_player = document.getElementById("audioPlayer");

function playMusic() {
    if (!play_music) {
        play_music = true;
        playpause.src = "pause.svg";
        audio_player.play();
    }
    else {
        play_music = false;
        playpause.src="play.svg";
        audio_player.pause();
    }
}

function audioPlayer() {
    let music_len = audio_player.duration;
    console.log(music_len);
    let min = 0;
    let sec = Math.round(music_len);
    console.log(min + " : " + sec);
}

function actualTime() {
    sec = Math.round(audio_player.currentTime);
    timeline(sec);
    let min = 0;
    while(sec >= 60) {
        sec -= 60;
        min += 1;
    }
    console.log(min + " : " + sec);
}

function timeline(actual_sec) {
    let music_len = Math.round(audio_player.duration);
    let percent = actual_sec / (music_len / 100);
    console.log(Math.round(percent));
    document.getElementById("inner_line").style.width = percent + "%";
}

audioPlayer();
setInterval(actualTime, 1000);

function changeMusic(zene){
    audio_player.src = zene;
}
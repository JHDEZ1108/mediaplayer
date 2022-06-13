import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const buttonPlay = document.getElementById('play-pause')
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.getElementById('mute-unmute');
buttonMute.onclick = () => player.toggleMute();
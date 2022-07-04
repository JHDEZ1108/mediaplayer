import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

const buttonPlay = <HTMLElement>document.getElementById('play-pause')
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = <HTMLElement>document.getElementById('mute-unmute');
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
        new URL('/sw.js', import.meta.url),
        {type: 'module'}
    );
}
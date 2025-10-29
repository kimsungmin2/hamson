import { $ } from '../utils/dom.js';


export function initVideo(){
const video = $('#mainVideo');
const playBtn = $('#playBtn');
const pauseBtn = $('#pauseBtn');
if(!video || !playBtn || !pauseBtn) return;
playBtn.addEventListener('click', ()=> video.play());
pauseBtn.addEventListener('click', ()=> video.pause());
const rm = window.matchMedia('(prefers-reduced-motion: reduce)');
const handle = ()=> rm.matches ? video.pause() : video.play();
rm.addEventListener('change', handle);
handle();
}
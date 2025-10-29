import { $, toggleClass } from '../utils/dom.js';
import { scrollToSection } from '../utils/scroll.js';


export function initFloatingMenu(){
const menu = $('#floatingMenu');
const mainBtn = $('#floatingMainBtn');
const callBtn = $('#floatingCallBtn');
const chatBtn = $('#floatingChatBtn');
const topBtn = $('#floatingTopBtn');
if(!menu || !mainBtn) return;
mainBtn.addEventListener('click', ()=>{
const active = !menu.classList.contains('active');
toggleClass(menu, 'active', active);
mainBtn.querySelector('span').textContent = active ? '×' : '+';
mainBtn.setAttribute('aria-expanded', String(active));
document.getElementById('floatingMenuItems')?.setAttribute('aria-hidden', String(!active));
});
callBtn?.addEventListener('click', ()=> window.open('tel:010-1234-5678'));
chatBtn?.addEventListener('click', ()=> alert('채팅 문의 기능입니다.'));
topBtn?.addEventListener('click', ()=> scrollToSection('#section1'));
}
import { $, $$, toggleClass, setHidden } from '../utils/dom.js';
import { isMobile } from '../state/mediaQuery.js';
import { scrollToSection } from '../utils/scroll.js';


const hamburger = $('#hamburgerMenu');
const sidebar = $('#sidebar');
const overlay = $('#sidebarOverlay');


function toggleSidebar(open){
if(!sidebar) return;
toggleClass(hamburger, 'active', open);
toggleClass(sidebar, 'active', open);
toggleClass(overlay, 'active', open);
hamburger?.setAttribute('aria-expanded', String(open));
sidebar?.setAttribute('aria-hidden', String(!open));
setHidden(overlay, !open);
}


export function initSidebar(){
if(!hamburger || !sidebar || !overlay) return;
hamburger.addEventListener('click', (e)=>{ e.preventDefault(); e.stopPropagation(); toggleSidebar(!sidebar.classList.contains('active')); });
overlay.addEventListener('click', ()=> toggleSidebar(false));
$$('.sidebar-menu-link').forEach(link => {
link.addEventListener('click', (e)=>{
const href = link.getAttribute('href');
if(href?.startsWith('#')){ e.preventDefault(); scrollToSection(href); }
toggleSidebar(false);
});
});
// Esc 닫기
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') toggleSidebar(false); });
}
import { $, $$, toggleClass } from '../utils/dom.js';
import { isMobile } from '../state/mediaQuery.js';
import { menuData } from '../data/menuData.js';


const header = $('#mainHeader');
const overlay = $('#fullscreenOverlay');
const overlayContent = $('#overlayContent');


function renderOverlay(){
const html = Object.values(menuData).map(({columns}) =>
columns.map(col => `<div class="menu-column">${col.links.map(l=>`<a href="#">${l}</a>`).join('')}</div>`).join('')
).join('');
overlayContent.innerHTML = html;
}


export function bindHeaderObserver(){
const sections = $$('section');
const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry => {
if(entry.isIntersecting){
const isLight = entry.target.classList.contains('section4') || entry.target.classList.contains('section2');
header.classList.toggle('light', isLight);
header.classList.toggle('dark', !isLight);
}
});
}, { root: $('#container'), threshold: 0.6 });
sections.forEach(s => observer.observe(s));
}


export function bindMenu(){
const menuItems = $$('.menu-item');
menuItems.forEach(item => {
const target = item.dataset.target;
if(isMobile()){
item.addEventListener('click', (e)=>{
e.preventDefault();
if(!target) return;
const el = document.querySelector(target);
if(!el) return;
$('#container').scrollTo({ top: el.offsetTop - $('#container').offsetTop, behavior:'smooth' });
});
} else {
item.addEventListener('mouseenter', ()=>{ toggleClass(header,'menu-hover',true); renderOverlay(); toggleClass(overlay,'active',true); });
item.addEventListener('mouseleave', ()=>{ toggleClass(header,'menu-hover',false); toggleClass(overlay,'active',false); });
}
});
if(!isMobile()){
overlay.addEventListener('mouseenter', ()=>{ toggleClass(header,'menu-hover',true); });
overlay.addEventListener('mouseleave', ()=>{ toggleClass(header,'menu-hover',false); toggleClass(overlay,'active',false); });
}
}
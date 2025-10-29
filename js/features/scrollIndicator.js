import { $, $$, toggleClass } from '../utils/dom.js';
import { onContainerScroll, scrollToSection } from '../utils/scroll.js';


const indicator = $('#scrollIndicator');
const dots = $$('.indicator-dot');
const titles = $$('.section-title-item');
const sections = $$('section');
const hint = $('#scrollHint');


function update(){
const container = $('#container');
const scrollTop = container.scrollTop;
const ch = container.clientHeight;
let current = 0;
sections.forEach((s, i)=>{
const top = s.offsetTop - container.offsetTop;
const bottom = top + s.offsetHeight;
if(scrollTop >= top - ch*0.5 && scrollTop < bottom - ch*0.5){ current = i; }
});
dots.forEach((d,i)=> d.classList.toggle('active', i===current));
titles.forEach((t,i)=> t.classList.toggle('active', i===current));
if(current===1) triggerSection2Animation();
}


export function triggerSection2Animation(){
$$('.grid-item').forEach((item, idx)=>{
item.style.animation = 'none';
void item.offsetHeight;
item.style.animation = `fadeInUp .8s ease-out ${0.2 + idx*0.2}s forwards`;
});
}


export function initScrollUI(){
indicator?.addEventListener('click', (e)=>{
const dot = e.target.closest('.indicator-dot');
if(!dot) return;
scrollToSection(`#${dot.dataset.section}`);
});
$('#sectionTitles')?.addEventListener('click', (e)=>{
const btn = e.target.closest('.section-title-item');
if(!btn) return;
scrollToSection(`#${btn.dataset.section}`);
});
onContainerScroll(()=>{ window.requestAnimationFrame(update); hint && (hint.style.opacity='0'); });
// 최초 힌트 표시
setTimeout(()=>{ if(hint){ hint.style.opacity='1'; setTimeout(()=> hint.style.opacity='0', 3000);} }, 2000);
update();
}
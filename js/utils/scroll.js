import { $ } from './dom.js';
export const container = $('#container');
export function scrollToSection(id){
const el = $(id);
if(!el) return;
container.scrollTo({ top: el.offsetTop - container.offsetTop, behavior: 'smooth' });
}
export function onContainerScroll(cb){ container.addEventListener('scroll', cb, { passive: true }); }
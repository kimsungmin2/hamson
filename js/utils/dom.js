export const $ = (s, root = document) => root.querySelector(s);
export const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
export const setHidden = (el, hidden) => { if(!el) return; el.hidden = !!hidden; };
export const toggleClass = (el, cls, on) => el && el.classList.toggle(cls, on);
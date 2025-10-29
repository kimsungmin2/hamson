const mql = window.matchMedia('(max-width: 768px)');
export const isMobile = () => mql.matches;
export const onMediaChange = (cb) => mql.addEventListener('change', () => cb(mql.matches));
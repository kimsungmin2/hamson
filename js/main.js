import { isMobile, onMediaChange } from './state/mediaQuery.js';
import { $, setHidden } from './utils/dom.js';
import { bindHeaderObserver, bindMenu } from './features/menuOverlay.js';
import { initSidebar } from './features/sidebar.js';
import { initScrollUI } from './features/scrollIndicator.js';
import { initVideo } from './features/videoControls.js';
import { initFloatingMenu } from './features/floatingMenu.js';


function toggleResponsiveUI(mobile){
setHidden(document.getElementById('scrollIndicator'), mobile);
setHidden(document.getElementById('sectionTitles'), mobile);
setHidden(document.getElementById('scrollHint'), mobile);
const hamburger = document.getElementById('hamburgerMenu');
if(hamburger){ hamburger.style.display = mobile ? 'flex' : 'none'; }
}


function init(){
bindHeaderObserver();
bindMenu();
initSidebar();
initScrollUI();
initVideo();
initFloatingMenu();
toggleResponsiveUI(isMobile());
onMediaChange(toggleResponsiveUI);
}


document.addEventListener('DOMContentLoaded', init);
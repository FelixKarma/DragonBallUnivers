const navLinkEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;


navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(windowPathname)) {
        navLinkEl.classList.add('active');
    }
});
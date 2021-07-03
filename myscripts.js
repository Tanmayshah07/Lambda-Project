
//Aos file
AOS.init();

// back to page-top on reload(Tanmay Shah)
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
// remove fragment as much as it can go without adding an entry in browser history:
window.location.replace("#");

// slice off the remaining '#' in HTML5:
if (typeof window.history.replaceState == 'function') {
    history.replaceState({}, '', window.location.href.slice(0, -1));
}

const id$ = (id) => document.getElementById(id);
const q$ = (query) => document.querySelector(query);
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == 'interactive') { document.getElementsByClassName('body-inner').item(0).style.visibility = "hidden"; }
    else if (state == 'complete') {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const THRESHOLD = 1000;
        const MIN_LOAD_TIME = loadTime < THRESHOLD ? THRESHOLD : 0;
        setTimeout(() => {
            id$('loader-container').style.visibility = "hidden";
            document.getElementsByClassName('body-inner').item(0).style.visibility = "visible";
        }, MIN_LOAD_TIME);
    }
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

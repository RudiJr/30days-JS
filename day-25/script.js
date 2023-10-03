const divs = document.querySelectorAll('div');
const btn = document.querySelector('button');

function logText(e) {
    e.stopPropagation();
};

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

btn.addEventListener('click', () => {
}, {
    once: true
});
const pressed = [];
const secretCode = 'jahpodealmosar';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode);
    if(pressed.join('').includes(secretCode)){
        console.log('YES');
        cornify_add();
    };
    console.log(pressed);
});
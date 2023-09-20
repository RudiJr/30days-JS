const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500px

function shadow(e) {
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    // same as 
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    /* The `!==` operator is a strict inequality operator in JavaScript. It checks if the
    operands are not equal and also checks for the data type. If the operands are not equal
    or not of the same data type, it returns `true`. If the operands are equal and of the
    same data type, it returns `false`. */
    if (this !== e.target) { // this = hero and e.target is the thing it actually triggered on
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    };

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
}; 

hero.addEventListener('mousemove', shadow);


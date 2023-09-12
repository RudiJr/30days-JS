const checkboxes = document.querySelectorAll('.inbox input[type=checkbox]');
let lastChecked;

function handleCheck(e) {
    let inBetween = false;
    if(e.shiftKey && this.checked) { // check if the shift key is down and they are checking the box
        checkboxes.forEach(checkbox => {
           /* Checking if the current checkbox being iterated over is either the checkbox
           that was clicked (`this`) or the last checkbox that was checked (`lastChecked`). If
           either of these conditions is true, it sets the `inBetween` variable to the opposite of
           its current value. */
            if(checkbox === this || checkbox === lastChecked ) {
                inBetween = !inBetween;
            };

            /* Checking if the current checkbox being iterated over is in between the checkbox that was clicked (`this`) and
            the last checkbox that was checked (`lastChecked`). */
            if(inBetween) {
                checkbox.checked = true;
            };
        });
    };
    lastChecked = this; // show what input its checked
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
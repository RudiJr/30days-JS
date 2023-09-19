const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); 
    /* A method that resets the form fields to their default values. In this code,
    it is called after an item is added to the `items` array, in order to clear the input field and
    allow the user to enter a new item. */
    this.reset();
  };

  /* The `.map` method is used to create a new array by applying a
    function to each element of the original array. In this code, it is
    used to iterate over the `plates` array and create a new array of
    HTML elements. Each element in the new array represents a plate
    item and contains the HTML markup for displaying the plate's text
    and status. */
  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
  };

  function toggleDone(e) {
    /* `!e` is used as a shorthand way of checking if the `e` variable  is falsy. */
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done; // if it's true is going to be false, if it's false is going to be true 
    localStorage.setItem('items', JSON.stringify(items)); 
    populateList(items, itemsList);
  ;} 

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
/**
 * The debounce function is a utility function in JavaScript that limits the frequency of a function
 * call by delaying its execution until a certain amount of time has passed since the last invocation.
 * @param func - The `func` parameter is the function that you want to debounce. It is the function
 * that will be called after the debounce period has passed.
 * @param [wait=20] - The `wait` parameter specifies the number of milliseconds to wait before invoking
 * the `func` function. It determines the delay between consecutive invocations of the `func` function.
 * @param [immediate=true] - The `immediate` parameter is a boolean value that determines whether the
 * `func` should be called immediately or after the specified `wait` time. If `immediate` is set to
 * `true`, the `func` will be called immediately and then debounced. If `immediate` is
 * @returns The debounce function returns a new function that wraps the original function passed as an
 * argument.
 */
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
      /*Checking if the `immediate` parameter is set to `false`. If `immediate` is `false`, it means that the `func` function should not be
      called immediately, but rather after the specified `wait` time has passed. */
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(slideImage => {
    /* Calculating the position at which the image should start sliding in. */
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2; 

   /* Calculating the position of the bottom edge of the slideImage element relative to the top of the document. */
    const imageBottom = slideImage.offsetTop + slideImage.height; 
    
    /* Checking if the slideImage element is at least halfway visible on the screen. */
    const isHalfShown = slideInAt > slideImage.offsetTop;

    /* Checking if the user has scrolled past the slideImage element. */
    const isNotScrolledPast = window.scrollY < imageBottom;
    
    if(isHalfShown && isNotScrolledPast) {
      slideImage.classList.add('active');
    }else {
      slideImage.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', debounce(checkSlide));


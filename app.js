// set initial value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// show the count on the page
function showCount() {
  value.textContent = count;
  // styles.css gives these classes their colors: green above zero, red below zero
  value.classList.toggle("positive", count > 0);
  value.classList.toggle("negative", count < 0);
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    showCount();
  });
});

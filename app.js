const countEl = document.querySelector("#count");
const incrementButton = document.querySelector("#increment");
const resetButton = document.querySelector("#reset");

let count = 0;

function render() {
  countEl.textContent = String(count);
}

incrementButton.addEventListener("click", () => {
  count += 1;
  render();
});

resetButton.addEventListener("click", () => {
  count = 0;
  render();
});

render();

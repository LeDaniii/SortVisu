// ----- Slider -----
let slider = document.getElementById("myRange");
let output = document.getElementById("value");

// ----- slider live output -----
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

// ----- Generate Column ------

let section = document.getElementById("main");

for (i = 0; i < slider.value; i++) {
  let columnheight = function () {
    let height = Math.floor(Math.random() * 800 + 20);
    console.log(height);
    let column = document.createElement("div");
    column.setAttribute("id", "column");
    column.setAttribute("class", "column");
    column.style.height = `${height}px`;
    section.appendChild(column);
  };
  columnheight();
}

// let columnheight = function () {
//   let height = Math.floor(Math.random() * 800 + 20);
//   console.log(height);
// };

// let column = document.createElement("div");
// column.setAttribute("id", "column");
// column.setAttribute("class", "column");
// column.style.height = `${200}px`;
// section.appendChild(column);

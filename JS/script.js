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

// ----- Random Number -----
function randomInt() {
  return Math.floor(Math.random() * 780 + 20);
}

// ------ Generate New Array
const columnArray = [];
function newArray() {
  for (let i = 0; i < slider.value; i++) {
    columnArray.push(randomInt());
  }
  return columnArray;
}

function bubbleSort() {
  let length = columnArray.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      let placehold = j + 1;
      let temp1 = columnArray[j];
      let temp2 = columnArray[placehold];
      if (temp1 > temp2) {
        columnArray[j] = temp2;
        columnArray[j + 1] = temp1;
      }
    }
  }
  return columnArray;
}
function generateColumn() {
  for (let i = 0; i < columnArray.length; i++) {
    let column = document.createElement("div");
    column.setAttribute("id", "column");
    column.setAttribute("class", "column");
    column.style.height = `${columnArray[i]}px`;
    section.appendChild(column);
  }
}
console.log(columnArray);
newArray();
bubbleSort();
generateColumn();
// generateColumn();
// for (let i = 0; i < newArray().length; i++) {
//   console.log(newArray[i]);
// }

// for (let i = 0; i < newArray.length; i++)
// let column = document.createElement("div");
// column.setAttribute("id", "column");
// column.setAttribute("class", "column");
// column.style.height = `${newArray[i]}px`;

// newArray();

// for (let i = 0; i < newArray().length; i++) {
//   let column = document.createElement("div");
//   column.setAttribute("id", "column");
//   column.setAttribute("class", "column");
//   column.style.height = `${columnArray[i]}px`;
//   console.log(columnArray[i]);
//   section.appendChild(column);
// }

// ------ FIRST TRY ------
// for (i = 0; i < slider.value; i++) {
//   let columnheight = function () {
//     let height = Math.floor(Math.random() * 800 + 20);
//     console.log(height);
//     let column = document.createElement("div");
//     column.setAttribute("id", "column");
//     column.setAttribute("class", "column");
//     column.style.height = `${height}px`;
//     section.appendChild(column);
//   };
//   columnheight();
// }

// let columnheight = function () {
//   let height = Math.floor(Math.random() * 800 + 20);
//   console.log(height);
// };

// let column = document.createElement("div");
// column.setAttribute("id", "column");
// column.setAttribute("class", "column");
// column.style.height = `${200}px`;
// section.appendChild(column);

// ----- Bubble Sort -----

// for (let i = 0; i < columnArray.length; i++) {
//   let temp1 = columnArray[i];
//   let temp2 = columnArray[i + 1];
//   if (temp1 > temp2) {
//     columnArray[i] = temp2;
//     columnArray[i + 1] = temp1;
//   }
// }

// console.log(columnArray);

"use strict";

const all_area = document.getElementById("All_area");

let TableArea = () => {
  let NumArea = Num_area_input.value;
  console.log("NumArea: " + NumArea);

  for (let i = 1; i <= NumArea; i++) {
    console.log("Start");
    if (i <= NumArea) {
      all_area.innerHTML += `<div class="area_input">Площадь повреждённой территории на ${i} участке:  <input type=text id='Square" + i + "'></div> `;
    }
  }
};

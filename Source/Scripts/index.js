"use strict";

const AllArea = document.getElementById("All_area");
const SearchContainer = document.getElementById("Search_container");
const AreaInput = document.getElementsByClassName("area_input");

//Класс стадарных значений (Кол.полей; Сумма всех значений; Среднее; Квад.отклонение)
class DataSet {
  //Массив с данными из AreaInput
  #AreaValues = [];
  get AreaValues() {
    return this.#AreaValues;
  }
  set AreaValues(value) {
    if (typeof value == `number` && isNaN(value) == false) {
      console.log(value);
      this.#AreaValues.push(value);
    } else {
      this.#AreaValues = [];
      console.log("Value is NaN");
      alert("Вы ввели не верное значение. Массив очищен");
    }
  }

  //Общее количество Area
  #NumArea = 0;
  get NumArea() {
    return this.#NumArea;
  }
  set NumArea(value) {
    if (value != 0 && isNaN(value) == false) {
      this.#NumArea = value;
    } else {
      console.log("Value is NaN");
      alert("Ошибка NumArea");
    }
  }

  // Общяя сумма все значений
  #SumArea = 0;
  get SumArea() {
    return this.#SumArea;
  }

  //Среднее значение
  #AverageArea = 0;
  get AverageArea() {
    // console.log("dsa" + this.#NumArea);
    // this.#AverageArea = this.#SumArea / this.#NumArea;
    return this.#AverageArea;
  }

  //Аномалия
  #Anomaly = 0;
  #SQAnomaly = 0;
  get Anomaly() {
    return this.#SQAnomaly;
  }

  //Заполнение массива
  AreaArrayPush(Start = 0, Values) {
    this.Start = Start;
    this.Value = Values;
    this.#AreaValues[this.Start] = this.Value;
  }

  //Сумма все значений массива
  setSumArea() {
    return (this.#SumArea = this.#AreaValues.reduce(
      (acc, num) => acc + num,
      0
    ));
  }

  //Очистка массива Area
  ClearAreaArray() {
    console.log("Clear Area Array!");
    return (this.#AreaValues.length = 0);
  }

  //Среднее значение
  setAverageArea() {
    console.log("dsa" + this.#NumArea);
    return (this.#AverageArea = this.#SumArea / this.#NumArea);
  }

  //Среднеквадратичнео отклонение
  setAnomaly() {
    this.#Anomaly = 0;
    for (let i = 0; i <= this.#NumArea - 1; i++) {
      if (i <= this.#NumArea) {
        if (
          typeof this.#AreaValues[i] == `number` &&
          isNaN(this.#AreaValues[i]) == false
        ) {
          this.#Anomaly += Math.pow(this.#AreaValues[i] - this.#AverageArea, 2);
        }
      }
    }
    this.#SQAnomaly = Math.sqrt(this.#Anomaly / this.#NumArea);
    return this.#SQAnomaly;
  }

}

let data = new DataSet();

let TableArea = () => {
  AllArea.innerHTML = ``;

  data.NumArea = NumAreaInput.value;
  console.log("NumArea: " + data.NumArea);

  for (let i = 1; i <= data.NumArea; i++) {
    console.log("Start");
    if (i <= data.NumArea) {
      AllArea.innerHTML += `<div class="area_input">Площадь повреждённой территории на ${i} участке:  <input type=text id='Area${i}'> `;
    }
  }

  SearchContainer.innerHTML = ``;

  SearchContainer.innerHTML += `<div class="area_input"> Общая площадь повреждённой территории: <input type=text id='SumAreaInput'>`;
  // data.SumArea = Number(SumAreaInput.value); // 0

  SearchContainer.innerHTML += `<div class="area_input"> Средняя площадь повреждённой территории: <input type=text id='AverageAreaInput'>`;
  // data.AverageArea = Number(AverageAreaInput.value); // 0

  SearchContainer.innerHTML += `<div class="area_input"> Среднеквадратическое отклонение: <input type=text id='AnomalyInput'>`;
  // data.Anomaly = Number(AnomalyInput.value); // 0

  SearchContainer.innerHTML += `<div><input type=button value='Поиск аномальных значений' onClick='SearchAnomaly()' id='SearchAnomalyButton'>`;

  SearchContainer.innerHTML += `<div><input type=button value='Исключить аномальные значения' onClick='AnomalyHide()' id='AnomalyHideButton'>`;
  SearchContainer.innerHTML += `<div><input type=button value='Усреднить аномальные значения' onClick='AnomalyMid()' id='AnomalyMidButton'>`;
  SearchContainer.innerHTML += `<div><input type=button value='Понизить аномальные значения до максимального имеющегося' onClick='AnomalyMin()' id='AnomalyMinButton'>`;
  SearchContainer.innerHTML += `<div><input type=button value='Повысить аномальные значения до максимального имеющегося' onClick='AnomalyMax()' id='AnomalyMaxButton'>`;
};

//Подцветка аномалии
// HighlightAnomaly(element) {
//   this.element = Element;
//   for (let i = 1; i <= this._NumArea; i++) {
//     let element = document.getElementById("Area" + i);
//     element.style.background = "white";
//     this.setAnomaly();
//     if (
//       (element - this.#AreaValues) / AnomalyInput.value >=
//       this.setAnomaly
//     ) {
//       return (element.style.background = "red");
//     }
//   }
// }

// Поиск аномалий
let SearchAnomaly = () => {
  let Start = 0;
  data.ClearAreaArray();
  for (let i = 1; i <= data.NumArea; i++) {
    let element = Number(document.getElementById("Area" + i).value);
    data.AreaArrayPush(Start, element);
    Start++;
  }
  // console.log(data.AreaValues);

  //Сумма все занечений
  SumAreaInput.value = data.setSumArea();

  AverageAreaInput.value = data.setAverageArea();

  AnomalyInput.value = data.setAnomaly();
};

//TODO КАЛ НЕ ПЕРЕДЕЛАНЫЙ
let AnomalyHide = () => {
  let dataArray = [];

  let j = 0;

  //  n = ChisloYchastkov.value;

  for (let i = 1; i <= data.NumArea; i++) {
    let element = document.getElementById("Area" + i);

    if ((element.value - CalcAverageArea) / Otklonenie.value < k) {
      myarray[j] = document.getElementById(element1).value;

      j = j + 1;
    }
  }

  ChisloYchastkov.value = j;

  TableYchastki();

  for (var i = 1; i <= j; i++) {
    element1 = "ploshad" + i;

    document.getElementById(element1).value = myarray[i - 1];
  }
};

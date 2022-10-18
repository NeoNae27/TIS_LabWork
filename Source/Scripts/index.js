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
    if (typeof value === "number" && !isNaN(value)) {
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
      console.log(this.#NumArea);
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
    return this.#AverageArea;
  }

  //Аномалия
  #Anomaly = 0;
  #SQAnomaly = 0;
  get Anomaly() {
    return this.#SQAnomaly;
  }

  //Заполнение массива
  AreaArrayPush(i, values) {
    this.Value = values;
    this.#AreaValues[i] = this.Value;
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
    return (this.#AverageArea = this.#SumArea / this.#NumArea);
  }

  //Среднеквадратичнео отклонение
  setAnomaly() {
    this.#Anomaly = 0;
    for (let i = 0; i < this.#NumArea; i++) {
      if (i < this.#NumArea) {
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

// Создание полей для ввода знаяений
let TableArea = () => {
  AllArea.innerHTML = ``;

  data.NumArea = NumAreaInput.value;
  console.log("NumArea: " + data.NumArea);

  for (let i = 0, counter = 1; i < data.NumArea; i++, counter++) {
    console.log(`Start. Area number: ${data.NumArea}`);
    AllArea.innerHTML += `<div class="area_input">Площадь повреждённой территории на ${counter} участке:  <input type=text id='Area${i}' value='0'> `;
  }

  SearchContainer.innerHTML = ``;

  SearchContainer.innerHTML += `<div class="area_input"> Общая площадь повреждённой территории: <input type=text id='SumAreaInput'>`;

  SearchContainer.innerHTML += `<div class="area_input"> Средняя площадь повреждённой территории: <input type=text id='AverageAreaInput'>`;

  SearchContainer.innerHTML += `<div class="area_input"> Среднеквадратическое отклонение: <input type=text id='AnomalyInput'>`;

  SearchContainer.innerHTML += `<div><input type=button value='Поиск аномальных значений' onClick='SearchAnomaly()' id='SearchAnomalyButton'>`;

  SearchContainer.innerHTML += `<div><input type=button value='Исключить аномальные значения' onClick='AnomalyHide()' id='AnomalyHideButton'>`;
  SearchContainer.innerHTML += `<div><input type=button value='Усреднить аномальные значения' onClick='AnomalyMid()' id='AnomalyMidButton'>`;
  SearchContainer.innerHTML += `<div><input type=button value='Понизить аномальные значения до максимального имеющегося' onClick='AnomalyMin()' id='AnomalyMinButton'>`;
  SearchContainer.innerHTML += `<div><input type=button value='Повысить аномальные значения до максимального имеющегося' onClick='AnomalyMax()' id='AnomalyMaxButton'>`;
};

//Подцветка аномалии
let HighligthAnomaly = () => {
  for (let i = 0; i < data.NumArea; i++) {
    document.getElementById("Area" + i).style.background = "white";
    if ((data.AreaValues[i] - data.AverageArea) / data.Anomaly >= 2.145) {
      document.getElementById("Area" + i).style.background = "red";
    }
  }
};

// Поиск аномалий
let SearchAnomaly = () => {
  data.ClearAreaArray();
  for (let i = 0; i < data.NumArea; i++) {
    console.log(typeof document.getElementById("Area" + i).value);
    console.log(document.getElementById("Area" + i).value);
    let element = Number(document.getElementById("Area" + i).value);
    data.AreaArrayPush(i, element);
  }
  console.log(data.AreaValues);
  SumAreaInput.value = data.setSumArea();
  AverageAreaInput.value = data.setAverageArea();
  AnomalyInput.value = data.setAnomaly();

  if (data.NumArea < 10) {
    alert(`Выборка слишком маленькая определить аномалию невозможно`);
  }

  HighligthAnomaly();
};

// //TODO КАЛ НЕ ПЕРЕДЕЛАНЫЙ
// let AnomalyHide = () => {
//   let dataArray = [];

//   let j = 0;

//   //  n = ChisloYchastkov.value;

//   for (let i = 0; i <= data.NumArea; i++) {
//     let element = document.getElementById("Area" + i);

//     if ((element.value - CalcAverageArea) / Otklonenie.value < k) {
//       myarray[j] = document.getElementById(element1).value;

//       j = j + 1;
//     }
//   }

//   ChisloYchastkov.value = j;

//   TableYchastki();

//   for (var i = 1; i <= j; i++) {
//     element1 = "ploshad" + i;

//     document.getElementById(element1).value = myarray[i - 1];
//   }
// };

"use strict";

const AllArea = document.getElementById("All_area");
const SearchContainer = document.getElementById("Search_container");
const AreaInput = document.getElementsByClassName("area_input");

//Класс стадарных значений (Кол.полей; Сумма всех значений; Среднее; Квад.отклонение)
class DataSet {
  //Массив с данными из AreaInput
  _AreaValues = [];
  get AreaValues() {
    return this._AreaValues;
  }
  set AreaValues(value) {
    if (typeof value === `number` && !isNaN(value)) {
      console.log(value);
      this._AreaValues.push(value);
    } else {
      this._AreaValues = [];
      console.log(`Value is NaN`);
      alert(`Вы ввели не верное значение. Массив очищен`);
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
      console.log(`Value is NaN`);
      alert(`Ошибка NumArea`);
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

  // Коэффицент
  #Coefficient = 0;
  get Coefficient() {
    return this.#Coefficient;
  }

  setCoefficient() {
    if (this._NumArea > 5 && this._NumArea < 10) {
      this.#Coefficient = 2.146;
    } else if (this._NumArea > 10 && this._NumArea < 15) {
      this.#Coefficient = 2.326;
    } else if (this._NumArea > 15 && this._NumArea < 20) {
      this.#Coefficient = 2.447;
    } else if (this._NumArea > 20 && this._NumArea < 25) {
      this.#Coefficient = 2.537;
    } else if (this._NumArea > 25) {
      this.#Coefficient = 2.633;
    } else {
      this.#Coefficient = 1.791;
    }
  }

  //Заполнение массива
  AreaArrayPush(i, values) {
    this.Value = values;
    this._AreaValues[i] = this.Value;
  }

  //Сумма все значений массива
  setSumArea() {
    return (this.#SumArea = this._AreaValues.reduce(
      (acc, num) => acc + num,
      0
    ));
  }

  //Очистка массива Area
  ClearAreaArray() {
    console.log("Clear Area Array!");
    return (this._AreaValues.length = 0);
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
          typeof this._AreaValues[i] == `number` &&
          isNaN(this._AreaValues[i]) == false
        ) {
          this.#Anomaly += Math.pow(this._AreaValues[i] - this.#AverageArea, 2);
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
  data.setCoefficient();
  console.log(data.Coefficient);
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
    if (
      (data.AreaValues[i] - data.AverageArea) / data.Anomaly >=
      data.Coefficient
    ) {
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

  HighligthAnomaly();
};

// Исключение
let AnomalyHide = () => {
  for (let i = 0; i < data.NumArea; i++) {
    if (
      (data.AreaValues[i] - data.AverageArea) / data.Anomaly >
      data.Coefficient
    ) {
      data.AreaValues.splice(i, 1);
      console.log(data.AreaValues);
      NumAreaInput.value -= 1;
      console.log(NumAreaInput.value);
    }
  }

  TableArea();

  for (let i = 1; i < data.NumArea; i++) {
    document.getElementById("Area" + i).value = data.AreaValues[i];
  }
};

let AnomalyMid = () => {
  console.log('asdas')
  for (let i = 0; i < data.NumArea; i++) {
    if (
      (data.AreaValues[i] - data.AverageArea) / data.Anomaly >
      data.Coefficient
    ) {
      data.AreaValues[i] = data.AverageArea;
      console.log(data.AreaValues);
    }

    TableArea();

  for (let i = 0; i < data.NumArea; i++) {
    document.getElementById("Area" + i).value = data.AreaValues[i];
  }

  }
};

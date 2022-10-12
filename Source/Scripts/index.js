"use strict";

const AllArea = document.getElementById("All_area");
const SearchContainer = document.getElementById("Search_container");
const AreaInput = document.getElementsByClassName("area_input");

class DataSet {
  // Массив с данными из AreaInput
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

  // Общее количество Area
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
    this.#SumArea = this.#AreaValues.reduce((acc, num) => acc + num, 0);
    return this.#SumArea;
  }
  // set SumArea(value) {
  //     this.#SumArea = this.#AreaValues.reduce((acc, num) => acc + num, 0);
  // }
  // set SumArea(value) {
  //   // for (let i = 0; i <= this._NumArea; i++) {
  //   //   console.log(this._AreaValues[i]);
  //   //   console.log(this._AreaValues);
  //   //   res = this._SumArea + Number(this._AreaValues[i]);
  //   // }
  //   // if (isNaN(value) == false) {
  //   //   this._SumArea = value;
  //   // } else {
  //   //   console.log("Value is NaN");
  //   //   alert("Ошибка SumArea");
  //   // }
  // }

  // Среднее значение

  #AverageArea = 0;
  get AverageArea() {
    console.log("dsa" + this.#NumArea);
    this.#AverageArea = this.#SumArea / this.#NumArea;
    return this.#AverageArea;
  }
  // set AverageArea(value) {
  //   if (isNaN(value) == false) {
  //     this.#AverageArea = value;
  //   } else {
  //     console.log("Value is NaN");
  //     alert("Ошибка AverageArea");
  //   }
  // }

  // Аномалия



  // TODO
  #Anomaly = 0;
  get Anomaly() {
    for (let i = 0; i <= this.#NumArea - 1; i++) {
      if (i <= this.#NumArea) {
        // console.log("asd " + this.#Anomaly);
        // console.log("sss " + this.#AreaValues[i]);
        if (
          typeof this.#AreaValues[i] == `number` &&
          isNaN(this.#AreaValues[i]) == false
        ) {
          this.#Anomaly += Math.pow(this.#AreaValues[i] - this.#AverageArea, 2);
          // console.log("asd " + this.#Anomaly);
        } else {
          return 0;
        }
      }
    }
    return Math.sqrt(this.#Anomaly / this.#NumArea);
  }

  // set Anomaly(value) {
  //   for (let i = 1; i <= Number(this.#NumArea); i++) {
  //     if (i <= this.#NumArea) {
  //       this.#Anomaly += Math.pow(
  //         this.#AreaValues[i] - this.CalcAverageArea(),
  //         2
  //       );
  //     }
  //   }
  //   return Math.sqrt(this.#Anomaly / this.#NumArea);
  // }

  // Очистка массива Area
  ClearAreaArray() {
    console.log("Clear Area Array!");
    return (this.#AreaValues.length = 0);
  }

  // Альфа
  // setAlfa() {
  //   if (this._NumArea > 5 && this._NumArea < 10) {
  //     this.#Alfa = 2.146;
  //   } else if (this._NumArea > 10 && this._NumArea < 15) {
  //     this.#Alfa = 2.326;
  //   } else if (this._NumArea > 15 && this._NumArea < 20) {
  //     this.#Alfa = 2.447;
  //   } else if (this._NumArea > 20 && this._NumArea < 25) {
  //     this.#Alfa = 2.537;
  //   } else if (this._NumArea > 25) {
  //     this.#Alfa = 2.633;
  //   } else {
  //     this.#Alfa = 1.791;
  //   }
  // }

  //Общее;
  // CalcSumArea() {
  //   for (let i = 0; i <= this._NumArea; i++) {
  //     console.log(this._SumArea);
  //     this._SumArea += this._AreaValues[i];
  //     console.log(typeof this._AreaValues[i]);
  //   }
  //   console.log(typeof this._SumArea);
  //   return Number(this._SumArea);
  // }

  // Среднее значение
  // CalcAverageArea() {
  //   return this._SumArea / this._NumArea;
  // }

  // CalcAnomaly() {
  //   for (let i = 1; i <= Number(this._NumArea); i++) {
  //     if (i <= this._NumArea) {
  //       this._Anomaly += Math.pow(
  //         Number(document.getElementById("Area" + i).value) -
  //           this.CalcAverageArea(),
  //         2
  //       );
  //     }
  //   }
  //   return Math.sqrt(this._Anomaly / this._NumArea);
  // }

  HighlightAnomaly() {
    for (let i = 1; i <= this._NumArea; i++) {
      let element = document.getElementById("Area" + i);
      element.style.background = "white";
      this.setProxy();
      if (
        (element.value - AverageAreaInput.value) / AnomalyInput.value >=
        this._Proxy
      ) {
        return (element.style.background = "red");
      }
    }
  }
}

// const data = {
//   _NumArea: 0,
//   get NumArea() {
//     return this._NumArea;
//   },
//   set NumArea(value) {
//     this._NumArea = value;
//   },

//   _SumArea: 0,
//   get SumArea() {
//     return this._SumArea;
//   },
//   set SumArea(value) {
//     this._SumArea = value;
//   },

//   _AverageArea: 0,
//   get AverageArea() {
//     return this._AverageArea;
//   },
//   set AverageArea(value) {
//     this._AverageArea = value;
//   },

//   _Anomaly: 0,
//   get Anomaly() {
//     return this._Anomaly;
//   },
//   set Anomaly(value) {
//     this._Anomaly = value;
//   },

// Общяя площадь поврежд территорий
// CalcNumArea() {
//   for (let i = 1; i <= this._NumArea; i++) {
//     if (i <= this._NumArea) {
//       this._SumArea += Number(document.getElementById("Area" + i).value);
//     }
//   }
//   return this._SumArea;
// },

// Среднее значение
// CalcAverageArea() {
//   return this._SumArea / this._NumArea;
// },

// Среднеквадратическое отклонение
// CalcAnomaly() {
//   for (let i = 1; i <= this._NumArea; i++) {
//     if (i <= this._NumArea) {
//       this._Anomaly += Math.pow(
//         Number(document.getElementById("Area" + i).value) -
//           Data.CalcAverageArea(),
//         2
//       );
//     }
//   }
//   return Math.sqrt(this._Anomaly / this._NumArea);
// },

// HighlightAnomaly() {
//   for (let i = 1; i <= this._NumArea; i++) {
//     let element = document.getElementById("Area" + i);
//     if (
//       (element.value - AverageAreaInput.value) / AnomalyInput.value >=
//       2.146
//     ) {
//       return (element.style.background = "red");
//     }
//   }
// },
// };

// let ClearData = () => {
//   Data.NumArea = 0;
//   Data.SumArea = 0;
//   Data.AverageArea = 0;
//   Data.Anomaly = 0;
// };

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

let AreaArrayPush = () => {
  let AreaCounter = 1;
  for (let i = 0; i < data.NumArea; i++) {
    data.AreaValues = Number(
      document.getElementById("Area" + AreaCounter).value
    );
    AreaCounter++;
  }
};

let SearchAnomaly = () => {
  data.ClearAreaArray();
  AreaArrayPush();
  SumAreaInput.value = data.SumArea;
  AverageAreaInput.value = data.AverageArea;
  AnomalyInput.value = data.Anomaly;
};
// AverageAreaInput.value = data.CalcAverageArea();
// AnomalyInput.value = data.CalcAnomaly();
// data.HighlightAnomaly();
// data.SumArea = 0;
// data.AverageArea = 0;
// data.Anomaly = 0;

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

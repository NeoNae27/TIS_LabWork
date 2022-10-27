
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

  // МУСОР -----------------------------
// AverageAreaInput.value = data.CalcAverageArea();
// AnomalyInput.value = data.CalcAnomaly();
// data.HighlightAnomaly();
// data.SumArea = 0;
// data.AverageArea = 0;
// data.Anomaly = 0;
// -----------------------------------


  // set AverageArea(value) {
  //   if (isNaN(value) == false) {
  //     this.#AverageArea = value;
  //   } else {
  //     console.log("Value is NaN");
  //     alert("Ошибка AverageArea");
  //   }
  // }


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


// МУСОР ------------------
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
// МУСОР ------------------------
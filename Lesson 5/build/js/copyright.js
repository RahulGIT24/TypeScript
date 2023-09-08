"use strict";
// Original JS Code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear) 
// year.textContent =  thisYear
// 1st variation
// let year: HTMLElement | null = document.getElementById("year")
// let thisYear: string;
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.textContent = thisYear
//     year.setAttribute("datetime", thisYear)
// }
// 2nd variation
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.textContent = thisYear;
year.setAttribute("datetime", thisYear);

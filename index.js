// 2001 year Calendor which starts from Monday
let baseYear = { year: "2001", type: "Common-Year" };
let firstDay = "Mo";
let endDay = "Mo";

let prevYear = "2001";

let monthInfo = {
  jan: { endDate: "31" },
  feb: { endDate: "28" },
  mar: { endDate: "31" },
  apr: { endDate: "30" },
  may: { endDate: "31" },
  jun: { endDate: "30" },
  jul: { endDate: "31" },
  aug: { endDate: "31" },
  sep: { endDate: "30" },
  oct: { endDate: "31" },
  nov: { endDate: "30" },
  dec: { endDate: "31" },
};
let monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let monthMapper = {
  January: "jan",
  February: "feb",
  March: "mar",
  April: "apr",
  May: "may",
  June: "jun",
  July: "jul",
  August: "aug",
  September: "sep",
  October: "oct",
  November: "nov",
  December: "dec",
};

let weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
let commonYear = 365;
let leapYear = 366;

let requiredEndYear = "2050";

let initialDay = 0;

let weekDaysFunction = () => {
  for (let i = 0; i < 1; i++) {
    let j = 0;
    for (j; j < 7; j++) {
      console.log(weekDays[j]);
    }
    // Solution 2
    // for (let i = 0; i < totalDays; i++) {
    //   let j = 0;
    //   while (j < weekDays.length) {
    //     console.log(weekDays[j]);
    //     j++;
    //   }
    // }
  }
};

let selectColumn = (e) => {
  console.log(e.target.id);
  let element = document.getElementById(e.target.id);
  // if (e.target.click) {
  //   element.style.hov = "red";
  // } else {
  //   element.style.backgroundColor = "white";
  // }
};

let generateCalendorDates = (numberOfDays, currentMonth) => {
  let initialDate = 1;
  let date = initialDate;
  let numberOfRows = Math.ceil(numberOfDays / 7);
  if (date < numberOfDays) {
    numberOfRows += 1;
  }
  // console.log(currentMonth, numberOfDays);

  let daysCont = document.createElement("div");
  daysCont.classList.add("daysCont");
  daysCont.style.paddingLeft = "10px";
  daysCont.style.paddingRight = "10px";
  // daysCont.setAttribute('id','')
  for (let i = 0; i < numberOfRows; i++) {
    let row = document.createElement("div");
    row.setAttribute("id", `row-${i + 1}`);
    row.style.display = "flex";
    row.style.gap = "15px";
    row.style.marginTop = "15px";
    let k = 0;
    if (i === 0) {
      for (let l = 0; l < weekDays.length; l++) {
        if (weekDays[l] === firstDay) {
          k = l;
        }
      }
    }

    for (let j = 0; j < 7; j++) {
      if (j < k) {
        let column = document.createElement("div");
        column.setAttribute("id", currentMonth);
        column.style.display = "flex";
        column.style.padding = "5px";
        column.style.justifyContent = "center";
        column.style.alignItems = "center";
        column.style.textAlign = "center";
        column.style.width = "20px";
        column.style.height = "20px";
        column.style.padding = "15px";
        column.style.cursor = "pointer";
        column.style.border = " 1px solid transparent";
        row.appendChild(column);
        firstDay = weekDays[j + 1];
      } else if (date <= numberOfDays) {
        let column = document.createElement("div");
        column.classList.add("columns");
        column.setAttribute("id", date + "-" + currentMonth);
        column.style.display = "flex";
        column.style.padding = "5px";
        column.style.justifyContent = "center";
        column.style.alignItems = "center";
        column.style.textAlign = "center";
        column.style.width = "20px";
        column.style.height = "20px";
        column.style.padding = "15px";
        column.style.border = "1px solid black";
        column.style.cursor = "pointer";
        column.innerText = date;
        // console.log(date, currentMonth);
        if (column.innerText) {
          column.addEventListener("click", selectColumn);
        }
        row.appendChild(column);
        date = date + 1;
        firstDay = weekDays[j + 1];
        // console.log(firstDay, currentMonth);
      }
    }
    daysCont.appendChild(row);
  }
  return daysCont;
};

let calendorCardsCreate = (currentYear) => {
  // Here I'm creating month's card on basis of the list.

  let calendorCont = document.createElement("div");
  calendorCont.classList.add("calendorContainer");
  calendorCont.setAttribute("id", "Year " + currentYear);
  document.getElementById("mainCont").appendChild(calendorCont);

  for (let i = 0; i < monthList.length; i++) {
    let monthId = monthList[i];
    // In the below line of code I'm extracting the total number of days in month
    let monthDetails = monthMapper[monthId];
    let totalDaysOfMonth = monthInfo[monthDetails].endDate;

    let monthsCont = document.createElement("div");
    monthsCont.classList.add("monthsCont");
    monthsCont.style.minWidth = "30%";
    monthsCont.style.padding = "0px 0px 20px 0px";
    monthsCont.style.border = "1px solid black";
    monthsCont.style.borderRadius = "5px";
    monthsCont.setAttribute("id", `month-${monthId}`);

    // Here I'm inserting the month's heading in every card.
    let contHeader = document.createElement("h2");
    contHeader.classList.add("contHeader");
    contHeader.innerText = monthId + " " + currentYear;
    // contHeader.style.backgroundColor = "lightblue";
    contHeader.style.borderRadius = "5px 5px 0px 0px";
    contHeader.classList.add("pd-5");

    let daysRow = document.createElement("div");
    daysRow.classList.add("daysRow");
    for (let j = 0; j < weekDays.length; j++) {
      // Here I'm inserting weekdays.
      let day = weekDays[j];
      let days = document.createElement("h3");
      days.innerText = day;
      daysRow.appendChild(days);
    }

    // In the below function call we are updating the value of daysCont on basis of total days in month.
    let daysCont = generateCalendorDates(totalDaysOfMonth, monthId);

    monthsCont.appendChild(contHeader);
    monthsCont.appendChild(daysRow);
    monthsCont.appendChild(daysCont);
    calendorCont.appendChild(monthsCont);
  }
  // The below code is written to highlight the current date of the month.
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  if (document.getElementById("Year " + year)) {
    let currentMonth = monthList[month];
    console.log("Current Year");
    if (document.getElementById(date + "-" + currentMonth)) {
      let selectedColumn = document.getElementById(date + "-" + currentMonth);
      selectedColumn.style.backgroundColor = "black";
      selectedColumn.style.color = "white";
      selectedColumn.style.fontWeight = "600";
    }
  }
};

let currentYearHandler = (e) => {
  let yearType;
  let leapYearChecker = e % 4;
  let testObj = { 0: "Mo" };
  if (e === "2001") {
    firstDay = "Mo";
  } else {
    // Solution 1 (Self created formula).

    // for (let i = 0; i < weekDays.length; i++) {
    //   if (endDay === weekDays[i]) {
    //     let base = 4;
    //     let difference = e - baseYear.year;
    //     if (difference < 4) {
    //       let dayIndex = difference;
    //       firstDay = weekDays[i + dayIndex];
    //     } else {
    //       let division = Math.floor(difference / base);
    //       let calculate = difference + division;
    //       let dayIndex = calculate % 7;
    //       if (dayIndex === 0) {
    //         firstDay = "Mo";
    //       } else {
    //         firstDay = weekDays[i + dayIndex];
    //       }
    //     }
    //   }
    // }

    // Solution 2 (Guided by Manish Sir).

    for (let i = 0; i < weekDays.length; i++) {
      if (endDay === weekDays[i]) {
        let base = 4;
        let leapYearCount = 0;
        let difference = e - baseYear.year;

        // In the below loop I'm checking the number of leap year's in between.
        for (let j = 0; j < difference; j++) {
          let currentYear = parseInt(baseYear.year) + j;
          let leapYearCheckOperation = currentYear % base;
          if (leapYearCheckOperation === 0) {
            leapYearCount = leapYearCount + 1;
          }
        }
        let dayIndex = (difference * 365) % 7;
        let temp = dayIndex + leapYearCount;
        if (temp % 7 === 0) {
          // Here I'm updating the first day.
          firstDay = "Mo";
        } else {
          // Here I'm updating the first day.
          firstDay = weekDays[i + (dayIndex + leapYearCount)];
        }
      }
    }
  }

  if (leapYearChecker > 0) {
    yearType = commonYear;
    let monthId = "February";
    let monthSelect = monthMapper[monthId];
    let monthSelected = monthInfo[monthSelect];
    monthSelected.endDate = "28";
    calendorCardsCreate(e);
    console.log("It's a Common Year.");
  } else {
    yearType = leapYear;
    for (let i = 0; i < monthList.length; i++) {
      if (monthList[i] === "February") {
        let monthId = monthList[i];
        let monthSelect = monthMapper[monthId];
        let monthSelected = monthInfo[monthSelect];
        monthSelected.endDate = "29";
      }
    }
    calendorCardsCreate(e);
    console.log("It's a Leap Year.");
  }
};

let defaultCalendorYear = (() => {
  calendorCardsCreate(baseYear.year);
})();

let calendorYearSelection = () => {
  let year = document.getElementById("yearSelector");
  if (year.selectedIndex >= 0) {
    let requiredYearCalendor = year.options[year.selectedIndex].value;
    if (prevYear !== requiredYearCalendor) {
      let removeCont = document.getElementById("Year " + prevYear);
      removeCont.parentNode.removeChild(removeCont);
      prevYear = requiredYearCalendor;
      currentYearHandler(requiredYearCalendor);
    }
  }
};

let yearSelectionhandler = (() => {
  if (requiredEndYear > baseYear.year) {
    let requiredYears = requiredEndYear;
    let differenceInYears = requiredYears - baseYear.year;
    let currentYear = baseYear.year;
    document
      .getElementById("yearSelector")
      .addEventListener("change", calendorYearSelection);
    for (let i = 0; i <= differenceInYears; i++) {
      let addYearOptions = document.createElement("option");
      addYearOptions.value = currentYear;
      addYearOptions.innerText = currentYear;
      addYearOptions.setAttribute("id", currentYear);
      // addYearOptions.addEventListener("click", calendorYearSelection);
      let yearSelector = document.getElementById("yearSelector");
      yearSelector.appendChild(addYearOptions);
      currentYear = +currentYear + 1;
    }
  } else {
    let currentYear = baseYear.year;
    console.log("success-2");
  }
})();

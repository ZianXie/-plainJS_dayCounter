console.log("linked");
import { sortArr, saveArr } from "./2s.js";
import { render } from "./render.js";

// read dates as an array of objects from localStorage
const myPreviousDates = JSON.parse(localStorage.getItem("data"));

// get DOM of ul, day selector, label, add button

const newLabelEl = document.getElementById("new-label");
const datePickerEl = document.getElementById("day-picker");
const addBtn = document.getElementById("add-btn");
const delBtn = document.getElementById("del-btn");
const delWhat = document.getElementById("del-picker");
let currentPickedDate = "";
// declare a variable to store date array
let currentDateArr = [];

//initialization
currentDateArr = myPreviousDates;
//prevent currentDateArr from being null
if (currentDateArr === null) {
    currentDateArr = [];
}

//sort the array currentDateArr before rendering
render(currentDateArr);

// to get date value from day selector DOM when it changes
datePickerEl.addEventListener("change", function () {
    currentPickedDate = new Date(datePickerEl.value + " 0:0:0");
});

// push new object into current dates array and save the events after each click on #add-btn and then render
addBtn.addEventListener("click", function () {
    if ((currentPickedDate === "") | (newLabelEl.value === "")) {
        return;
    } else {
        //turn string into object
        const myString = `{ "label" : "${newLabelEl.value}", "date" : "${currentPickedDate}" }`;
        const newObject = JSON.parse(myString);
        // push the new object into the current array
        currentDateArr.push(newObject);
        // refresh the document.
        // render(currentDateArr)
        // save to local storage
        // localStorage.setItem("data", JSON.stringify(currentDateArr))

        sortArr(currentDateArr);
        saveArr(currentDateArr);
        render(currentDateArr);
    }
    newLabelEl.value = "";
    datePickerEl.value = "";
});

//the delete button
delBtn.addEventListener("dblclick", function () {
    if (delWhat.selectedIndex) {
        currentDateArr.splice(delWhat.selectedIndex, 1);
        saveArr(currentDateArr);
        render(currentDateArr);
        delWhat.value = "";
    }
});

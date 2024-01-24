const convertEl = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const weightEl = document.getElementById("weight-el")
const lengthMultiplier = 3.281
const volumeMultiplier = 0.264
const weightMultiplier = 2.204

function calculation(inputValue, dimensionRatio) {
    multipliedValue = inputValue * dimensionRatio
    dividedValue = inputValue / dimensionRatio
    }

convertEl.addEventListener("click", function() {
    let inputEl = document.getElementById("input-el").value 
    calculation(inputEl, lengthMultiplier)
    lengthEl.innerHTML = `<p>${inputEl} meters = ${multipliedValue.toFixed(3)} feet | ${inputEl} feet = ${dividedValue.toFixed(3)} meters</p>`
    calculation(inputEl, volumeMultiplier)
    volumeEl.innerHTML = `<p>${inputEl} liters = ${multipliedValue.toFixed(3)} gallons | ${inputEl} gallons = ${dividedValue.toFixed(3)} liters</p>`
    calculation(inputEl, weightMultiplier)
    weightEl.innerHTML = `<p>${inputEl} kilos = ${multipliedValue.toFixed(3)} pounds | ${inputEl} pounds = ${dividedValue.toFixed(3)} kilos</p>`


})

// var toggle = document.getElementById("theme-toggle");

// var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
// if (storedTheme)
//     document.documentElement.setAttribute('data-theme', storedTheme)


// toggle.onclick = function() {
//     var currentTheme = document.documentElement.getAttribute("data-theme");
//     var targetTheme = "light";

//     if (currentTheme === "light") {
//         targetTheme = "dark";
//     }

//     document.documentElement.setAttribute('data-theme', targetTheme)
//     localStorage.setItem('theme', targetTheme);
// };
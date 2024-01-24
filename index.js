const convertEl = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const weightEl = document.getElementById("weight-el")



function calculation(inputValue, dimensionRatio) {
    multipliedValue = inputValue * dimensionRatio
    dividedValue = inputValue / dimensionRatio
    //return multipliedValue, dividedValue 
    console.log(multipliedValue, dividedValue)
    }

convertEl.addEventListener("click", function() {
    let inputEl = document.getElementById("input-el").value
    calculation(inputEl, 3.281)
    lengthEl.innerHTML = `<p>${inputEl} meters = ${multipliedValue.toFixed(3)} feet | ${inputEl} feet = ${dividedValue.toFixed(3)} meters</p>`

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
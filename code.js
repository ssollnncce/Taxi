var slider = document.getElementById("fader");
var output = document.getElementById("value");

output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = slider.value;
    calculateCost();
}

slider.addEventListener("mousemove", function(){
    var x = slider.value * 8;
    var color = 'linear-gradient(90deg, rgb(255, 132, 0)' + x + '%, rgb(290, 255, 255)' + x + '%)';
    slider.style.background = color;
})

var sliderd = document.getElementById("sldays");
var outputd = document.getElementById("days");

outputd.innerHTML = sliderd.value; 

sliderd.oninput = function() {
    outputd.innerHTML = sliderd.value;
    calculateCost();
}

sliderd.addEventListener("mousemove", function(){
    var y = sliderd.value * 14;
    var colord = 'linear-gradient(90deg, rgb(255, 132, 0)' + y + '%, rgb(290, 255, 255)' + y + '%)';
    sliderd.style.background = colord;
})

var sliderl = document.getElementById("sllitr");
var outputl = document.getElementById("litr");

outputl.innerHTML = sliderl.value; 

sliderl.oninput = function() {
    outputl.innerHTML = sliderl.value;
    calculateCost();
}

sliderl.addEventListener("mousemove", function(){
    var t = sliderl.value * 5;
    var colorl = 'linear-gradient(90deg, rgb(255, 132, 0)' + t + '%, rgb(290, 255, 255)' + t + '%)';
    sliderl.style.background = colorl;
})


var cost = document.getElementById("salary");

function calculateCost() {
    cost.innerHTML = ((slider.value * sliderd.value * 200) - (sliderl.value * 50))  * 4 + "₽";
}

calculateCost();


const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const checkbox = document.getElementById('checkbox');

function clearFunction() {
    if (checkbox.checked){
        nameInput.value = '';
        phoneInput.value = '';
    }
}
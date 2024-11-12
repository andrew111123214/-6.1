let inputOne = document.querySelector('.inputOne');
const buttonOne = document.querySelector('.buttonOne');
let inputTwo = document.querySelector('.inputTwo');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
function enterOne()
{
    console.log(inputOne.value);
}
function enterTwo()
{
    console.log(inputTwo.value);
}
function result()
{
    console.log(inputOne.value*inputTwo.value*0.5);
    alert("Площадь треугольника = ",inputOne.value*inputTwo.value*0.5);
    inputOne.value = '';
    inputTwo.value = '';
}
buttonOne.addEventListener('click', enterOne);
buttonTwo.addEventListener('click', enterTwo);
buttonThree.addEventListener('click', result);
let inputOne = document.querySelector('.inputOne');
const buttonOne = document.querySelector('.buttonOne');
let inputTwo = document.querySelector('.inputTwo');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
function enterOne()
{
    console.log(inputOne.value);
    let a = inputOne.value;
    inputOne.value = ''
}
function enterTwo()
{
    console.log(inputTwo.value);
    let h = inputTwo.value;
    inputTwo.value = '';
}
function result()
{
    console.log(a*h*0.5);
}
buttonOne.addEventListener('click', enterOne);
buttonTwo.addEventListener('click', enterTwo);
buttonThree.addEventListener('click', result);
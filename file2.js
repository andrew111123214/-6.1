let inputOne = document.querySelector('.inputOne');
const buttonOne = document.querySelector('.buttonOne');
let inputTwo = document.querySelector('.inputTwo');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
buttonOne.addEventListener('click', enterOne);
function enterOne()
{
    console.log('click');
}
buttonTwo.addEventListener('click', enterTwo);
function enterTwo()
{
    console.log('click');
}
buttonThree.addEventListener('click', result);
function result()
{
    console.log('click');
}
let inputOne = document.querySelector('.inputOne');
const buttonOne = document.querySelector('.buttonOne');
let inputTwo = document.querySelector('.inputTwo');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
function enterOne(inputOne)
{
    console.log(inputOne);
}
function enterTwo()
{
    console.log('click');
}
function result()
{
    console.log('click');
}
buttonOne.addEventListener('click', enterOne);
buttonTwo.addEventListener('click', enterTwo);
buttonThree.addEventListener('click', result);
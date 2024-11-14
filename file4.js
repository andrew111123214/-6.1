var inputOne = document.querySelector('.inputOne');
var inputTwo = document.querySelector('.inputTwo');
const button = document.querySelector('button');
function square()
{
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);
    console.log(valueTwo*valueOne*0.5);
}
button.addEventListener('click',square);

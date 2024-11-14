var inputOne = document.querySelector('.inputOne');
var inputTwo = document.querySelector('.inputTwo');
const button = document.getElementById('btn');
function square()
{
    let valueOne = parseFloat(inputOne.value);
    let valueTwo = parseFloat(inputTwo.value);
    console.log(valueTwo*valueOne*0.5);
}
button.addEventListener('click',square);

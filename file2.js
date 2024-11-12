let input1 = document.querySelector('.input1');
let button1 = document.querySelector('.button1');
let input2 = document.querySelector('.input2');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
function inputValue()
{
    console.log(input1.value);
}
function inputValue1()
{
    console.log(input2.value);
}
function square()
{
    let value1 = input1.value;
    let value2 = input2.value;
    console.log(value1*value2*0.5);
}
button1.addEventListener('click', inputValue);
button2.addEventListener('click', inputValue1);
button3.addEventListener('click', square);
let input1 = document.querySelector('.input1');
let button1 = document.querySelector('.button1');
let input2 = document.querySelector('.input2');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
button1.addEventListener('click', inputValue);
button2.addEventListener('click', inputValue1);
button3.addEventListener('click', square);
function inputValue(input1)
{
    console.log(input1.value);
}
function inputValue1(input2)
{
    console.log(input2.value);
}
function square(input1,input2)
{
    console.log(input1*input2*0.5);
}

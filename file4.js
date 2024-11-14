var inputOne = document.querySelector('.inputOne');
var inputTwo = document.querySelector('.inputOne');
const button = document.querySelector('button');
function square()
{
    console.log(inputOne.value*inputTwo.value*0,5);
}
button.addEventListener('click',()=>(inputOne.value*inputTwo.value*0,5));

const formElement = document.forms.main;
const formElementInputOne = formElement.inputOne
const formElementInputTwo = formElement.inputTwo;
const button = document.querySelector('button[name="btn"]');
function square()
{
    valueOne = parseFloat(formElementInputOne.value);
    valueTwo = parseFloat(formElementInputTwo.value);
    let sqare = valueOne*valueTwo*0.5
    console.log(sqare);
    alert("Площадь треугольника = "+ (sqare));
    formElementInputOne.value = "";
    formElementInputTwo.value = "";
}
console.log(formElement.elements);
button.addEventListener('click',square);
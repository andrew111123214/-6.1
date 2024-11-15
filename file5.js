const formElement = document.forms.main;
const formElementInputOne = formElement.inputOne
const formElementInputTwo = formElement.inputTwo;
const button = document.querySelector('button[name="btn"]');
function square(a,h)
{
    let sqare = a*h*0.5;
    console.log(sqare);
    alert("Площадь треугольника = "+ (sqare)+" см2");
    formElementInputOne.value = "";
    formElementInputTwo.value = "";
}
console.log(formElement.elements);
button.addEventListener('click',function()
{
    a=parseFloat(formElementInputOne.value);
    h= parseFloat(formElementInputTwo.value);
    square(a,h);
}
    );
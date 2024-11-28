const formElement = document.forms.main;
const formElementInputOne = formElement.inputOne
const formElementInputTwo = formElement.inputTwo;
const button = document.querySelector('button[name="btn"]');
function square(obj)
{
    var a = parseFloat(formElementInputOne.value); 
    var h = parseFloat(formElementInputTwo.value); 
    var sqare = a*h*0.5;
    console.log(sqare);
    alert("Площадь треугольника = "+ (sqare)+" см2");
    formElementInputOne.value = "";
    formElementInputTwo.value = "";
}
console.log(formElement.elements);
button.addEventListener('click',function()
{
    square(formElement.name);
}
    );
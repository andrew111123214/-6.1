const formElement = document.forms.main;
const formElementSelect = formElement.elements['select'];
const formElementInput = formElement.elements['input'];
const button = document.querySelector('button[name="btn"]');
console.log(formElement.elements);
function fun()
{
    let k = "Выбранная форма:";
    let m="";
    m= formElementSelect.selectedIndex;
    k = k+formElementSelect.options[m].value;
    formElementInput.value = k;
}
button.addEventListener("click",fun);
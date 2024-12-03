const formElement = document.forms.main;
const formElementSelect = formElement.elements['select'];
const formElementInput = formElement.elements['input'];
const button = document.querySelector('button[name="btn"]');
console.log(formElement.elements);
function fun()
{
    let k = "Выбранная форма:";
    for (let i = 0; i < formElementSelect.length; i++) 
        {
        if(formElementSelect[i].selected)
            {
                k= k+(formElementSelect[i].value);
            }
        }
        formElementInput.value = k;
}
button.addEventListener("click",fun);

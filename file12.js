const formElement = document.forms.main;
const formElementCheckBox = formElement.elements['check'];
const button = document.querySelector('button[name="btn"]');
console.log(formElement.elements);
function fun()
{
    let k=0;
    for (let i=0; i < formElementCheckBox.length; i++) 
        {
            if(formElementCheckBox[i].checked)
                {
                    k += Number(formElementCheckBox[i].value);
                }    
        }
        alert("Ваша зарплата составит:" + k + "y.e.")
}
for (let i = 0; i < formElementCheckBox.length; i++) 
    {
    button.addEventListener("click",fun);
}
const formElement = document.forms.main;
const formElementCheckBox = formElement.elements['check'];
const button = document.querySelector('button[name="btn"]');
console.log(formElement.elements);
function fun()
{
    let k=0;
    let counter = 0;
    for (let i=0; i < formElementCheckBox.length; i++) 
        {
            if(formElementCheckBox[i].checked)
                {
                    k += Number(formElementCheckBox[i].value);
                    counter++;
                }  
        }
        if (counter===0) 
            {
                alert("Вы настолько бездарны, что не знаете ни одного языка(");
        }
        else
        {
        alert("Ваша зарплата составит:" + k + "y.e.");
        }
}
button.addEventListener("click",fun);
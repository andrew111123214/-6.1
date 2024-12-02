const formElement = document.forms.main;
const formElementRadio = formElement.elements['radio'];
const formElementReset = formElement.reset;
const button = document.querySelector('button[name="btn"]');
console.log(formElement.elements);
button.addEventListener('click',function()
{
    let k;
    for (let i=0; i < formElementRadio.length; i++) 
        {
            if(formElementRadio[i].checked)
                {
                k = formElementRadio[i].value;
                }
        }
        if(k)
            {
                alert("Выбрана форма:" +k);

            }
        else
        {
            alert("Выберете хотя бы одно значение!");
        }
    }
);
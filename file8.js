const formElement = document.forms.main;
const formElementRadio = formElement.elements['radio'];
const formElementRadio_1 = formElement.elements['radio_1'];
const button = document.querySelector('button[name="btn"]');
const image = document.querySelector('img');
console.log(formElement.elements);
function activity()
{

    for (let i = 0; i < formElementRadio.length; i++) 
        {
            if (formElementRadio[i].checked) 
                {
                image.style.align=formElementRadio[i].value.toLowerCase();
                }
        }
    for (let j = 0; j<formElementRadio_1.length; j++) 
        {
            if(formElementRadio_1[j].cheсked)
                {
                    image.style.verticalAlign=formElementRadio_1[j].value.toLowerCase();
                }

        }
}
button.addEventListener('click',function()
{
    activity();
}
);
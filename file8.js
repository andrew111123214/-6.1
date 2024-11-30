const formElement = document.forms.main;
const formElementRadio = formElement.elements['radio'];
const formElementRadio_1 = formElement.elements['radio_1'];
const button = document.querySelector('button[name="btn"]');
console.log(formElement.elements);
function activity()
{
    let k;
    let m;
    for (let i = 0; i < formElementRadio.length; i++) 
        {
            if (formElementRadio[i].checked) 
                {
                k= formElementRadio[i].value;
            }
            for (let i = 0; i<formElementRadio_1.length; i++) 
                {
                if(formElementRadio_1[i].cheked)
                {
                    m = formElementRadio_1[i].valign;
                }
        }
    }

}
const formElement = document.forms.main;
const formElementRadio = formElement.elements['Myradio'];
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.textArea;
console.log(formElement.elements);
function fun()
{
    let k;
    for (let i=0; i < formElementRadio.length; i++) 
        {
            if(formElementRadio[i].checked)
                {
                k =("Свойство value:" + formElementRadio[i].value +"\n\r"+"Свойство name:" + formElementRadio[i].name +"\n\r"+"Свойство type:" + formElementRadio[i].type);
                }
                formElementTextArea.value = k;
        }
}
for (let i = 0; i < formElementRadio.length; i++) 
    {
    formElementRadio[i].addEventListener('change', fun);
}
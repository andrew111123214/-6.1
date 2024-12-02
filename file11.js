const formElement = document.forms.mainTwo;
const formElementCheckBox = formElement.elements['check'];
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.elements.textArea;
console.log(formElement.elements);
function fun()
{
    let k="";
    for (let i=0; i < formElementCheckBox.length; i++) 
        {
            if(formElementCheckBox[i].checked)
                {
                    k =("Свойство value:" + formElementCheckBox[i].value +
                        "\n"+"Свойство name:" + formElementCheckBox[i].name +
                        "\n"+"Свойство type:" + formElementCheckBox[i].type);
                }
        }
        formElementTextArea.value =("Свойства выбранного флажка"+"\n"+ k);
}
for (let i = 0; i < formElementCheckBox.length; i++) 
    {
    formElementCheckBox[i].addEventListener("change",fun);
}
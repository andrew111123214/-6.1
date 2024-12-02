const formElement = document.forms.main;
const formElementCheckBox = formElement.elements['check'];
const button = document.querySelector('button[name="btn"]');
const formElementTextArea = formElement.textArea;
console.log(formElement.elements);
function fun()
{
    let k;
    for (let i=0; i < formElementCheckBox.length; i++) 
        {
            if(formElementCheckBox[i].checked)
                {
                k +=formElementCheckBox[i].value + "\n";
                }
        }
        formElementTextArea.value = k;
}
for (let i = 0; i < formElementCheckBox.length; i++) 
    {
    formElementCheckBox[i].addEventListener("change",fun);
}
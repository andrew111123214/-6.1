const formElement = document.forms.main;
const formElementRadio_1 = formElement.radio_1;
const formElementRadio_2 = formElement.radio_2;
const formElementRadio_3 = formElement.radio_3;
const formElementRadio_4 = formElement.radio_4;
const formElementReset = formElement.reset;
const button = document.querySelector('button[name="btn"]');
console.log(formElement.elements);
function fun()
{
    var k;
    if (a.formElementRadio_1.checked) 
        {
            k = formElementRadio_1.value;
        } 
    if(a.formElementRadio_2.checked)
        {
            k = formElementRadio_2.value;
        }
    if(a.formElementRadio_3.checked)
        {
            k = formElementRadio_3.value;
        }
    if(a.formElementRadio_4.checked)
        {
            k = formElementRadio_4.value;
        }
        alert("Форма витража - "+ fun());
}
button.addEventListener('click',function()
{
    fun();
}
);
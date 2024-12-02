const formElement = document.forms.main;
const formElementCheckBox1 = document.getElementById('y1');
const formElementCheckBox2 = document.getElementById('y2');
const formElementCheckBox3 = document.getElementById('y3');
const formElementCheckBox4 = document.getElementById('y4');
const formElementCheckBox5 = document.getElementById('y5');
const formElementCheckBox6 = document.getElementById('y6');
const button = document.querySelector('button[name="btn"]');
console.log(formElement.elements);
function fun()
{
    let k=0;
    if (formElementCheckBox1.checked) 
        {
            k+=Number(formElementCheckBox1.value);
        }
        if (formElementCheckBox2.checked) 
            {
                k+=Number(formElementCheckBox2.value);
            }
            if (formElementCheckBox3.checked) 
                {
                    k+=Number(formElementCheckBox3.value);
                }
                if (formElementCheckBox4.checked) 
                    {
                        k+=Number(formElementCheckBox4.value);
                    }
                    if (formElementCheckBox5.checked) 
                        {
                            k+=Number(formElementCheckBox5.value);
                        }
                        if (formElementCheckBox6.checked) 
                            {
                                k+=Number(formElementCheckBox6.value);
                            }
                            alert("Ваша зарплата:" + k);
}
button.addEventListener("click",fun);
const formElement = document.forms.main;
const formElementRadio = formElement.elements['radio'];
const formElementRadio_1 = formElement.elements['radio_1'];
const button = document.querySelector('button[name="btn"]');
const image = document.getElementById('image');
    function activity() {
            for (let i = 0; i < formElementRadio.length; i++) {
                if (formElementRadio[i].checked) {
                    image.style.textAlign = formElementRadio[i].value.toLowerCase();
                    image.style.margin = formElementRadio[i].value.toLowerCase() === 'left' ? '0' : '0 auto';
                }
            }
            for (let j = 0; j < formElementRadio_1.length; j++) {
                if (formElementRadio_1[j].checked) {
                    image.style.verticalAlign = formElementRadio_1[j].value.toLowerCase();
                }
            }
        }
button.addEventListener('click', function() {
activity();
});
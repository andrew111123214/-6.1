let input = document.querySelector('input');
let button =  document.querySelector('button');
function enter()
{
    let a = parseInt(input.value);
    switch (a) 
    {
        case 1:alert("Понедельник")
        
            break;
        case 2:alert("Вторник")
        
            break;
        case 3:alert("Среда")
        
            break;
        case 4:alert("Четверг")
        
            break;
        case 5:alert("Пятница")
    
            break;
        case 6:alert("Суббота")
        
            break;
        case 7:alert("Воскресенье")
        
            break;
        default:alert("Ошиббка в номере дня")
            break;
    }
    
}
button.addEventListener('click',enter);
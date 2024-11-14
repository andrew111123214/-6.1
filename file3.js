var input = document.querySelector('.inputIn');
const buttonOne = document.querySelector('.btnOne');
var inputRows = document.querySelector('.inputRows');
const buttonTwo = document.querySelector('.btnTwo');
var inputCols = document.querySelector('.inputCols');
const buttonThree = document.querySelector('.btnThree');
const buttonFour = document.querySelector('.createTable');
var elem1 = document.querySelector('#elem');
function enterBtnOne()
{
    value = parseInt(input.value);
    if(value<0 || value>10) 
        {
            alert("Вы ввели неверное значение!");
        }
    console.log(input.value);
}
function enterBtnTwo()
{
    console.log(inputRows.value);
}
function enterBtnThree()
{
    console.log(inputCols.value);
}
function createTable(parent,cols,rows)
{
    const pastTable = parent.querySelector('table');
    if (pastTable) 
        {
        parent.removeChild(pastTable);
    }
    cols = parseInt(cols);
    rows = parseInt(rows);
    let table =  document.createElement('table');
    for (var i = 1; i <= rows; i++) 
        {
            var tr =  document.createElement('tr');

        for (var j = 1; j <=cols; j++) 
        {
            var td =  document.createElement('td');
            let value = i*j;
            if (i === j) 
                {
                td.style.backgroundColor = 'orange';
                }
            td.innerText = value ;
            table.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
    input.value = '';
    inputRows.value= '';
    inputCols.value= '';
}
buttonOne.addEventListener('click',enterBtnOne);
buttonTwo.addEventListener('click',enterBtnTwo);
buttonThree.addEventListener('click',enterBtnThree);
buttonFour.addEventListener('click', ()=>createTable(elem1,inputCols.value,inputRows.value));
value = parseInt(input.value);
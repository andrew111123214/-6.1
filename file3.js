var input = document.querySelector('.inputIn');
const button = document.querySelector('.btn1');
var inputRows = document.querySelector('.inputRows');
const button1 = document.querySelector('.btn2');
var inputCols = document.querySelector('.inputCols');
const button2 = document.querySelector('.btn3');
const button3 = document.querySelector('.createTable');
var elem = document.querySelector('#elem');
createTable(elem, inputCols.value, inputRows.value)
function enterBtn1()
{
    console.log();
}
function enterBtn2()
{
    console.log(inputRows.value);
}
function enterBtn3()
{
    console.log(inputCols.value);
}
function createTable(parent,cols,rows)
{
    cols = parseInt(cols);
    rows = parseInt(rows);
    let table =  document.createElement('table');
    for (var i = 0; i < rows; i++) 
        {
            var tr =  document.createElement('tr');

        for (var j = 0; j <cols; j++) 
        {
            var td =  document.createElement('td');
            table.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}
button.addEventListener = ('click',enterBtn1);
button1.addEventListener = ('click',enterBtn2);
button2.addEventListener = ('click',enterBtn3);
button3.addEventListener = ('click', ()=>createTable(elem,inputCols.value,inputRows.value));
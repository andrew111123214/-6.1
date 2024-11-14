var input = document.querySelector('.inputIn');
const button = document.querySelector('.btn1');
var inputRows = document.querySelector('.inputRows');
const button1 = document.querySelector('.btn2');
var inputCols = document.querySelector('.inputCols');
const button2 = document.querySelector('.btn3');
const button3 = document.querySelector('.createTable');
var elem1 = document.querySelector('#elem');
function enterBtnOne()
{
    console.log(input.value);
}
function enterBtnTwo()
{
    console.log(inputRows.value);
}
function enterBtnTree()
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
button.addEventListener = ('click',enterBtnOne);
button1.addEventListener = ('click',enterBtnTwo);
button2.addEventListener = ('click',enterBtnTree);
button3.addEventListener = ('click', ()=>createTable(elem1,inputCols.value,inputRows.value));
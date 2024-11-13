var input = document.querySelector('.inputIn');
const button = document.querySelector('.btn1');
var inputRows = document.querySelector('.inputRows');
const button1 = document.querySelector('.btn2');
var inputCols = document.querySelector('.inputCols');
const button2 = document.querySelector('.btn3');
const button3 = document.querySelector('.createTable');
button.addEventListener = createTable();
button1.addEventListener = enterBtn1();
button2.addEventListener = enterBtn2();
button3.addEventListener = enterBtn3();

var elem = document.querySelector('#elem');
function enterBtn1()
{
    console.log(input.value);
}
function enterBtn2()
{
    console.log(inputRows.value);
}
function enterBtn3()
{
    console.log(inputCols.value);
}
createTable(elem,inputCols.value,inputRows.value);
function createTable(parent,cols,rows)
{
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
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
buttonOne.addEventListener = ('click',enterBtnOne);
buttonTwo.addEventListener = ('click',enterBtnTwo);
buttonThree.addEventListener = ('click',enterBtnThree);
buttonFour.addEventListener = ('click', ()=>createTable(elem1,inputCols.value,inputRows.value));
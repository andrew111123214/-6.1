var input = document.querySelector('input');
const button = document.querySelector('button');
var inputRows = document.querySelector('.inputRows');
const button1 = document.querySelector('.btn1');
var inputCols = document.querySelector('.inputCols');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.createTable');
button3.addEventListener = createTable();
var elem = document.querySelector('#elem');
function btn1()
{

}
createTable(elem,inputCols,inputRows);
function createTable(elements,cols,rows)
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
    elements.appendChild(table);
}
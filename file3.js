var input = document.querySelector('input');
const button = document.querySelector('button');
var input = document.querySelector('inputRows');
const button1 = document.querySelector('.btn1');
var input = document.querySelector('.inputCols');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.createTable');
button.addEventListener = createTable();
var elem = document.querySelector('#elem');
function btn1()
{

}
createTable(elem,cols,rows);
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
    parent.appendChild(table);
}
var input = document.querySelector('input');
const button = document.querySelector('button');
var input = document.querySelector('inputIn');
const button1 = document.querySelector('.btn1');
var input = document.querySelector('.inputIn1');
const button2 = document.querySelector('.btn2');
button.addEventListener = createTable();
var elem = document.querySelector('#elem');
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
}
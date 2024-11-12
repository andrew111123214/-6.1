var input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener = createTable();
var elem = document.querySelector('#elem');
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
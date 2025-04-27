const students=['Omar','Mohammad','Aziz','Baraa']

const table = document.getElementById('students')

for(let studentName of students){
    table.innerHTML += `<tr><td>${studentName}</td></tr>`
}


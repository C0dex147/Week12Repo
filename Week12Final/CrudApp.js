let selectedRow = null;

function onFormSubmit(e){
    event.preventDefault();
    let formData = readFormData();
    if(selectedRow === null){
        InsertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();

}

//Retrieve Data
function readFormData(){
    let formData= {};
    formData['racerName'] = document.getElementById('racerName').value;
    formData['carYear'] = document.getElementById('carYear').value;
    formData['carMake'] = document.getElementById('carMake').value;
    formData['carModel'] = document.getElementById('carModel').value;
    return formData;

}

//Insert Data

function InsertNewRecord(data){
    let table = document.getElementById('raceList').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.racerName;
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.carYear;
     let cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.carMake;
    let cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.carModel;
    let cell5 = newRow.insertCell(4);
         cell5.innerHTML = `<button onClick = 'onEdit(this)' >Edit</button> <button onClick = 'onDelete(this)'>Delete</button>`;
}

//Edit Data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('racerName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('carYear').value = selectedRow.cells[1].innerHTML;
    document.getElementById('carMake').value = selectedRow.cells[2].innerHTML;
    document.getElementById('carModel').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.racerName;
    selectedRow.cells[1].innerHTML = formData.carYear;
    selectedRow.cells[2].innerHTML = formData.carMake;
    selectedRow.cells[3].innerHTML = formData.carModel;

}

//Delete Data

function onDelete(td){
    if(confirm('Do you want to delete this racer?')){
        row = td.parentElement.parentElement;
        document.getElementById('raceList').deleteRow(row.rowIndex)
    }
    resetForm()
}

function resetForm(){
    document.getElementById('racerName').value = '';
    document.getElementById('carYear').value = '';
    document.getElementById('carMake').value = '';
    document.getElementById('carModel').value = '';
}

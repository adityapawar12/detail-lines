
var dataArray = []

$(document).ready(function () {
    
    $('#date-id').on("keyup change", function () {
        
    
    var dobYear = new Date($('#date-id').val());

    console.log();
    
    var currYear = new Date().getFullYear();
    
    
    var year = dobYear.getFullYear();
    var ageValue = currYear - year;
    console.log(year);
        console.log(dobYear, $('#date-id').val())

        $('#age-id').val(ageValue);

    });

});

function renderTable(data) {
    var htmlCode = ""
    for (index = 0; index < data.length; index++) {
    
        htmlCode = htmlCode +"<tr scope='col' class='table-row'><td>"+(index+1)+"</td><td>"+data[index].firstName+" "+data[index].lastName+"</td><td>"+data[index].DoB+"</td><td>"+data[index].Age+"</td><td>"+data[index].Mobile+"</td><td>"+data[index].Email+"</td><td>"+data[index].Password+"</td><td><button type='button' onclick='deleteRecord("+index+")' id='delete-button' class='btn btn-outline-primary'>Delete Entry "+(index+1)+"</button></td><td><button type='button' onclick='editRecord("+index+")' id='edit-button' class='btn btn-outline-primary'>Edit Entry "+(index+1)+"</button></td></tr>"

        console.log("TRRRRRRRRRRRRRRRRRRRRRRRRRR", htmlCode);
        
    }
    $('#table-data').html(htmlCode); 
}

$('form').submit(function (e) {
    
    e.preventDefault();
    console.log($('#hidden-input').val());

    if ($('#hidden-input').val() == "") {

        var obj = {
            'firstName' : $('#fName').val(),
            'lastName' : $('#lName').val(),
            'DoB' : $('#date-id').val(),
            'Age' : $('#age-id').val(),
            'Mobile' : $('#mob-id').val(),
            'Email' : $('#mail-id').val(),
            'Password' : $('#pass-id').val()
            }
    
        dataArray.push(obj)
    
        renderTable(dataArray);
    
        $('#main-form').trigger('reset');
    } else {
        
        for (let index = 0; index < dataArray.length; index++) {
        if (index == $('#hidden-input').val()) {

            console.log("nsn",dataArray[index]);
            dataArray[index].firstName =  $('#fName').val();
            dataArray[index].lastName = $('#lName').val();
            dataArray[index].DoB = $('#date-id').val();
            dataArray[index].Age = $('#age-id').val();
            dataArray[index].Mobile = $('#mob-id').val();
            dataArray[index].Email = $('#mail-id').val();
            dataArray[index].Password = $('#pass-id').val();

            
        renderTable(dataArray);
        }
   
        }

    }
})

function deleteRecord(id) {
    console.log(id);
    dataArray.splice(id, 1);

    renderTable(dataArray);

}

function editRecord(id) {
    console.log(id);

    $('#hidden-input').val(id);

    for (let index = 0; index < dataArray.length; index++) {
        if (index === id) {
            $('#fName').val(dataArray[index].firstName);
            $('#lName').val(dataArray[index].lastName);
            $('#date-id').val(dataArray[index].DoB);
            $('#age-id').val(dataArray[index].Age);
            $('#mob-id').val(dataArray[index].Mobile);
            $('#mail-id').val(dataArray[index].Email);
            $('#pass-id').val(dataArray[index].Password); 
        }
        
    }

    

}
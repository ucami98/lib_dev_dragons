document.getElementById("btnCarro").addEventListener("click", function () {
  var libro1 = document.getElementById("ilibro1").value;
  var libro2 = document.getElementById("ilibro2").value;
  var libro3 = document.getElementById("ilibro3").value;
  var libro4 = document.getElementById("ilibro4").value;
localStorage.setItem("libros", [libro1,libro2,libro3,libro4]);
})

document.getElementById("btnUpdt").addEventListener("click", function () {
 var book = localStorage.getItem("libros") ;
 console.log(book);
 var array = book.split(",");

 
 var precioLibro1 = (parseInt(array[0])*90000)
 var precioLibro2 = (parseInt(array[1])*95000)
 var precioLibro3 = (parseInt(array[2])*97000)
 var precioLibro4 = (parseInt(array[3])*35000)
 var precioTotal = (precioLibro1+precioLibro2+precioLibro3+precioLibro4)
 let pTable = document.createElement('table');
 let pThead = document.createElement('thead');
 let pTbody = document.createElement('tbody');
 var Table = document.getElementById("data");


 pTable.appendChild(pThead);
 pTable.appendChild(pTbody);
 
 // Adding the entire table to the body tag
 document.getElementById('body').appendChild(pTable);
// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Libro";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Cantidad";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Precio";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Total";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
pThead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Code Complete";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = array[0];
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "$90.000";
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "$"+precioLibro1;

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
pTbody.appendChild(row_2);


// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Code Complete 2";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = array[1];
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "$95.000";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "$"+precioLibro2;

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
pTbody.appendChild(row_3);


// Creating and adding data to fourth row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "The Pragmatic Programmer";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = array[2];
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = "$97.000";
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "$"+precioLibro3;

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
pTbody.appendChild(row_4);

// Creating and adding data to fifth row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Ingenieria de Software";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = array[3];
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = "$35.000";
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = "$"+precioLibro4;

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
pTbody.appendChild(row_5);

var pElement2 = document.getElementById("data2");
pElement2.innerHTML = "El precio total de su compra es de: $"+precioTotal+ "<br>";

document.getElementById("data").reset();

})

document.getElementById("btnPago").addEventListener("click", function(){
  alert("su pago se ha completado")
    window.location.href = 'http://127.0.0.1:5500/suscripcion.html';
    })

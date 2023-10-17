function js_add_rows() {

    let tabela = document.getElementById("sampleTable");
    let quantidade = document.getElementById("txtNumRows").value;

     if (quantidade >= 1 && quantidade <= 10) {
         for(let i = 1; i <= quantidade; i++) {
             var row = tabela.insertRow(-1);
             var um = row.insertCell(0);
             var dois = row.insertCell(1)
             um.innerHTML = "Row? cell1";
             dois.innerHTML = "Row? cell2"; 
         }
     } else {
         document.getElementById("alert").innerHTML = "Deve-se inserir valores entre 1 e 10";
 
     }
 }

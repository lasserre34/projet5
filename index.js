

// RECUPERATION DES PRODUIT
var teddies 

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        teddies = response ;
      displayteddies() ;
    
    }
};

request.open("GET", "http://localhost:3000/api/teddies");
request.send();




function displayteddies(){

  teddies.forEach(function(teddy, id  ) {
  var teddyy = document.createElement("div");
  teddyy.innerHTML =`<form name="form1" action="ficheproduit.html"  ><table>
    <thead>
    <tr>
    <th><img src=${teddy.imageUrl}></th>
    <th>Nom : ${teddy.name}</th><th>Prix: ${teddy.price}</th>
    <th><input  id="produitinput" type="hidden" name="${teddy.name}"  value="ours${teddy._id}">
    <input type="submit" onclick="selectprod( '${teddy._id}')" value="envoyer"></th></tr>
    </thead>
    <tbody></tbody>
    </table></form>`

       document.body.appendChild(teddyy) ;
  });

}

function selectprod(id){
 
  console.log(id)
localStorage.setItem("selectedarticle", id );
}

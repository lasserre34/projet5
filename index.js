
//creation div pour style 
divCarousel = document.createElement("DIV");
divCarousel.setAttribute("id","carousel-items");
document.body.appendChild(divCarousel)

// RECUPERATION DES PRODUIT DANS L ' API 
var teddies 

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        teddies = response ;
      displayTeddies() ;
   
    }
};

request.open("GET", "http://localhost:3000/api/teddies");
request.send();
// Affichage des produit recuperer in html 
function displayTeddies(){

  teddies.forEach(function(teddy) {
  var teddyy = document.createElement("div");
  teddyy.setAttribute("class","carousel-item")
  teddyy.innerHTML =`<form name="form1" action="ficheproduit.html"  ><table>
    <thead>
    <tr>
    <th><img src=${teddy.imageUrl}></th>
    <th>Nom : ${teddy.name}</th><th>Prix: ${teddy.price}</th>
    <th><input  id="produitinput" type="hidden" name="${teddy.name}"  value="ours${teddy._id}">
    <input type="submit" onclick="selectProd( '${teddy._id}')" value="envoyer"></th></tr>
    </thead>
    <tbody></tbody>
    </table></form>`

       document.getElementById("carousel-items").appendChild(teddyy)
  });

}
// function pour enregistrer les id des produits lors du click 
function selectProd(id){
 
  console.log(id)
localStorage.setItem("selectedArticle", id );
}

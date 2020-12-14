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
    var g = new URL("https://lasserre34.github.io/projet5/index.html/ficheproduit.html");
    var b = new URL('en-US/docs', g )
    console.log(b)
    var teddyy = document.createElement("div");
    teddyy.setAttribute("class","carousel-item")
    teddyy.innerHTML =`<form name="form1" action="https://lasserre34.github.io/projet5/ficheproduit.html/en-US/docs"   >
    <img class="img-index" src=${teddy.imageUrl}></th>
    <h3>Nom : ${teddy.name}</h3>
    <p class="price-index"> Prix: ${teddy.price}</p>
    <th><input  id="produitinput" type="hidden" name="${teddy.name}"  value="ours${teddy._id}">
    <input class="btn-index" type="submit" onclick="selectProd( '${teddy._id}')" value="Voir produit">
    </form>`
    document.getElementById("carousel-items").appendChild(teddyy)
  });
  
}
// function pour enregistrer les id des produits lors du click 

function selectProd(id){
  console.log(id)
  localStorage.setItem("selectedArticle", id );
}

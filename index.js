// Récupération des produits dans l'API 
var teddies

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        teddies = response;
        displayTeddies();

    }
}; 

request.open("GET", "http://localhost:3000/api/teddies");
request.send();
// Affichage des produits récuperés in html 
function displayTeddies() {

    teddies.forEach(function(teddy) {
        var teddyy = document.createElement("div");
        teddyy.setAttribute("class", "carousel-item")
        teddyy.innerHTML = `<form name="form1" action="ficheproduit.html"   >
    <img class="img-index" src=${teddy.imageUrl}></th>
    <h3>Nom : ${teddy.name}</h3>
    <p class="price-index"> Prix: ${teddy.price}</p>
    <th><input  id="produitinput" type="hidden" name="${teddy.name}"  value="ours${teddy._id}">
    <input class="btn-index" type="submit" onclick="selectProd( '${teddy._id}')" value="Voir produit">
    </form>`
        document.getElementById("carousel-items").appendChild(teddyy)
    });

}
/* function pour enregistrer les id des produits lors du click qui seront récuperés dans la page 
ficheproduit.html pour pouvoir faire une requette GET et afficher le produit via son ID*/

function selectProd(id) {
    console.log(id)
    localStorage.setItem("selectedArticle", id);
}
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
        var diviseCentime = teddy.price / 100 ; 
        var teddyy = document.createElement("div");
        teddyy.setAttribute("class", "carousel-item")
        teddyy.innerHTML = `<form name="form1" action="ficheproduit.html"   >
    <img class="img-index" src=${teddy.imageUrl}></th>
    <h3>Nom : ${teddy.name}</h3>
    <p class="price-index"> Prix: ${diviseCentime} &euro; </p>
    <th><input  id="produitinput" type="hidden"  name="${teddy._id}">
    <input class="btn-index" type="submit"  value="Voir produit">
    </form>`
        document.getElementById("carousel-items").appendChild(teddyy)
    });

}

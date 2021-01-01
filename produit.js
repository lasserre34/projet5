// RECUPERATION DE L'ID DANS L'URL
var $_GET = [];
var parts = window.location.search.substr(1).split("&");
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    console.log(temp)
   
}
temp.pop()
console.log(temp);

// CREATION DIV POUR PRODUIT
var divProd = document.createElement("div");
divProd.setAttribute("id", "divprod");
document.body.appendChild(divProd);

var divCouleur = document.createElement("div");
divCouleur.setAttribute("id", "divcouleur");
divProd.appendChild(divCouleur);

// RECUPERATION DES PRODUITS VIA LEUR ID
var teddy
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        teddy = response;
        // récupération du tableau colors
        teddyColors = teddy.colors;
        teddyInHtml()
     
    }
}
request.open("GET", "http://localhost:3000/api/teddies/" + temp);
request.send();
// affichage in html du produit selectionné
function teddyInHtml() {
    var  teddyPrice = teddy.price / 100 ; 
    var idArticle = document.createElement("div");
    idArticle.innerHTML = `
     <h1 class="hprod"> Ours en peluche ${teddy.name}</h1>
     <div id="conteneur-fiche-produit">
     <form name="formValue" class="textCenter"  action="panier.html">
     <div class="imageproduit">
     <img class="imgprod" src=${teddy.imageUrl}></div>
     <div class="des-produit">
     <p>Nom: ${teddy.name}</p>
     <p>Prix: ${teddyPrice} &euro;</p>
     <p>Description:<br> ${teddy.description}</p>
     <input type="hidden" name="quantiter" value="1"></div>
     </div>
     </div>
     </form>`
    /* Création d'un formulaire pour afficher le tableau color qui permettra de 
     sélectionner la couleur du produit*/
    document.getElementById("divprod").appendChild(idArticle);

    formulaire = document.createElement('FORM');
    formulaire.setAttribute("name", "monForm");
    formulaire.setAttribute("action", "panier.html");
    titre = document.createElement('LABEL');
    titre.innerHTML = "Couleur: ";
    menu = document.createElement("SELECT")
    menu.setAttribute("name", "choixCouleur")
    submit = document.createElement("INPUT")
    submit.setAttribute("type", "submit");
    submit.setAttribute("class", "validpanier")
    submit.setAttribute("value", "Ajouter au panier")
    submit.setAttribute("onclick", `selectColor('${teddy._id}')`);
    formulaire.appendChild(titre);
    formulaire.appendChild(menu);
    formulaire.appendChild(submit);
    document.body.appendChild(formulaire)
    divprod.appendChild(formulaire)

    // fonction ForEach pour l'affichage des colors
    teddyColors.forEach(function(colors) {
        colorsElement = document.createElement("option");
        menu.appendChild(colorsElement);
        colorsElement.innerHTML = colors;
        document.getElementById("divcouleur").appendChild(formulaire);
    });
};
// fonction pour l'enregistrement du produit dans le sessionStorage
function selectColor(id) {

    var choixCouleur = "";
 
    // avant la boucle la couleur n'est pas choisie 
    for (var i = 0; i < document.monForm.choixCouleur.length; i++) {
        if (document.monForm.choixCouleur[i].selected) {
            choixCouleur = document.monForm.choixCouleur[i].value;
        }
    }
    if (choixCouleur == "") {
        alert("Veuillez selectionner une couleur");
    } else {
        // enregistrement du produit selectionné dans le panier 
        var panier = sessionStorage["panier"] ? JSON.parse(sessionStorage["panier"]) : [] ; 
        panier.push({
            id: id,
            colors: choixCouleur,
            quantiter: 1 ,
            price: teddy.price / 100 ,
            quantiterId: id ,

        });
        sessionStorage["panier"] = JSON.stringify(panier)
    }
}



  var idarticle = localStorage.getItem("selectedarticle");
  console.log(idarticle);
 // CREATION DIV POUR PRODUIT
  var divprod = document.createElement("div");
  divprod.setAttribute("id","divprod");
  document.body.appendChild(divprod);

// RECUPERATION DES PRODUIT VIA LEUR ID
 var teddy
 var request = new XMLHttpRequest();
 request.onreadystatechange = function() {
 if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
 var response = JSON.parse(this.responseText);
 teddy = response ;
 teddyColors = teddy.colors;
 // Appel de la fonction     
  teddyInhtml()

function teddyInhtml(){

     var idarticle=  `
     <h1> Ours en peluche ${teddy.name}</h1>
     <form name="formvalue" class="textcenter"  action="panier.html">
     <img src=${teddy.imageUrl}>
     <p>Nom: ${teddy.name}</p>
     <p>Prix: ${teddy.price}</p>
     <p>Description: ${teddy.description}</p>
     <input type="hidden" name="quantiter" value="1">
     </form>`
     // Creation d'un formulaire pour afficher les tableau color
     formulaire = document.createElement('FORM');
     formulaire.setAttribute("name","monForm");
     formulaire.setAttribute("action","panier.html")
     titre = document.createElement('LABEL');
     titre.innerHTML = "Couleur: ";
     menu = document.createElement("SELECT")
     menu.setAttribute("name" , "choixCouleur")
     submit = document.createElement("INPUT")
     submit.setAttribute("type","submit");
     submit.setAttribute("onclick", `selectColor('${teddy._id}')`);
     formulaire.appendChild(titre);
     formulaire.appendChild(menu);
     formulaire.appendChild(submit);
     document.body.appendChild(formulaire)
    // fonction ForEach pour l'affichage des colors
     teddyColors.forEach(function(colors){
   
     colorsElement = document.createElement("option");
     menu.appendChild(colorsElement);
     colorsElement.innerHTML= colors ; });
     document.getElementById("divprod").innerHTML= idarticle ;
   
     }
    }
  }; 
  
      request.open("GET", "http://localhost:3000/api/teddies/" + idarticle );
      request.send();
      let tbltid = [];

      // fonction pour l'enregistrement de la couleur choisie est de l'id du produit
function selectColor(id){
  
  var choixCouleur="" ; 

  // avant la boucle la couleur n'est pas choisie 
   for (var i=0; i<document.monForm.choixCouleur.length; i++){
      if (document.monForm.choixCouleur[i].selected){
      choixCouleur=document.monForm.choixCouleur[i].value;
      }
  }
     if (choixCouleur==""){
     alert("Veuillez selectionner une couleur");
    }
        else{
       
      var idArticle = sessionStorage["idArticle"] ? JSON.parse(sessionStorage["idArticle"]) : [];
      idArticle.push({id:id,colors:choixCouleur, value:1});
      sessionStorage["idArticle"] = JSON.stringify(idArticle)
    }
}

      
     
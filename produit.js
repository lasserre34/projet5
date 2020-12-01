

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
         teddycolors = teddy.colors;
      teddyinhtml()
function teddyinhtml(){

     var idarticle=  `
         <h1> Ours en peluche ${teddy.name}</h1>
     <form class="textcenter"  action="panier.html">
     <img src=${teddy.imageUrl}>
     <p>Nom: ${teddy.name}</p>
     <p>Prix: ${teddy.price}</p>
     <p>Description: ${teddy.description}</p>`
  formulaire = document.createElement('FORM');
 formulaire.setAttribute("name","monForm");
 formulaire.setAttribute("action","panier.html")
  titre = document.createElement('LABEL');
  titre.innerHTML = "Couleur: ";
  menu = document.createElement("SELECT")
  menu.setAttribute("name" , "choixcouleur")
  submit = document.createElement("INPUT")
  submit.setAttribute("type","submit");
  submit.setAttribute("onclick", `selectcolor('${teddy._id}')`)

  formulaire.appendChild(titre);
  formulaire.appendChild(menu);
  formulaire.appendChild(submit);
  document.body.appendChild(formulaire)
  teddycolors.forEach(function(colors){
   
   colorsElement = document.createElement("option");
     menu.appendChild(colorsElement);
     colorsElement.innerHTML= colors ; });
   document.getElementById("divprod").innerHTML= idarticle ;
  
    }
   }
  }; 
request.open("GET", "http://localhost:3000/api/teddies/" + idarticle );
      request.send();
function selectcolor(id){
var choixcouleur="" ; 
  // avant la boucle la couleur n'est pas choisie 
   for (var i=0; i<document.monForm.choixcouleur.length; i++){
      if (document.monForm.choixcouleur[i].selected){
          choixcouleur=document.monForm.choixcouleur[i].value;
          break; // case cocher on sort de la boucle 
      }
    }
      if (choixcouleur==""){
        alert("Veuillez selectionner une couleur");}
      
      else{
        localStorage.setItem("choixcouleur" , choixcouleur);
        localStorage.setItem("selectedidpanier" , id )
        localStorage.setItem("prix" , `${teddy.price}`)
   }
     }
/*
      // VAR PRIX PRODUIT 5
      // POUR TOTAL ADDITION
      var price5_json = JSON.stringify(teddy5.price);
      sessionStorage.setItem("prix5", price5_json);
      // POUR TOTAL SOUSTRACTION 
      var price55_json = JSON.stringify(teddy5.price);
      sessionStorage.setItem("prix55",price55_json);
      }
   }
   */
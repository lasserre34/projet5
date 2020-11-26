
// RECUPERATION DES PRODUIT VIA LEUR ID
var teddy1

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
         teddy1 = response ; 
        }
      };
      request.open("GET", "http://localhost:3000/api/teddies//5be9c8541c9d440000665243");
      request.send();
// TEDDY2
var teddy2 

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response2 = JSON.parse(this.responseText);
         teddy2 = response2 ; 
         
        
    
    }
};
request.open("GET", "http://localhost:3000/api/teddies//5beaa8bf1c9d440000a57d94");
request.send();
// TEDDY3
var teddy3 

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response3 = JSON.parse(this.responseText);
         teddy3 = response3 ; 
      
        
    
    }
};
request.open("GET", "http://localhost:3000/api/teddies//5beaaa8f1c9d440000a57d95");
request.send();
// TEDDY4
var teddy4 

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response4 = JSON.parse(this.responseText);
         teddy4 = response4 ; 
         
        
    
    }
};
request.open("GET", "http://localhost:3000/api/teddies//5beaabe91c9d440000a57d96");
request.send();
//TEDDY5
var teddy5 

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response5 = JSON.parse(this.responseText);
         teddy5 = response5 ; 
         
    
    
    }
};
request.open("GET", "http://localhost:3000/api/teddies//5beaacd41c9d440000a57d97");
request.send();


// CREATION DIV POUR PRODUIT
var divprod1 = document.createElement("div");
divprod1.setAttribute("id","divprod1"),
document.body.appendChild(divprod1);
var divprod2 = document.createElement("div");
divprod2.setAttribute("id","divprod2");

var divprod2 = document.createElement("div");
divprod2.setAttribute("id","divprod2"),
document.body.appendChild(divprod2);
var divprod3 = document.createElement("div");
divprod3.setAttribute("id","divprod3");
document.body.appendChild(divprod3);
var divprod4 = document.createElement("div");
divprod4.setAttribute("id","divprod4");
document.body.appendChild(divprod4);
var divprod5 = document.createElement("div");
divprod5.setAttribute("id","divprod5");
document.body.appendChild(divprod5);

// RECUPERATION json teddyID //

var idteddy1_json = localStorage.getItem("idteddy1");
var idteddy1 = JSON.parse(idteddy1_json);

document.getElementById("divprod1").innerHTML= idteddy1 ;

var idteddy2_json = localStorage.getItem("idteddy2");
var idteddy2 = JSON.parse(idteddy2_json);    

document.getElementById("divprod2").innerHTML= idteddy2 ;

var idteddy3_json = localStorage.getItem("idteddy3");
var idteddy3 = JSON.parse(idteddy3_json);
 
document.getElementById("divprod3").innerHTML= idteddy3 ; 

var idteddy4_json = localStorage.getItem("idteddy4");
var idteddy4 = JSON.parse(idteddy4_json);

document.getElementById("divprod4").innerHTML= idteddy4 ;

var idteddy5_json = localStorage.getItem("idteddy5");
var idteddy5 = JSON.parse(idteddy5_json);

document.getElementById("divprod5").innerHTML= idteddy5 ;

    
function selectcolor1(){
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
  else {
   // ENREGISTREMENT  DE LA COULEUR CHOISIE
    var choixcouleur_json = JSON.stringify(choixcouleur);
    sessionStorage.setItem("produit1paniercouleur",choixcouleur_json);

    var prodpanier1_json = JSON.stringify(`<table class="table">
    <thead>
     <tr><input type="hidden" name="prod1" value="prod1"><th>Nom: ${teddy1.name}</th><th>Couleur: ${choixcouleur}</th><th>Prix: ${teddy1.price}</th><th><input type="submit" onclick="suprime1()" value="supprimer du panier"/></th></tr>
    </thead>
   <tbody></tbody>
  </table> `);
    sessionStorage.setItem("produit1panier",prodpanier1_json);

 // VAR PRIX PRODUIT 1
 // Pour total Adition
 var price1_json = JSON.stringify(teddy1.price);
 sessionStorage.setItem("prix1", price1_json);
 // pour soustraction
 var price11_json = JSON.stringify(teddy1.price);
 sessionStorage.setItem("prix11",price11_json);

  }
}

// LOCAL STORAGE SESSION PRODUIT 2  
  function selectcolor2(){
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
      else {
       
        var choixcouleur_json = JSON.stringify(choixcouleur);
        sessionStorage.setItem("produit2paniercouleur",choixcouleur_json);

        var prodpanier2_json = JSON.stringify(`<table class="table">
        <thead>
         <tr><th>Nom: ${teddy2.name}</th><th>Couleur: ${choixcouleur}</th><th>Prix: ${teddy2.price}</th><th><input type="submit" onclick="suprime2()" value="supprimer du panier"/></th></tr>
        </thead>
       <tbody></tbody>
      </table> `);
        sessionStorage.setItem("produit2panier",prodpanier2_json);
        // VAR PRIX PRODUIT 2
        // POUR TOTAL ADDITION
        var price2_json = JSON.stringify(teddy2.price);
        sessionStorage.setItem("prix2", price2_json);
        // POUR TOTAL SOUSTRACTION
        var price22_json = JSON.stringify(teddy2.price);
        sessionStorage.setItem("prix22",price22_json); 
      }
    
}  

      // LOCAL STORAGE SESSION PRODUIT 3 
  function selectcolor3(){
      var choixcouleur="" ; 
      // avant la boucle la couleur n'est pas choisie 
      
     for (var i=0; i<document.monForm.choixcouleur.length; i++){
          if (document.monForm.choixcouleur[i].selected){
              choixcouleur=document.monForm.choixcouleur[i].value;
              break; // case cocher on sort de la boucle 
          }
   }

   if (choixcouleur==""){
    alert("Veuillez selectionner une couleur");
      
   }
  
      else {
          var choixcouleur_json = JSON.stringify(choixcouleur);
      sessionStorage.setItem("produit3paniercouleur",choixcouleur_json);
      var prodpanier3_json = JSON.stringify(`<table class="table">
      <thead>
       <tr><th>Nom: ${teddy3.name}</th><th>Couleur: ${choixcouleur}</th><th>Prix: ${teddy3.price}</th><th><input type="submit" onclick="suprime3()" value="supprimer du panier"/></th></tr>
      </thead>
     <tbody></tbody> 
    </table> `);
      sessionStorage.setItem("produit3panier",prodpanier3_json);
      // VAR PRIX PRODUIT 3 
      // pour TOTAL ADITION
      var price3_json = JSON.stringify(teddy3.price);
      sessionStorage.setItem("prix3", price3_json);
      // pour total soustraction
      var price33_json = JSON.stringify(teddy3.price);
      sessionStorage.setItem("prix33",price33_json);
      }
   }
  
  // LOCAL STORAGE SESSION PRODUIT 4 
  function selectcolor4(){
var choixcouleur="";
  var choixcouleur="" ; 
  // avant la boucle la couleur n'est pas choisie 
  
  for (var i=0; i<document.monForm.choixcouleur.length; i++){
      if (document.monForm.choixcouleur[i].selected){
          choixcouleur=document.monForm.choixcouleur[i].value;
          break; // case cocher on sort de la boucle 
      }
 }
  
  if (choixcouleur==""){
      alert("Veuillez selectionner une couleur");
  
 }
  else {
      var choixcouleur_json = JSON.stringify(choixcouleur);
  sessionStorage.setItem("produit4paniercouleur",choixcouleur_json);
  var prodpanier4_json = JSON.stringify( `
  <table class="table">
    <thead>
     <tr><th>Nom: ${teddy4.name}</th><th>Couleur: ${choixcouleur}</th><th>Prix: ${teddy4.price}</th><th><input type="submit" onclick="suprime4()" value="supprimer du panier"/></th></tr>
    </thead>
   <tbody></tbody>
  </table>  `);
      sessionStorage.setItem("produit4panier",prodpanier4_json);
      // VAR PRIx  PRODUIT 4 
      var price4_json = JSON.stringify(teddy4.price);
      sessionStorage.setItem("prix4", price4_json);
      var price44_json = JSON.stringify(teddy4.price);
      sessionStorage.setItem("prix44",price44_json);
     
    }
  }
//}
  // LOCAL STORAGE SESSION PRODUIT 5
  function selectcolor5(){
      var choixcouleur="" ; 
      // avant la boucle la couleur n'est pas choisie 
      
      for (var i=0; i<document.monForm.choixcouleur.length; i++){
          if (document.monForm.choixcouleur[i].selected){
              choixcouleur=document.monForm.choixcouleur[i].value;
              break; // case cocher on sort de la boucle 
          }
      }
       if (choixcouleur==""){
          alert("Veuillez selectionner une couleur");
      
      } 
      else {
          var choixcouleur_json = JSON.stringify(choixcouleur);
      sessionStorage.setItem("produit5paniercouleur",choixcouleur_json);
      var prodpanier5_json = JSON.stringify( `
      <table class="table">
        <thead>
         <tr><th>Nom: ${teddy5.name}</th><th>Couleur: ${choixcouleur}</th><th>Prix: ${teddy5.price}</th><th><input type="submit" onclick="suprime5()" value="supprimer du panier"/></th></tr>
        </thead>
       <tbody></tbody>
      </table>  `);
      sessionStorage.setItem("produit5panier",prodpanier5_json);
      // VAR PRIX PRODUIT 5
      // POUR TOTAL ADDITION
      var price5_json = JSON.stringify(teddy5.price);
      sessionStorage.setItem("prix5", price5_json);
      // POUR TOTAL SOUSTRACTION 
      var price55_json = JSON.stringify(teddy5.price);
      sessionStorage.setItem("prix55",price55_json);
      }
   }
   

// RECUPERATION PRODUIT 1 
// recup  produit 1 avec la couleur choisie
var prodpanier1_json = sessionStorage.getItem("produit1panier");
var prodpanier1 = JSON.parse(prodpanier1_json);

 // afichage dans la page html
 document.getElementById("panierproduct").innerHTML= prodpanier1  ;  
 
 // RECUPERATION PRODUIT 2
// recup produit 2 avec couleur choisie
var prodpanier2_json = sessionStorage.getItem("produit2panier");
var prodpanier2 = JSON.parse(prodpanier2_json);

 // afichage dans la page html
 document.getElementById("panierproduct2").innerHTML= prodpanier2 ;  
 

// RECUPERATION PRODUIT 3
// recup produit 3 

var prodpanier3_json = sessionStorage.getItem("produit3panier");
var prodpanier3 = JSON.parse(prodpanier3_json);
// recup couleur prod 3 

 // afichage dans la page html
 document.getElementById("panierproduct3").innerHTML= prodpanier3 ;  
 
 
// function pour supprimer le produit
 function suprime3(){

 }
 // RECUPERATION PRODUIT 4
// recup produit 4 avec couleur choisie
var prodpanier4_json = sessionStorage.getItem("produit4panier");
var prodpanier4 = JSON.parse(prodpanier4_json);

 // afichage dans la page html
 document.getElementById("panierproduct4").innerHTML= prodpanier4 ;  
 
 
// function pour supprimer le produit
 function suprime4(){
     
 }
 // RECUPERATION PRODUIT 5
// recup produit 5 avec couleur choisie
var prodpanier5_json = sessionStorage.getItem("produit5panier");
var prodpanier5 = JSON.parse(prodpanier5_json);

 // afichage dans la page html
 document.getElementById("panierproduct5").innerHTML= prodpanier5 ;  
 
 
// function pour supprimer le produit
 function suprime5(){
     
 }
// var pour total prix panier 
 var price5_json = sessionStorage.getItem("prix5");
 var price5 = JSON.parse(price5_json);
 var price4_json = sessionStorage.getItem("prix4");
 var price4 = JSON.parse(price4_json);
 var price3_json = sessionStorage.getItem("prix3");
 var price3 = JSON.parse(price3_json);
 var price2_json = sessionStorage.getItem("prix2");
 var price2 = JSON.parse(price2_json);
 var price1_json = sessionStorage.getItem("prix1");
 var price1 = JSON.parse(price1_json);
 
 var result = price5 + price4 + price3 + price2 + price1 ;
 
 document.getElementById('total').innerHTML= "Total panier " + result + " euro"; 


// FUNCTION POUR SUPPRESSION DU PRODUIT1 DU PANIER 
 function suprime1(){ 
    var  supprime = sessionStorage.removeItem("produit1panier");
   var supprime = " ";
   var testpr = sessionStorage.removeItem("prix1");
var testpr = " "
  
   
   document.getElementById("panierproduct").innerHTML= supprime ;
   document.getElementById("total").innerHTML = "Total panier "+ testpr + " euro";
 }
 // FUNCTION POUR SUPPRESSION DU PRODUIT2 DU PANIER 
 function suprime2(){
    var  supprime2 = sessionStorage.removeItem("produit2panier");
    var supprime2 = " ";
    var testpr2 = sessionStorage.removeItem("prix2");
    
    
    document.getElementById("panierproduct2").innerHTML= supprime2 ;
    document.getElementById("total").innerHTML = "Total panier " + testpr2 + " euro";
 
}
// FUNCTION POUR SUPPRESSION DU PRODUIT3 DU PANIER 
function suprime3(){
    var  supprime3 = sessionStorage.removeItem("produit3panier");
    var supprime3 = " ";
     sessionStorage.removeItem("prix3");
    
    document.getElementById("panierproduct3").innerHTML= supprime3 ;
    document.getElementById("total").innerHTML = "Total panier "  + result3 + " euro";
 
}
// FUNCTION POUR SUPPRESSION DU PRODUIT4 DU PANIER 
function suprime4(){
    var  supprime4 = sessionStorage.removeItem("produit4panier");
    var supprime4 = " ";
  sessionStorage.removeItem("prix4");
    
    
    document.getElementById("panierproduct4").innerHTML= supprime4 ;
    document.getElementById("total").innerHTML = "Total panier "  + result4 + " euro";
 
}
// FUNCTION POUR SUPPRESSION DU PRODUIT5 DU PANIER 
function suprime5(){
    var  supprime5 = sessionStorage.removeItem("produit5panier");
    var supprime5 = " ";
     sessionStorage.removeItem("prix5");
  
    document.getElementById("panierproduct5").innerHTML= supprime5 ;
    document.getElementById("total").innerHTML = "Total panier "  + result5 + " euro";
 
}

 

// function pour enregistrer dans  sessionstorage le  contenue formulaire 
function recupconfirm(){
    let nomf = document.getElementById("nomf").value ;
    let prenomf = document.getElementById('prenomf').value ;
    let agef = document.getElementById("agef").value;
    let adressef = document.getElementById("adressef").value ; 
    let emailf = document.getElementById("emailf").value ; 
 var recupnom_json = JSON.stringify(nomf);
 sessionStorage.setItem("nom",recupnom_json);
 var recupprenom_json = JSON.stringify(prenomf);
 sessionStorage.setItem("prenom",recupprenom_json);
 var recupage_json = JSON.stringify(agef);
 sessionStorage.setItem("age",recupage_json);
 var recupadresse_json = JSON.stringify(adressef);
 sessionStorage.setItem("adresse",recupadresse_json);
 var recupemail_json = JSON.stringify(emailf);
 sessionStorage.setItem("email",recupemail_json);
var recuptotal_json = JSON.stringify(result);
sessionStorage.setItem("total",recuptotal_json);


}







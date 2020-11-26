

 // CREATION CONTENEUR DIV PAGE PANIER 
 var cntdiv=document.createElement("div");
 cntdiv.setAttribute("id","cntdiv")
 document.body.appendChild(cntdiv); 

 // Creation div pour produit  panier
var divpanier1 = document.createElement("div");
divpanier1.setAttribute("id","divpanier1");

var divpanier2 = document.createElement("div");
divpanier2.setAttribute("id","divpanier2");

var divpanier3 = document.createElement("div");
divpanier3.setAttribute("id","divpanier3");

var divpanier4 = document.createElement("div");
divpanier4.setAttribute("id","divpanier4");

var divpanier5 = document.createElement("div");
divpanier5.setAttribute("id","divpanier5");
// Creation div pour total commande: 
 var totalp = document.createElement("div");
 totalp.setAttribute("id","total"); 
 document.body.appendChild(totalp);  

// RECUPERATION PRODUIT 1 
// recup  produit 1 avec la couleur choisie
var prodpanier1_json = sessionStorage.getItem("produit1panier");
var prodpanier1 = JSON.parse(prodpanier1_json);
 
 document.getElementById("cntdiv").appendChild(divpanier1).innerHTML= prodpanier1 ;
 // RECUPERATION PRODUIT 2 
// recup produit 2 avec couleur choisie
var prodpanier2_json = sessionStorage.getItem("produit2panier");
var prodpanier2 = JSON.parse(prodpanier2_json);
document.getElementById("cntdiv").appendChild(divpanier2).innerHTML= prodpanier2 
// RECUPERATION PRODUIT 3

var prodpanier3_json = sessionStorage.getItem("produit3panier");
var prodpanier3 = JSON.parse(prodpanier3_json);
document.getElementById("cntdiv").appendChild(divpanier3).innerHTML= prodpanier3 
 // RECUPERATION PRODUIT 4
// recup produit 4 avec couleur choisie
var prodpanier4_json = sessionStorage.getItem("produit4panier");
var prodpanier4 = JSON.parse(prodpanier4_json);
document.getElementById("cntdiv").appendChild(divpanier4).innerHTML= prodpanier4 
 // RECUPERATION PRODUIT 5
// recup produit 5 avec couleur choisie
var prodpanier5_json = sessionStorage.getItem("produit5panier");
var prodpanier5 = JSON.parse(prodpanier5_json);
document.getElementById("cntdiv").appendChild(divpanier5).innerHTML= prodpanier5 
 
 let tbltp = [];
 tbltp.push(prodpanier1,prodpanier2,prodpanier3,prodpanier4,prodpanier5);
   // CREATION CONTENEUR DIV PAGE PANIER 
 var cntdiv=document.createElement("div");
 cntdiv.setAttribute("id","cntdiv")
 document.body.appendChild(cntdiv);

 // Creation div pour produit  panier
var divpanier1 = document.createElement("div");
divpanier1.setAttribute("id","divpanier1"),
document.body.appendChild(divpanier1);
var divpanier2 = document.createElement("div");
divpanier2.setAttribute("id","divpanier2"),
document.body.appendChild(divpanier2);
var divpanier3 = document.createElement("div");
divpanier3.setAttribute("id","divpanier3");
document.body.appendChild(divpanier3);
var divpanier4 = document.createElement("div");
divpanier4.setAttribute("id","divpanier4");
document.body.appendChild(divpanier4);
var divpanier5 = document.createElement("div");
divpanier5.setAttribute("id","divpanier5");
document.body.appendChild(divpanier5);



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
  document.getElementById("total").innerHTML= result ; 
 
// VAR POUR TOTAL SOUSTRACTION
var price11_json = sessionStorage.getItem("prix11");
var price11 = JSON.parse(price11_json);
var price22_json = sessionStorage.getItem("prix22");
var price22 = JSON.parse(price22_json)
var price33_json = sessionStorage.getItem("prix33");
var price33 = JSON.parse(price33_json)
var price44_json = sessionStorage.getItem("prix44");
var price44 = JSON.parse(price44_json)
var price55_json = sessionStorage.getItem("prix55");
var price55 = JSON.parse(price55_json)

// Variable pour fonction de validation formulaire
var formValid = document.getElementById("btn");
var nomclient = document.getElementById("nomclient");
var missnom = document.getElementById("missnom");
var prenomclient = document.getElementById("prenomclient");
var missprenom = document.getElementById("missprenom");
var ageclient = document.getElementById("ageclient");
var missage = document.getElementById("missage");
var adresseclient = document.getElementById("adresseclient");
var missadresse = document.getElementById("missadresse");
var emailclient = document.getElementById("emailclient");
var missemail = document.getElementById("missemail");

formValid.addEventListener('click', validation );

// FUNCTION VALIDATION FORMULAIRE
 function validation(event){
     // SI le champs est vide 
     if(nomclient.validity.valueMissing){
         event.preventDefault();
         missnom.textContent = "Nom manquant";
         missnom.style.color = "red";
         if(prenomclient.validity.valueMissing){
            event.preventDefault();
            missprenom.textContent = "Prenom manquant";
            missprenom.style.color = "red";
            if(ageclient.validity.valueMissing){
                event.preventDefault();
                missage.textContent = "Age manquant";
                missage.style.color = "red";
                if(adresseclient.validity.valueMissing){
                    event.preventDefault();
                    missadresse.textContent = "Adresse manquant";
                    missadresse.style.color = "red";
                    if(emailclient.validity.valueMissing){
                        event.preventDefault();
                        missemail.textContent = "Email manquant";
                        missemail.style.color = "red";
                    }
                }
            } 
        }
   } 
}

 
// FUNCTION POUR SUPPRESSION DU PRODUIT1 DU PANIER 
 function suprime1(){ 
    var  supprime = sessionStorage.removeItem("produit1panier");
   var supprime = " ";
    sessionStorage.removeItem("prix1");
 
    var recupprix1 = document.getElementById("total").innerHTML;

   var recp1 = recupprix1  - price11
   document.getElementById("divpanier1").innerHTML= supprime;
document.getElementById("total").innerHTML= recp1 ;
  
 }
 // FUNCTION POUR SUPPRESSION DU PRODUIT2 DU PANIER 
 function suprime2(){
    var  supprime2 = sessionStorage.removeItem("produit2panier");
    var supprime2 = " ";
     sessionStorage.removeItem("prix2");

     var recupprix2 = document.getElementById("total").innerHTML;
    var recp2 = recupprix2 - price22 ; 
   
    document.getElementById("divpanier2").innerHTML= supprime2;
    document.getElementById("total").innerHTML= recp2 ;
      
   
 
}
// FUNCTION POUR SUPPRESSION DU PRODUIT3 DU PANIER 
function suprime3(){
    var  supprime3 = sessionStorage.removeItem("produit3panier");
    var supprime3 = " ";
     sessionStorage.removeItem("prix3");
    var recupprix3 = document.getElementById("total").innerHTML;

    var recp3 = recupprix3 - price33 ; 
    document.getElementById("divpanier3").innerHTML= supprime3;
    document.getElementById("total").innerHTML= recp3 ;
   
 
}
// FUNCTION POUR SUPPRESSION DU PRODUIT4 DU PANIER 
function suprime4(){
    var  supprime4 = sessionStorage.removeItem("produit4panier");
    var supprime4 = " ";
    sessionStorage.removeItem("prix4");
     var recupprix4 = document.getElementById("total").innerHTML;

     var recp4 = recupprix4 - price44 ; 
    
     document.getElementById("divpanier4").innerHTML= supprime4;
     document.getElementById("total").innerHTML= recp4 ;
 
}
// FUNCTION POUR SUPPRESSION DU PRODUIT5 DU PANIER 
function suprime5(){
    var  supprime5 = sessionStorage.removeItem("produit5panier");
    var supprime5 = " ";
     sessionStorage.removeItem("prix5");
     var recupprix5 = document.getElementById("total").innerHTML;

     var recp5 = recupprix5 - price55 ; 
     document.getElementById("divpanier5").innerHTML= supprime5;
     document.getElementById("total").innerHTML= recp5 ;
 
} 
var contact={
 nom:  document.getElementById("nomclient").value ,
prenom:  document.getElementById('prenomclient').value ,
 adresse: document.getElementById("adresseclient").value , 
 email: document.getElementById("emailclient").value ,
} 

function envoipost(){
    
    var recupproduct = document.getElementById("total").innerHTML; 
    console.log(recupproduct);
    if( recupproduct === "0"){
        alert("votre panier est vide , vous ne pouvez passer commande")
    }
else{ 

    
       var request = new XMLHttpRequest();
      request.open("POST", "http://localhost:3000/api/teddies/order");
      request.setRequestHeader("Content-Type", "application/json");
      request.send(JSON.stringify(contact));
      }
}



// function pour enregistrer dans  sessionstorage le  contenue formulaire 
/*function recupconfirm(){
   
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
var recuptotalprix = document.getElementById("total").innerHTML ; 
 var recuptotalprix_json  = JSON.stringify(recuptotalprix);
 sessionStorage.setItem("recuptotalprix",recuptotalprix_json); 
 var recuparticle = document.getElementById('panierconteneur').innerHTML;
 var recuparticle_json = JSON.stringify(recuparticle);
 sessionStorage.setItem("conteneurpanier",recuparticle_json);
}

*/






// Creation div pour produit  panier

var headPanier = document.getElementById("head-panier");

var divPanier = document.createElement("div");
divPanier.setAttribute("id","divpanier");
headPanier.appendChild(divPanier);

var divPanier1 = document.createElement("div");
divPanier1.setAttribute("id","divpanier1");
document.body.appendChild(divPanier1);

var divPanierTotal = document.createElement("div");
divPanierTotal.setAttribute("id","total");
headPanier.appendChild(divPanierTotal);

var divPanierTotal2 = document.createElement("div");
divPanierTotal2.setAttribute("id","total2");
document.body.appendChild(divPanierTotal2);

// Recuperation des id est des colors choisie
idArticleParse = sessionStorage.getItem("idArticle");
idArticleParse = JSON.parse(idArticleParse)

 let tabloId = [];
 // tableau pour le prix total de la commande 
let tabloPrice = [];
// Si il n'y a pas de produit la page affiche votre panier est vide 
total()
function total(){
    if(idArticleParse === null){
        document.getElementById('total').innerHTML = " VOTRE PANIER EST VIDE "
    }
    else{
        forEach()
    }
 }


// FUNCTION FOREACH QUI RECUP LES ID SELECTIONNER EST LES AFFICHE DANS LE PANIER 
function forEach(){
    idArticleParse.forEach(function(article , index){
      var responseId 
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
         if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
         var response = JSON.parse(this.responseText);
         responseId = response 
            

            var articleTeddy =  document.createElement("div");
            articleTeddy.setAttribute("id", index);
            articleTeddy.setAttribute("class" , "background-panier");
            articleTeddy.innerHTML=` <thead>
            <tr>
            <th><img class="image-panier" src=${responseId.imageUrl}></th>
            <th><p class="flex-panier"> Nom: ${responseId.name}  </p></th>
            <th> <p class="flex-panier"> Couleur: ${article.colors}</p></th>
            <th><p class="flex-panier"> Prix: ${responseId.price} </p> </th>
            <input class="flex-panier-btn" id="btn" type="submit" onclick="supprimer('${index}')" value="Supprimer"></tr>
            <input id="id-cache" type="hidden" value="${responseId._id}">
            </thead>
            <tbody></tbody>
            </table></form>`
           
            
           
         calculTotal()
            document.getElementById("divpanier").appendChild(articleTeddy)
       
            
           tabloId.push(responseId._id)
           console.log(tabloId)
            function calculTotal(){
                tabloPrice.push(responseId.price)
            
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(tabloPrice.reduce(reducer));
            document.getElementById("total").innerHTML = "Total de votre commande:   " + tabloPrice.reduce(reducer)   
            }
        }   
     }
          request.open("GET", "http://localhost:3000/api/teddies/" + article.id );
          request.send();
   });
}

   let  produit = []; 
   //FUNCTION POUR SUPPRIMER DES PRODUIT DU PANIER 
   function supprimer(index){
    
        sessionStorage.removeItem("idArticle");
        document.getElementById(index).innerHTML= "" ;
        document.getElementById('total').innerHTML= "" ;
        delete tabloId[index]
        delete tabloPrice[index]
        console.log(tabloPrice)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(tabloPrice.reduce(reducer));
            document.getElementById("total").innerHTML = "Total de votre commande:   " + tabloPrice.reduce(reducer)   
      
        // RAPPEL DE LA FONCTION FOREACH
        //document.getElementById(headPanier).innerHTML=""
       
    
    }

// TABLEAU QUI SERA ENVOYER A L API 
let products = [] ;

// RECUP L'element 5 du formulaire 
let submit = form[5] ;


// Variable pour fonction de validation formulaire
var formValid = document.getElementById("btn");
var nomClient = document.getElementById("nomclient");
var missNom = document.getElementById("missnom");
var prenomClient = document.getElementById("prenomclient");
var missPrenom = document.getElementById("missprenom");
var villeClient = document.getElementById("villeclient");
var missVille = document.getElementById("missville");
var adresseClient = document.getElementById("adresseclient");
var missAdresse = document.getElementById("missadresse");
var emailClient = document.getElementById("emailclient");
var missEmail = document.getElementById("missemail");

formValid.addEventListener('click', validation );


let tabloIdConcat = [];
// FUNCTION VALIDATION FORMULAIRE
function validation(event){
  
// function pour enlever les element null du tableaux!Important!
   var filtered = tabloId.filter(function (el) {
    return el != null;
  });
  
   products = filtered.concat(tabloIdConcat)
 
        
  // Regex pour validation formulaire   
     var motValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
     var emailValid = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  
    // validation formulaire 
    if(nomClient.validity.valueMissing){
         event.preventDefault();
         missNom.textContent = "Nom manquant";
         missNom.style.color = "red";
    }
     else if (motValid.test(nomClient.value) == false){
         event.preventDefault();
         missNom.textContent = 'Format incorrect';
         missNom.style.color = 'orange';
         return false
    }
     if(prenomClient.validity.valueMissing){
         event.preventDefault();
         missPrenom.textContent = "Prenom manquant";
         missPrenom.style.color = "red";
    }
    else if (motValid.test(prenomClient.value) == false){
         event.preventDefault();
         missPrenom.textContent = 'Format incorrect';
         missPrenom.style.color = 'orange';
         return false
    }
    if(villeClient.validity.valueMissing){
          event.preventDefault();
          missVille.textContent = "ville manquant";
          missVille.style.color = "red";
    }
    else  if (motValid.test(villeClient.value) == false){
          event.preventDefault();
          missVille.textContent = 'Format incorrect';
          missVille.style.color = 'orange';
          return false
    }
    if(adresseClient.validity.valueMissing){
          event.preventDefault();
          missAdresse.textContent = "Adresse manquant";
          missAdresse.style.color = "red";
    }              
   else if(emailValid.test(emailClient.value) == false){
          event.preventDefault();
          missEmail.textContent = 'Format incorrect';
          missEmail.style.color = 'orange';
          return false
    }

    else{
//  appel de la fonction envoipost()
   envoiPost()
   }
} // fermeture de la fonction validation 

// fonction pour envoyer l'objet contact et le tableau products a lapi 
function envoiPost(){
   
    var recupProduct = document.getElementById("total").innerHTML; 
    console.log(recupProduct);
    if( recupProduct === "0"){
    alert("votre panier est vide , vous ne pouvez passer commande")
    }
    
    else{
    let prixTotalCommande = [];
    var returnId 
    var request = new XMLHttpRequest();
        
    request.onload = function () {
        if (request.readyState === request.DONE && request.status === 201){
        var respons = JSON.parse(request.responseText);
        // recuperation de la reponse de la requette POST
        returnId = respons
        produits = returnId.products
          for( i = 0 ; i < produits.length ; i++){
          console.log(produits[i].price)
          prixTotalCommande.push(produits[i].price)
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          console.log(prixTotalCommande.reduce(reducer));
     

          document.getElementById("divpanier").innerHTML= "" ; 
          document.getElementById("formulaire").innerHTML="" ;
          document.getElementById("total").innerHTML= "" ;
      
      
    // reponse inner html 
          var returnConfirm = document.createElement("div");
          returnConfirm.innerHTML=`<div class="confirmation-panier">
          <h2> Votre commande a bien était valider</h2>
          <p> Nous vous remercions de votre commande <br>
          voici votre numero de commande:<br><span class="idconfirm">${returnId.orderId}</span></p>
          <p>Le prix total de votre commande est de ${prixTotalCommande.reduce(reducer)}
          </div> `
          document.getElementById("formulaire").appendChild(returnConfirm);
       }
    }
}
    request.open('POST', 'http://localhost:3000/api/teddies/order');
    request.setRequestHeader('Content-Type', 'application/json');
   

    var contact ={
    firstName:  document.getElementById("nomclient").value ,
    lastName:  document.getElementById('prenomclient').value ,
    address: document.getElementById("adresseclient").value ,
    city: document.getElementById("villeclient").value ,  
    email: document.getElementById("emailclient").value 
    }

    var data ={
    contact: contact , 
    products : products 
    }

    console.log(JSON.stringify(data));
 
    request.send(JSON.stringify(data));  
    sessionStorage.removeItem("idArticle") 
   }
    
}




// Creation div pour produit  panier
var divpanier = document.createElement("div");
divpanier.setAttribute("id","divpanier");
document.body.appendChild(divpanier);

var divpanier1 = document.createElement("div");
divpanier1.setAttribute("id","divpanier1");
document.body.appendChild(divpanier1);

var divpaniertotal = document.createElement("div");
divpaniertotal.setAttribute("id","total");
document.body.appendChild(divpaniertotal);

var divpaniertotal2 = document.createElement("div");
divpaniertotal2.setAttribute("id","total2");
document.body.appendChild(divpaniertotal2);

 idarticleparse = sessionStorage.getItem("idarticle");
 idarticleparse = JSON.parse(idarticleparse)

 
 // tableau pour le prix total de la commande 
 let tabloprice = [];
// Si il n'y a pas de produit la page affiche votre panier est vide 
total()
 function total(){
    if(idarticleparse === null){
        document.getElementById('total').innerHTML = " VOTRE PANIER EST VIDE "
    }
    else{
        foreach()
    }
 }

function foreach(){
idarticleparse.forEach(function(article , index){
    var responseid 
  var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            responseid = response 
            

            var articleteddy =  document.createElement("div");
            articleteddy.setAttribute("id", index);
            articleteddy.innerHTML=` <thead>
            <tr>
            <th><img src=${responseid.imageUrl}></th>
            <th>Nom : ${responseid.name} </th><th>Couleur:${article.colors}</th><th> Prix: ${responseid.price} </th>
            <input id="btn" type="submit" onclick="supprimer('${index}')" value="Supprimer"></th></tr>
            </thead>
            <tbody></tbody>
            </table></form>`
      
     
            document.getElementById("divpanier").appendChild(articleteddy)


     
            tabloprice.push(responseid.price)
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(tabloprice.reduce(reducer));
        document.getElementById("total").innerHTML = "Total de votre commande:   " + tabloprice.reduce(reducer)   
    }   
    }
request.open("GET", "http://localhost:3000/api/teddies/" + article.id );
request.send();
});
}
let  produit = []; 
function supprimer(index){
   
        document.getElementById(index).innerHTML= "" ;
   delete idarticleparse[index]
  delete tabloprice[index]
  
  console.log(tabloprice)
  document.getElementById('total').innerHTML = "" ;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(tabloprice.reduce(reducer));
document.getElementById("total2").innerHTML = "Total de votre commande:   " + tabloprice.reduce(reducer)   
  
    console.log(idarticleparse)
   // sessionStorage.removeItem("idarticle");
    document.getElementById(index).innerHTML= "";
       foreach()
    
    }


let products = [] ;
let resulto = document.getElementById("resulto");
document.body.appendChild(resulto);
let submit = form[5] ;


// Variable pour fonction de validation formulaire
var formValid = document.getElementById("btn");
var nomclient = document.getElementById("nomclient");
var missnom = document.getElementById("missnom");
var prenomclient = document.getElementById("prenomclient");
var missprenom = document.getElementById("missprenom");
var villeclient = document.getElementById("villeclient");
var missville = document.getElementById("missville");
var adresseclient = document.getElementById("adresseclient");
var missadresse = document.getElementById("missadresse");
var emailclient = document.getElementById("emailclient");
var missemail = document.getElementById("missemail");

formValid.addEventListener('click', validation );


// FUNCTION VALIDATION FORMULAIRE
function validation(event){
  for( i = 0 ; i < idarticleparse.length ; i++){
    products.push(idarticleparse[i].id)
  }
   
        
  
  var motValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
  var emailValid = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  
      // SI le champs est vide 
    if(nomclient.validity.valueMissing){
        event.preventDefault();
        missnom.textContent = "Nom manquant";
        missnom.style.color = "red";
    }
   else if (motValid.test(nomclient.value) == false){
    event.preventDefault();
     missnom.textContent = 'Format incorrect';
      missnom.style.color = 'orange';
      return false
    }
       if(prenomclient.validity.valueMissing){
           event.preventDefault();
           missprenom.textContent = "Prenom manquant";
           missprenom.style.color = "red";
    }
   else if (motValid.test(prenomclient.value) == false){
        event.preventDefault();
         missprenom.textContent = 'Format incorrect';
          missprenom.style.color = 'orange';
          return false
    }
    if(villeclient.validity.valueMissing){
               event.preventDefault();
               missville.textContent = "ville manquant";
               missville.style.color = "red";
    }
  else  if (motValid.test(villeclient.value) == false){
        event.preventDefault();
         missville.textContent = 'Format incorrect';
          missville.style.color = 'orange';
          return false
        }
    if(adresseclient.validity.valueMissing){
                   event.preventDefault();
                   missadresse.textContent = "Adresse manquant";
                   missadresse.style.color = "red";
    }              
   else if(emailValid.test(emailclient.value) == false){
    event.preventDefault();
    missemail.textContent = 'Format incorrect';
     missemail.style.color = 'orange';
     return false
    }

 else{
envoipost()
 }

 

    
   
  
 
}
function envoipost(){
   

  var recupproduct = document.getElementById("total").innerHTML; 
    console.log(recupproduct);
    if( recupproduct === "0"){
      alert("votre panier est vide , vous ne pouvez passer commande")}
    
else{
    let prixtotalcommande = [];
  var returnid 
    var request = new XMLHttpRequest();
        
    request.onload = function () {
      if (request.readyState === request.DONE && request.status === 201) {
        var respons = JSON.parse(request.responseText);
        returnid = respons
     produits = returnid.products
     for( i = 0 ; i < produits.length ; i++){
         console.log(produits[i].price)
         prixtotalcommande.push(produits[i].price)
         const reducer = (accumulator, currentValue) => accumulator + currentValue;
         console.log(prixtotalcommande.reduce(reducer));
     

       document.getElementById("divpanier").innerHTML= "" ; 
       document.getElementById("formulaire").innerHTML="" ;
       document.getElementById("total").innerHTML= "" ;
      
      
    
       var returnconfirm = document.createElement("div");
       returnconfirm.innerHTML=`
       <h2> Votre commande a bien était valider<h2>
       <p> Nous vous remercions de votre commande <br> voici votre numero de commande:${returnid.orderId}</p>
       <p>Le prix total de votre commande est de ${prixtotalcommande.reduce(reducer)} `
       document.getElementById("divpanier").appendChild(returnconfirm);
      
    // resulto.innerHTML = responso.postData.text;
     }
      }
    
}
    request.open('POST', 'http://localhost:3000/api/teddies/order');
    request.setRequestHeader('Content-Type', 'application/json');
   // request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

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
    sessionStorage.removeItem("idarticle") 
}
    
}



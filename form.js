// Création div pour produit  panier
var headPanier = document.getElementById("head-panier");

var divPanier = document.createElement("div");
divPanier.setAttribute("id", "divpanier");
headPanier.appendChild(divPanier);

var divPanierTotal = document.createElement("div");
divPanierTotal.setAttribute("id", "total");
headPanier.appendChild(divPanierTotal);

recupPanier()
function recupPanier(){
// Récupération des produits dans le panier 
panier = sessionStorage.getItem("panier");
panier = JSON.parse(panier)
}
 

// tableaux pour les id , pour la requette POST
let tabloId = [];
let products = [];
let tabloP = [];
// tableau pour le prix total de la commande 
let tabloPrice = [];
// Si il n'y a pas de produit la page affiche "votre panier est vide"

total()
function total() {
	if (panier === null) {
		document.getElementById('total').innerHTML = " VOTRE PANIER EST VIDE "
	} else {
		forEach()
	}
}

// FUNCTION FOREACH qui récupère les ID sélectionnés et les affiche dans le panier
function forEach() {

	panier.forEach(function(article, index) {
		var responseId
		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				var response = JSON.parse(this.responseText);
				responseId = response
                responseId.price = responseId.price / 100
				var articleTeddy = document.createElement("div");
				articleTeddy.setAttribute("id", responseId._id );
				articleTeddy.setAttribute("class", "background-panier");
				articleTeddy.innerHTML = ` <thead>
            <tr>
            <th><img class="image-panier" src=${responseId.imageUrl}></th>
            <th><p class="flex-panier"> Nom: ${responseId.name}  </p></th>
            <th> <p class="flex-panier"> Couleur: ${article.colors}</p></th>
            <th><p id="${responseId._id}-priceQuant" class="flex-panier"> Prix: ${article.price} &euro; </p> </th>
            <input id="${responseId._id}-input" type="number" value="${article.quantiter}">
            <input class="flex-panier-btn" onclick="supprimer(${index})" id="btnid" type="submit"  value="Supprimer"></tr>
            <input id="id-cache" type="hidden" value="${responseId._id}">
            </thead>
            <tbody></tbody>
            </table></form>`

				console.log(tabloId)
				/* récuperer les prix des produits selectionnés et les push dans le tabloPrice dans le but d'aditionner toute les valeurs 
			   qui nous donneront le prix total du panier  */
			 
			
			   tabloPrice.push(article.price)
		    	const reducer = (accumulator, currentValue) => accumulator + currentValue;
				console.log(tabloPrice.reduce(reducer));
				console.log(tabloPrice)
				document.getElementById("total").innerHTML = "Total de votre commande:   " + tabloPrice.reduce(reducer) + "&euro;"
				
				if (document.getElementById(responseId._id)) {
					// si l'article existe on incrémente sa quantité 
					var input = document.getElementById(responseId._id + "-input")
					var inputValue = input.getAttribute("value")
					inputValue = parseInt(inputValue);
					inputValue = inputValue + 1
					input.setAttribute("value", inputValue);
					panier.pop()
				    tabloPrice.pop()
					recupIdInput = sessionStorage.getItem("panier")
					recupIdInput = JSON.parse(recupIdInput)
					console.log(recupIdInput)
					
					//  multiplie la quantité par son prix
					for (i = 0; i < recupIdInput.length; i++) {
						recupIdInput[i].quantiter = inputValue
						recupIdInput[i].price = responseId.price * inputValue
						
						// ajoute autant d'id qu'il y a de quantité
						var idPush = recupIdInput[i].id + "supprime";
						var idPushQuantiter = idPush.repeat(inputValue)
						var idQu = idPushQuantiter.split("supprime");
						idQu.pop()

						recupIdInput[i].quantiterId = idQu
						
					}
					recupIdInput.pop()
					// enregistre les modifications dans le panier 
					recupIdInput_json = JSON.stringify(recupIdInput)
					recupIdInput = sessionStorage.setItem("panier", recupIdInput_json)

				} else {
					document.getElementById("divpanier").appendChild(articleTeddy);

				}
				// appel la fonction uptadeTotalPrice lorsque que l'input number des produits est manipulé
				var valuId = document.getElementById(responseId._id + "-input")
				valuId.addEventListener("input", uptadeTotalPrice)

			}

        }
        // fonction uptadetotalPrice() Cette fonction doit faire une loupe à travers tout les teddy 
        // et à chaque teddy elle doit incrémenter le prix total par rapport au prix du teddy par sa quantité //

		function uptadeTotalPrice() {
			
			// mettre à jour la quantité dans le local storage du produit correspondant  
			var quantiterPanier = sessionStorage.getItem("panier")
			quantiterPanier = JSON.parse(quantiterPanier)
			for (i = 0; i < quantiterPanier.length; i++) {
				var numberquantiter = document.getElementById(quantiterPanier[index].id + "-input").value
				quantiterPanier[index].quantiter = numberquantiter
				console.log(numberquantiter)
				quantiterPanier[index].price = numberquantiter * responseId.price
				console.log(quantiterPanier[index].price)
				//
				var idPush = quantiterPanier[index].id + "supprime";
				var idPushQuantiter = idPush.repeat(numberquantiter)
				var idQu = idPushQuantiter.split("supprime");
				idQu.pop()

				quantiterPanier[index].quantiterId = idQu

				//
				quantiter_json = JSON.stringify(quantiterPanier)
				quantiter = sessionStorage.setItem("panier", quantiter_json)
				console.log(quantiterPanier[i].price)

			   var price = sessionStorage.getItem("panier")
			  
			   price = JSON.parse(price)
			   for(i=0 ; i < price.length ; i++){
				console.log(price[index].price)
				document.getElementById(responseId._id + "-priceQuant").innerHTML= "Prix " + price[index].price + " &euro;"
			
				  }
				 
				 
				 
				  tabloPrice.splice(index, 1, price[index].price)
				 // tabloPrice.push(price[index].price);
				  
		    	const reducer = (accumulator, currentValue) => accumulator + currentValue;
				console.log(tabloPrice.reduce(reducer));
				console.log(tabloPrice)
				document.getElementById("total").innerHTML = "Total de votre commande:   " + tabloPrice.reduce(reducer) + "&euro;"
			}
			
		}

		request.open("GET", "http://localhost:3000/api/teddies/" + article.id);
		request.send();

	});
}

// RECUP L'élément 5 du formulaire 
let submit = form[5];
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

formValid.addEventListener('click', validation);

let tabloIdConcat = [];
let productsConcat = [];
// FUNCTION VALIDATION FORMULAIRE
function validation(event) {

	// Regex pour validation formulaire   
	var motValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
	var emailValid = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

	// validation formulaire 
	if (nomClient.validity.valueMissing) {
		event.preventDefault();
		missNom.textContent = "Nom manquant";
		missNom.style.color = "red";
	} else if (motValid.test(nomClient.value) == false) {
		event.preventDefault();
		missNom.textContent = 'Format incorrect';
		missNom.style.color = 'orange';
		return false
	}
	if (prenomClient.validity.valueMissing) {
		event.preventDefault();
		missPrenom.textContent = "Prenom manquant";
		missPrenom.style.color = "red";
	} else if (motValid.test(prenomClient.value) == false) {
		event.preventDefault();
		missPrenom.textContent = 'Format incorrect';
		missPrenom.style.color = 'orange';
		return false
	}
	if (villeClient.validity.valueMissing) {
		event.preventDefault();
		missVille.textContent = "ville manquant";
		missVille.style.color = "red";
	} else if (motValid.test(villeClient.value) == false) {
		event.preventDefault();
		missVille.textContent = 'Format incorrect';
		missVille.style.color = 'orange';
		return false
	}
	if (adresseClient.validity.valueMissing) {
		event.preventDefault();
		missAdresse.textContent = "Adresse manquant";
		missAdresse.style.color = "red";
	} else if (emailValid.test(emailClient.value) == false) {
		event.preventDefault();
		missEmail.textContent = 'Format incorrect';
		missEmail.style.color = 'orange';
		return false
	} else {
		/* récupération du panier dans le sessionStorage, boucle permettant de recupérer l'id dans le panier 
		 et l'inserer dans le tableau products
		qui sera envoyé à l'API*/
         
		var recupPanier = sessionStorage.getItem("panier")
		recupPanierParse = JSON.parse(recupPanier)
		console.log(recupPanierParse)
		recupPanierParse.forEach(function(id) {
			if (id.quantiter === 1) {
				tabloId.push(id.quantiterId)
			} else {
				console.log(id.quantiterId)
				teddyIdQuantiter = id.quantiterId
				for (i = 0; i < teddyIdQuantiter.length; i++) {
					console.log(teddyIdQuantiter[i])
					tabloId.push(teddyIdQuantiter[i])
				}
			}
		})
		var filtered = tabloId.filter(function(el) {
			return el != null;
		});
		products = filtered.concat(tabloIdConcat)
		//  appel de la fonction envoipost() (requette POST)
		envoiPost()
	}

}

//FUNCTION POUR SUPPRIMER DES PRODUITS DU PANIER 
function supprimer(index) {
	
	console.log(panier)
	// get item panier supprimer le teddy  selectionner puis set item avec le nouveau panier //
    for (i = 0; i < panier.length; i++) {
		
if(panier[index] === undefined){

}
else{
		var divpanier = document.getElementById("divpanier");
		var elementsup = document.getElementById(panier[index].id);
	   var recupPanierSupprime = sessionStorage.getItem("panier")
	   recupPanierSupprime_json = JSON.parse(recupPanierSupprime)
		delete recupPanierSupprime_json[index]
		delete tabloPrice[index]
		delete panier[index]
		console.log(panier)
		
		// si le tableau contient des valeurs undefined , nan , null ou '' elle seront supprimées du tableau
		var panier_filtre = recupPanierSupprime_json.filter(function(val) {
			if (val == '' || val == NaN || val == undefined || val == null) {
				return false;
			}
			return true;
		});
		panier_filtre_json = JSON.stringify(panier_filtre)
		panier_filtre = sessionStorage.setItem("panier", panier_filtre_json)
		// recupere le panier modifier est si length === 0 alors renvoi 0 en total commande 
	    var recupPanierSupprime1 = sessionStorage.getItem("panier")
	    recupPanierSupprime1_json = JSON.parse(recupPanierSupprime1)
	    console.log(recupPanierSupprime1_json)
	     if(recupPanierSupprime1_json.length === 0){
		document.getElementById("total").innerHTML = "Total de votre commande: 0 &euro;"
	    }

		console.log(elementsup)
		divpanier.removeChild(elementsup)
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		console.log(tabloPrice.reduce(reducer));
		console.log(tabloPrice)
		document.getElementById("total").innerHTML = "Total de votre commande:   " + tabloPrice.reduce(reducer) + " &euro;"
	
	
	}
	
  }

}

// fonction pour envoyer l'objet contact et le tableau products a l'api 
function envoiPost() {

	let prixTotalCommande = [];
	var returnId
	var request = new XMLHttpRequest();

	request.onload = function() {
		if (request.readyState === request.DONE && request.status === 201) {
			var respons = JSON.parse(request.responseText);
			// récupération de la reponse de la requette POST
			returnId = respons
			produits = returnId.products
			for (i = 0; i < produits.length; i++) {
				console.log(produits[i].price)
				var ProduitCentime = produits[i].price / 100
				prixTotalCommande.push(ProduitCentime)
				const reducer = (accumulator, currentValue) => accumulator + currentValue;
				console.log(prixTotalCommande.reduce(reducer));
				document.getElementById("divpanier").innerHTML = "";
				document.getElementById("formulaire").innerHTML = "";
				document.getElementById("total").innerHTML = "";

				// réponse inner html 
				var returnConfirm = document.createElement("div");
				returnConfirm.innerHTML = `<div class="confirmation-panier">
          <h2> Votre commande a bien était valider</h2>
          <p> Nous vous remercions de votre commande <br>
          voici votre numero de commande:<br><span class="idconfirm">${returnId.orderId}</span></p>
          <p>Le prix total de votre commande est de ${prixTotalCommande.reduce(reducer)}  &euro; </p>
          </div> `
				document.getElementById("formulaire").appendChild(returnConfirm);
			}
		}
	}
	request.open('POST', 'http://localhost:3000/api/teddies/order');
	request.setRequestHeader('Content-Type', 'application/json');

	// objet contact envoyé à l'API
	var contact = {
		firstName: document.getElementById("nomclient").value,
		lastName: document.getElementById('prenomclient').value,
		address: document.getElementById("adresseclient").value,
		city: document.getElementById("villeclient").value,
		email: document.getElementById("emailclient").value
	}
	// object data avec l'objet contact et le tableau products 
	var data = {
		contact: contact,
		products: products
	}
	console.log(JSON.stringify(data));
	request.send(JSON.stringify(data));
	// suppression des élements du panier aprés validation de la commande 
	sessionStorage.removeItem("panier")
}

// recuperation des donner enregistrer du formulaire dans le session storage
var recupnom_json = sessionStorage.getItem("nom");
var recupnom = JSON.parse(recupnom_json)
var recupprenom_json = sessionStorage.getItem("prenom");
var recupprenom = JSON.parse(recupprenom_json);
var recupage_json = sessionStorage.getItem("age");
var recupage = JSON.parse(recupage_json);
var recupadresse_json = sessionStorage.getItem("adresse");
var recupadresse = JSON.parse(recupadresse_json);
var recupemail_json = sessionStorage.getItem("email");
var recupemail = JSON.parse(recupemail_json);
var recuptotal_json = sessionStorage.getItem("total");
var recuptotal = JSON.parse(recuptotal_json);
///
 
// creation fichier retour apres validation commande 


const dformulaire =`
<p>ORNITEDY vous remercie de votre commande</p>
<p>Votre commande a bien était enregistrer</p>
<p>Recapitulatif de votre commande</p>
<p>ARTICLE:</p>
<p>Prix total de votre commande: ${recuptotal}</p>
<p>Renseignement client</p>
<p>Nom: ${recupnom}</p>
<p>Prenom: ${recupprenom}</p>
<p>Age: ${recupage}</p>
<p>Adresse de livraison: ${recupadresse}</p>
<p>Email: ${recupemail}</p>`

document.getElementById("formulaire").innerHTML= dformulaire ; 
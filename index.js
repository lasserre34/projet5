

// RECUPERATION DES PRODUIT
var teddies 

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        teddies = response ;
      displayteddies() ;
    
    }
};

request.open("GET", "http://localhost:3000/api/teddies");
request.send();




function displayteddies(){

  teddies.forEach(function(teddy, id , ) {
  var teddyy = document.createElement("div");
  teddyy.innerHTML =`<form name="form1" action="ficheproduit.html"><table>
    <thead>
    <tr>
    <th><img src=${teddy.imageUrl}></th>
    <th>Nom : ${teddy.name}</th><th>Prix: ${teddy.price}</th>
    <th><input  id="produitinput" type="hidden" name="${teddy.name}"  value="ours${teddy._id}">
    <input type="submit" onclick="selectprod(${id})"></th></tr>
    </thead>
    <tbody></tbody>
    </table></form>`

       document.body.appendChild(teddyy) ;
  });

}


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



function selectprod(id){
console.log(id);
if(id === 2){
  
  var idteddy3 = `  <h1> Couple d'ours en peluche Lenny and Carl</h1>
  <form class="textcenter" name="monForm" action="panier.html">
  <img src=${teddy3.imageUrl}>
  <p>Nom: ${teddy3.name}</p>
  <p>Prix: ${teddy3.price}</p>
  <p>Description: ${teddy3.description}</p>
  <label for="choixcouleur">Sélectionner la couleur du produit</label>
  <select name="choixcouleur">
  <option value="${teddy3.colors[0]}"/>${teddy3.colors[0]}</option>
  </select>
  <input type="submit" onclick="selectcolor3()" value="Ajouter au panier"/>
  <input type="hidden"value="">`
  
  var  ours3_json = JSON.stringify(idteddy3);
  localStorage.setItem("idteddy3", ours3_json);
  
  localStorage.removeItem("idteddy1");
  localStorage.removeItem("idteddy2");
  localStorage.removeItem("idteddy4");
  localStorage.removeItem("idteddy5");

}
if( id === 1){
  var idteddy2 = ` 
 <h1> OUrs en peluche Anorld</h1>
  <form class="textcenter" name="monForm" action="panier.html">
  <img src=${teddy2.imageUrl}>
  <p>Nom: ${teddy2.name}</p>
  <p>Prix: ${teddy2.price}</p>
  <p>Description: ${teddy2.description}</p>
  <label for="choixcouleur">Sélectionner la couleur du produit</label>
  <select name="choixcouleur">
  <option value="${teddy2.colors[0]}"/>${teddy2.colors[0]}</option>
  <option value="${teddy2.colors[1]}"/>${teddy2.colors[1]}</option>
  <option value="${teddy2.colors[2]}"/>${teddy2.colors[2]}</option>
  </select>
  <input type="submit" onclick="selectcolor2()" value="Ajouter au panier"/>
  <input type="hidden"value="">
`
var  ours2_json = JSON.stringify(idteddy2);
localStorage.setItem("idteddy2", ours2_json);

localStorage.removeItem("idteddy1");
localStorage.removeItem("idteddy3");
localStorage.removeItem("idteddy4");
localStorage.removeItem("idteddy5");
}
if(id === 0){


var idteddy1 = ` 
<h1>OUrs en peluche Norbert</h1>
<form class="textcenter" name="monForm" action="panier.html">
<img src=${teddy1.imageUrl}>
<p>Nom: ${teddy1.name}</p>
<p>Prix: ${teddy1.price}</p>
<p>Description: ${teddy1.description}</p>
<label for="choixcouleur">Sélectionner la couleur du produit</label>
<select name="choixcouleur">
<option value="${teddy1.colors[0]}"/>${teddy1.colors[0]}</option>
<option value="${teddy1.colors[1]}"/>${teddy1.colors[1]}</option>
<option value="${teddy1.colors[2]}"/>${teddy1.colors[2]}</option>
<option value="${teddy1.colors[3]}"/>${teddy1.colors[3]}</option>
</select>
<input type="submit" onclick="selectcolor1()" value="Ajouter au panier"/>
<input type="hidden"value="">

`

var ours1_json = JSON.stringify(idteddy1);
localStorage.setItem("idteddy1", ours1_json)
  
localStorage.removeItem("idteddy2");
localStorage.removeItem("idteddy3");
localStorage.removeItem("idteddy4");
localStorage.removeItem("idteddy5");

}
if( id === 3){

  var idteddy4 = ` 
  <h1>OUrs en peluche Gustav</h1>
  <form class="textcenter" name="monForm" action="panier.html">
  <img src=${teddy4.imageUrl}>
  <p>Nom: ${teddy4.name}</p>
  <p>Prix: ${teddy4.price}</p>
  <p>Description: ${teddy4.description}</p>
  <label for="choixcouleur">Sélectionner la couleur du produit</label>
  <select name="choixcouleur">
  <option value="${teddy4.colors[0]}"/>${teddy4.colors[0]}</option>
  <option value="${teddy4.colors[1]}"/>${teddy4.colors[1]}</option>
  <option value="${teddy4.colors[2]}"/>${teddy4.colors[2]}</option>
  </select>
  <input type="submit" onclick="selectcolor4()" value="Ajouter au panier"/>
  <input type="hidden"value="">`
  
  var  ours4_json = JSON.stringify(idteddy4);
  localStorage.setItem("idteddy4", ours4_json);
  
  localStorage.removeItem("idteddy1");
  localStorage.removeItem("idteddy2");
  localStorage.removeItem("idteddy3");
  localStorage.removeItem("idteddy5");

  
}
if(id === 4){
  var idteddy5 = ` 
  <h1>Ours en peluche Garfunkel</h1>
  <form class="textcenter" name="monForm" action="panier.html">
  <img src=${teddy5.imageUrl}>
  <p>Nom: ${teddy5.name}</p>
  <p>Prix: ${teddy5.price}</p>
  <p>Description: ${teddy5.description}</p>
  <label for="choixcouleux">Sélectionner la couleur du produit</label>
  <select name="choixcouleur">
  <option value="${teddy5.colors[0]}"/>${teddy5.colors[0]}</option>
  <option value="${teddy5.colors[1]}"/>${teddy5.colors[1]}</option>
  <option value="${teddy5.colors[2]}"/>${teddy5.colors[2]}</option>
  </select>
  <input type="submit" onclick="selectcolor5()" value="Ajouter au panier"/>
  <input type="hidden"value="">`
  
  var  ours5_json = JSON.stringify(idteddy5);
  localStorage.setItem("idteddy5", ours5_json);
  
  localStorage.removeItem("idteddy1");
  localStorage.removeItem("idteddy2");
  localStorage.removeItem("idteddy3");
  localStorage.removeItem("idteddy4");
}
}

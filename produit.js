
// SESSION STORAGE RECUP JSON PROD 1 FICHEPRODUIT.HTML

        var pol_json = sessionStorage.getItem("produtii");
      var pol = JSON.parse(pol_json);
      document.getElementById("produitt1").innerHTML= pol ; 

// SESSION STORAGE RECUP JSON PROD 2 FICHEPRODUIT.HTML

      var pol2_json = sessionStorage.getItem("produtii2");
      var pol2 = JSON.parse(pol2_json);
      document.getElementById("produitt2").innerHTML= pol2 ; 

// SESSION STORAGE RECUP JSON PROD 3 FICHEPRODUIT.HTML 

      var pol3_json = sessionStorage.getItem("produtii3");
      var pol3 = JSON.parse(pol3_json);
      document.getElementById("produitt3").innerHTML= pol3 ; 

// SESSION STORAGE RECUP JSON PROD 4 FICHEPRODUIT.HTML

var pol4_json = sessionStorage.getItem("produtii4");
var pol4 = JSON.parse(pol4_json);
document.getElementById("produitt4").innerHTML= pol4 ; 

// SESSION STORAGE RECUP JSON PROD 5 FICHEPRODUIT.HTML

var pol5_json = sessionStorage.getItem("produtii5");
var pol5 = JSON.parse(pol5_json);
document.getElementById("produitt5").innerHTML= pol5 ; 

// tableau produit 
// Fonction Produit me permettant de ne pas ecricre name: et prix: dans les objects //
function Produitspanier(name,price,) {
   
  this.name = name ; 
  this.price = price ;
  

       
}
// Tableau des Noms et du Prix des produits //
const  produit1p = new Produitspanier("Ours en laine" ,30 );
const  produit2p = new Produitspanier(  "Ours en poil de lapin" , 55);
const  produit3p = new Produitspanier( "Ours en chanvre", 45);
const  produit4p = new Produitspanier( "Ours en soie" , 85);
const  produit5p =  new Produitspanier( "Ours en peluche" , 25  );
let produitsp = [];
produitsp.push(produit1p,produit2p,produit3p,produit4p,produit5p);
  
// LOCAL STORAGE SESSION PRODUIT 1 PANIER.HTML 





function selectcolor1(){
  var couleur1="" ; 
  // avant la boucle la couleur n'est pas choisie 
  
  for (var i=0; i<document.monForm.couleur1.length; i++){
      if (document.monForm.couleur1[i].checked){
          couleur1=document.monForm.couleur1[i].value;
          break; // case cocher on sort de la boucle 
      }
  }
  
  if (couleur1==""){
    alert("selectionner une couleur")
          
    }

  else {
  
  var couleur1_json = JSON.stringify(couleur1);
  sessionStorage.setItem("produit1paniercouleur",couleur1_json);
  // RECUP COULEUR CHOISIE PRODUIT 1 
  
  var prodpanier1_json = JSON.stringify(`<table class="table">
  <thead>
   <tr><th>Nom: ${produit1p.name}</th><th>Couleur: ${couleur1}</th><th>Prix: ${produit1p.price}</th><th><input type="submit" onclick="suprime1()" value="supprimer du panier"/></th></tr>
  </thead>
 <tbody></tbody>
</table>`);
  sessionStorage.setItem("produit1panier",prodpanier1_json);
 // VAR PRIX PRODUIT 2
 var price1_json = JSON.stringify(30);
 sessionStorage.setItem("prix1", price1_json); 
    }
  }
  
// LOCAL STORAGE SESSION PRODUIT 2  
  function selectcolor2(){
      var couleur2="" ; 
      // avant la boucle la couleur n'est pas choisie 
      
      for (var i=0; i<document.monForm.couleur2.length; i++){
          if (document.monForm.couleur2[i].checked){
              couleur2=document.monForm.couleur2[i].value;
              break; // case cocher on sort de la boucle 
          }
   }
      
      if (couleur2==""){
          alert("Veuillez selectionner une couleur");
   }
      else {
       
        var couleur2_json = JSON.stringify(couleur2);
        sessionStorage.setItem("produit2paniercouleur",couleur2_json);

        var prodpanier2_json = JSON.stringify(`<table class="table">
        <thead>
         <tr><th>Nom: ${produit2p.name}</th><th>Couleur: ${couleur2}</th><th>Prix: ${produit2p.price}</th><th><input type="submit" onclick="suprime2()" value="supprimer du panier"/></th></tr>
        </thead>
       <tbody></tbody>
      </table> `);
        sessionStorage.setItem("produit2panier",prodpanier2_json);
        // VAR PRIX PRODUIT 2
        var price2_json = JSON.stringify(55);
        sessionStorage.setItem("prix2", price2_json); 
      }
  }    

      // LOCAL STORAGE SESSION PRODUIT 3 
  function selectcolor3(){
      var couleur3="" ; 
      // avant la boucle la couleur n'est pas choisie 
      
      for (var i=0; i<document.monForm.couleur3.length; i++){
          if (document.monForm.couleur3[i].checked){
              couleur3=document.monForm.couleur3[i].value;
              break; // case cocher on sort de la boucle 
          }
   }
       
      if (couleur3==""){
          alert("Veuillez selectionner une couleur");
      
   }
      else {
          var couleur3_json = JSON.stringify(couleur3);
      sessionStorage.setItem("produit3paniercouleur",couleur3_json);
      var prodpanier3_json = JSON.stringify(`<table class="table">
      <thead>
       <tr><th>Nom: ${produit3p.name}</th><th>Couleur: ${couleur3}</th><th>Prix: ${produit3p.price}</th><th><input type="submit" onclick="suprime3()" value="supprimer du panier"/></th></tr>
      </thead>
     <tbody></tbody> 
    </table> `);
      sessionStorage.setItem("produit3panier",prodpanier3_json);
      // VAR PRIX PRODUIT 3 
      var price3_json = JSON.stringify(45);
      sessionStorage.setItem("prix3", price3_json); 
      }
   }
  
  // LOCAL STORAGE SESSION PRODUIT 4 
  function selectcolor4(){

  var couleur4="" ; 
  // avant la boucle la couleur n'est pas choisie 
  
  for (var i=0; i<document.monForm.couleur4.length; i++){
      if (document.monForm.couleur4[i].checked){
          couleur4=document.monForm.couleur4[i].value;
          break; // case cocher on sort de la boucle 
      }
 }
  
  if (couleur4==""){
      alert("Veuillez selectionner une couleur");
  
 }
  else {
      var couleur4_json = JSON.stringify(couleur4);
  sessionStorage.setItem("produit4paniercouleur",couleur4_json);
  var prodpanier4_json = JSON.stringify( `
  <table class="table">
    <thead>
     <tr><th>Nom: ${produit4p.name}</th><th>Couleur: ${couleur4}</th><th>Prix: ${produit4p.price}</th><th><input type="submit" onclick="suprime4()" value="supprimer du panier"/></th></tr>
    </thead>
   <tbody></tbody>
  </table>  `);
      sessionStorage.setItem("produit4panier",prodpanier4_json);
      // VAR PRIx  PRODUIT 4 
      var price4_json = JSON.stringify(85);
      sessionStorage.setItem("prix4", price4_json); 
     
    }
  
  }
  // LOCAL STORAGE SESSION PRODUIT 5
  function selectcolor5(){
      var couleur5="" ; 
      // avant la boucle la couleur n'est pas choisie 
      
      for (var i=0; i<document.monForm.couleur5.length; i++){
          if (document.monForm.couleur5[i].checked){
              couleur5=document.monForm.couleur5[i].value;
              break; // case cocher on sort de la boucle 
          }
      }
       if (couleur5==""){
          alert("Veuillez selectionner une couleur");
      
      } 
      else {
          var couleur5_json = JSON.stringify(couleur5);
      sessionStorage.setItem("produit5paniercouleur",couleur5_json);
      var prodpanier5_json = JSON.stringify( `
      <table class="table">
        <thead>
         <tr><th>Nom: ${produit5p.name}</th><th>Couleur: ${couleur5}</th><th>Prix: ${produit5p.price}</th><th><input type="submit" onclick="suprime5()" value="supprimer du panier"/></th></tr>
        </thead>
       <tbody></tbody>
      </table>  `);
      sessionStorage.setItem("produit5panier",prodpanier5_json);
      // VAR PRIX PRODUIT 5
      var price5_json = JSON.stringify(25);
      sessionStorage.setItem("prix5", price5_json); 
      }
   }
   
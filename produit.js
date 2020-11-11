
// nom produit
var prodduit1nom = sessionStorage.getItem("nom product1");
var prodduit2nom = sessionStorage.getItem("nom product2");
var prodduit3nom = sessionStorage.getItem('nom product3');
var prodduit4nom = sessionStorage.getItem('nom product4');
var prodduit5nom = sessionStorage.getItem('nom product5');
let nomp = [] ;
nomp.push(prodduit1nom , prodduit2nom , prodduit3nom , prodduit4nom , prodduit5nom );
// image 


var prodduit1image = sessionStorage.getItem("image product1");
var prodduit2image = sessionStorage.getItem("image product2");
var prodduit3image = sessionStorage.getItem("image product3");
var prodduit4image = sessionStorage.getItem("image product4");
var prodduit5image = sessionStorage.getItem("image product5");

let image1 = [];

image1.push(prodduit1image , prodduit2image , prodduit3image , prodduit4image , prodduit5image  ) ;


// PRIX 

var prodduit1prix = sessionStorage.getItem("prix product1");
var prodduit2prix = sessionStorage.getItem("prix product2");
var prodduit3prix = sessionStorage.getItem("prix product3");
var prodduit4prix = sessionStorage.getItem("prix product4");
var prodduit5prix = sessionStorage.getItem("prix product5");

let prix1 = [] ; 
prix1.push(prodduit1prix , prodduit2prix ,prodduit3prix , prodduit4prix , prodduit5prix  );

// DESCRIPTION 

var prodduit1des = sessionStorage.getItem("description product1");
var prodduit2des = sessionStorage.getItem("description product2");
var prodduit3des = sessionStorage.getItem("description product3");
var prodduit4des = sessionStorage.getItem("description product4");
var prodduit5des = sessionStorage.getItem("description product5");
let des1 = []; 
des1.push(prodduit1des , prodduit2des ,  prodduit3des ,prodduit4des , prodduit5des  );


        var pol_json = sessionStorage.getItem("produtii");
      var pol = JSON.parse(pol_json);
      document.getElementById("coq").innerHTML= pol ; 

      var pol2_json = sessionStorage.getItem("produtii2");
      var pol2 = JSON.parse(pol2_json);
      document.getElementById("poule").innerHTML= pol2 ; 
      
// LOCAL STORAGE SESSION PRODUIT 1 

function selectcolor1(){
  var couleur="" ; 
  // avant la boucle la couleur n'est pas choisie 
  
  for (var i=0; i<document.monForm.couleur.length; i++){
      if (document.monForm.couleur[i].checked){
          couleur=document.monForm.couleur[i].value;
          break; // case cocher on sort de la boucle 
      }
  }
  
    
  
  if (couleur==""){
    alert("selectionner une couleur")
      

      
    }

    if (couleur==""){
      document.location.href="ficheproduit.html"
    }
 

  else {
  
      var couleur1 = (couleur);
  sessionStorage.setItem("couleur du produit 1",couleur1);
  var nom1_json = JSON.stringify(`${produit1.nom}`);
  sessionStorage.setItem("nom du produit1",nom1_json);
  var prix1_json = JSON.stringify(30);
  sessionStorage.setItem("prix du produit1", prix1_json);
  
  
 
}
  
  
  }

// LOCAL STORAGE SESSION PRODUIT 2 
  function selectcolor2(){
      var couleur="" ; 
      // avant la boucle la couleur n'est pas choisie 
      
      for (var i=0; i<document.monForm.couleur.length; i++){
          if (document.monForm.couleur[i].checked){
              couleur=document.monForm.couleur[i].value;
              break; // case cocher on sort de la boucle 
          }
      }
      
        
      
      if (couleur==""){
          alert("Veuillez selectionner une couleur");
      
      }
      else {
          var couleur_json = JSON.stringify(couleur);
      sessionStorage.setItem("couleur du produit 2",couleur_json);
      var nom2_json = JSON.stringify(`${produit2.nom}`);
      sessionStorage.setItem("nom du produit2",nom2_json);
      var prix2_json = JSON.stringify(55);
      sessionStorage.setItem("prix du produit2", prix2_json)
      }
      
      
      }

      // LOCAL STORAGE SESSION PRODUIT 3 
  function selectcolor3(){
      var couleur="" ; 
      // avant la boucle la couleur n'est pas choisie 
      
      for (var i=0; i<document.monForm.couleur.length; i++){
          if (document.monForm.couleur[i].checked){
              couleur=document.monForm.couleur[i].value;
              break; // case cocher on sort de la boucle 
          }
      }
      
        
      
      if (couleur==""){
          alert("Veuillez selectionner une couleur");
      
      }
      else {
          var couleur_json = JSON.stringify(couleur);
      sessionStorage.setItem("couleur du produit 3",couleur_json);
      var nom3_json = JSON.stringify(`${produit3.nom}`);
      sessionStorage.setItem("nom du produit3",nom3_json);
      var prix3_json = JSON.stringify(45);
      sessionStorage.setItem("prix du produit3", prix3_json)

      }
      
      
      }
// LOCAL STORAGE SESSION PRODUIT 4 
function selectcolor4(){

  var couleur="" ; 
  // avant la boucle la couleur n'est pas choisie 
  
  for (var i=0; i<document.monForm.couleur.length; i++){
      if (document.monForm.couleur[i].checked){
          couleur=document.monForm.couleur[i].value;
          break; // case cocher on sort de la boucle 
      }
  }
  
    
  
  if (couleur==""){
      alert("Veuillez selectionner une couleur");
  
  }
  else {
      var couleur_json = JSON.stringify(couleur);
  sessionStorage.setItem("couleur du produit 4",couleur_json);
  var nom4_json = JSON.stringify(`${produit4.nom}`);
      sessionStorage.setItem("nom du produit4",nom4_json);
      var prix4_json = JSON.stringify(85);
      sessionStorage.setItem( "prix du produit4", prix4_json)
  }
  
  
  }

 

  // LOCAL STORAGE SESSION PRODUIT 5
  function selectcolor5(){
      var couleur="" ; 
      // avant la boucle la couleur n'est pas choisie 
      
      for (var i=0; i<document.monForm.couleur.length; i++){
          if (document.monForm.couleur[i].checked){
              couleur=document.monForm.couleur[i].value;
              break; // case cocher on sort de la boucle 
          }
      }
      
        
      
      if (couleur==""){
          alert("Veuillez selectionner une couleur");
      
      }
      else {
          var couleur_json = JSON.stringify(couleur);
      sessionStorage.setItem("couleur du produit 5",couleur_json);
      var nom5_json = JSON.stringify(`${produit5.nom}`);
      sessionStorage.setItem("nom du produit5",nom5_json);
      var prix5_json = JSON.stringify(25);
      sessionStorage.setItem( "prix du produit5" , prix5_json)
      }
      
      
      }

      
     
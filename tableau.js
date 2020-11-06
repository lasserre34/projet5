


// Fonction Produit me permettant de ne pas ecricre name: et prix: dans les objects //
function Produits(image,nom,prix,description,) {
    this.image = image; 
    this.nom = nom ; 
    this.prix = prix ;
    this.description = description ; 
         
}
// Tableau des Noms et du Prix des produits //
 const  produit1 = new Produits("teddy_1.jpg" , "Ours en laine" ,30 , "Ours en peluche fait main, matériaux provenant d'eleveur français ecoresponsable,<br> fabriquation artisanale dans une ferme dans l'aveyron");
 const  produit2 = new Produits( "teddy_2.jpg" ,"Ours en poil de lapin" , 55,"Ours en peluche fait main, matériaux provenant d'eleveur français ecoresponsable,<br> fabriquation artisanale dans une ferme dans l'aveyron");
 const  produit3 = new Produits( "teddy_3.jpg","Ours en chanvre", 45);
 const  produit4 = new Produits( "teddy_4.jpg","Ours en soie" , 85);
 const  produit5 =  new Produits( "teddy_5.jpg","Ours en peluche" , 25 );
 let produits = [];
 produits.push(produit1,produit2,produit3,produit4,produit5);

// insertion des nom est prix dans la page html //

    document.getElementById('1').innerHTML =  " Nom: " + produit1.nom ;
    document.getElementById('2').innerHTML =  " Prix: " + produit1.prix ;
    document.getElementById('3').innerHTML =  " Nom: " + produit2.nom ;
    document.getElementById('4').innerHTML =  " Prix: " + produit2.prix ;
    document.getElementById('5').innerHTML =  " Nom: "   + produit3.nom ;
    document.getElementById('6').innerHTML =  " Prix: "  + produit3.prix ;
    document.getElementById('7').innerHTML =  " Nom: "   + produit4.nom;
    document.getElementById('8').innerHTML =  " Prix: " + produit4.prix;
    document.getElementById('9').innerHTML =  " Nom: "  + produit5.nom ;
    document.getElementById('produit5').innerHTML = " Prix: "  + produit5.prix ; 

    
    
   
   // création du tableau routes //
    const routes = [
     // objet produit 1 // 
     {   
        
          name: "product1",
          // fonction  crée une div lors du click sur le boutton voir produit afin de voir descritpion produit //
           ficheproduit: function(){
        
                 const article = document.createElement("div");
                  article.innerHTML += `
                  <form name="monForm">
         <img src=${produit1.image}>
         <p>Nom: ${produit1.nom}</p>
         <p>Prix: ${produit1.prix}</p>
         <p>Description: ${produit1.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur" value="jaune"/>Jaune</li>
         <li><input type="button" onclick="selectcolor1()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
                
                  document.getElementById('app').appendChild(article)
              }
          },
        
    
      {
          name: "product2",

          ficheproduit: function(){
              const article = document.createElement("div");
               article.innerHTML += `
               <form name="monForm">
         <img src=${produit2.image}>
         <p>Nom: ${produit2.nom}</p>
         <p>Prix: ${produit2.prix}</p>
         <p>Description: ${produit2.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur" value="jaune"/>Jaune</li>
         <li><input type="button" onclick="selectcolor2()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
                
               
              document.getElementById('app').appendChild(article)
          }
      },
{
      name: "product3",

      ficheproduit: function(){
          const article = document.createElement("div");
           article.innerHTML += `
           <form name="monForm">
         <img src=${produit3.image}>
         <p>Nom: ${produit3.nom}</p>
         <p>Prix: ${produit3.prix}</p>
         <p>Description: ${produit3.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur" value="jaune"/>Jaune</li>
         <li><input type="button" onclick="selectcolor3()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
            
           
          document.getElementById('app').appendChild(article)
      }
  },
  {
    name: "product4",

    ficheproduit: function(){
        const article = document.createElement("div");
         article.innerHTML += `
         <form name="monForm" method="get" action="panier.html">
         <img src=${produit4.image}>
         <p>Nom: ${produit4.nom}</p>
         <p>Prix: ${produit4.prix}</p>
         <p>Description: ${produit4.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur" value="jaune"/>Jaune</li>
         <li><input type="submit" onclick="selectcolor4()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
          
         
        document.getElementById('app').appendChild(article)
    }
},
{
    name: "product5",

    ficheproduit: function(){
        const article = document.createElement("div");
         article.innerHTML += `
         <form name="monForm" action="panier.html"/>
         <ul>
         <img src=${produit5.image}>
         <li/>Nom: ${produit5.nom}</li>
         <li/>Prix: ${produit5.prix}</li>
         <li>Description: ${produit5.description}</li>
         
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur" value="jaune"/>Jaune</li>
         <li><input class="panier" type="submit" onclick="selectcolor5()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
          
         
        document.getElementById('app').appendChild(article)
    }
},
  ]
  // Aparition des fiche produit 1 a 1 a chaque boutton associer 

  function unseulproduit(name){
      
      
      document.getElementById('app').innerHTML = ""

      for (let index = 0; index < routes.length; index++) {
          if(routes[index].name == name){
              routes[index].ficheproduit();
          }
          
      }
  }

 

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
        alert("Veuillez selectionner une couleur");
    
    }
    else {
        var couleur_json = JSON.stringify(couleur);
    sessionStorage.setItem("couleur du produit 1",couleur_json);
    var produit1_json = JSON.stringify(produit1);
    sessionStorage.setItem("produit1",produit1_json);
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
        var produit2_json = JSON.stringify(produit2);
        sessionStorage.setItem("produit2",produit2_json);
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
        var produit3_json = JSON.stringify(produit3);
        sessionStorage.setItem("produit3",produit3_json);
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
    var produit4_json = JSON.stringify(produit4);
    sessionStorage.setItem("produit4",produit4_json);
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
        var produit5_json = JSON.stringify(produit5);
        sessionStorage.setItem("produit5",produit5_json);
        }
        
        
        }
 



 
 
  
  

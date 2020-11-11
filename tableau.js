


// Fonction Produit me permettant de ne pas ecricre name: et prix: dans les objects //
function Produits(image,nom,prix,description) {
    this.image = image; 
    this.nom = nom ; 
    this.prix = prix ;
    this.description = description ; 

         
}
// Tableau des Noms et du Prix des produits //
 const  produit1 = new Produits("teddy_1.jpg" , "Ours en laine" ,30 , "Ours en peluche fait main, matériaux provenant d'eleveur français ecoresponsable,<br> fabriquation artisanale dans une ferme dans l'aveyron" );
 const  produit2 = new Produits( "teddy_2.jpg" ,"Ours en poil de lapin" , 55,"Ours en peluche fait main, matériaux provenant d'eleveur français ecoresponsable,<br> fabriquation artisanale dans une ferme dans l'aveyron");
 const  produit3 = new Produits( "teddy_3.jpg","Ours en chanvre", 45,"lvddfdgfdgd");
 const  produit4 = new Produits( "teddy_4.jpg","Ours en soie" , 85,"gdfkhndgjkbncjbn");
 const  produit5 =  new Produits( "teddy_5.jpg","Ours en peluche" , 25 ,"grkngfdjkngdsfsf" );
 let produits = [];
 produits.push(produit1,produit2,produit3,produit4,produit5);

// insertion des nom est prix dans la page html //

    document.getElementById('1').innerHTML = "Nom:"  + produit1.nom ;
    document.getElementById('2').innerHTML = "prix:"  + produit1.prix ;
    document.getElementById('3').innerHTML =  " Nom: " + produit2.nom ;
    document.getElementById('4').innerHTML =  " Prix: " + produit2.prix ;
    document.getElementById('5').innerHTML =  " Nom: "   + produit3.nom ;
    document.getElementById('6').innerHTML =  " Prix: "  + produit3.prix ;
    document.getElementById('7').innerHTML =  " Nom: "   + produit4.nom;
    document.getElementById('8').innerHTML =  " Prix: " + produit4.prix;
    document.getElementById('9').innerHTML =  " Nom: "  + produit5.nom ;
    document.getElementById('produit5').innerHTML = " Prix: "  + produit5.prix ; 

    
     // LOCAL STORAGE PRODUIT 1 POUR FICHEPRODUIT.HTML

     
       
            sessionStorage.setItem("image product1",`${produit1.image}`);
            sessionStorage.setItem("nom product1", `${produit1.nom}`);
            sessionStorage.setItem("description product1",`${produit1.description}`);
            sessionStorage.setItem("prix product1",`${produit1.prix}`);
            // REMOVE ITEM PRODUCT 2 
            sessionStorage.removeItem("image product2",`${produit2.image}`);
            sessionStorage.removeItem("nom product2",`${produit2.nom}`);
            sessionStorage.removeItem("description product2",`${produit2.description}`);
            sessionStorage.removeItem("prix product2",`${produit2.prix}`);
             // REMOVE ITEM PRODUCT 3 
            sessionStorage.removeItem("image product3",`${produit3.image}`);
            sessionStorage.removeItem("nom product3",`${produit3.nom}`);
            sessionStorage.removeItem("description product3",`${produit3.description}`);
            sessionStorage.removeItem("prix product3",`${produit3.prix}`)
            // REMOVE ITEM PRODUCT 4
            sessionStorage.removeItem("image product4",`${produit4.image}`);
            sessionStorage.removeItem("nom product4",`${produit4.nom}`);
            sessionStorage.removeItem("description product4",`${produit4.description}`);
            sessionStorage.removeItem("prix product4",`${produit4.prix}`)
             // REMOVE ITEM PRODUCT 5
             sessionStorage.removeItem("image product5",`${produit5.image}`);
             sessionStorage.removeItem("nom product5",`${produit5.nom}`);
             sessionStorage.removeItem("description product5",`${produit5.description}`);
             sessionStorage.removeItem("prix product5",`${produit5.prix}`);

        
   

     //LOCAL STORAGE PRODUIT 2 POUR FICHEPRODUIT.HTML

     
     
     sessionStorage.setItem("image product2",`${produit2.image}`);
     sessionStorage.setItem("nom product2",`${produit2.nom}`);
     sessionStorage.setItem("description product2",`${produit2.description}`);
     sessionStorage.setItem("prix product2",`${produit2.prix}`);
     // REMOVE ITEM PRODUCT 1
     sessionStorage.removeItem("image product1",`${produit1.image}`);
     sessionStorage.removeItem("nom product1",`${produit1.nom}`);
     sessionStorage.removeItem("description product1",`${produit1.description}`);
     sessionStorage.removeItem("prix product1",`${produit1.prix}`);
     // REMOVE ITEM PRODUCT 3 
     sessionStorage.removeItem("image product3",`${produit3.image}`);
     sessionStorage.removeItem("nom product3",`${produit3.nom}`);
     sessionStorage.removeItem("description product3",`${produit3.description}`);
     sessionStorage.removeItem("prix product3",`${produit3.prix}`)
    // REMOVE ITEM PRODUCT 4 
    sessionStorage.removeItem("image product4",`${produit4.image}`);
    sessionStorage.removeItem("nom product4",`${produit4.nom}`);
    sessionStorage.removeItem("description product4",`${produit4.description}`);
    sessionStorage.removeItem("prix product4",`${produit4.prix}`)
     // REMOVE ITEM PRODUCT 5
     sessionStorage.removeItem("image product5",`${produit5.image}`);
     sessionStorage.removeItem("nom product5",`${produit5.nom}`);
     sessionStorage.removeItem("description product5",`${produit5.description}`);
     sessionStorage.removeItem("prix product5",`${produit5.prix}`);

    



     //LOCAL STORAGE PRODUIT 3 POUR FICHEPRODUIT.HTML
    
      function selectcolor19(){
      
     sessionStorage.setItem("image product3",`${produit3.image}`);
     sessionStorage.setItem("nom product3",`${produit3.nom}`);
     sessionStorage.setItem("description product3",`${produit3.description}`);
     sessionStorage.setItem("prix product3",`${produit3.prix}`); 
    // REMOVE ITEM PRODUCT 2
     sessionStorage.removeItem("image product2",`${produit2.image}`);
     sessionStorage.removeItem("nom product2",`${produit2.nom}`);
     sessionStorage.removeItem("description product2",`${produit2.description}`);
     sessionStorage.removeItem("prix product2",`${produit2.prix}`);
     // REMOVE ITEM PRODUCT 1
     sessionStorage.removeItem("image product1",`${produit1.image}`);
     sessionStorage.removeItem("nom product1",`${produit1.nom}`);
     sessionStorage.removeItem("description product1",`${produit1.description}`);
     sessionStorage.removeItem("prix product1",`${produit1.prix}`)
    // REMOVE ITEM PRODUCT 4 
    sessionStorage.removeItem("image product4",`${produit4.image}`);
    sessionStorage.removeItem("nom product4",`${produit4.nom}`);
    sessionStorage.removeItem("description product4",`${produit4.description}`);
    sessionStorage.removeItem("prix product4",`${produit4.prix}`)
     // REMOVE ITEM PRODUCT 5
     sessionStorage.removeItem("image product5",`${produit5.image}`);
     sessionStorage.removeItem("nom product5",`${produit5.nom}`);
     sessionStorage.removeItem("description product5",`${produit5.description}`);
     sessionStorage.removeItem("prix product5",`${produit5.prix}`);
      }

     //LOCAL STORAGE PRODUIT 4 POUR FICHEPRODUIT.HTML
     function selectcolor20(){

     sessionStorage.setItem("image product4",`${produit4.image}`);
     sessionStorage.setItem("nom product4",`${produit4.nom}`);
     sessionStorage.setItem("description product4",`${produit4.description}`);
     sessionStorage.setItem("prix product4",`${produit4.prix}`);
     // REMOVE ITEM PRODUCT 2
     sessionStorage.removeItem("image product2",`${produit2.image}`);
     sessionStorage.removeItem("nom product2",`${produit2.nom}`);
     sessionStorage.removeItem("description product2",`${produit2.description}`);
     sessionStorage.removeItem("prix product2",`${produit2.prix}`);
     // REMOVE ITEM PRODUCT 1
     sessionStorage.removeItem("image product1",`${produit1.image}`);
     sessionStorage.removeItem("nom product1",`${produit1.nom}`);
     sessionStorage.removeItem("description product1",`${produit1.description}`);
     sessionStorage.removeItem("prix product1",`${produit1.prix}`)
     // REMOVE ITEM PRODUCT 3 
     sessionStorage.removeItem("image product3",`${produit3.image}`);
     sessionStorage.removeItem("nom product3",`${produit3.nom}`);
     sessionStorage.removeItem("description product3",`${produit3.description}`);
     sessionStorage.removeItem("prix product3",`${produit3.prix}`)
      // REMOVE ITEM PRODUCT 5
      sessionStorage.removeItem("image product5",`${produit5.image}`);
      sessionStorage.removeItem("nom product5",`${produit5.nom}`);
      sessionStorage.removeItem("description product5",`${produit5.description}`);
      sessionStorage.removeItem("prix product5",`${produit5.prix}`);

     }

     //LOCAL STORAGE PRODUIT 5 POUR FICHEPRODUIT.HTML
      function selectcolor21(){

      
     sessionStorage.setItem("image product5",`${produit5.image}`);
     sessionStorage.setItem("nom product5",`${produit5.nom}`);
     sessionStorage.setItem("description product5",`${produit5.description}`);
     sessionStorage.setItem("prix product5",`${produit5.prix}`);
     // REMOVE ITEM PRODUCT 2
     sessionStorage.removeItem("image product2",`${produit2.image}`);
     sessionStorage.removeItem("nom product2",`${produit2.nom}`);
     sessionStorage.removeItem("description product2",`${produit2.description}`);
     sessionStorage.removeItem("prix product2",`${produit2.prix}`);
     // REMOVE ITEM PRODUCT 1
     sessionStorage.removeItem("image product1",`${produit1.image}`);
     sessionStorage.removeItem("nom product1",`${produit1.nom}`);
     sessionStorage.removeItem("description product1",`${produit1.description}`);
     sessionStorage.removeItem("prix product1",`${produit1.prix}`)
     // REMOVE ITEM PRODUCT 3 
     sessionStorage.removeItem("image product3",`${produit3.image}`);
     sessionStorage.removeItem("nom product3",`${produit3.nom}`);
     sessionStorage.removeItem("description product3",`${produit3.description}`);
     sessionStorage.removeItem("prix product3",`${produit3.prix}`)
     // REMOVE ITEM PRODUCT 4 
    sessionStorage.removeItem("image product4",`${produit4.image}`);
    sessionStorage.removeItem("nom product4",`${produit4.nom}`);
    sessionStorage.removeItem("description product4",`${produit4.description}`);
    sessionStorage.removeItem("prix product4",`${produit4.prix}`)

      }

    
   // création du tableau routes //
    
      
        
            
     // objet produit 1 // 
    
        
                 var poulette1 = `
                  <form name="monForm" action="panier.html">
         <img src=${produit1.image}>
         <p>Nom: ${produit1.nom}</p>
         <p>Prix: ${produit1.prix}</p>
         <p>Description: ${produit1.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur" value="jaune"/>Jaune</li>
         <li><input type="submit" onclick="selectcolor1()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 

       function selectcolor15(){

            var pol_json =  JSON.stringify(`${poulette1}`);
            sessionStorage.setItem("produtii" ,pol_json);
          sessionStorage.removeItem("produtti2");
       }

       
      
        
     
      var poulette2 =`
               <form name="monForm" action="panier.html">
         <img src=${produit2.image}>
         <p>Nom: ${produit2.nom}</p>
         <p>Prix: ${produit2.prix}</p>
         <p>Description: ${produit2.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur" value="jaune"/>Jaune</li>
         <li><input type="submit" onclick="selectcolor2()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
         
function selectcolor18(){

         var pol2_json = JSON.stringify(`${poulette2}`);
         sessionStorage.setItem("produtii2" , pol2_json);
         sessionStorage.removeItem("produtii");
                
}
             
    
 const routes = [
{
      name: "product3",

      ficheproduit: function(){
          const article = document.createElement("div");
           article.innerHTML += `
           <form name="monForm" action="panier.html">
         <img src=${produit3.image}>
         <p>Nom: ${produit3.nom}</p>
         <p>Prix: ${produit3.prix}</p>
         <p>Description: ${produit3.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur" value="jaune"/>Jaune</li>
         <li><input type="submit" onclick="selectcolor3()" value="Ajouter au panier"/></li>
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
         <form name="monForm" action="panier.html">
         <img src=${produit4.image}>
         <p name="poule" value="coq">Nom: ${produit4.nom}</p>
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

      
 document.getElementById("app").innerHTML= ""  ;

 for( let  index  =  0 ; index < routes.length ; index ++ )  {
        if( routes[index].name == name ) {
            routes[index].ficheproduit();
    }
        
    }
}

 

// LOCAL STORAGE SESSION PRODUIT 1 

function selectcolor1(){
    
    var couleur = ""
    // avant la boucle la couleur n'est pas choisie 
    
    
    for (var i=0; i<document.monForm.length; i++){
        if (document.monForm[i]){
            couleur=document.monForm[i];
        }
    }

    if (couleur==""){
        alert("Veuillez selectionner une couleur");
        
        
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

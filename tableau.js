


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

    
    
      
        
            
    // SESSION STORAGE FICHEPRODUIT.HTML PRODUIT 1
    
        
                 var poulette1 = `
                  <form class="textcenter" name="monForm" action="panier.html">
         <img src=${produit1.image}>
         <p>Nom: ${produit1.nom}</p>
         <p>Prix: ${produit1.prix}</p>
         <p>Description: ${produit1.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur1" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur1" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur1" value="jaune"/>Jaune</li>
         <li><input type="submit" onclick="selectcolor1()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 

       function selectcolor15(){

            var pol_json =  JSON.stringify(`${poulette1}`);
            sessionStorage.setItem("produtii" , pol_json);
            // REMOVE 
          sessionStorage.removeItem("produtii2");
          sessionStorage.removeItem("produtii3");
          sessionStorage.removeItem("produtii4");
          sessionStorage.removeItem("produtii5");
       }

        
      
  // SESSION STORAGE FICHEPRODUIT.HTML PRODUIT2
     
      var poulette2 =`
               <form class="textcenter" name="monForm" action="panier.html">
         <img src=${produit2.image}>
         <p>Nom: ${produit2.nom}</p>
         <p>Prix: ${produit2.prix}</p>
         <p>Description: ${produit2.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur2" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur2" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur2" value="jaune"/>Jaune</li>
         <li><input type="submit" onclick="selectcolor2()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
         
function selectcolor18(){

         var pol2_json = JSON.stringify(`${poulette2}`);
         sessionStorage.setItem("produtii2" , pol2_json);
         // remove 
         sessionStorage.removeItem("produtii");
         sessionStorage.removeItem("produtii3");
         sessionStorage.removeItem("produtii4");
         sessionStorage.removeItem("produtii5");
}
             
    
  var poulette3 = `
           <form class="textcenter" name="monForm" action="panier.html">
         <img src=${produit3.image}>
         <p>Nom: ${produit3.nom}</p>
         <p>Prix: ${produit3.prix}</p>
         <p>Description: ${produit3.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur3" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur3" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur3" value="jaune"/>Jaune</li>
         <li><input type="submit" onclick="selectcolor3()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
         function selectcolor19(){

        var pol3_json = JSON.stringify(`${poulette3}`);
        sessionStorage.setItem("produtii3",pol3_json);
        // remove 
        sessionStorage.removeItem("produtii");
        sessionStorage.removeItem("produtii2");
        sessionStorage.removeItem("produtii4");
        sessionStorage.removeItem("produtii5");

         }
     
 


 var poulette4 = `
         <form class="textcenter" name="monForm" action="panier.html">
         <img src=${produit4.image}>
         <p name="poule" value="coq">Nom: ${produit4.nom}</p>
         <p>Prix: ${produit4.prix}</p>
         <p>Description: ${produit4.description}</p>
         <ul>
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur4" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur4" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur4" value="jaune"/>Jaune</li>
         <li><input type="submit" onclick="selectcolor4()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 
          
         function selectcolor20(){

            var pol4_json = JSON.stringify(`${poulette4}`);
            sessionStorage.setItem("produtii4",pol4_json);
            // remove 
            sessionStorage.removeItem("produtii");
            sessionStorage.removeItem("produtii2");
            sessionStorage.removeItem("produtii3");
            sessionStorage.removeItem("produtii5");
             }
    


 var poulette5 = `
         <form class="textcenter" name="monForm" action="panier.html"/>
         <ul>
         <img src=${produit5.image}>
         <li/>Nom: ${produit5.nom}</li>
         <li/>Prix: ${produit5.prix}</li>
         <li>Description: ${produit5.description}</li>
         
         <li>Sélectionner la couleur du produit</li>
         <li><input type="radio" name="couleur5" value="rouge"/>Rouge</li>
         <li> <input type="radio" name="couleur5" value="vert"/>Vert</li>
         <li><input type="radio" name="couleur5" value="jaune"/>Jaune</li>
         <li><input class="panier" type="submit" onclick="selectcolor5()" value="Ajouter au panier"/></li>
         </ul>
         </form>` 

         function selectcolor21(){

            var pol5_json = JSON.stringify(`${poulette5}`);
            sessionStorage.setItem("produtii5",pol5_json);
            // remove 
            sessionStorage.removeItem("produtii");
            sessionStorage.removeItem("produtii2");
            sessionStorage.removeItem("produtii3");
            sessionStorage.removeItem("produtii4");
             }
    
  

 


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
                 
                  <img src=${produit1.image}>
               <p>Nom: ${produit1.nom}</p>
               <p>Prix: ${produit1.prix}</p>
               <p>Description: ${produit1.description}</p>
               <p>Selectionner la couleur</p>
               <form name="selectcolor">
               <input type="radio" name="choix1" value="rouge">Rouge<br>
               <input type="radio" name="choix2" value="vert">Vert<br>
               <input type="radio" name="choix3" value="jaune">Jaune<br>
               <input type="button" name="ajoutaupanier" value="Ajouter au panier">
               </form>` 
                  document.getElementById('app').appendChild(article)
              }
          },
        
    
      {
          name: "product2",

          ficheproduit: function(){
              const article = document.createElement("div");
               article.innerHTML += `
               <img src=${produit2.image}>
               <p>Nom: ${produit2.nom}</p>
               <p>Prix: ${produit2.prix}</p>
               <p>Description: ${produit2.description}</p>
               <form name="selectcolor">
               <input type="radio" name="choix" value="rouge">Rouge<br>
               <input type="radio" name="choix2" value="vert">Vert<br>
               <input type="radio" name="choix3" value="jaune">Jaune<br>
               <input type="button" name="ajoutaupanier" value="Ajouter au panier">
               </form>` 
                
               
              document.getElementById('app').appendChild(article)
          }
      },
{
      name: "product3",

      ficheproduit: function(){
          const article = document.createElement("div");
           article.innerHTML += `
           <img src=${produit3.image}>
           <p>Nom: ${produit3.nom}</p>
           <p>Prix: ${produit3.prix}</p>
           <p>Description: ${produit3.description}</p>
           <form name="selectcolor">
           <input type="radio" name="choix" value="rouge">Rouge<br>
           <input type="radio" name="choix2" value="vert">Vert<br>
           <input type="radio" name="choix3" value="jaune">Jaune<br>
           <input type="button" name="ajoutaupanier" value="Ajouter au panier">
           </form>` 
            
           
          document.getElementById('app').appendChild(article)
      }
  },
  {
    name: "product4",

    ficheproduit: function(){
        const article = document.createElement("div");
         article.innerHTML += `
         <img src=${produit4.image}>
         <p>Nom: ${produit4.nom}</p>
         <p>Prix: ${produit4.prix}</p>
         <p>Description: ${produit4.description}</p>
         <form name="selectcolor">
         <input type="radio" name="choix" value="rouge">Rouge<br>
         <input type="radio" name="choix2" value="vert">Vert<br>
         <input type="radio" name="choix3" value="jaune">Jaune<br>
         <input type="button" name="ajoutaupanier" value="Ajouter au panier">
         </form>` 
          
         
        document.getElementById('app').appendChild(article)
    }
},
{
    name: "product5",

    ficheproduit: function(){
        const article = document.createElement("div");
         article.innerHTML += `
         <img src=${produit5.image}>
         <p>Nom: ${produit5.nom}</p>
         <p>Prix: ${produit5.prix}</p>
         <p>Description: ${produit5.description}</p>
         <form name="selectcolor">
         <input type="radio" name="choix" value="rouge">Rouge<br>
         <input type="radio" name="choix2" value="vert">Vert<br>
         <input type="radio" name="choix3" value="jaune">Jaune<br>
         <input type="button" name="ajoutaupanier" value="Ajouter au panier">
         </form>` 
          
         
        document.getElementById('app').appendChild(article)
    }
},
  ]
  

  function updateRendering(name){
      
      
      document.getElementById('app').innerHTML = ""

      for (let index = 0; index < routes.length; index++) {
          if(routes[index].name == name){
              routes[index].ficheproduit();
          }
          
      }
  }
  

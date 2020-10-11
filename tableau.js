
function Produits(image,nom,prix,button) {
    this.image = image ;
    this.nom = nom ; 
    this.prix = prix ;

}



 const produit1 = new Produits("teddy_1.jpg" ,"Ours en laine" ,30 );
 const  produit2 = new Produits("teddy_2.jpg" ,"Ours en poil de lapin" , 55);
 const  produit3 = new Produits("teddy_3.jpg", "Ours en chanvre", 45);
 const  produit4 = new Produits("teddy_4.jpg", "Ours en soie" , 85);
 const  produit5 =  new Produits("teddy_5.jpg" ,"Ours en peluche" , 25 ,);

 let produits = [];
 produits.push(produit1,produit2,produit3,produit4,produit5);

function RedirectionJavascript(produit1,produit2){

   produit1 = document.location.href="ficheproduit.html" ;
   produit2 = document.location.href="index.html" ; 
}

 function populateTableList(){
    let listOfproducts =" " ; 

produits.forEach(prod => 
    listOfproducts += `
    <tr class="text-center">
    <th><img src=${prod.image}><th>
    <th class="nom">${prod.nom}</th>
        <th class="prix">${prod.prix}€</th>
     <th> <input name="pageok" type="button"  value="ok" onclick="RedirectionJavascript()">
      </tr>
    `
    )



document.getElementById('listeproduits') .innerHTML = listOfproducts ;

 }


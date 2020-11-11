


// RECUPERATION PRODUIT 1 



var recupnom1 = sessionStorage.getItem("nom du produit1");{
  console.log(recupnom1)
}



var recupprix1 = sessionStorage.getItem("prix du produit1");
  

var recupcouleur1 = sessionStorage.getItem("couleur du produit 1");{
  console.log(recupcouleur1)
}

// RECUPERATION PRODUIT 2

var recupnom2 = sessionStorage.getItem("nom du produit2");{
  console.log(recupnom2)
}

var recupprix2 = sessionStorage.getItem("prix du produit2");{
  console.log(recupprix2)
}

var recupcouleur2 = sessionStorage.getItem("couleur du produit 2");{
  console.log(recupcouleur2)
}

// RECUPERATION PRODUIT 3 



var recupnom3 = sessionStorage.getItem("nom du produit3");{
  console.log(recupnom3)
}

var recupprix3 = sessionStorage.getItem("prix du produit3");{
  console.log(recupprix3)
}

var recupcouleur3 = sessionStorage.getItem("couleur du produit 3");{
  console.log(recupcouleur3)
}

// RECUPERATION PRODUIT 4 


var recupnom4 = sessionStorage.getItem("nom du produit4");{
  console.log(recupnom4)
}

var recupprix4 = sessionStorage.getItem("prix du produit4");{
  console.log(recupprix4)
}

var recupcouleur4 = sessionStorage.getItem("couleur du produit 4");{
  console.log(recupcouleur4)
}

// RECUPERATION PRODUIT 5



var recupnom5 = sessionStorage.getItem("nom du produit5");{
  console.log(recupnom1)
}

var recupprix5 = sessionStorage.getItem("prix du produit5");{
  console.log(recupprix5)
}

var recupcouleur5 = sessionStorage.getItem("couleur du produit 5");{
  console.log(recupcouleur5)
}


//  TABLEAU NOM DE PRODUIT 

 let tbltprodnom = [];
 tbltprodnom.push(recupnom1 , `<br><br>`, recupnom2 ,`<br><br>` , recupnom3 , `<br><br>`, recupnom4 , `<br><br>`  , recupnom5);

 document.getElementById("nom").innerHTML= `<br>`+ tbltprodnom ;
 
// TABLEAU PRIX PRODUIT 

 let tbltprodprix = [];
 tbltprodprix.push(recupprix1 ,`<br><br>`, recupprix2 , `<br><br>` , recupprix3 , `<br><br>`, recupprix4 ,`<br><br>`, recupprix5);

 document.getElementById("prix").innerHTML = `<br>` + tbltprodprix ; 

// TABLEAU COULEUR PRODUIT 

 let tbltprodcouleur = [] ;
 tbltprodcouleur.push(recupcouleur1 ,`<br><br>`, recupcouleur2 , `<br><br>` , recupcouleur3 , `<br><br>`, recupcouleur4 ,`<br><br>`, recupcouleur5);

 document.getElementById("couleur").innerHTML = `<br>` + tbltprodcouleur ; 

 document.getElementById("btnp").innerHTML = btn1 ; 
      
  

// suprimer 





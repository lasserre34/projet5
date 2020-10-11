function Barbara(image,nom,prix,description,couleur){
    this.image = image ;
    this.nom = nom ;
    this.prix = prix ;
    this.description = description,
    this.couleur = couleur ;
     
   
    }
   
    
    const fiche1= new Barbara("teddy_1.jpg" ,"Ours en laine" ,30 ,"Ours en peluche en laine est de trés bonne qualiter issus de laine de l'elevage français", "couleur")
    const fiche2 = new Barbara("teddy_2.jpg","Ours en poil de lapin" , 55 ,"Ours en poil de lapin dnsjfbdsjfbdsfbsbdjsbfsjfbdsubfosdbfdsbfbsdbds", "couleur" )
    let selectproduit = [];
    selectproduit.push(fiche1,fiche2);
   
    function  {
        let fichesproduits =" ";
   
        selectproduit.forEach(prod=>
           fichesproduits += 
           `<tr>
           <th><img src=${prod.image}><th>
           <th>${prod.nom}<th>
           <th>${prod.prix}<th>
           <th>${prod.description}<th>
           <th>${prod.couleur}<th>
           </tr>
           `)
   
           document.getElementById('ficheproduit') .innerHTML = fichesproduits ; 
        
    }
   
   
   
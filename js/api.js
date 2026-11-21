


export async function getcreature(catégorie, text ,tri ,order){
    try{
      let url="http://localhost:3000/creatures";

      // ------------------filter-----------------------

       if(catégorie!=="Tous"){
       url+=`?type=${catégorie}`;}

       console.log (url);
      //  ----------------recherche-------------------------
      if(text!==""){
        if(catégorie!=="Tous"){url+=`&q=${text}`;}
        else{
      url+=`?q=${text}`;}
        }
      // -------------------------filtersearch----------------
      if(tri!==""){
        if(catégorie !=="Tous" || text !==""){
      url+= `&_sort=${tri}&_order=${order}`;}
        else{
          url+=`?_sort=${tri}&_order=${order}`;}
      }

        const response=await fetch(url);
        if(!response.ok){
        throw new Error(`HTTP.error:{response status}`);}
         const data=await response.json();
         console.log("donné",data);
        return data;
    }
    catch(error){console.error(error.message);}
}



// -----------------------------add creature------------------
export async function addcreature(nouvellecréature){
  try{
    const responce=await fetch("http://localhost:3000/creatures",{
        method: "POST" ,
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(nouvellecréature)
    });

    if(!responce.ok){
      throw new Error(`Erreur lors de l'ajouter`)
    }
// -----------------------------filtre-----------------------
// export async function typeliste(catégorie){
//   try{
//     const response= await fetch(`http://localhost:3000/creatures?type=${catégorie}`);
    
//     if(!response.ok){
//         throw new Error(`HTTP.error={response status} `)
//     }

//     const data=await response.json();
//       return data  }
//   catch(error){console.error(error.message);}

// }


// ---------------------------------recherche----------------------
// export async function recherchecreature(catégorie,text){
//   try{
//      const responce=await fetch(`http://localhost:3000/creatures?type=${catégorie}&q=${text}`)
//      if(catégorie!=="tous"){
//     if(!responce.ok){
//         throw new Error(`HTTP.error={response status}`)
//     }
//       const data=await responce.json();
//       return data;
//   }}
//   catch(error){console.error(error.message)};

// }

    const data=await responce.json();
    return data;

  }
  catch(error){
    console.error(error);
  }
}








export async function getcreature(catégorie, text){
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
  

        const response=await fetch(url);
        if(!response.ok){
        throw new Error(`HTTP.error:{response status}`);}
         const data=await response.json();
         console.log("donné",data);
        return data;
    }
    catch(error){console.error(error.message);}
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










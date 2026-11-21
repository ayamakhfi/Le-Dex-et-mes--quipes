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










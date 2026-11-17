export async function getcreature(){
    try{
        const response=await fetch("http://localhost:3000/creatures");
        if(!response.ok){
        throw new Error(`HTTP.error:{response status}`);}
         const data=await response.json();
        return data;
    }
    catch(error){console.error(error.message);}
}

// -----------------------------filtre-----------------------
export async function typeliste(catégorie){
  try{
    const response= await fetch(`http://localhost:3000/creatures?type=${catégorie}`);
    
    if(!response.ok){
        throw new Error(`HTTP.error={response status} `)
    }

    const data=await response.json();
      return data  }
  catch(error){console.error(error.message);}

}


// ---------------------------------recherche----------------------
export async function recherchecreature(text){
  try{
     const responce=await fetch(`http://localhost:3000/creatures?q=${text}`)
    if(!responce.ok){
        throw new Error(`HTTP.error={response status}`)
    }
      const data=await responce.json();
      return data;
  }
  catch(error){console.error(error.message)};
}


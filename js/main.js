import { getcreature } from "./api.js";
import { affichercarte , affichermessage, hiddmessage ,debouce} from "./ui.js";
import {settype, gardetype} from"./storage.js";

let typecreature="Tous";
let recherchecreature=" ";
  let tri="";
  let order="asc";


async function show(){
    affichermessage();
    try{
const elements=await getcreature(typecreature, recherchecreature ,tri ,order);
 console.log(elements)
affichercarte(elements);}
catch(error){console.error(error);

}
finally{
    await new Promise(resolve => setTimeout(resolve, 1000));
         hiddmessage();
}
    }
    show();



    // -----------------------------filter-----------------------

 function filtre(){
  
   const filt=document.getElementById("filters");
   const buttons=filt.querySelectorAll(".chip");
    
   buttons.forEach(button=>{
      button.addEventListener("click",async()=>{
         const filtertype=button.textContent.trim();
          typecreature=filtertype;
             settype(filtertype);
            const data=await getcreature(typecreature, recherchecreature, tri ,order);
            console.log(data);
           affichercarte(data);
});
   });
 }filtre();


//  -----------------recherche-----------------
 async function recherche(text){
  
         recherchecreature=text;
      const trouver=await getcreature(typecreature, recherchecreature ,tri ,order);
    
       affichercarte(trouver);


}



//  ------------------------callfunction----------------
const delaysearch=debouce(recherche,500);

const input=document.getElementById("search");
input.addEventListener('input', ()=>{
  const text=input.value.toLowerCase();
  delaysearch(text);
});

// --------------------garde type--------------
async function selecttype(){
  const boutton=gardetype();
   console.log(boutton);
  const choix=await getcreature(boutton,recherchecreature,tri ,order);
  affichercarte(choix);
}

selecttype();

//-----------------trier------------------------


const sort=document.getElementById("sort");
sort.addEventListener("change", async()=>{
  const valeur=sort.value;
  console.log(valeur);



  if(valeur==="name-asc"){
    tri="name";
    order="asc";
  }

  else if(valeur==="name-desc"){
    tri="name";
    order="desc";
  }

  else{tri="numero"
    order="asc";
  }

  const data=await getcreature(typecreature,recherchecreature ,tri ,order);
   console.log(data);
  affichercarte (data);
})
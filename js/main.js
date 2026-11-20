import { getcreature , recherchecreature, typeliste } from "./api.js";
import { affichercarte , affichermessage, hiddmessage ,debouce} from "./ui.js";
import {settype, gardetype} from"./storage.js";

async function show(){
    affichermessage();
    try{
const elements=await getcreature();
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
         settype(filtertype);
         if(filtertype==="Tous"){
         const liste=await getcreature();
         affichercarte(liste);
         ; return;
         }

           const choisi= await typeliste(filtertype);
           
       
     affichercarte(choisi);
});
   });
 }filtre();


//  -----------------recherche-----------------
 async function recherche(text){
  

      const trouver=await recherchecreature(text);
      console.log(trouver);
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

   if(boutton==="Tous"){
    const liste=await getcreature();
    affichercarte(liste); return;
   }
  const choix=await typeliste(boutton);
  affichercarte(choix);
}

selecttype();

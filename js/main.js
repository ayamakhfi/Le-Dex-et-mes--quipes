import { getcreature , recherchecreature, typeliste } from "./api.js";
import { affichercarte , affichermessage, hiddmessage ,debouce} from "./ui.js";

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
         if(filtertype==="Tous"){
         show(); return;
         }
       typeliste(filtertype);
           const choisi= await typeliste(filtertype);
       console.log(choisi);
     affichercarte(choisi);
});
   });
 }filtre();


 async function recherche(text){
    const filt=document.getElementById("filters");
   const buttons=filt.querySelectorAll(".chip");
  
    

      buttons.forEach(button=>{
      button.addEventListener("click", async()=>{
         const filtertype=button.textContent.trim();
          console.log("f",filtertype);

      const trouver=await recherchecreature(filtertype,text);
      console.log(trouver);
       affichercarte(trouver);
          
});
           });

}



//  ------------------------callfunction----------------
const delaysearch=debouce(recherche,500);

const input=document.getElementById("search");
input.addEventListener('input', ()=>{
  const text=input.value.toLowerCase();
  delaysearch(text);
});
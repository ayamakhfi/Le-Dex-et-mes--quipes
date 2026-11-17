import { getcreature , typeliste} from "./api.js";
import { affichercréature , affichermessage, hiddmessage } from "./ui.js";

async function show(){
    affichermessage();
    try{
const elements=await getcreature();
 console.log(elements)
affichercréature(elements);}
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
       typeliste(filtertype);
           const choisi= await typeliste(filtertype);
       console.log(choisi);
     affichercréature(choisi);
});
   });
 }filtre();
import { addcreature, getcreature } from "./api.js";
import { affichercarte , affichermessage, hiddmessage ,debouce} from "./ui.js";
import {settype, gardetype} from"./storage.js";
import { nouvellecréature } from "./rules.js";

let typecreature="Tous";
let recherchecreature=" ";
  let tri="";
  let order="asc";


async function show(){
    affichermessage();
    try{
const elements=await getcreature(typecreature, recherchecreature ,tri ,order);
//  console.log(elements)
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
            // console.log(data);
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
  //  console.log(data);
  affichercarte (data);
});


// ----------------------rechercheID------------------

async function rechercheID(){
  const data=await getcreature(typecreature,"","","");
  console.log("data-recus",data)
nouvellecréature(data);
}
rechercheID();

const form=document.getElementById("creature-form");
// --------------------------addcreature---------------
const numero=form.querySelector('[name="id"]').value;
const name=form.querySelector('[name="name"]').value;
const type=form.querySelector('[name="type"]').value;
const level=form.querySelector('[name="level"]').value;
const hp=form.querySelector('[name="stat1"]').value;
 const attck=form.querySelector('[name="stat2"]').value;
 const defence=form.querySelector('[name="stat3"]').value;
 const image=form.querySelector('[name="image"]').value;
 const description=form.querySelector('[name="description"]').value

 form.addEventListener('submit',async (e)=>{
   e.preventDefault();
   if(numero===""||name===""||level===""||hp===""||attck===""||defence===""||image===""||description==="")
    {alert("Veuiller remplir tous les champs!");
       return;}


    const nouvellecarte={numero:numero,
                     name: name,
                     type:type,
                     level:level,
                     stats:{hp:Number(hp)
                        ,attack: Number(attck)
                        ,defence:Number(defence )
                     },
                     image:image,
                     description:description}
    

  await addcreature(nouvellecarte);

});

  
  form.addEventListener("reset",(e)=>{
   const inputdelete=form.querySelectorAll("input");
   const messagedelete=form.querySelectorAll(".error-message");
   inputdelete.forEach(input=>{
   input.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");});
 

   messagedelete.forEach(message=>{
   message.classList.remove("text-red-500", "text-green-500");
    message.textContent="";});

   
  
  });
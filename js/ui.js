// export function affichercréature (liste){
//     const grid=document.getElementById("grid");
 
//    grid.innerHTML="";

//    const headercount=document.getElementById("creature-count");
//    headercount.textContent=`${liste.length}`;



//    liste.forEach((créature)=>{
//       const totale= créature.stats.hp+créature.stats.attack+créature.stats.defence;

//       const carte= document.createElement("article");
//       carte.className='flex flex-col gap-3 rounded-card bg-white p-3 pb-4  hover:-translate-y-3 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-300';

//       carte.innerHTML=` <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
//                           <span class="absolute left-3 top-2 font-mono text-sm text-muted">${créature.numero}</span>
//                          <img src="${créature.image}"  alt="${créature.name}"> 
//           </div>

//                        <div class="flex items-center justify-between gap-2">
//                        <h3 class="font-display text-xl font-semibold">${créature.name}</h3>
//                         <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${créature.type}</span>
//           </div>
//                      <p class="text-sm text-muted">${créature.level} · Total ${totale}</p>
         
//                       <button type="button" data-action="ajouter" data-id="${créature.id}" class="btn-outline border-[#C60000] text-[#C60000] 
//           focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-black">Ajouter à l'équipe</button>`;

//           carte.addEventListener("click",()=>{
//             panneaudétail(créature);
//           });
//            grid.appendChild(carte);
//       });
//    }

   export function affichermessage(){
    const message=document.getElementById("message");
    message.textContent="Chargement....";
   }

   export function hiddmessage(){
     const message=document.getElementById("message");
     message.classList.add("hidden");

   }


//    --------------------------panneaudétail----------------------


function panneaudétail(créature){

   document. getElementById("detail").classList.remove("hidden");
   document.getElementById("détail-id").textContent=`${créature.id}.Détail`;
   document.getElementById("détail-img").src=créature.image;
   document.getElementById("détail-img").alt=créature.name;
   document.getElementById("détail-name").textContent=créature.name;
   document.getElementById("détail-type").textContent=créature.type;
   document.getElementById("détail-descreption").textContent=créature.description;

   const stats=[
      { nom:"hp", valeur:créature.stats.hp},
      {nom:"attack",valeur:créature.stats.attack},
      {nom:"defence", valeur:créature.stats.defence}
   ];

   stats.forEach((stat)=>{
      document.getElementById(`détail-${stat.nom}`).textContent=stat.valeur;

      document.getElementById(`level-${stat.nom}`).style.width=`${Math.min(stat.valeur,100)}%`;
   });
    const detail=document.getElementById("detail");
   const fermer=document.getElementById("Fermer");
   fermer.addEventListener("click",()=>{
     detail.classList.add("hidden");
    });
   

   }

   // ---------------------------debounce-------------------------
  export function debouce(calleback,delay=500){
  let timeout;
  return function(...args){
    clearTimeout(timeout);
     timeout=setTimeout(() => 
      calleback(...args),delay);
     };
   
  }

  
// -----------------------------creation des cartes---------------------
export function affichercarte(liste){
   const grid =document.getElementById("grid");
      const headercount=document.getElementById("creature-count");
   headercount.textContent=`${liste.length}`;
   
       grid.replaceChildren();

   liste.forEach((creature)=>{
      const totale= creature.stats.hp+creature.stats.attack+creature.stats.defence;

      const carte= document.createElement("article"); 
      carte.className='flex flex-col gap-3 rounded-card bg-white p-3 pb-4  hover:-translate-y-3 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-300';

      const cadreimg=document.createElement('div');
      cadreimg.className="relative flex h-36 items-center justify-center rounded-xl bg-brand-light"

      const creatureimg=document.createElement('img');
      creatureimg.src=creature.image;
      creatureimg.alt=creature.name;

      const id=document.createElement('span');
      id.classList="absolute left-3 top-2 font-mono text-sm text-muted";
      id.textContent=creature.numero;

      cadreimg.append(id,creatureimg);

      const ligne=document.createElement("div");
        ligne.className = "flex items-center justify-between gap-2";

      const creaturename=document.createElement('h3');
      creaturename.className="font-display text-xl font-semibold";
      creaturename.textContent=creature.name;

      const creaturetype=document.createElement('span');
      creaturetype.className="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink";
      creaturetype.textContent=creature.type;

        ligne.append(creaturename,creaturetype);

       const creaturelevel=document.createElement('p');
       creaturelevel.className="text-sm text-muted";
       creaturelevel.textContent=`${creature.level}.Totale${totale}`;


       const button=document.createElement('button');
       button.type="button";
       button.dataset.action="ajouter";
       button.dataset.id=creature.id;
       button.className="btn-outline border-[#C60000] text-[#C60000] focus-visible:outline-2 focus-visible:outline-offset-2 focus:outline-black";
       button.textContent="ajouter à l'équipe";

       carte.append(cadreimg,ligne,creaturelevel,button);
     

          carte.addEventListener("click",()=>{
            panneaudétail(creature);
          });

      grid.appendChild(carte);

   });
}
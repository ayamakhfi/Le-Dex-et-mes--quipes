export function nouvellecréature(liste){
               //la validation 
const form = document.getElementById("creature-form");

              // validation de id
const inputId = form.querySelector('[name="id"]');
const messageErreurId= inputId.parentElement.querySelector(".error-message");

 const regexId= /^#\d{3}$/;

inputId.addEventListener("input", function(){
   

    const valeur= inputId.value.trim();


    inputId.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
    messageErreurId.classList.remove("text-red-500","text-green-500");

    

    let exist=false;
    for(const creature of liste){
    if (valeur===creature.numero){
      exist=true;
}}

console.log (exist);

    if (valeur===""){
        messageErreurId.textContent="champ obligatoir";
    }
    else if(!regexId.test(valeur)){
        inputId.classList.add("border-red-500");
        inputId.classList.add("text-red-500");
       messageErreurId.textContent="Format invalide:exemple #001";
       messageErreurId.classList.add("text-red-500");
        

    }

    else if(exist===true){
     inputId.classList.add("border-red-500");
     messageErreurId.textContent="cette id est déjà identifié.";
    messageErreurId.classList.add("text-red-500"); 
    }

    else{
        inputId.classList.add("border-green-500");
        inputId.classList.add("text-green-500");
        messageErreurId.textContent="Nomber valid";
       messageErreurId.classList.add("text-green-500");
       
    }
});

           // validation de nom

const inputNom=form.querySelector('[name="name"]');
const messageErreurNom= inputNom.parentElement.querySelector(".error-message")
const regexNom=/^[A-Za-zÀ-ÿ0-9][A-Za-zÀ-ÿ0-9 .'-]{1,29}$/;

 inputNom.addEventListener("input",function(){
    const mot=inputNom.value.toLowerCase();

     inputNom.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurNom.classList.remove("text-red-500","text-green-500");

    if(mot===""){
        messageErreurNom.textContent="champ obligatoir";
    }
    else if (!regexNom.test(mot)){
        inputNom.classList.add("text-red-500");
        inputNom.classList.add("border-red-500");
        messageErreurNom.textContent="Nom invalide:exemple Pikachu,Pika-chu";
        messageErreurNom.classList.add("text-red-500");
        
    }

    else{
        inputNom.classList.add("text-green-500");
        inputNom.classList.add("border-green-500");
        messageErreurNom.textContent="Nom valide";
        messageErreurNom.classList.add("text-green-500");}
    
 });


 const inputNiveau=form.querySelector('[name="level"]');
 const messageErreurNiveau=inputNiveau.parentElement.querySelector(".error-message");
    const regexNiveau=/^(Base|Niveau([1-9]|[1-9]\d|100))$/i;

  
  inputNiveau.addEventListener("input",function(){
     const niveau=inputNiveau.value.trim();

     inputNiveau.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurNiveau.classList.remove("text-red-500","text-green-500");

     if(niveau ===""){
       messageErreurNiveau.textContent="";}

    else if(!regexNiveau.test(niveau)){
        inputNiveau.classList.add("border-red-500");
        inputNiveau.classList.add("text-red-500");
        messageErreurNiveau.textContent="invalid Niveau. exemple:Niveau1";
       messageErreurNiveau.classList.add("text-red-500");
    }

     else{
        inputNiveau.classList.add("border-green-500");
        inputNiveau.classList.add("text-green-500");
        messageErreurNiveau.textContent="valid Niveau.";
       messageErreurNiveau.classList.add("text-green-500");
    }
 });

          // validation de statistique

 const inputStatic=form.querySelectorAll('[name="stat1"],[name="stat2"],[name="stat3"]');
 inputStatic.forEach(function(input){
  const messageErreurStatic= input.parentElement.querySelector(".error-message");
  const regexStatic=/^\d{1,3}$/;

  
  input.addEventListener("input",function(){
     const statique=Number(input.value);

     input.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurStatic.classList.remove("text-red-500","text-green-500");

     if(statique ===""){
       messageErreurStatic.textContent="champ obligatoir";}

    else if(!regexStatic.test(statique) || statique<1 || statique>255){
        input.classList.add("border-red-500");
        input.classList.add("text-red-500");
        messageErreurStatic.textContent="invalid . exemple:1";
       messageErreurStatic.classList.add("text-red-500");
    }

     else{
        input.classList.add("border-green-500");
        input.classList.add("text-green-500");
       messageErreurStatic.textContent="valid .";
       messageErreurStatic.classList.add("text-green-500");
    }});
 });

//  validation de l image

const inputImg=form.querySelector('[name="image"]');
const messageErreurImg=inputImg.parentElement.querySelector(".error-message");
const regexImg=/^https?:\/\/\S+\.(png|jpe?g|webp|gif)$/i;

inputImg.addEventListener("input",function(){
    const img=inputImg.value.trim();
   

 inputImg.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurImg.classList.remove("text-red-500","text-green-500");

     if(img ===""){
       messageErreurImg.textContent="champ obligatoir";}

    else if(!regexImg.test(img)){
       inputImg.classList.add("border-red-500");
        inputImg.classList.add("text-red-500");
        messageErreurImg.textContent="invalid image. exemple:https://site.com/image.png";
        messageErreurImg.classList.add("text-red-500");
    }

     else{
        inputImg.classList.add("border-green-500");
        inputImg.classList.add("text-green-500");
        messageErreurImg.textContent="valid image.";
        messageErreurImg.classList.add("text-green-500");
    }
 });

 const inputMessage =form.querySelector('[name="description"]');
 const messageErreurMessage=inputMessage.parentElement.querySelector(".error-message");
 const regexMessage=/^[\s\S]{10,200}$/;

 inputMessage.addEventListener("input",function(){
   const message=inputMessage.value.trim();
inputMessage.classList.remove("border-red-500","border-green-500" ,"text-red-500", "text-green-500");
   messageErreurMessage.classList.remove("text-red-500","text-green-500");

   if(message===""){
      messageErreurMessage.textContent="champ obligatoir";
   }

   else if(!regexMessage.test(message)){
      inputMessage.classList.add("text-red-500");
      inputMessage.classList.add("border-red-500");
      messageErreurMessage.textContent="message invalid";
      messageErreurMessage.classList.add("text-red-500");
   }

    else {
      inputMessage.classList.add("text-green-500");
      inputMessage.classList.add("border-green-500");
      messageErreurMessage.textContent="message valid";
      messageErreurMessage.classList.add("text-green-500");
   }
 });

 const inputtype=form.querySelector('[name="type"]');
 const messageErreurtype=inputtype.parentElement.querySelector(".error-message");
 const typechoix=inputtype.value;
 if(typechoix==="choix"){
    messageErreurtype.textContent="choisi un type"
    messageErreurId.classList.add("text-red-500");
 }
 
}

  


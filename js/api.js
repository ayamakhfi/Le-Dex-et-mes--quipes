export async function getcreature(){
    try{
        const response=await fetch("http://localhost:3000/creatures");
        if(!response.ok){
        throw new Error(`HTTP.error:{response status}`);}
         const data=await response.json();
        console.log(data);
    }
    catch(error){console.error(error.message);}
}

export function settype(filter){
    localStorage.setItem("type",JSON.stringify(filter));
}

export function gardetype(){
    return JSON.parse(localStorage.getItem("type"));
}
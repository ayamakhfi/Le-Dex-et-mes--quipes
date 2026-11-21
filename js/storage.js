export function settype(filter){
    localStorage.setItem("type",JSON.stringify(filter));
}

export function gardetype(){
    return JSON.parse(localStorage.getItem("type"));
}

// ---------------------sessionStorage---------------
export function setformule(item){
    sessionStorage.setItem("brouillon",JSON.stringify(item));
}

export function brouillons(){
    return JSON.parse(sessionStorage.getItem("brouillon"));
}

export function removebrouillon (){
    sessionStorage.removeItem("brouillon");
}
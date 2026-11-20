export function settype(){
    localStorage.setItem((type),JSON.stringify());
}

export function gardetype(){
    JSON.parse(localStorage.getItem(settype))
}
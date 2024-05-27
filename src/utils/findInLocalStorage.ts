export function findInLocalStorage(storage:[],searchTag:string ,whatSearch:string){
    return storage.some((item:any ) => item[searchTag] === whatSearch);
}
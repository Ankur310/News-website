import { apiCall, appendArticles } from "./scripts/main.js";


let search_term = localStorage.getItem("search_term");
console.log(search_term);

var url = `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${search_term}`;

let data = await apiCall(url);
console.log(data);

let main = document.getElementById("main");


appendArticles(data, main)
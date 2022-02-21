import sidebar from "./components/sidebar.js";
import { apiCall, appendArticles } from "./scripts/main.js"

///adding sidebar functionality
let side = document.getElementById("sidebar");
side.innerHTML = sidebar();


///calling api and gettting  the  data from api
var url = "https://shrouded-earth-23381.herokuapp.com/api/headlines/india";
let data = await apiCall(url);
console.log(data);


////displaying it to  our page
let main = document.getElementById("main");
appendArticles(data, main);

let searchq = document.getElementById("searchbar");
searchq.addEventListener("keypress", (e) => {


    if (e.key == "Enter") {

        let search_term = document.getElementById("searchbar").value
        localStorage.setItem("search_term", search_term);
        window.location.href = "search.html"
    }
})
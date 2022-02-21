import sidebar from "./components/sidebar.js";
import { apiCall, appendArticles } from "./scripts/main.js";

///adding sidebar to the web page
let side = document.getElementById("sidebar");
side.innerHTML = sidebar();


//showing detailed  format of  the news;
let article = JSON.parse(localStorage.getItem("article"));
// console.log(article);


let main = document.getElementById("main");

var displaying = (article, main) => {
    ///////////////--------
    let { title, description, urlToImage } = article;
    // console.log(title, description)
    let div = document.createElement("div");
    div.className = "Div-container2";

    let headline = document.createElement("div");
    headline.textContent = title;

    let desc = document.createElement("div");
    desc.textContent = description;

    let image = document.createElement("img");
    image.setAttribute("src", urlToImage);

    div.append(image, headline, desc);
    main.append(div);
}

displaying(article, main);

////appending searching functionality also in the news.html
let searchq = document.getElementById("searchbar");
searchq.addEventListener("keypress", (e) => {


    if (e.key == "Enter") {

        let search_term = document.getElementById("searchbar").value
        localStorage.setItem("search_term", search_term);
        window.location.href = "search.html"
    }
})
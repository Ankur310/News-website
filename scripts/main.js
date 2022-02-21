var apiCall = async(url) => {


    try {


        let res = await fetch(url);
        let response = await res.json();

        return response;

    } catch {
        console.log("error");
    }


}


var appendArticles = (articles, main) => {

    articles.map((ele) => {
        let { title, description } = ele;

        ///////////////--------
        let div = document.createElement("div");
        div.className = "Div-container";
        div.addEventListener("click", () => {

            localStorage.setItem("article", JSON.stringify(ele));
            window.location.href = "news.html"


        })


        /////----------------------
        let headline = document.createElement("div");
        headline.textContent = title;

        let desc = document.createElement("div");
        desc.textContent = description;

        let image = document.createElement("img");
        image.setAttribute("src", ele.urlToImage);

        div.append(headline, desc, image);
        main.append(div);
    })

}

export { apiCall, appendArticles }
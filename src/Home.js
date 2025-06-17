import lazyCat from "./lazyCat.png"

let Home = (function () {
    //let isDisplayed = false;
    let container = document.querySelector("#container");
    let mainWindow = document.createElement("div");
    let logoContainer = document.createElement("div");
    let img_L = document.createElement("img");
    let img_R = document.createElement("img");
    let logo = document.createElement("h1");

    mainWindow.classList.add("main-window");
    img_L.setAttribute("src",lazyCat);
    img_L.classList.add("logo-img");
    img_R.setAttribute("src",lazyCat);
    img_R.classList.add("logo-img");
    img_R.classList.add("flipped");
    logo.textContent = "The Cat Shop";
    logo.classList.add("logo-text");

    let init = function() {
        if(!container.classList.replace(/Menu|About/,"Home"))
            container.className = "Home";

        container.appendChild(mainWindow);
        mainWindow.appendChild(logoContainer);
        logoContainer.appendChild(img_L);
        logoContainer.appendChild(logo);
        logoContainer.appendChild(img_R);
    }

    return {init};
})();

export { Home };
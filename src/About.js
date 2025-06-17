let About = (function () {
    //let isDisplayed = false;
    let container = document.querySelector("#container");
    let div1 = document.createElement("div");
    let button = document.createElement("button");

    div1.textContent = "this is About Us";
    button.textContent = "About us";

    let init = function() {
/*         if (isDisplayed)
            return; */
        if(!container.classList.replace(/Home|Menu/,"About"))
            container.className = "About";

        container.appendChild(button);
        container.appendChild(div1);
    }

    return {init};
})();

export { About };
let Home = (function () {
    //let isDisplayed = false;
    let container = document.querySelector("#container");
    let div1 = document.createElement("div");
    let button = document.createElement("button");

    div1.textContent = "this is Home";
    button.textContent = "HOME";

    let init = function() {
/*         if (isDisplayed)
            return; */
        if(!container.classList.replace(/Menu|About/,"Home"))
            container.className = "Home";

        container.appendChild(div1);
        container.appendChild(button);
    }

    return {init};
})();

export { Home };
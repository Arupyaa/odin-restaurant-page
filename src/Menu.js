let Menu = (function () {
    //let isDisplayed = false;
    let container = document.querySelector("#container");
    let div1 = document.createElement("div");
    let button = document.createElement("button");
    let div2 = document.createElement("div");

    div1.textContent = "this is Menu";
    button.textContent = "Menu";
    div2.textContent = "testing";
    let init = function () {
        /*         if (isDisplayed)
                    return; */
        if(!container.classList.replace(/Home|About/,"Menu"))
            container.className = "Menu";

        container.appendChild(div1);
        container.appendChild(button);
        container.appendChild(div2);
    }

    return { init };
})();

export { Menu };
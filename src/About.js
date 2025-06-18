let About = (function () {
    let container = document.querySelector("#container");
    let mainWindow = document.createElement("div");
    let contactCard = document.createElement("div");
    let title = document.createElement("h2");
    let contactList = document.createElement("ul");
    let telephone = document.createElement("li");
    let email = document.createElement("li");
    let footer = document.createElement("footer");

    mainWindow.classList.add("main-window");
    contactCard.classList.add("contact-card");
    title.textContent = "Contact us:";
    telephone.innerHTML = "<span>Telephone:</span> +1 999-555-9999.";
    email.innerHTML = "<span>Email:</span> lazycat@nyaa.com";
    footer.textContent = "Available everyday from 7am to 11pm except on weekends.";

    let init = function() {
        if(!container.classList.replace(/Home|Menu/,"About"))
            container.className = "About";

        container.appendChild(mainWindow);
        mainWindow.appendChild(contactCard);
        contactCard.appendChild(title);
        contactList.appendChild(telephone);
        contactList.appendChild(email);
        contactCard.appendChild(contactList);
        contactCard.appendChild(footer);


    }

    return {init};
})();

export { About };
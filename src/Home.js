import lazyCat from "./lazyCat.png"

let Home = (function () {
    let container = document.querySelector("#container");
    let mainWindow = document.createElement("div");
    let logoContainer = document.createElement("div");
    let hoursContainer = document.createElement("div");
    let noteContainer = document.createElement("div");
    let img_L = document.createElement("img");
    let img_R = document.createElement("img");
    let logo = document.createElement("h1");

    mainWindow.classList.add("main-window");

    //logocontainer
    logoContainer.classList.add("logo-container");
    img_L.setAttribute("src", lazyCat);
    img_L.classList.add("logo-img");
    img_R.setAttribute("src", lazyCat);
    img_R.classList.add("logo-img");
    img_R.classList.add("flipped");
    logo.textContent = "The Cat Shop";
    logo.classList.add("logo-text");

    //hourscontainer
    hoursContainer.classList.add("hours-container");
    let hoursTitle = document.createElement("h2")
    hoursTitle.textContent = "Working Hours:";
    let hoursList = document.createElement("ul");
    let hourListDays = [];
    for (let i = 0; i < 7; i++)
        hourListDays.push(document.createElement("li"));

    hourListDays[0].textContent = "Monday: 7 am to 11 pm";
    hourListDays[1].textContent = "Tuesday: 7 am to 11 pm";
    hourListDays[2].textContent = "Wednesday: 7 am to 11 pm";
    hourListDays[3].textContent = "Thursday: 7 am to 11 pm";
    hourListDays[4].textContent = "Friday: 7 am to 11 pm";
    hourListDays[5].textContent = "Saturday: Day off";
    hourListDays[6].textContent = "Sunday: Day off";

    //noteContainer
    noteContainer.classList.add("note-container");
    let noteTitle = document.createElement("h2");
    noteTitle.textContent = "Note:";
    let note = document.createElement("p");
    note.textContent = "No Humans Allowed.";

    let init = function () {
        if (!container.classList.replace(/Menu|About/, "Home"))
            container.className = "Home";

        container.appendChild(mainWindow);
        mainWindow.appendChild(logoContainer);
        logoContainer.appendChild(img_L);
        logoContainer.appendChild(logo);
        logoContainer.appendChild(img_R);
        mainWindow.appendChild(hoursContainer);
        hoursContainer.appendChild(hoursTitle);
        hoursContainer.appendChild(hoursList);
        for (let i = 0; i < 7; i++)
            hoursList.appendChild(hourListDays[i]);
        mainWindow.appendChild(noteContainer);
        noteContainer.appendChild(noteTitle);
        noteContainer.appendChild(note);
    }

    return { init };
})();

export { Home };
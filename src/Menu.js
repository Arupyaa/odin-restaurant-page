import { menuCard } from "./menuCard";
import milkImg from "./milk.jpg"

let Menu = (function () {
    let container = document.querySelector("#container");
    let mainWindow = document.createElement("div");
    let drinksTitle = makeTitleCard("Drinks","title-card");
    let drinks_1 = new menuCard("Glass of water:", "Fresh glass of premium mineral water, totally not filled from the faucet!", 0.5, "");
    let drinks_2 = new menuCard("Glass of milk:", "Squeezed from our cows this morning! we hope you're not lactose-intolerant.", 1, milkImg);
    let sideTitle = makeTitleCard("Side Dishes","title-card");
    let side_1 = new menuCard("Mouse-shaped cookies:", "Perfect for your little kitten", 5, "");
    let side_2 = new menuCard("Crab soup:", "So fresh you can still see the crabs swimming in it!", 8, "");
    let mainTitle = makeTitleCard("Main Dishes","title-card");
    let main_1 = new menuCard("Tuna lovers Pizza:", "Fresh tuna, green pepper, tomato sauce and mozzarella cheese over a rich pizza crust!", 20, "");
    let main_2 = new menuCard("Salmon nigiri:", "A slice of fresh salmon placed neatly over seasoned white rice, comes with soy sauce dipping.", 15, "");

    mainWindow.classList.add("main-window");

    let init = function () {
        if (!container.classList.replace(/Home|About/, "Menu"))
            container.className = "Menu";

        container.appendChild(mainWindow);
        mainWindow.appendChild(drinksTitle);
        mainWindow.appendChild(drinks_1.card);
        mainWindow.appendChild(drinks_2.card);
        mainWindow.appendChild(sideTitle);
        mainWindow.appendChild(side_1.card);
        mainWindow.appendChild(side_2.card);
        mainWindow.appendChild(mainTitle);
        mainWindow.appendChild(main_1.card);
        mainWindow.appendChild(main_2.card);

    }

    function makeTitleCard(title,className = ""){
        let card = document.createElement("div");
        card.classList.add(className);
        card.textContent = title;
        return card;
    }

    return { init };
})();

export { Menu };
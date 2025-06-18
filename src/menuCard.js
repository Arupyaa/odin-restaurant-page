export { menuCard };

class menuCard {
    constructor(title, description, price, image) {
        this.#title.textContent = title;
        this.#description.textContent = description;
        this.#priceTable = new menuTable(price);
        if (image != "") {
            this.#img = document.createElement("img");
            this.#img.setAttribute("src", image);
            this.#img.setAttribute("alt", "image");
        }
        else {
            this.#img = document.createElement("div");
            this.#img.classList.add("placeholder-img");
            this.#img.textContent = "image";
        }
        this.#card.classList.add("menu-card");

    }

    #card = document.createElement("div");
    #title = document.createElement("h2");
    #description = document.createElement("p");
    #priceTable;
    #img;

    get card() {
        if (this.#card.children.length == 0) {
            this.#card.appendChild(this.#title);
            this.#card.appendChild(this.#img);
            this.#card.appendChild(this.#description);
            this.#card.appendChild(this.#priceTable.table);
            return this.#card;
        }
        else
            return this.#card;
    }

}


class menuTable {
    constructor(price) {
        this.#small_h.textContent = "SMALL";
        this.#small_d.textContent = "$" + price * 1;
        this.#medium_h.textContent = "MEDIUM";
        this.#medium_d.textContent = "$" + price * 1.2;
        this.#large_h.textContent = "LARGE";
        this.#large_d.textContent = "$" + price * 1.4;

    }

    #table = document.createElement("table");
    #small_h = document.createElement("th");
    #small_d = document.createElement("td");
    #medium_h = document.createElement("th");
    #medium_d = document.createElement("td");
    #large_h = document.createElement("th");
    #large_d = document.createElement("td");
    #row_h = document.createElement("tr");
    #row_d = document.createElement("tr");

    get table() {
        if (this.#table.children.length == 0) {
            this.#row_h.appendChild(this.#small_h);
            this.#row_h.appendChild(this.#medium_h);
            this.#row_h.appendChild(this.#large_h);
            this.#row_d.appendChild(this.#small_d);
            this.#row_d.appendChild(this.#medium_d);
            this.#row_d.appendChild(this.#large_d);
            this.#table.appendChild(this.#row_h);
            this.#table.appendChild(this.#row_d);
            return this.#table;
        }
        else
            return this.#table;
    }
}
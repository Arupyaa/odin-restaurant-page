// index.js
import "./style.css";
import {Home} from "./Home.js";
import {Menu} from "./Menu.js"
import {About} from "./About.js"

(function(){
    let HomeBtn = document.querySelector("#Home");
    let MenuBtn = document.querySelector("#Menu");
    let AboutBtn = document.querySelector("#About");
    let container = document.querySelector("#container");
    
    HomeBtn.addEventListener("click", ()=>{resetContainer(); Home.init();});
    MenuBtn.addEventListener("click",()=>{resetContainer(); Menu.init();});
    AboutBtn.addEventListener("click",()=>{resetContainer(); About.init();});


    //display Home page on loading the page
    Home.init();


    function resetContainer(){
        while(container.firstChild)
            container.firstChild.remove();
    }
})();















/* import { greeting } from "./greeting.js";

console.log(greeting);

import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image); */
// ***************************************
// **********DESTINATION******************
// ***************************************
import info from "./data.json" assert {type: 'json'};

const tabsBtn= document.querySelectorAll(".tabs-nav");
const tabsContent= document.querySelector(".tabs-content").children;
const tabsPic= document.querySelector(".tabs-pic").children;
tabsBtn.forEach(ele => {
    ele.addEventListener("click",(e)=>{
        tabsBtn.forEach(ele=>{
            ele.classList.remove("tabs-active");
        })
        e.target.classList.add("tabs-active");
        // console.log(e.target);
        // get the number which tells at place its data is stored in json file
        let num=ele.getAttribute("aria-controls"); 
        let data=info.destinations[num];

        // get image src and change it
        tabsPic[0].src=data.images.png;

        // changing the name of planet
        tabsContent[0].textContent=data.name;

        // changing the paragraph content in tabs
        tabsContent[1].textContent=data.description;

        // changing distance and time in tabs
        document.querySelector(".value-distance").textContent=data.distance;
        document.querySelector(".value-travel").textContent=data.travel;

    });
});

// ***************************************
// ****************CREW*******************
// ***************************************
import info from "./data.json" assert {type: 'json'};

const crewBtn= document.querySelectorAll(".crew-tabs");
const crewPic= document.querySelector(".crew-pic").children;
crewBtn.forEach(ele => {
    ele.addEventListener("click",(e)=>{
        crewBtn.forEach(ele=>{
            ele.classList.remove("crew-tabs-active");
        })
        ele.classList.add("crew-tabs-active");
        // get the number which tells at place its data is stored in json file
        let num=ele.getAttribute("aria-controls"); 
        let data=info.crew[num];

        // get image src and change it
        crewPic[0].src=data.images.png;

        // get crew role and change it
        document.querySelector(".crew-role").textContent=data.role;
        // get crew name and change it
        document.querySelector(".crew-name").textContent=data.name;
        // get crew bio and change it
        document.querySelector(".crew-bio").textContent=data.bio;
    });
});
// ***************************************
// ************TECHNOLOGY****************
// ***************************************
import info from "./data.json" assert {type: 'json'};

const techBtn = document.querySelectorAll(".technology-tabs");
const techPic = document.querySelectorAll(".technology-pic");
techBtn.forEach(ele => {
    ele.addEventListener("click", (e) => {
        techBtn.forEach(ele => {
            ele.classList.remove("technology-tabs-active");
        })
        ele.classList.add("technology-tabs-active");
        // get the number which tells at place its data is stored in json file
        let num = ele.getAttribute("aria-controls");
        let data = info.technology[num];

        // changing name
        document.querySelector(".technology-name").textContent = data.name;

        // get image portrait and landscape
        // change the source for both
        let techLandscape=techPic[0].children;
        techLandscape[0].src = data.images.landscape;
        let techPortrait=techPic[1].children;
        techPortrait[0].src = data.images.portrait;

        // get technology description and change it
        document.querySelector(".technology-description").textContent = data.description;
    });
});
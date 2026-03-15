let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, e) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-links");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  e.currentTarget.classList.add("active-links");

  let tab = document.getElementById(tabname);
  if (tab) {
    tab.classList.add("active-tab");
  }
  document.getElementById(tabname).classList.add("active-tab");
}


const projects = document.querySelectorAll(".project-card");
// const all = document.querySelector("#all");
const front = document.querySelector("#front");
const c = document.querySelector("#c");

// all.addEventListener("click", ()=>{
//     showAll();
//     console.log("all");
// })
front.addEventListener("click", ()=>{
    showFront();
    console.log("front");
})
c.addEventListener("click", ()=>{
    showC();
    console.log("C");
})

// function showAll(){
//     projects.forEach(project=>{
//     project.style.display = "block"
//     });
// }


function showFront(){
    projects.forEach(project=>{
    if(project.classList.contains("frontend")){
        project.style.display = "block";
    }else{
        project.style.display = "none";
    }
    });
}

function showC(){
    projects.forEach(project=>{

    if(project.classList.contains("c")){
        project.style.display = "block";
    }else{
        project.style.display = "none";
    }
    })
}

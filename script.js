let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, e){

    for (let tablink of tablinks){
        tablink.classList.remove("active-links");
    }

    for (let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    e.currentTarget.classList.add("active-links");

    let tab = document.getElementById(tabname);
    if(tab){
        tab.classList.add("active-tab");
        
    }
    document.getElementById(tabname).classList.add("active-tab");
}





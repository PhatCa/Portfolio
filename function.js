//sticky nav bar function
window.onscroll = function(){stickyNavbar()};

function stickyNavbar(){
    let navbar = document.getElementById('navbar')
    if(window.pageYOffset > 0){
        navbar.style.position = "fixed";
        navbar.style.top = "0"
} else{
    navbar.style.position= "relative"
    navbar.style.top=""
}

}

// click and scroll down into section function
function scrollToSection(sectionId){
    var section = document.getElementById(sectionId)
    section.scrollIntoView({behavior:'smooth'})
}



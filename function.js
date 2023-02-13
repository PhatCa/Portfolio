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


// vertical nav bar in aboutme
const experienceButton = document.querySelector('.navbar-skill-button-experience')
const experienceInfo = document.querySelector('.experience')
const educationButton = document.querySelector('.navbar-skill-button-education')
const educationInfo = document.querySelector('.education')
const skillButton = document.querySelector('.navbar-skill-button-skill')
const skillInfo = document.querySelector('.skill')

educationButton.addEventListener("click",()=>{
    if(experienceInfo.classList.contains('show-education')){
        experienceInfo.classList.remove('show-education')
    }
    if(skillInfo.classList.contains('show-education')){
        skillInfo.classList.remove('show-education')
    }
    educationInfo.classList.toggle('show-education')
})

experienceButton.addEventListener("click",()=>{
    if(educationInfo.classList.contains('show-education')){
        educationInfo.classList.remove('show-education')
    }
    if(skillInfo.classList.contains('show-education')){
        skillInfo.classList.remove('show-education')
    }
    experienceInfo.classList.toggle('show-education')
})

skillButton.addEventListener("click",()=>{
    if(educationInfo.classList.contains('show-education')){
        educationInfo.classList.remove('show-education')
    }
    if(experienceInfo.classList.contains('show-education')){
        experienceInfo.classList.remove('show-education')
    }

    skillInfo.classList.toggle('show-education')
})
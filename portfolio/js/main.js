/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
 
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))







//email 


function sendEmail() {
   var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("msg").value;
    
   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "block";
        return;
    } else {
        document.getElementById("emailError").style.display = "none";
    }
    
  
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }
    
    
    var formData = {
        name: name,
        email: email,
        message: message
    };
    
 
    var formDataJson = JSON.stringify(formData);
    
  
    localStorage.setItem("formData", formDataJson);
    
    
    document.getElementById("contactForm").reset();
    
    alert("Form submitted successfully! Your data has been stored locally.");
}





//prevent rightclick

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
















/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
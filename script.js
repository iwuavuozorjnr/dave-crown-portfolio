const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", function () {

    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    overlay.classList.remove("active");

});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item){

    item.addEventListener("click", function(){

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        overlay.classList.remove("active");

    });

});

const hiddenSections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

    entry.target.classList.add("show");

}else{

    entry.target.classList.remove("show");

}

    });

},{
    threshold: 0.2
});

hiddenSections.forEach(function(section){

    observer.observe(section);

});
const sections = document.querySelectorAll("section");
const navLinksList = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinksList.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
const text = "Front-End Web Developer";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeText(){

    if(index < text.length){

        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }

}

typeText();

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", function(){

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeToggle.textContent = "☀️";

    }else{

        themeToggle.textContent = "🌙";

    }

});



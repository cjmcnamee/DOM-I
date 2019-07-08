const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Images //

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
const cta = document.getElementById("cta-img");
const middle = document.getElementById("middle-img");

logo.setAttribute('src', siteContent["nav"]["img-src"])
cta.setAttribute('src', siteContent["cta"]["img-src"])
middle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Navigation bar //
const aTag = document.getElementsByTagName('a');
const addA = document.createElement('a');
const addB = document.createElement('a');
const addToNav = document.querySelector('nav')
const navData = document.querySelectorAll('nav a');

addA.href = '#';
addA.textContent = 'Epic'
addToNav.prepend(addA);

addB.href = '#';
addB.textContent = 'Win'
addToNav.appendChild(addB);

for(let i = 0; i < aTag.length; i++){
  aTag[i].style.color = "green";
}

navData[0].innerHTML = siteContent["nav"]["nav-item-1"]
navData[1].innerHTML = siteContent["nav"]["nav-item-2"]
navData[2].innerHTML = siteContent["nav"]["nav-item-3"]
navData[3].innerHTML = siteContent["nav"]["nav-item-4"]
navData[4].innerHTML = siteContent["nav"]["nav-item-5"]
navData[5].innerHTML = siteContent["nav"]["nav-item-6"]

// CTA //
const hOne = document.querySelector('.cta h1');
const button = document.querySelector('.cta button');

hOne.innerHTML = siteContent["cta"]["h1"]
button.innerHTML = siteContent["cta"]["button"]

// Main Content //
const mainH4 = document.querySelectorAll('.main-content h4');
const mainContent = document.querySelectorAll('.main-content p')

mainH4[0].innerHTML = siteContent["main-content"]["features-h4"]
mainH4[1].innerHTML = siteContent["main-content"]["about-h4"]
mainH4[2].innerHTML = siteContent["main-content"]["services-h4"]
mainH4[3].innerHTML = siteContent["main-content"]["product-h4"]
mainH4[4].innerHTML = siteContent["main-content"]["vision-h4"]

mainContent[0].innerHTML = siteContent["main-content"]["features-content"]
mainContent[1].innerHTML = siteContent["main-content"]["about-content"]
mainContent[2].innerHTML = siteContent["main-content"]["services-content"]
mainContent[3].innerHTML = siteContent["main-content"]["product-content"]
mainContent[4].innerHTML = siteContent["main-content"]["vision-content"]

// Contact //
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');

contactH4.innerHTML = siteContent["contact"]["contact-h4"]
contactP[0].innerHTML = siteContent["contact"]["address"]
contactP[1].innerHTML = siteContent["contact"]["phone"]
contactP[2].innerHTML = siteContent["contact"]["email"]

// Footer //
const footerP = document.querySelector('footer p');

footerP.innerHTML = siteContent["footer"]["copyright"]

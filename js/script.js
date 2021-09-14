
//Task 3
//Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];



//Task 1.0
//saving main element in a variable
const mainEl = document.querySelector("main");


//Task 1.1
// mainEl.setProperty("--main-bg", backgroundColor)
mainEl.style.backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--main-bg');


//Task 1.2
//content of mainEl changed
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";


//Task 1.3
//Assign a classname to mainEl
mainEl.className = "flex-ctr";

//Task 2.0
const topMenuEl = document.getElementById("top-menu");


//Task 2.1
topMenuEl.style.height = "100%";

//Task 2.2
topMenuEl.style.backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--top-menu-bg');

//Task 2.3
topMenuEl.className = "flex-around";


//Task 3.1

// Iterate over the entire menuLinksarray and for each "link" object:
// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

menuLinks.forEach(function (link) {
    const aTag = document.createElement("a");

    aTag.setAttribute("href", link.href);
    aTag.textContent = link.text;
    topMenuEl.append(aTag);

})
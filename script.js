//document.addEventListener( "DOMContentLoaded", function() {} ==> Replace this code with defer.

    //"See How Fylo Works" active state

    let arrow = document.getElementById("arrow-text");
    let arrowImage = document.getElementById("arrow-img");
    let arrowSection = document.getElementById("arrow-section")

    function changeColor() {
        arrow.style.color = "hsl(170, 92%, 49%)";
        arrowImage.style.filter = "contrast(100) brightness(90%)";
        arrowSection.style.borderBottom = "1px solid hsl(170, 92%, 49%)";
    };

    function restoreColor() {
        arrowSection.style.borderBottom = "",
        arrow.style.color = "";
        arrowImage.style.filter = "";
    }

    arrow.onmouseover = changeColor;
    arrow.onmouseout = restoreColor;

    //FOOTER AVTIVE STATE

    // SOLUTION 1 - USING INDIVIDUAL IDs

    // let footerIcon = ["phone", "email", "about-us", "jobs", "press", "blog", "contact-us", "terms", "privacy"];
    // footerIcon = footerIcon.map(element => document.getElementById(element)); 


    // SOLUTION 2 - USING ONE CLASS NAME (recommended)

    let footerIcon = document.getElementsByClassName("pointer");

    function changeFooter() {
        event.target.style.color = "blue";
    };

    function restoreFooter() {
        event.target.style.color = "";
    }

    function assign(ele) {
        ele.onmouseover = changeFooter;
        ele.onmouseout = restoreFooter;
    };

    //footerIcon.forEach(assign);                   // Related to Solution 1

    for (let i=0; i<footerIcon.length; i++) {       // getEelementByClassName can be accessed using indexes, hence the for loop.
        assign(footerIcon[i])
    }



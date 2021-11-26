document.addEventListener( "DOMContentLoaded", function() {

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

    //FOOTER AVTIVE STATE (Code still incomplete)


    let footerIcon = [];

    for (let i=0; i<document.getElementsByClassName("sub-footer").length; i++) {
        footerIcon.push(document.getElementsByClassName("sub-footer")[i].querySelector("p"))
    };

    function changeFooter() {
        event.target.style.color = "blue"
    };

    function assign(p) {
        p.onmouseover = changeFooter;
    };

    footerIcon.forEach(assign(element));


});
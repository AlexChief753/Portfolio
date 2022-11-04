// Declarations
let anchors = Array.from(document.getElementsByClassName("sticky-anchors"));
function scrollFunction(){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("sticky-section").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("sticky-section").style.borderBottomColor = "transparent";
        document.getElementById("sticky-section").style.boxShadow = "0 2px 4px 0 rgba(0,0,0,.2)";
        document.getElementById("sticky-header").style.color = "rgb(0, 0, 0)";
        for(i=1; i<anchors.length; i++){
            anchors[i].style.color = "rgb(0, 0, 0)";
            // anchors[i].onmouse
        }
        document.getElementById("sticky-anchor-1").style.color = "rgb(255, 136, 0)";
    }
    else {
        document.getElementById("sticky-section").style.backgroundColor = "transparent";
        document.getElementById("sticky-section").style.borderBottomColor = "rgb(90, 90, 90)";
        document.getElementById("sticky-section").style.boxShadow = "none";
        document.getElementById("sticky-header").style.color = "rgb(255, 255, 255)";
        for(i=1; i<anchors.length; i++){
            anchors[i].style.color = "rgb(120, 120, 120)"
        }
        document.getElementById("sticky-anchor-1").style.color = "rgb(255, 255, 255)";
    }
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        document.getElementById("sticky-section").style.padding = "1%";
    }
    else {
        document.getElementById("sticky-section").style.padding = "1.5%";
    }
}

// let hoverColor = "rgb(255, 255, 255)"
// function hoverFunction(this){
//     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//          this.style.color = "rgb(255, 136, 0)";
//     }
//     else {
//         this.style.color = "rgb(255, 255, 255)";
//     }
//     for(i=1; i<anchors.length; i++){}
// }


// Calling
window.onscroll = function() {scrollFunction()};
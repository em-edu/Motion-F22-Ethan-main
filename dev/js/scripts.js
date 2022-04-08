import { gsap } from "gsap";

//var - older avoid
//const 
//let ES6 improved var

//let let = 6;
//someNum = 7;
//const heroElement = document.querySelector("#hero");

//keyword referenceName assignmentOperator value

//1.	Names can contain letters, digits, underscores, and dollar signs.
//2.	Names must begin with a letter or can also begin with $ and _
//3.	Names are case sensitive (y and Y are different variables)
//4.	Reserved words (like JavaScript keywords) cannot be used as names


//gsap.to(duration vars )
//gsap.set("#hero article", {duration:6, alpha:0});

//methods
//.set no duration
//gsap.set("#hero article", { alpha:0});
//.to from start
//gsap.to("#hero article", {duration:6, alpha:0, scale:2});
//.from from end
//gsap.from("#hero article", {duration:6, alpha:0, scale:2});
//.fromTo
//gsap.fromTo(heroElement, {alpha:0.5},{duration:6, alpha:1});

//position property
//absolute 1
//relative "-=0.5"
//pointers  < start     end >
//the new percentage  50%

//Labels
// "someLabelName"

const mainTL = gsap.timeline();

mainTL
.from("#hero article", {duration:2, yPercent:50})
.from("#hero h2", {duration:0.5, y:200, rotation:180, color:"#ec6602", alpha:0}, "herotext")
.from("#hero h1", {duration:0.5, y:"+=200", rotation:180, alpha:0}, "herotext")



;
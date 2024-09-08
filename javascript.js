AOS.init();

Shery.mouseFollower();
Shery.makeMagnet(".magnet-target");
var nav=document.querySelector("#nav")
var body=document.querySelector("body")

body.addEventListener("scroll",()=>{
var scroll=body.scrollY
console.log(typeof(scroll))
if(scroll >= 50){
    nav.style.position = 'fixed';
    nav.style.backgroundColor = 'black';
}
})
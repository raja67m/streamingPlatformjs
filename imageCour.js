
let scrollContainer=document.querySelector('.image-List');
let nextButton=document.getElementById('nextButton');
let backButton=document.getElementById('backButton');

scrollContainer.addEventListener("wheel",(evt)=>{
   evt.preventDefault();
   scrollContainer.scrollLeft += evt.deltaY;
   scrollContainer.style.scrollBehavior="smooth";

})

nextButton.addEventListener("click",()=>{
   scrollContainer.scrollLeft += 850;
   scrollContainer.style.scrollBehavior="smooth";
})

backButton.addEventListener("click",()=>{
   scrollContainer.scrollLeft -= 850;
   scrollContainer.style.scrollBehavior="smooth";

})

// Navgation bar
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 300;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                //  links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };


const activePage=window.location.pathname;
console.log(activePage);
const navLinks=document.querySelectorAll("nav a").forEach(link=>{
if(link.href.includes(`${activePage}`)){
   link.classList.add('active');
}
})



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

// nav bar 

const activePage=window.location.pathname;


const navBar=document.querySelectorAll(".nav-bar ul a").forEach(link=>{
   if(link.href.includes(`${activePage}`)){
      console.log(`${activePage}`);
   };
});
console.log(navBar);


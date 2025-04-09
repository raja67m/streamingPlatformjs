const imaUrlList=[
   "./new movie list/spiderman.jpg",
   " ./new movie list/spiderman.jpg",
   "./new movie list/Captain America.jpg" ,
   "./new movie list/batman.jpg"
];

const aritcalContainer=document.getElementById("item");  

// aritcalContainer.innerHTML=`<img src="${imaUrlList[0]}" />`;

for(let i=0;i<2  && i<imaUrlList.length;i++){
   const img=document.createElement("img");
   img.src=imaUrlList[i];
   aritcalContainer.appendChild(img);
}




let imgIndex=0;
// prev image function
function prevImage(){
 if(imgIndex > 0 && imgIndex<imaUrlList.length){
   imgIndex--;
 }
 else{
   imgIndex=imaUrlList.length-1;
 }
 aritcalContainer.innerHTML=`<img src="${imaUrlList[imgIndex]}" />`;
}

// next image fucntion
function nextImage(){
   if(imgIndex > 0 && imgIndex<imaUrlList.length-1){
      imgIndex++;
   }else{
      imgIndex=0;
   }
 aritcalContainer.innerHTML=`<img src="${imaUrlList[imgIndex]}" />`;
 

}

var a=["aprile","orange","banana","graps"];

console.log(a.slice(1,3)); 
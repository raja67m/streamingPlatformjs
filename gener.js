const movieImage=document.getElementById('action');



let data=[
   {id:1,gener:"action",Image:"./new movie list/gener/action/averangers.jpg",mname:"Averangers"}
];

let showImage=()=>{
movieImage.innerHTML= "";
data.map((x,y)=>{
   return (movieImage.innerHTML+=`
   <div id=${y}>
   <h2>${x.gener}</h2>
   <img src=${x.Image}>
   <p>${x.mname}</p>
   </div> `)
})
}
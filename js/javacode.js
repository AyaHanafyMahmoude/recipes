let navItemlink=[...document.querySelectorAll(".ul-a a")]

let cs=document.getElementById("gom");
cs.addEventListener("click",function(){
    var tm=cs.getAttribute("class");
    if(!tm.includes("collapse")){
   document.querySelector(".so").classList.add("bg-wit")   
   document.querySelector(".nav-item").classList.add(".boo")   
    }
})
 
let item=`pizza`
navItemlink.forEach(element => {
    element.addEventListener("click",function(){
      item=  element.getAttribute("recipe")
      element.setAttribute("href","#second")
      console.log(item)
      DataRecipes(item );


    })
    
});
DataRecipes( );
let recipeslist=[];
function DataRecipes( item="pizza"){
    let myhttp= new XMLHttpRequest();
    myhttp.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${item}`);
    myhttp.send();
    myhttp.addEventListener("readystatechange",function(){
    
        if(myhttp.readyState==4&& myhttp.status==200){
            recipeslist=JSON.parse( myhttp.response).recipes;
            DisplayData();
        }
    })
}
function DisplayData(){
    let temp=``;
    recipeslist.forEach(element => {
        temp+=`   <div class="col-md-3  text-center col-xs-6  div-did position-relative">
        <div>
            <img src="${element.image_url}" alt="" id="img-show">
            <p id="paragraphInfo" class=" pb-4 text-white fw-bold">${element.title}</p>
            <div class="t  position-absolute bottom-0 start-0 end-0">
            <button id="btngrid" class=" border-0 fw-bold rounded-pill" rec="${element.title}">View gradiant..</button>
            </div>
        </div>

     </div>`
    });
    document.getElementById("rowdata").innerHTML=temp;
    let btnlink=[...document.querySelectorAll("#btngrid")]
   
console.log(btnlink[0])
btnlink.forEach(element => {
    element.addEventListener("click",function(){
      let m=  document.querySelector(".pop-sec");
      m.style.display="flex";
        recipeslist.forEach(e => {
           if( e.title==element.getAttribute("rec")){
               let r=e.recipe_id;
               console.log(r)
               gradianta(r)
              
              
           }
            
        });
      console.log(m)

    })
    
});
}
var gar=[]
function gradianta( item){
    let myhttp= new XMLHttpRequest();
    myhttp.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${item}`);
    myhttp.send();
    myhttp.addEventListener("readystatechange",function(){
    
        if(myhttp.readyState==4&& myhttp.status==200){
            gar=JSON.parse( myhttp.response).recipe.ingredients;
            // console.log(gar)
            let d=document.getElementById("fo").innerHTML=gar;
            
        }
    })
}
let co=document.querySelector(".pop-sec");
co.addEventListener("click",function(){
    co.style.display="none";
})

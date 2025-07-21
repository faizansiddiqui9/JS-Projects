 let access_key="Lo2_55KXJfxFuUrib44Znadaufbw0wp2gZz4b6WBLDk";

 let searchinput= document.getElementById("searchinput");
 let searchbtn= document.getElementById("searchbtn");

 let showdata=document.querySelector(".showdata");

 const getdata= async (searchvalue)=>{

    let fatching= await fetch(`https://api.unsplash.com/search/photos?query=${searchvalue} &per_page=28&P=1 age&client_id=${access_key}`);

    let jsondata= await fatching.json();
    console.log(fatching);
    console.log(jsondata);

    jsondata.results.forEach(function(data){

      console.log(data.urls.small);

      let div= document.createElement("div");

      div.classList.add("card");

      showdata.appendChild(div); 

      div.innerHTML=` <img src=${data.urls.small}  alt="">
                    <a href=""></a>`
        
    })
 }

 


 searchbtn.addEventListener("click",function(){

 let searchvalue=searchinput.Value;

 getdata(searchvalue);

 }
) 
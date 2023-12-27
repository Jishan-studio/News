let key = "ee501cd52efd48d7a88517da4b29116c";
let cardData = document.querySelector(".cardData");
let searchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById('inputData');
let srhType = document.getElementById('type');


const getData = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apikey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);


    srhType.innerText="Search :"+input;
    inputData.value="";
    cardData.innerHTML="";

    jsonData.articles.forEach(function(article)  {
        console.log(article);

        let divs = document.createElement("div");
        divs.classList.add("card");
        cardData.appendChild(divs);
     
        divs.innerHTML= `
        <img src="${article.urlToImage}" alt="">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        `

        divs.addEventListener("click", function(){
            window.open(article.url);
        })

    })

  


}
window.addEventListener("load", function(){
    getData("india");
})

searchbtn.addEventListener("click", function(){
    let inputText = inputData.value;
    getData(inputText);
})


function navClick(navName){
    if(navName == "ipl"){
        document.getElementById("ipl").style.color="red";
        document.getElementById("finance").style.color="black";
        document.getElementById("politics").style.color="black";
    }
    if(navName == "finance"){
        document.getElementById("ipl").style.color="black";
        document.getElementById("finance").style.color="red";
        document.getElementById("politics").style.color="black";
    }
    if(navName == "politics"){
        document.getElementById("ipl").style.color="back";
        document.getElementById("finance").style.color="black";
        document.getElementById("politics").style.color="red";
    }
    getData(navName)
}
var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popupoverlay")
var addpopupbutton=document.getElementById("add-popup")

console.log(document.getElementById("add-popup"));

addpopupbutton.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})

var cancelpopup= document.getElementById("cancel-book")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput= document.getElementById("book-title")
var bookauthorinput= document.getElementById("auther-name")
var bookdescriptioninput=document.getElementById("text-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
            container.append(div)
            popupoverlay.style.display="none"
            popupbox.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}
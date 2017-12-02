
var titleValue = document.getElementById("itemIDTitle");
var detailValue = document.getElementById("deteilID");
var creationValue = document.getElementById("creationID");
var warrantyValue = document.getElementById("warrantyID");
var priceValue = document.getElementById("priceID");
var firstName = document.getElementById("fNameID");
var lastName = document.getElementById("lNameId");
var lastname;
// window.onload = creationValue.innerHTML= setDateBack;
senderID =  localStorage("sender_uid");
console.log(senderID);
window.onload = creationValue.innerHTML=localStorage.getItem("creation");
window.onload = titleValue.innerHTML=localStorage.getItem("title");
window.onload = detailValue.innerHTML=localStorage.getItem("detail");
window.onload = warrantyValue.innerHTML=localStorage.getItem("warranty");
window.onload = priceValue.innerHTML=localStorage.getItem("price");


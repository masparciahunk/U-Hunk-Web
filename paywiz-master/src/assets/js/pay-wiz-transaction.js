
var titleValue = document.getElementById("itemIDTitle");
var detailValue = document.getElementById("deteilID");
var creationValue = document.getElementById("creationID");
var warrantyValue = document.getElementById("warrantyID");
var priceValue = document.getElementById("priceID");

var SenderfNameValue = document.getElementById("sender_fullname");
var SenderphoneValue =document.getElementById("sender_contactNumber");
var SenderphotoValue =document.getElementById("sender_photo");
var SenderaddressValue =document.getElementById("sender_address");

var ReceiverfNameValue = document.getElementById("receiver_fullname");
var ReceiverphoneValue =document.getElementById("receiver_contactNumber");
var ReceiverphotoValue =document.getElementById("receiver_photo");
var ReceiveraddressValue =document.getElementById("receiver_address");

// window.onload = creationValue.innerHTML= setDateBack;

window.onload = creationValue.innerHTML=localStorage.getItem("creation");
window.onload = titleValue.innerHTML=localStorage.getItem("title");
window.onload = detailValue.innerHTML=localStorage.getItem("detail");
window.onload = warrantyValue.innerHTML=localStorage.getItem("warranty");
window.onload = priceValue.innerHTML="Php"+ localStorage.getItem("price");

window.onload = SenderfNameValue.innerHTML=localStorage.getItem("sender_fullname");
window.onload = SenderphoneValue.innerHTML=localStorage.getItem("sender_contactNumber");
window.onload = SenderphotoValue.src=localStorage.getItem("sender_photo");
window.onload = SenderaddressValue.innerHTML=localStorage.getItem("sender_address");

window.onload = ReceiverfNameValue.innerHTML=localStorage.getItem("receiver_fullname");
window.onload = ReceiverphoneValue.innerHTML=localStorage.getItem("receiver_contactNumber");
window.onload = ReceiverphotoValue.src=localStorage.getItem("receiver_photo");
window.onload = ReceiveraddressValue.innerHTML=localStorage.getItem("receiver_address");


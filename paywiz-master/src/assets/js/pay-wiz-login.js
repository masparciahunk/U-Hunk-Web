$(window, document, undefined).ready(function() {
    
    var config = {
        apiKey: "AIzaSyBGNSnsFh_Dwj4iwAEmBy2ZYhY2CN2eFq0",
        authDomain: "paywiz-b98fb.firebaseapp.com",
        databaseURL: "https://paywiz-b98fb.firebaseio.com",
        projectId: "paywiz-b98fb",
        storageBucket: "paywiz-b98fb.appspot.com",
        messagingSenderId: "1059931264356"
      };
      firebase.initializeApp(config);
        
    var dbRef = firebase.database();
    var jsText, jsText2, obj;
    var dateEpoch, creationDate;    
    var senderID,  receiverID;
  $('#doTrack').on('click', function (e) {
    e.preventDefault();
    var trackText = $('#input-track').val();
    console.log(trackText);
    firebase.database().ref("transactions")
    .orderByChild("transaction_code")
    .equalTo(trackText)
    .once("value", function (snapshot) {
  
      var key;
  
      snapshot.forEach(function (childSnapshot) {
        key = childSnapshot.key;
        jsText = childSnapshot.val();
        jsText2 = JSON.stringify(jsText);
        obj = JSON.parse(jsText2)
        
      });
      
      if (key) {
             dateEpoch = obj.creation_date;
             creationDate = new Date(dateEpoch);
             console.log(creationDate);
            localStorage.setItem("title",obj.title);
            localStorage.setItem("detail",obj.detail);
            localStorage.setItem("creation",creationDate);
            localStorage.setItem("warranty",obj.warranty);
            localStorage.setItem("price",obj.amount);
            localStorage.setItem("sender_uid",obj.sender_uid);
            localStorage.setItem("receiver_uid",obj.receiver_uid);
            window.location = "/other_layouts/transaction-info.html";
        // console.log(obj.title);
        // window.location = "other_layouts/transaction-info.html";
      } else {
        console.log("User not found.");
      }
    
    });
  });
})  
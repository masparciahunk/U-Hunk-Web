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
    var userRef ;
    var jsText, jsText2, obj;
    var senderJsText, receiverJsText ; 
    var dateEpoch, creationDate;
    var senderID,  receiverID;    
    var senderID_1,  receiverID_1, obj_2;
    var senderID_2,  receiverID_2, obj_3;
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
           
            localStorage.setItem("title",obj.title);
            localStorage.setItem("detail",obj.detail);
            localStorage.setItem("creation",creationDate);
            localStorage.setItem("warranty",obj.warranty);
            localStorage.setItem("price",obj.amount);
            senderUID(obj);
        // console.log(obj.title);
        
        window.location = "/other_layouts/transaction-info.html";
       
      } else {
        console.log("User not found.");
      }
      function senderUID(obj)
      {
        senderID = dbRef.ref('users/'+obj.sender_uid).once('value' ,function(snapshot)
        {
            var key = snapshot.key;
                senderID_1 = snapshot.val();
                senderID_2 = JSON.stringify(senderID_1);
                obj_2 = JSON.parse(senderID_2);
                localStorage.setItem("sender_fullname", obj_2.firstname +" "+obj_2.lastname);
                // +" "+obj_2.lastname
                localStorage.setItem("sender_contactNumber", obj_2.phone_number);
                localStorage.setItem("sender_photo", obj_2.photo_url);
                localStorage.setItem("sender_address", obj_2.address_street_brgy +", "+obj_2.address_state+", "+obj_2.address_city);
            
           
        });
        receiverID = dbRef.ref('users/'+obj.receiver_uid).once('value' ,function(snapshot)
        {
            var key = snapshot.key;
                receiverID_1 = snapshot.val();
                receiverID_2 = JSON.stringify(receiverID_1);
                obj_3 = JSON.parse(receiverID_2);
                localStorage.setItem("receiver_fullname", obj_3.firstname +" "+obj_3.lastname);
                localStorage.setItem("receiver_contactNumber", obj_3.phone_number);
                localStorage.setItem("receiver_photo", obj_3.photo_url);
                localStorage.setItem("receiver_address", obj_3.address_street_brgy +", "+obj_3.address_state+", "+obj_3.address_city);
               
           
        });
      }
  
    });
  });
})  
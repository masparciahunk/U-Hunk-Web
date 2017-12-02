$(window, document, undefined).ready(function() {
  
    var config = {
      apiKey: "AIzaSyBGNSnsFh_Dwj4iwAEmBy2ZYhY2CN2eFq0",
      authDomain: "paywiz-b98fb.firebaseapp.com",
      databaseURL: "https://paywiz-b98fb.firebaseio.com/",
      projectId: "paywiz-b98fb",
      storageBucket: "paywiz-b98fb.appspot.com",
      messagingSenderId: "1059931264356"
    };
    firebase.initializeApp(config);
    //create firebase references
    var Auth = firebase.auth(); 
    var dbRef = firebase.database();
    var transRef = dbRef.ref('transactions');
    var auth = null;

    
    $('#findTransaction').on('click', function (e) {

      console.log(transRef);
    });

})
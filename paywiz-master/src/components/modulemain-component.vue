<template>
  <div id="app">
    <header> 
        <p id="content">
          <img class = "img-two " src="src/assets/img/veripayWhite.png">
        </p>
        
      <div class="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
        
      <form>
      <div class="group-track-2">

          <input class="inputTrack-1 " type="text" name="search" placeholder="Search transaction number...">
          
          <button class="buttonTrack-2" type="submit"></button>
          
      </div>
     

    </form>
   
        </div>
  
</header>

<div class="container">
    <ul class="progressbar">
      <li :class="{'active':$route.fullPath === '/'}">Waiting for the product at <br>LBC</li>
      <li :class="{'active':$route.fullPath === '/receiveAt'}">Receive at <br> x place</li>
      <li>On Delivery <br> by Juan Dela Cruz</li>
      <li>Delivered</li>
    </ul>
    <div class="line-separator">
  </div>
<router-view></router-view> 
</div>
  <footer>
      
        <p>  &#9400;<bold class="font-style-comic-san-ms font-italic ">2017 <bold class="font-bold">Veri</bold></bold><bold class="font-italic">Pay</bold></p>
  
       
  </footer>
    
  </div>
</template>

<script>
export default {
  name: 'main'
}
</script>

<style>
#app {
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-size: cover;
      background-position: top center !important;
      background-repeat: no-repeat !important;
      background-attachment: fixed;
      width: 100%;
      height: 100%;
      margin: auto; 
}
    .container  {
      width: 100%;
    }
    .progressbar{
      counter-reset: step;
      font-size: 18px;
      margin-top: 3em;
    }
    .progressbar li {
      list-style-type: none;
      float: left;
      width: 23.33%;
      position: relative;
      text-align: center;
      border: 5px;
    }
    .progressbar li:before  {
      content: '';
      width: 30px;
      height: 30px;
      line-height: 30px;
      border: 3px solid #ddd;
      display: block;
      text-align: center;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      background-color: white;
    }
    .progressbar li:after {  
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: #ddd;
      top:15px;
      left: -50%;
      z-index: -1;
    }
    .progressbar li:first-child:after{
      content: none;
    }
    .progressbar li.active  {
      color: green;
    }
    .progressbar li.active:before {
      border-color: green;
      background-color: green;
    }
    .line-separator{
      width: 75%;
      height:2px;
      background:rgb(240, 232, 232);
      border-bottom:1px solid rgb(240, 232, 232);
      margin-top: 23em; 
      margin-left: 10%;
      border-radius: 5%;
    }
    .description{
      margin: 3em 0em 0 20em;
      
    }
    .item{
      font-size: 26px;
      font-weight: 900;
      color: rgb(14, 177, 74);
    }
    .item-description{
      font-size: 26px;
      font-weight: 600;
      font-style: italic;
      color: rgb(14, 177, 74);
    }
    .title-1{
      font-size: 15px;
      font-family: sans-serif;
      font-weight: 600;
      font-style: italic;
      color: gray;
    }
    .title-2{
      margin-left: 6em;
      font-size: 15px;
      font-family: sans-serif;
      font-weight: 600;
      font-style: italic;
      color: gray;
    }
    .title-3{
      margin-left: 18em;
      font-size: 15px;
      font-family: sans-serif;
      font-weight: 600;
      font-style: italic;
      color: gray;
    }
    .title-4{
      margin-left: 11em;
      font-size: 15px;
      font-family: sans-serif;
      font-weight: 600;
      font-style: italic;
      color: gray;
    }
    .item-date{
      margin: .7em 0em 0 4em; 
      font-size: 26px;
      font-weight: 600;
      font-style: italic;
      color: rgb(14, 177, 74);
    }
    .item-warranty{
      margin: -2.2em 0em 0 10em; 
      font-size: 26px;
      font-weight: 600;
      font-style: italic;
      color: rgb(14, 177, 74);
    }
    .item-amount{
      margin: .5em 0em 0 4em; 
      font-size: 30px;
      font-weight: 600;
      font-style: bold;
      color: rgb(230, 52, 85);
    }
    .user-info{
  margin: -43em 0em 0 90em;

}
.profile-image{
  float: left;
  border-radius: 20px;
 width: 8%;
  height: 40px;
}
 .media-description{
   float: left;
   margin-top: -3em;
   margin-left: 0em;
   font-size: 16px;
 }
 hr{
   width: 60%;
   float: left;
   margin-bottom: 10em;
 }
 h5{
   font-style: bold;
   font-weight: 600;
   font-size: 3em;
 }
 .sender-icon{
  width: 13%;
  height:20px;
  border: 2px solid lightslategray;
  border-radius: 11px;
  margin-left: 1em;
  margin-top: 2em;
  
 }
 .location-icon{
   position: relative;
   float: left;
  width: 2.5%;
   height:17px;
  margin-left: -2em;
  margin-top: -2.5em;
 }
 .mobile-icon{
   position: relative;
   float: left;
  width: 2.5%;
   height:17px;
  margin-left: -2em;
  margin-top: -6.5em;
 }
 .media-2{
   margin-top: -8em;
 }
 .join-in{
   display: flex;
 }
</style>

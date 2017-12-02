<template>
     <div class="description">
        <p class="item">Asus Zenfone 3 Max</p>
        <p class="item-description">Complete package with box and 6 months<br>warranty on Asus Store</p>
        <p class="title-1">Item to be received</p>
        <p class="item-date">11/13/17</p>
        <p class="title-2">Transaction Date</p>
        <p class="item-warranty">4 Days</p>
        <p class="title-3">Warranty</p>
        <p class="item-amount">Php 7,550</p>
        <p class="title-4">Amount</p>
        <button class="accept" @click="receivePage"></button>
        <button class="decline"></button>
        <br>
         <div class="user-info">
        
            <div class="media-body">
              <div class="media">
             <img class="profile-image" src="src/assets/img/done.png" alt="Generic placeholder image mr-7" height="10" width="20">
                <div class="join-in">
                <h5 class="uk-margin-remove-top">Joshua Perez</h5>
                <img class="sender-icon" src="src/assets/img/senderIcon.png" alt="">
                </div>
                <img class="location-icon" src="src/assets/img/phoneIcon.png" alt="">
                <img class="mobile-icon" src="src/assets/img/phoneIcon.png" alt="">
                 <div class="media-description">
               <p class="text-muted">+639028458288</p>
                <p class="text-muted">Rm.803, New Star Bldg, Central Condominium,<br>Quezon City, Metro Manila, Philippines</p>
                 </div>
                 <hr>
              </div>
             </div>
                <br>
                
                <div class="media-2">
               <div class="media-body">
              <div class="media">
             <img class="profile-image" src="src/assets/img/done.png" alt="Generic placeholder image mr-7" height="10" width="20">
                 <div class="join-in">
                <h5 class="uk-margin-remove-top">Gilber Cuaresma</h5>
                <img class="sender-icon" src="src/assets/img/receiverIcon.png" alt="">
                </div>
                <img class="location-icon" src="src/assets/img/phoneIcon.png" alt="">
                <img class="mobile-icon" src="src/assets/img/phoneIcon.png" alt="">
                 <div class="media-description">
               <p class="text-muted">+639028458288</p>
                <p class="text-muted">Rm.803, New Star Bldg, Central Condominium,<br>Quezon City, Metro Manila, Philippines</p>
                 </div>
                 <hr>
              </div>
               </div>
             </div>
    </div>
    </div>
   
</template>

<script>
    export default{
      name: 'waiting',
      methods: {
        receivePage () {
          this.$router.push('/receiveAt')
        }
      }
    }
</script>


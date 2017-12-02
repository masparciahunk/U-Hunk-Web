<template>
    <div>
    <header> 
        <p id="content">
          <img class = "img-two " src="src/assets/img/veripayWhite.png">
        </p>
   
  
</header>

<div class="container-fluid">
    <div class="row">
      <div class="col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
        
      <form>
        
      <div class="group-track-1">
          <label for="">Very fast. Very secure!</label>
          <input class="inputTrack " type="text" name="search" placeholder="Search transaction number...">
          <button  @click="getMain" id="findTransaction" class="buttonTrack-1" type="submit"></button>
      </div>
    </form>
   
    </div>
  </div> 
</div>
  <footer>
        <p>  &#9400;<bold class="font-style-comic-san-ms font-italic ">2017 <bold class="font-bold">Veri</bold></bold><bold class="font-italic">Pay</bold></p>

  </footer>
    
  </div>
</template>
<script>
export default {
  name: 'transaction',
  methods: {
    getMain () {
      this.$router.push('/modulemain')
    }
  }
}
</script>


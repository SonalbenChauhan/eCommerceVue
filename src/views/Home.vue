<template>
  <div class="home">
    <div>
      <!-- <b-jumbotron header="Welcome to our shoe store" lead="We got a wide variety">
        
        <b-button variant="primary" to="/items">Start Shopping</b-button>
      </b-jumbotron> -->
    </div>
    <div style="width: 75%; height: 90vh; margin: 0 auto">
      <HomeCarousel/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Navbar from "../components/Navbar";
import HomeCarousel from "../components/HomeCarousel";
export default {
  name: "Home",
  components:{
    Navbar,
    HomeCarousel
  }
};
</script>

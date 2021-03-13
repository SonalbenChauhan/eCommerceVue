<template>
    <b-container >
        <div >
            <b-form-input style="margin-top: 100px" v-model="email" placeholder="Email"></b-form-input>
            <b-form-input type="password" style="margin-top: 10px" v-model="password" placeholder="Password"></b-form-input>
            <b-form-input type="password" style="margin-top: 10px" v-model="cPassword" placeholder="Confirm Password"></b-form-input>              
            <b-button style="margin-top: 10px" @click="register" variant="success">Create an account</b-button>
        </div>
    </b-container>
</template>
<script>
  export default {
    name:"Createaccount",
    data() {
      return {
        email:"",
        password:"",
        cPassword: ""
      }
    },
    methods:{
      register: function(){
        console.log(this.email, this.password, this.cPassword);
        if(this.password == this.cPassword){
          let customer ={
            email : this.email,
            password : this.password
          }
          this.$store.commit("registerCustomer", customer);
          this.$router.push({path: "login"});
        }
        
      }
    }
  }
</script>
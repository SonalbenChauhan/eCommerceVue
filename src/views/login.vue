<template>
    <b-container >
        <div style="width:50%; margin: 0 auto;">
            <b-form-input style="margin-top: 100px" v-model="email" placeholder="Email"></b-form-input>
            <b-form-input type="password" style="margin-top:20px" v-model="password" placeholder="Password"></b-form-input>
            <b-button style="margin-top: 20px" @click="login" variant="success">Login</b-button>
            <b-button style="margin-left: 20px; margin-top: 20px"  to="/createaccount" variant="success">Register</b-button>
        </div>
    </b-container>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        login: function(){
            if(this.email && this.password && this.email == this.$store.state.customer.email && this.password == this.$store.state.customer.password){
                this.$store.commit("customerEmail", this.email);
                this.$router.push("/");
            }
        }
    }
}
</script>
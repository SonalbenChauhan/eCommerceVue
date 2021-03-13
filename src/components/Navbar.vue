<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/items">Products</b-nav-item>
                
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/cartPage">
                    <font-awesome-icon icon="shopping-cart"/><span>{{numInCart}}</span>
                </b-nav-item>
                <b-nav-item v-if="$store.state.customer.email.length == 0" to="/login">Login</b-nav-item>
                <b-navbar-nav v-else>
                    <b-nav-item>{{$store.state.customer.email}}</b-nav-item>
                    <b-nav-item  @click="logout">Logout</b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: "Navbar",
    computed:{
        numInCart: function(){
            
            console.log(this.$store.state.cart.length);
            return this.$store.state.cart.length;
        }
    },
    methods: {
        logout: function(){
            this.$store.commit("logoutMutation");
        }
    }
}
</script>

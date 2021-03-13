<template>
    <b-container>
        <h1>Cart page</h1>
        <b-list-group>
            <b-list-group-item v-for="item in itemsInCart" :item="item" v-bind:key="item.id" :to="`/itemdetails/${item.id}`">
                <b-row>
                    <b-col>
                        <h1>{{item.name}}</h1>
                    </b-col>
                    <b-col>
                        <b-row>
                            <b-col>
                                quantity:<h4>{{cart.filter(x=>x.itemId == item.id)[0].quantity}}</h4>
                            </b-col>
                            <b-col>
                                Total: <h4>{{cart.filter(x=>x.itemId == item.id)[0].quantity * item.Price}}</h4>
                            </b-col>
                            <b-col>
                                <b-button variant="danger" @click="removeItemFromCart(item)">
                                    <font-awesome-icon icon="trash"/>
                                </b-button>
                            </b-col>
                        </b-row>
                        
                    </b-col>
                </b-row>
            </b-list-group-item>
        </b-list-group>
        <b-row>
            <b-col>
            </b-col>
            <b-col>
                <h4>Grand Total : </h4><h2>{{grandTotal}}</h2>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    name: "CartPage",
    data(){
        // let itemsInCart = [];
        // let items = this.$store.state.items;
        // // debugger;
        // this.$store.state.cart.map(function(x){
        //     itemsInCart = [...itemsInCart, items.filter(i=>i.id == x.itemId)[0]];
        // });
        // console.log(itemsInCart);
        return{
            // items: itemsInCart,
            cart: this.$store.state.cart
        }
    },
    computed:{
        itemsInCart: function(){
            let itemsInCart = [];
            let items = this.$store.state.items;
            // debugger;
            this.$store.state.cart.map(function(x){
                itemsInCart = [...itemsInCart, items.filter(i=>i.id == x.itemId)[0]];
            }); 
            return itemsInCart;
        },
        grandTotal: function(){
            let itemsInCart = [];
            let items = this.$store.state.items;
            // debugger;
            this.$store.state.cart.map(function(x){
                itemsInCart = [...itemsInCart, items.filter(i=>i.id == x.itemId)[0]];
            });

            let grandTotal = 0;
            let cart = this.$store.state.cart;
            itemsInCart.map(function(cItem){
                grandTotal += cItem.Price *  cart.filter(i=>i.itemId == cItem.id)[0].quantity;
            });
            return grandTotal;
        }
    },
    methods: {
        removeItemFromCart: function(item){
            this.$store.commit("removeItemFromCart", item.id);
        }
    }
}
</script>



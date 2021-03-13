<template>
    <b-container>
        <b-row class="mb-100">
            <b-col>
                <b-row>
                    <h1 class="mt-50">{{item.name}}</h1>    
                </b-row>
                <b-row>
                    <div class="item-img">
                        <b-img :src="item.image ? require(`../assets/`+item.image):''" />
                    </div>
                </b-row>
                <!-- <b-row class="mt-50">
                    <h3>Description</h3>
                    <hr>
                    <h6 class="align-left">{{item.desc}}</h6>
                </b-row> -->
                 <b-row>
                    <CommentGroup class="mt-50 w-100" v-bind:comments="item.comments" />
                </b-row>
            </b-col>
            <b-col>
                <b-row class="mt-200">
                    <h3>Description</h3>
                    <hr>
                    <h6 class="align-left">{{item.desc}}</h6>
                </b-row>           
                <b-row>
                    <h3>Price  &nbsp;-&nbsp; ${{item.Price}}</h3>
                </b-row>     
                <b-row class="mt-200">
                    <b-col>
                        <b-button @click="addToCart" variant="success">+</b-button>
                    </b-col>
                    <b-col>
                        {{quantity}}
                    </b-col>
                    <b-col>
                        <b-button @click="removeFromCart" variant="danger">-</b-button>
                    </b-col>
                </b-row>
               

            </b-col>

        </b-row>
    </b-container>
</template>
<script>
import CommentGroup from "../components/CommentGroup";
export default {
    name: "Itemdetail",
    components:{
        CommentGroup
    },
    data(){
        return{
            quantity: this.$store.state.cart.filter(i=>i.itemId == this.$route.params.id).length > 0 ? this.$store.state.cart.filter(i=>i.itemId == this.$route.params.id)[0].quantity : 0 ,
            item: this.$store.state.items.filter(i=>i.id == this.$route.params.id)[0]
        }
    },
    methods:{
        addToCart: function(){
            this.quantity++;
            let myItem = {item: this.item, quantity: this.quantity};
            
            this.$store.commit("addToCart", myItem);
        },
        removeFromCart: function(){
            if(this.quantity > 0){
                this.quantity--;
                let myItem = {item: this.item, quantity: this.quantity};
                this.$store.commit("removeFromCart", myItem);
            }else if(this.quantity == 0){
                let myItem = {item: this.item, quantity: this.quantity};
                this.$store.commit("removeFromCart", myItem);
            }     
        }
    }
}
</script>
<style scoped>
    .mt-50{
        margin-top: 50px;
    }
    .mt-200{
        margin-top: 100px;
    }    
    .align-left{
        text-align: left;
    }
    .w-100{
        width: 100%;
    }
    .mb-100{
        margin-bottom: 100px;
    }
</style>
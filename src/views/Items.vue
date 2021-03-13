<template>
    <b-container>
        <b-row>
            <b-col md="6" v-for="item in items" v-bind:key="item.id" >
                <ListItem :item="item"/>
            </b-col>
        </b-row>
    </b-container>

</template>
<script>
import ListItem from "../components/ListItem";
export default {
    name: "items",
     components:{
        ListItem
    },
    data(){
        return{
            items: this.$store.state.items
        }
    }
}
</script>
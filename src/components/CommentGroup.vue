<template>
    <div>
        <b-list-group>
            <b-list-group-item class="flex-column align-items-start"  v-for="comment in comments" v-bind:key="comment.id" >
                
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{comment.title}}</h5>
                    
                </div>

                <p class="mb-1">
                    {{comment.body}}
                    <br>
                    <span>
                        Rating: &nbsp; {{comment.rating}}
                    </span>
                </p>
                
            </b-list-group-item>
        </b-list-group>
        <div class="mt-50">
             <b-button variant="outline-primary" :to="`/itemdetails/${itemId}/addcomment`">Add Comment</b-button>
        </div>
    </div>    
</template>
<script>
import Comment from "./Comment";
export default {
    name: "CommentGroup",
    components:{
        Comment
    },
    data(){
        return{
            itemId : this.$route.params.id
        }
        
    },
    props: ['comments']
}
</script>
<style>
.mt-50{
    margin-top: 50px;
}
</style>
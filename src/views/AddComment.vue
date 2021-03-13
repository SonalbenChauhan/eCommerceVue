<template>
    <div>
        <b-card bg-variant="light">
            <b-form-group
            label-cols-lg="3"
            label="Add Comment"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
            >
                <b-form-group
                    label-cols-sm="3"
                    label="Title:"
                    label-align-sm="right"
                    label-for="nested-title"
                >
                    <b-form-input v-model="title" id="nested-title"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="3"
                    label="Body:"
                    label-align-sm="right"
                    label-for="nested-body"
                >
                    <b-form-textarea v-model="body" id="nested-body"></b-form-textarea>
                </b-form-group>
                <b-form-group  label-cols-sm="3"
                    label="Rating:"
                    label-align-sm="right"
                    label-for="nested-body">
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                   

                    <!-- <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
                </b-form-group>                
                <b-form-group>
                    <b-button @click="addComment" variant="outline-primary">Submit</b-button>
                </b-form-group>
            </b-form-group>
            
        </b-card>
    </div>
</template>
<script>
export default {
    name: "AddComment",
    data(){
        return{
            title:"",
            body:"",
            selected: null,
            options: [
                { value: null, text: 'Please select an option' },
                { value: '1', text: '1' },
                { value: '2', text: '2' },
                { value: '3', text: '3' },
                { value: '4', text: '4' },
                { value: '5', text: '5' }
            ]
        }
    },
    methods:{
        addComment: function(){
            
            if(this.title && this.body){
                console.log(this.title, this.body, this.selected);
                let commentDetails = {
                    itemId : this.$route.params.id,
                    title: this.title,
                    body: this.body,
                    rating: this.selected
                }
                this.$store.commit("addComment", commentDetails);
                this.$router.push({ path: `/itemdetails/${this.$route.params.id}`});
            }
        }
    }
}
</script>
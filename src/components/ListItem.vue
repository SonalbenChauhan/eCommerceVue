<template>
    <b-card
    :title="item.name"
    :img-src="require('../assets/'+item.image)"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{item.desc ? item.desc : ""}}
    </b-card-text>

    <b-button :to="`/itemdetails/${item.id}`" variant="primary">See Details</b-button>
  </b-card>
</template>
<script>

export default {
    name: "ListItem",
    props:["item"]
   
}
</script>
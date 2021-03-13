import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items:[
      {
        id:1,
        Price: 25,
        name: "Prada",
        image :"a.jpeg",
        desc : "This type of shoe not just provide comfort and define today's fashion .Shoe comes in various size and colors .The white color is also in demand. it comes in size 7, 8,9,10,11",
        comments:[
          {
            id: 1,
            title: "comment 1",
            body: "comment body 1",
            rating: 3
          },
          {
            id: 2,
            title: "comment 2",
            body: "comment body 1",
            rating: 4
          },
          
        ]
      },
      {
        id:2,
        Price: 30,
        name: "Gucci" ,
        image :"b.jpg",
        desc : "This type of shoe is environment friendly means profected from heat and cold .Shoe comes in various size and colors .The black color is also in demand. it comes in size 7, 8,9,10,11",
        comments:[
          {
            id: 1,
            title: "comment 1",
            body: "comment body 1",
            rating: 3
          },
          {
            id: 2,
            title: "comment 2",
            body: "comment body 1",
            rating: 1
          },
          
        ]
      },
      {
        id:3,
        Price: 50,
        name: "Nike",
        image :"c.jpeg",
        desc : "This type of shoe define today's fashion .Shoe comes in various size and colors .The grey color is also in demand. it  comes in size 7, 8,9,10,11",
        comments:[
          {
            id: 1,
            title: "comment 1",
            body: "comment body 1",
            rating: 5
          },
          {
            id: 2,
            title: "comment 2",
            body: "comment body 1",
            rating: 4
          },
          
        ]
      },
      {
        id:4,
        Price: 20,
        name: "Reebok",
        image :"d.jpeg",
        desc : "This type of shoe protect from environment situations and define today's fashion .Shoe comes in various size and colors .The white color is also in demand. it comes in size 7, 8,9,10,11",
        comments:[
          {
            id: 1,
            title: "comment 1",
            body: "comment body 1",
            rating: 4
          },
          {
            id: 2,
            title: "comment 2",
            body: "comment body 1",
            rating: 4
          },
          
        ]
      },
      {
        id:5,
        Price:12,
        name: "Fila" ,
        image :"e.jpeg",
        desc : "Define today's fashion .Shoe comes in various size and colors .The  color blue is also in demand. it comes in size 7, 8,9,10,11",
        comments:[
          {
            id: 1,
            title: "comment 1",
            body: "comment body 1",
            rating: 4
          },
          {
            id: 2,
            title: "comment 2",
            body: "comment body 1",
            rating: 4
          },
          
        ]
      },
    ],
    customer:{
      email:"",
      password: "",
      isLoggedIn: false
    },
    cart:[]
  },
  mutations: {
    customerEmail(state, email){
      state.customer.email = email;
      state.customer.isLoggedIn = true;
    },
    logoutMutation(state){
      state.customer.email = "";
    },
    addToCart(state, myItem){
      console.log(myItem);
      let itemInBasket = state.cart.filter(i=>i.itemId == myItem.item.id);
      if(itemInBasket.length){
        state.cart = [...state.cart.filter(item=>item.itemId != myItem.item.id), {itemId: myItem.item.id, quantity: myItem.quantity}];
      }else{
        state.cart = [...state.cart, {itemId: myItem.item.id, quantity: myItem.quantity}]
      }
    },
    removeFromCart(state, myItem){
      console.log(myItem);
      let itemInBasket = state.cart.filter(i=>i.itemId == myItem.item.id);
      console.log(itemInBasket);
      if(itemInBasket.length > 1){
        state.cart = [...state.cart.filter(item=>item.itemId != myItem.item.id), {itemId: myItem.item.id, quantity: myItem.quantity}];
      }else if(myItem.quantity== 0){
        console.log("im here");
        state.cart = [...state.cart.filter(item=>item.itemId != myItem.item.id)];
      }
    },
    removeItemFromCart(state, id){
      state.cart= [...state.cart.filter(x=>x.itemId != id)]
    },
    addComment(state, comment){
      let {itemId, title, body, rating} = comment;
      let currItem = state.items.filter(i => i.id == itemId)[0];
      let newId = currItem.comments.length +1;
      currItem.comments.push({id: newId, title, body, rating});
      state.items = [...state.items.filter(o => o.id != itemId), currItem];
    },
    registerCustomer(state, customer){
      state.customer.email = customer.email;
      state.customer.password = customer.password;
      state.customer.isLoggedIn = false;
    }
  },
  actions: {}
});

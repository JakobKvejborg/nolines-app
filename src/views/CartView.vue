<template>
    <div class="cart">
      <h2>Indkøbskurven</h2>
      
      <div v-if="cartItems.length === 0">Kurven er tom</div>
  
      <div v-else>
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" />
          <div class="cart-details">
            <h3>{{ item.name }}</h3>
            <p>{{ item.price }} kr</p>
            <p>Antal: {{ item.quantity }}</p>
            <button @click="removeFromCart(item)">−</button>
            <button @click="addToCart(item)">+</button>
          </div>
        </div>
  
        <p class="total">Antal varer: {{ totalItems }}</p>
        <p class="totalsum">Total: {{ totalPrice }}kr</p>
      </div>
    </div>
  </template>  

<script>
import { useCartStore } from "../store/cart";
import { computed } from "vue";

export default {
  setup() {
    const cartStore = useCartStore();
    return { 
      cartItems: computed(() => cartStore.cartItems), 
      totalItems: computed(() => cartStore.totalItems),
      totalPrice: computed(() => cartStore.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      ),
      addToCart: cartStore.addToCart,
      removeFromCart: cartStore.removeFromCart
    };
  }
};
</script>

<style>
.cart {
  padding: 20px;
  text-align: center;
}

.cart-item {
  background: white;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cart-item img {
  width: 80px;
  border-radius: 8px;
}

.cart-details {
  flex-grow: 1;
  text-align: left;
  padding: 0 10px;
}

.cart-details button {
  background: rgb(0, 117, 49);
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 22px;
}

.total {
  font-weight: bold;
  margin-top: 15px;
}

.totalsum {
  font-weight: bold;
  margin-top: 15px;
}


</style>

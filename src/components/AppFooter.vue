<template>
    <footer class="footer">
      <p>
        🏠 <router-link to="/">Hjem</router-link>| 
        🍔<router-link to="/">Menu</router-link>| 
        🛒 <router-link to="/cart">Kurv <span :class="{ 'cart-count': totalItems > 0 }">({{ totalItems }})</span></router-link>
      </p>
    </footer>
  </template>

<script>
import { useCartStore } from "../store/cart"; 
import { computed } from "vue";

export default {
  setup() {
    const cartStore = useCartStore();
    
    return {
      totalItems: computed(() => cartStore.totalItems),
    };
  }
};
</script>
  
  <style>
  .footer {
    background: rgb(0, 117, 49);
    padding: 8px;
    color: white;
    text-align: center;
    position: fixed;
    width: 100%;
    max-width: 400px;
    font-size: 17px;
    bottom: 0;
  }
  
  .footer p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-right: 40px; /* Adjust if needed */
  }
  
  .footer a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  
  .footer a:hover {
    text-decoration: underline;
  }

  .cart-count {
  background: red;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: 5px;
}
  </style>
  
1. ctrl + æ to open Terminal
2. npm install pinia
3. npm install -g npm
4. npm install -g @vue/cli
x. npm run serve (to run program)
x. open browser and type http://localhost:8080

eller 

1. npm run serve -- --host
2. open fra telefon eller browser
3. http://192.168.X.X:8080 (insert egen IP4 adresse)


# nolines-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

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
            <button @click="removeFromCart(item)">−</button> <!-- Remove from cart button -->
            <button @click="addToCart(item)">+</button> <!-- Add to cart button -->
          </div>
        </div>
        
        <button class="checkout-btn"><img src="https://play-lh.googleusercontent.com/NGSk6n-n_xpqG6-TI3U-fYqX7FF-0vC_2EnqOv-nuNZcX598jcQkqmZGueImfSQ3DWU"> Betal med MobilePay</button> <!-- Checkout button -->
        <div></div>
        
        <p class="total">Antal varer: {{ totalItems }}</p>
        <p class="totalsum">Total: {{ totalPrice }}kr</p>
        
        <button class="empty-cart-btn" @click="emptyCart">Slet kurv</button> <!-- Empty cart button -->
   
      </div>
    </div>
  </template>  

<!-- SCRIPTS -->
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
      removeFromCart: cartStore.removeFromCart,
      emptyCart: cartStore.emptyCart
    };
  }
};
</script>

<!-- CSS -->
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

.empty-cart-btn {
  background: rgb(240, 22, 22);
  color: white;
  border: none;
  padding: 9px 19px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
}

.empty-cart-btn:hover { /* What should the btn look like when hovered  */
  background: darkred;
}

.checkout-btn {
  background-color: rgb(94, 121, 253);
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 18px;
}

.checkout-btn:hover {
  background-color: rgb(73, 102, 248);
}

.checkout-btn img { /* CSS for the img inside the checkout btn */
  width: 20px;
  height: 16px;
}

</style>

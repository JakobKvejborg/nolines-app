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
      
      <button class="pay-with-mobilepay-btn" @click="openMobilePay"><img src="https://play-lh.googleusercontent.com/NGSk6n-n_xpqG6-TI3U-fYqX7FF-0vC_2EnqOv-nuNZcX598jcQkqmZGueImfSQ3DWU"> Betal med MobilePay</button> <!-- Pay MobilePay button -->
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

    // Function to open MobilePay app (without payment details for now)
    const openMobilePay = () => {
    const phoneNumber = "27509823"; // Replace with business phone
    const amount = (cartStore.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)).toFixed(2);
    const mobilePayUrl = `mobilepay://send?phone=${phoneNumber}&amount=${amount}&currency=DKK`;
    window.location.href = mobilePayUrl; // Attempt to open the MobilePay app
  };

  return { 
    cartItems: computed(() => cartStore.cartItems), 
    totalItems: computed(() => cartStore.totalItems),
    totalPrice: computed(() => cartStore.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    ),
    addToCart: cartStore.addToCart,
    removeFromCart: cartStore.removeFromCart,
    emptyCart: cartStore.emptyCart,
    openMobilePay
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

.cart-details button { /* + and - btns */
background: rgb(0, 117, 49);
color: white;
border: none;
padding: 5px 10px;
margin: 7px;
cursor: pointer;
border-radius: 5px;
font-size: 30px;
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

.pay-with-mobilepay-btn {
background-color: rgb(94, 121, 253);
color: white;
border: none;
padding: 10px 20px;
margin-top: 15px;
cursor: pointer;
border-radius: 5px;
font-size: 22px;
}

.pay-with-mobilepay-btn:hover {
background-color: rgb(73, 102, 248);
}

.pay-with-mobilepay-btn img { /* CSS for the img inside the checkout btn */
width: 20px;
height: 16px;
}

</style>

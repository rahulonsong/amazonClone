<template>

<main>
  <div class="a-space-large"></div>
  <div class="container-fluid browsing-history">
    <div class="row">
      <div class="col-sm-8 col-8">
        <h1 class="a-size-large a-spaceing-none a-text-normal">All products</h1>
        <div class="a-space-large"></div>
        <!-- Button -->
        <a href="#" class="a-button-buy-again">Add a new product</a>
        <a href="#" class="a-button-history margin-right-10">Add a new category</a>
        <a href="#" class="a-button-history margin-right-10">Add a new owner</a>
        <!-- Listing page -->
      </div>
    </div>
  </div>
  <div class="a-space-large"></div>
  <br>
  <div class="container-fluid browsing-history">
    <div class="row">
      
      <div 
      v-for="(product, index) in products"
      :key="product._id+index"
      class="col-xl-2 col-lg-2 col-md-3 col-sm-6 xol-6 br bb"> 
        <div class="history-box"> 
          <!-- product image -->
          <a href="#" class="a-link-normal">
            <img :src="product.photo" class="img-fluid">
          </a>
          <!-- Product Title -->
          <div class="a-spacing-top-base asin-title">
            <span class="a-text-normal">
              <div class="p13n-sc-truncated">{{product.title}}</div>
            </span>
          </div>
          <!-- Product Rating -->
          <div class="a-row">
            <a href="#">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </a>
            <span class="a-letter-space"></span>
            <span class="a-color-tertiary a-size-small asin-reviews">(1732)</span>
          </div>
          <!-- Product Price -->
          <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">${{product.price}}</span>
              </span>
          </div>
          <!-- Product Buttons -->
          <div class="a-row">
              <a href="#" class="a-button-history m argin-right-10">Update</a>
              <a href="#" class="a-button-history m argin-right-10">Delete</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</main>

</template>

<script>
import axios, * as others from 'axios';
export default {
  async asyncData({$axios}) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/products")
      console.log(response);
      return {
        products: response.products
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>

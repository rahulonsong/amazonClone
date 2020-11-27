<template>

<main>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
                <div class="a-section">
                    <div class="a-spacing-top-medium"></div>
                    <h2 style="text-align: center;">Add a New Product</h2>
                    <form>
                        <!-- Category Dropdown -->
                        <div class="a-spacing-top-medium">
                            <label>Category</label>
                            <select class="a-select-option">
                                <option v-for="category in categories" 
                                :value="category._id"  
                                :key="category._id">{{category.type}}</option>
                            </select>
                        </div>


                        <!-- Owner dropdown -->
                        <div class="a-spacing-top-medium">
                            <label>Owner</label>
                            <select class="a-select-option">
                                <option v-for="owner in owners" 
                                :value="owner._id"  
                                :key="owner._id">{{owner.name}}</option>
                            </select>
                        </div>

                        <!-- Title -->
                        <div class="a-spacing-top-medium">
                            <label style="margin-botton: 0px;">Title</label>
                            <input type="text" class="a-input-text" style="width: 100%;">
                        </div>

                        <!-- Price -->
                        <div class="a-spacing-top-medium">
                            <label style="margin-botton: 0px;">Price</label>
                            <input type="text" class="a-input-text" style="width: 100%;">
                        </div>

                        <!-- Description -->
                        <div class="a-spacing-top-medium">
                            <label style="margin-botton: 0px;">Title</label>
                            <textarea placeholder="Provide details of product" style="width: 100%;"></textarea>
                        </div>

                        <!-- Photo -->
                        <div class="a-spacing-top-medium">
                            <label style="margin-botton: 0px;">Add Photo</label>
                            <div class="a-row a-spacing-top-medium">
                                <label class="choosefile-button">
                                    <i class="fal fa-plus"></i>
                                    <input type="file">
                                    <p style="margin-top: -70px;">Name of the</p>
                                </label>
                            </div>
                        </div>
                        <hr/>
                        <!-- Button -->
                        <div class="a-spcing-top-large">
                            <span class="a-button-register">
                                <span class="a-button-inner">
                                    <span class="a-button-text">Add product</span>
                                </span>
                            </span>
                        </div>

                    </form>
                </div>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</main>

</template>

<script>
// import axios, * as others from 'axios';
export default {
  async asyncData({$axios}) {
    try {
        let categories = $axios.$get('http://localhost:3000/api/categories')
        let owners = $axios.$get('http://localhost:3000/api/owners')
        const [catResponse, ownerResponse] = await Promise.all([
            categories,
            owners
        ]);
        console.log(catResponse, ownerResponse);
        return {
            categories: catResponse.categories,
            owners: ownerResponse.owners
        }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

.test {
    text-align: left;
}
</style>

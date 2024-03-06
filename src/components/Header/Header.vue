<template>
  <div class="link-container">
    <router-link to="/form-customers">Customers</router-link>
    <router-link to="/form-products">Products</router-link>
    <router-link to="/association">Associations</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
  @import './style.css';
</style>
<template>
  <div class="app-container">
    <!-- Include the Navbar component here -->
    <Navbar />

    <!-- Use the router-view to display the appropriate component based on the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style scoped>
/* Add your CSS styles here */
</style>

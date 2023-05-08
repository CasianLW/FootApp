<template>
  <div class="menu-container">
    <div class="menu">
      <ion-menu-button color="primary"></ion-menu-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuComponent",
});
</script>

<style scoped>
.menu-container {
  margin-top: 16px;
  display: flex;
}

/* Add additional styles for the menu items or other content you want to display */
</style>

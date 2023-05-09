<template>
  <div class="menu-container">
    <div class="menu">
      <ion-menu-button
        style="color: rgb(31, 26, 26)"
        color=""
      ></ion-menu-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { IonMenuButton } from "@ionic/vue";

export default defineComponent({
  name: "MenuComponent",
  components: {
    IonMenuButton,
  },
});
</script>

<style scoped>
.menu-container {
  margin-top: 16px;
  display: flex;
}

/* Add additional styles for the menu items or other content you want to display */
</style>

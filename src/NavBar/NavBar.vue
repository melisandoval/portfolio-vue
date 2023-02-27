<template>
  <div class="navbar-container">
    <nav>
      <BurgerMenuButton @click="$emit('onBurgerMenuClicked')" />
      <NavBarLinks />
    </nav>
  </div>
</template>

<script setup>
import BurgerMenuButton from './components/BurgerMenuButton.vue'
import NavBarLinks from './components/NavBarLinks.vue'
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: flex-end;
}
</style>

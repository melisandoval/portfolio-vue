<template>
  <div class="navbar-container">
    <nav>
      <BurgerMenuButton />
    </nav>
  </div>
</template>

<script setup>
import BurgerMenuButton from './components/BurgerMenuButton.vue'
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: flex-end;
}
</style>

<template>
  <div class="mobile-navbar-container">
    <nav>
      <ul>
        <li><a href="#about" @click="handleChange">About</a></li>
        <li>
          <a href="#work" @click="handleChange">Work</a>
        </li>
        <li><a href="#contact" @click="handleChange">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const emit = defineEmits(['onMobileNavbarLinkClicked'])

function handleChange() {
  emit('onMobileNavbarLinkClicked')
}
</script>

<style scoped>
.mobile-navbar-container {
  position: absolute;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: white;
}

ul {
  font-size: 2rem;
  text-align: center;
  line-height: 3em;
}
</style>

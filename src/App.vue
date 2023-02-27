<template>
  <div id="#app"></div>
  <body>
    <NavBarMobile v-if="showMobileMenu" @onMobileNavbarLinkClicked="handleCloseMobileNavbar" />
    <NavBar @onBurgerMenuClicked="handleShowMobileNavbar" />
  </body>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './Navbar/NavBar.vue'
import NavBarMobile from './NavBar/NavbarMobile.vue'

const showMobileMenu = ref(false)

function handleShowMobileNavbar() {
  showMobileMenu.value = true
}

function handleCloseMobileNavbar() {
  showMobileMenu.value = false
}
</script>

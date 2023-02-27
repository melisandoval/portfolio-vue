<template>
  <div id="#app"></div>
  <body>
    <NavBarMobile v-if="showMobileMenu" @onMobileNavbarLinkClicked="handleCloseMobileNavbar" />
    <NavBar @onBurgerMenuClicked="handleShowMobileNavbar" />
    <HeaderHero />
  </body>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar/NavBar.vue'
import NavBarMobile from './components/NavBar/NavbarMobile.vue'
import HeaderHero from './components/HeaderHero/HeaderHero.vue'

const showMobileMenu = ref(false)

function handleShowMobileNavbar() {
  showMobileMenu.value = true
}

function handleCloseMobileNavbar() {
  showMobileMenu.value = false
}
</script>

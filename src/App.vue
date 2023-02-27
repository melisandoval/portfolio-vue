<template>
  <div id="#app"></div>
  <body>
    <NavBarMobile v-if="showMobileMenu" @onMobileNavbarLinkClicked="handleCloseMobileNavbar" />
    <NavBar @onBurgerMenuClicked="handleShowMobileNavbar" />
    <HeaderHero />
    <AboutSection />
  </body>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar/NavBar.vue'
import NavBarMobile from './components/NavBar/NavbarMobile.vue'
import HeaderHero from './components/HeaderHero/HeaderHero.vue'
import AboutSection from './components/AboutSection/AboutSection.vue'

const showMobileMenu = ref(false)

function handleShowMobileNavbar() {
  console.log('handleShowMobileNavbar clicked')
  window.scrollTo(0, 0)
  showMobileMenu.value = true
}

function handleCloseMobileNavbar() {
  showMobileMenu.value = false
}
</script>

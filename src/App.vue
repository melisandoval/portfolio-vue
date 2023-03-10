<template>
  <div id="#app"></div>
  <body>
    <NavBarMobile v-if="showMobileMenu" @onMobileNavbarLinkClicked="handleCloseMobileNavbar" />
    <NavBar @onBurgerMenuClicked="toggleMobileNavbar" />
    <main>
      <HeaderHero />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
    <FooterSection />
  </body>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar/NavBar.vue'
import NavBarMobile from './components/NavBar/NavbarMobile.vue'
import HeaderHero from './components/HeaderHero/HeroHeader.vue'
import AboutSection from './components/AboutSection/AboutSection.vue'
import WorkSection from './components/WorkSection/WorkSection.vue'
import ContactSection from './components/ContactSection/ContactSection.vue'
import FooterSection from './components/FooterSection/FooterSection.vue'

const showMobileMenu = ref(false)

function toggleMobileNavbar() {
  window.scrollTo(0, 0)
  showMobileMenu.value = !showMobileMenu.value
}

function handleCloseMobileNavbar() {
  showMobileMenu.value = false
}
</script>

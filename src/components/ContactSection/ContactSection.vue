<template>
  <section id="contact">
    <div class="contact-list-container">
      <div class="contact-title-container">
        <h2>Get in touch</h2>
      </div>
      <ul>
        <li><IconLinkEmail /></li>
        <li><IconLinkLinkedIn /></li>
        <li><IconLinkGitHub /></li>
      </ul>
      <LinkPrimary href="#" text="Download CV" />
    </div>
  </section>
</template>

<script setup>
import IconLinkEmail from './components/IconLinkEmail.vue'
import IconLinkLinkedIn from './components/IconLinkLinkedIn.vue'
import IconLinkGitHub from './components/IconLinkGitHub.vue'
import LinkPrimary from '../LinkPrimary.vue'
</script>

<style scoped>
#contact {
  min-height: 74vh;
  text-align: center;
  display: grid;
  place-items: center;
  margin-bottom: 6em;
}

.contact-list-container {
  width: 100%;
  display: grid;
  place-items: center;
}

.contact-title-container {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

h2 {
  display: flex;
  align-items: center;
}

ul {
  display: flex;
  gap: 1em;
  padding: 1em 0 2em;
}
</style>

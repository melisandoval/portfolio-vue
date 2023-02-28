<template>
  <div class="logo-div-container">
    <div class="logo-container">
      <img :src="props.src" :alt="props.alt" />
    </div>
    <p>{{ props.text }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['src', 'alt', 'text'])
</script>

<style scoped>
.logo-div-container {
  padding: 1em;
}

.logo-container {
  height: 50px;
}

img {
  max-height: 100%;
  max-width: auto;
  object-fit: cover;
}

p {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}

@media screen and (min-width: 1440px) {
  .logo-container {
    height: 60px;
  }
}

@media screen and (min-width: 2560px) {
}
</style>

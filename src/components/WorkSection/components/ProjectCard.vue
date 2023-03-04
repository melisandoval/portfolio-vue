<template>
  <div class="project-card">
    <div class="project-img-container">
      <img :src="img" :alt="alt" />
    </div>
    <div>
      <h3>{{ props.title }}</h3>
      <p class="stack">
        <span v-for="(item, index) in props.stack" :key="index">{{ item }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['img', 'alt', 'title', 'stack'])
</script>

<style scoped>
.project-card {
  max-width: 100%;
}

.project-card img {
  max-width: 100%;
  object-fit: cover;
}

.project-img-container {
  aspect-ratio: 16/9;
}

h3 {
  font-size: calc(0.8rem + 0.390625vw);
}

p {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: calc(0.7rem + 0.390625vw);
}

p span {
  padding-right: 1em;
}
</style>

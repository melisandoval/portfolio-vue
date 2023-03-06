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
  padding: 1em;
  color: #2d2d2d;
  border-radius: 0.3em;
  background-color: #f3afa80f;
}

.project-card:hover {
  cursor: pointer;
  background-color: #f3afa8;
  color: #ffffff;
}

.project-card img {
  max-width: 100%;
  object-fit: cover;
  margin: 1em 0;
  border-radius: 0.3em;
}

.project-img-container {
  aspect-ratio: 16/9;
}

h3 {
  font-size: calc(1rem + 0.390625vw);
}

p {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: calc(0.7rem + 0.390625vw);
  line-height: 140%;
}

p span {
  padding-right: 1em;
}

.project-links-container {
  display: flex;
  gap: 1em;
  padding: 0.2em 0;
}
</style>

<template>
  <li class="project-card" @click="handleOnCardClick">
    <div class="project-img-container">
      <img :src="img" :alt="alt" />
    </div>
    <div class="project-card-text-container">
      <h3>{{ props.title }}</h3>
      <p class="stack">
        <span v-for="(item, index) in props.stack" :key="index">{{ item }}</span>
      </p>
      <!-- <button class="see-more-button" @click="handleOnCardClick">See more</button> -->
    </div>
  </li>
</template>

<script setup>
const props = defineProps(['img', 'alt', 'title', 'stack', 'projectId'])
const emit = defineEmits(['onProjectCardClicked'])

function handleOnCardClick() {
  emit('onProjectCardClicked', props.projectId)
}
</script>

<style scoped>
.project-card {
  max-width: 100%;
  padding: 1em;
  color: #2d2d2d;
  border-radius: 0.3em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.project-card:hover {
  background-color: #f3afa8;
  color: #ffffff;
  cursor: pointer;
}

.project-card img {
  max-width: 100%;
  object-fit: cover;
  border-radius: 0.3em;
}

.project-img-container {
  aspect-ratio: 16/9;
}

.project-card-text-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: calc(1rem + 0.390625vw);
  margin-block-end: 0.5em;
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

.see-more-button {
  align-self: end;
  margin-top: 0.5em;
  padding: 0.6em;
  border-radius: 0.4em;
  background-color: #ffffff;
  color: #f3afa8;
  font-size: calc(0.6rem + 0.390625vw);
  font-weight: bold;
}

.see-more-button:hover {
  cursor: pointer;
  background-color: #f3afa8;
  color: #ffffff;
}
</style>

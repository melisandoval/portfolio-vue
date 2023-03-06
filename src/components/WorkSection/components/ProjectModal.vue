<template>
  <div class="modal-container">
    <section class="project-modal" :style="{ marginTop: scrollPosition }">
      <div class="modal-content-container">
        <div class="close-button-container">
          <button @click="$emit('onCloseButtonClicked')" class="close-button">
            <SVGIconClose />
          </button>
        </div>
        <div class="img-and-stack">
          <img :src="project.img" :alt="project.alt" />
          <h4>Stack:</h4>
          <p class="stack">
            <span v-for="(item, index) in project?.stack" :key="index">{{ item }}</span>
          </p>
        </div>
        <article>
          <h3>{{ project.title }}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam tempora minus
            praesentium cumque laudantium voluptatum minima. Tenetur, enim libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam tempora minus
            praesentium cumque laudantium voluptatum minima. Tenetur, enim libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam tempora minus
            praesentium cumque laudantium voluptatum minima. Tenetur, enim libero.
          </p>
          <div class="links-container">
            <LinkPrimary :href="project.repository" text="Source code" target="_blank" />
            <LinkSecondary :href="project.live" text="Live version" target="_blank" />
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import LinkPrimary from '../../LinkPrimary.vue'
import LinkSecondary from '../../LinkSecondary.vue'
import SVGIconClose from '../SVG/SVGIconClose.vue'
import { computed } from 'vue'
import { PROJECTS } from '../../../constants.js'

const props = defineProps(['projectId', 'scrollPosition'])

const project = computed(() => {
  return PROJECTS.filter((project) => project.id === props.projectId)[0]
})
</script>

<style scoped>
.modal-container {
  position: absolute;
  width: 100%;
  min-height: max-content;
  display: grid;
  justify-items: center;
  z-index: 5;
  left: 0px;
}

.project-modal {
  position: relative;
  max-width: 80%;
  height: fit-content;
  background-color: #ffffff;
  padding: 1em;
  border: 0.3em solid #f3afa8;
  border-radius: 0.5em;
}

.modal-content-container {
  padding: 1em;
  max-width: 100%;
}

img {
  max-width: 100%;
}

.stack {
  padding-bottom: 2em;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  justify-content: center;
}

h3 {
  font-size: calc(1.2rem + 0.390625vw);
}

.links-container {
  width: 100%;
  padding: 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.close-button-container {
  display: flex;
  justify-content: flex-end;
}

.close-button {
  cursor: pointer;
  padding: 0 0 2em;
}
</style>

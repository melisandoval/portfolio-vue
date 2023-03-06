<template>
  <section id="work" class="work-section-container">
    <h2>Work</h2>
    <p>Check out some of my favourite projects.</p>
    <div class="projects-container">
      <ProjectCard
        v-for="project in PROJECTS"
        :key="project.id"
        :img="project.img"
        :alt="project.alt"
        :title="project.title"
        :stack="project.stack"
      />
    </div>
    <LinkPrimary href="https://github.com/melisandoval" text="See more on GitHub" target="_blank" />
  </section>
</template>

<script setup>
import LinkPrimary from '../LinkPrimary.vue'
import ProjectCard from './components/ProjectCard.vue'
import { PROJECTS } from '../../constants.js'
</script>

<style scoped>
.work-section-container {
  padding: 2em 1em;
  text-align: center;
  max-width: 100%;
}

.projects-container {
  margin-bottom: 2em;
  padding: 2em 1em;
  max-width: 100%;
  text-align: left;
  display: grid;
  gap: 4em;
}

@media screen and (min-width: 768px) {
  .work-section-container {
    padding: 6em 4em;
  }

  .projects-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1440px) {
  .work-section-container {
    padding: 6em 15em;
  }

  .projects-container {
    padding: 3em;
  }

  .projects-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

<template>
  <section id="work" class="work-section-container">
    <ProjectModal
      v-if="showProjectModal"
      :project-id="selectedProjectId"
      :scrollPosition="scrollPosition"
      @onCloseButtonClicked="handleCloseProjectModal"
    />
    <h2>Work</h2>
    <p>Check out some of my favourite projects.</p>
    <div class="projects-container" id="projects-container">
      <ul>
        <ProjectCard
          v-for="project in PROJECTS"
          :key="project.id"
          :img="project.img"
          :alt="project.alt"
          :title="project.title"
          :stack="project.stack"
          :projectId="project.id"
          @onProjectCardClicked="handleShowProjectModal"
          :id="project.id"
        />
      </ul>
    </div>
    <LinkPrimary href="https://github.com/melisandoval" text="See more on GitHub" target="_blank" />
  </section>
</template>

<script setup>
import LinkPrimary from '../LinkPrimary.vue'
import ProjectCard from './components/ProjectCard.vue'
import { PROJECTS } from '../../constants.js'
import ProjectModal from './components/ProjectModal.vue'
import { ref } from 'vue'

const showProjectModal = ref(false)
const selectedProjectId = ref(0)
const scrollPosition = ref('')

function handleShowProjectModal(projectId) {
  // to position modal in a fixed view:
  const sectionH2 = document.querySelector('#work h2')
  sectionH2.scrollIntoView()

  showProjectModal.value = true
  selectedProjectId.value = projectId
}

function handleCloseProjectModal(projectId) {
  // to return to the card seen on screen before open the modal:
  const cardClosed = document.getElementById(projectId)
  cardClosed.scrollIntoView({ behavior: 'auto', block: 'center' })

  showProjectModal.value = false
}
</script>

<style scoped>
.work-section-container {
  margin-top: 6em;
  padding: 2em 1em;
  text-align: center;
  max-width: 100%;
  position: relative;
}

.projects-container {
  position: relative;
  margin-bottom: 4em;
  padding: 2em 1em;
  max-width: 100%;
  text-align: left;
}

ul {
  max-width: 100%;
  display: grid;
  gap: 2em;
}

@media screen and (min-width: 768px) {
  .work-section-container {
    padding: 6em 4em;
  }

  ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 1024px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .work-section-container {
    padding: 6em;
  }
}

@media screen and (min-width: 1440px) {
  .work-section-container {
    padding: 6em 15em;
  }

  .projects-container {
    padding: 3em;
  }

  ul {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>

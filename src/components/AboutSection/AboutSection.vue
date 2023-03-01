<template>
  <section id="about" class="about-section-container">
    <div class="about-content-container">
      <article>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam pellentesque
          ipsum. Donec et tempor metus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Maecenas libero mauris, vestibulum commodo consequat
          vitae, malesuada ac arcu.
        </p>
        <p>
          In commodo condimentum fermentum. Aliquam et turpis ac nunc dignissim laoreet at in
          tellus. Ut at arcu nec felis hendrerit malesuada. Proin et turpis et lorem scelerisque
          convallis et et libero. Sed quis urna vel ligula rhoncus luctus in nec lacus. Nulla
          facilisi. Praesent dolor nunc, pellentesque et nunc vitae, bibendum gravida lectus.
        </p>
        <p>
          Curabitur interdum pellentesque arcu, at dictum augue mattis vel. Donec faucibus elit sit
          amet mi consequat, quis vestibulum mauris pharetra. Duis et ipsum diam. In condimentum
          sodales eros suscipit ultricies.
        </p>
      </article>
      <section>
        <h2>Tech stack</h2>
        <div class="logos-section">
          <div class="skills-logos-container">
            <SkillsLogo
              v-for="logo in SKILLS_LOGOS"
              :key="logo.id"
              :src="logo.src"
              :alt="logo.alt"
              :text="logo.text"
            />
          </div>
        </div>
        <h2>Tools</h2>
        <div class="logos-section">
          <div class="skills-logos-container">
            <SkillsLogo
              v-for="logo in TOOLS_LOGOS"
              :key="logo.id"
              :src="logo.src"
              :alt="logo.alt"
              :text="logo.text"
            />
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import SkillsLogo from './SkillsLogo.vue'
import { SKILLS_LOGOS } from '../../constants.js'
import { TOOLS_LOGOS } from '../../constants.js'
</script>

<style scoped>
.about-section-container {
  background-color: #ff6352;
  margin: 1em;
  padding: 2em 1em;
  text-align: center;
  color: #ffffff;
}

.about-content-container {
  padding: 1em;
}

article {
  padding-bottom: 1em;
}

h2 {
  padding: 1em 0;
}

p {
  padding: 1em 0;
}

.skills-logos-container {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 2em;
  padding: 2em 0;
}

@media screen and (min-width: 768px) {
  .about-section-container {
    padding: 2em;
  }
}

@media screen and (min-width: 1024px) {
  .about-section-container {
    margin: 1em 4em;
    padding: 4em 8em;
  }
}

@media screen and (min-width: 1440px) {
  .logos-section {
    display: grid;
    place-items: center;
  }
  .skills-logos-container {
    max-width: 1240px;
  }
}

@media screen and (min-width: 2060px) {
  .about-content-container {
    display: grid;
    grid-template-columns: 55% 45%;
    gap: 4em;
  }

  .skills-logos-container {
    padding: 0 6em;
  }
}
</style>

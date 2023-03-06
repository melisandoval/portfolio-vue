<template>
  <section id="about" class="about-section-container">
    <div class="about-content-container">
      <article>
        <h2>About</h2>
        <p>
          Front-end developer with solid technical skills, strong eye for UI/UX and a proactive,
          creative and highly organized personality. With more than one year of experience
          developing and designing applications and webpages, I am eager to keep creating digital
          products and learn new technologies and best practices. Whether working solo or as part of
          a team, I bring my full dedication and enthusiasm to every project and always strive to
          develop the most quality and user-friendly solution.
        </p>
        <p>
          As part of education, I successfully completed a 300-hour Front-end Bootcamp at Ironhack,
          a 300-hour Responsive Web Design course at freeCodeCamp and a 300-hour JavaScript
          Algorithms and Data Structures course at the same self-taught educative platform. These
          courses have allowed me to have a solid base of software development skills, that then I
          expanded through developing side projects that you can find here, and in my GitHub
          account.
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

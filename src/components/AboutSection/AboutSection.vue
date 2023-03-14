<template>
  <section id="about" class="about-section-container">
    <div class="about-content-container">
      <article>
        <h2>About</h2>
        <p>
          Welcome to my portfolio! 🙌 😊 I am a Front-end Web Developer with a strong eye for the
          User Interface and User Experience (UI/UX). I have high empathy for the people behind the
          screens and because of that I am very good at finding bugs and proposing new ideas to
          improve the products I work on.
        </p>
        <p>
          As for the technical aspects, I have a solid foundation of HTML5, CSS3 and programming
          with JavaScript ES6+, always caring about accessibility, responsive layouts and writing
          the cleanest code to help my team. I am right now in the process of learning best
          practices in order to become a better developer. Also, I am currently enjoying a lot
          creating Single Page Applications (SPA) with React and Vue.js.
        </p>
        <p>
          Check out some of the personal <a href="#work" class="inline-link">projects</a> I've been
          working on, and feel free to
          <a
            class="inline-link"
            href="https://1drv.ms/b/s!AklAd3G_Dh0jhxM--mYodVhy2n-J?e=t2yX5w"
            target="_blank"
            >read my resume</a
          >
          to find more info about my work and professional background, or reach out to me on
          <a
            href="https://www.linkedin.com/in/melisandoval/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-link"
            >LinkedIn</a
          >.
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
  display: grid;
  place-items: center;
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

.inline-link {
  color: #ffffff;
  text-decoration: underline;
  cursor: pointer;
}

.inline-link:hover {
  color: #2d2d2d;
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

@media screen and (min-width: 1440px) and (max-width: 2059px) {
  .about-content-container {
    max-width: 900px;
  }

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

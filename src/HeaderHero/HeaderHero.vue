<template>
  <div class="header-container">
    <section>
      <h1>
        <span class="h1-minor">Hi! <span class="h1-highlight">I'm Melisa</span>,</span> <br />
        <span class="h1-major"
          >Front-end <br />
          Developer</span
        >
      </h1>
      <p>I create beautiful, user-friendly digital products.</p>
      <div class="header-links-container">
        <a href="#contact" class="header-contact-link">Contact me</a>
        <a href="#" class="header-download-cv-link">Download CV</a>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.header-container {
  min-height: 90vh;
  display: grid;
  place-items: center;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.h1-minor {
  font-weight: 400;
  line-height: 2em;
  font-size: 2rem;
}

.h1-major {
  font-size: 3rem;
  line-height: 1.3em;
  font-size: 3rem;
}

.h1-highlight {
  color: #f3afa8;
}

p {
  line-height: 150%;
  font-size: 1rem;
}

.header-links-container {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
}

a {
  padding: 1em;
  border-radius: 0.3em;
  font-size: 0.7rem;
  width: 80px;
}

a:hover {
  text-decoration: none;
}

.header-contact-link {
  background-color: black;
  color: #ffffff;
  border: 2px solid black;
}

.header-contact-link:hover {
  background-color: #ffffff;
  color: black;
}

.header-download-cv-link {
  background-color: #f3afa8;
  color: #ffffff;
  border: 2px solid #f3afa8;
}

.header-download-cv-link:hover {
  background-color: #ffffff;
  color: #f3afa8;
}

@media screen and (min-width: 768px) {
  .header-links-container {
    flex-direction: row;
  }

  a {
    font-size: 1rem;
    width: 110px;
  }
}
</style>

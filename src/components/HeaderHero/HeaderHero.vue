<template>
  <div class="header-container">
    <div class="header-content-container">
      <article>
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
      </article>
      <div class="header-img-container">
        <img src="/assets/portfolio-avatar-v2.jpg" alt="Avatar" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header-container {
  padding-top: 2em;
  max-width: 100%;
}
.header-content-container {
  padding: 4em 1em;
  min-height: 80vh;
  max-width: 100%;
  display: grid;
  place-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2em;
}

h1 {
  margin-block-end: 0em;
}

.h1-minor {
  font-weight: 400;
  line-height: 2em;
  font-size: calc(2rem + 0.390625vw);
}

.h1-major {
  font-size: calc(3rem + 0.390625vw);
  line-height: 1.3em;
}

.h1-highlight {
  color: #f3afa8;
  font-weight: bold;
}

p {
  line-height: 150%;
  font-size: calc(1rem + 0.390625vw);
}

.header-links-container {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
  padding-top: 1em;
}

a {
  padding: 1em 0;
  border-radius: 0.3em;
  font-size: calc(0.7rem + 0.390625vw);
  width: 100px;
}

a:hover {
  text-decoration: none;
}

.header-contact-link {
  background-color: #2d2d2d;
  color: #ffffff;
  border: 2px solid #2d2d2d;
}

.header-contact-link:hover {
  background-color: #ff6352;
  color: white;
  font-weight: bold;
  border: 2px solid #ff6352;
}

.header-download-cv-link {
  background-color: #ffffff;
  color: #f3afa8;
  border: 2px solid #f3afa8;
}

.header-download-cv-link:hover {
  font-weight: bold;
  background-color: #f3afa8;
  color: #ffffff;
}

.header-img-container {
  width: 100%;
  display: grid;
  place-items: center;
  margin: 2em;
}

img {
  max-width: 80%;
  border-radius: 50%;
}

@media screen and (min-width: 768px) {
  .header-content-container {
    padding: 1em;
  }
  .header-links-container {
    flex-direction: row;
  }

  a {
    font-size: calc(0.7rem + 0.390625vw);
    width: 8em;
    text-align: center;
  }

  .header-content-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding-left: 3em;
  }

  img {
    max-width: 85%;
    padding-right: 3em;
  }
}

@media screen and (min-width: 1024px) {
  .header-content-container {
    grid-template-columns: 55% 45%;
    gap: 0;
  }

  .header-img-container {
    max-width: 80%;
  }
}

@media screen and (min-width: 1440px) {
  .header-container {
    display: grid;
    place-items: center;
  }
  .header-content-container {
    max-width: 80%;
    grid-template-columns: 1fr 1fr;
  }
  .header-img-container {
    max-width: 70%;
  }
}

@media screen and (min-width: 2560px) {
  p,
  .h1-minor,
  .h1-highlight {
    font-size: calc(2rem + 0.390625vw);
  }

  .header-links-container {
    gap: 3em;
  }

  a {
    font-size: calc(1.6rem + 0.390625vw);
  }
  .h1-major {
    font-size: calc(7rem + 0.390625vw);
  }
}
</style>

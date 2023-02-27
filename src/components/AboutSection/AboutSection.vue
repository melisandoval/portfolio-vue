<template>
  <section id="about" class="about-section-container">
    <article>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam pellentesque ipsum.
        Donec et tempor metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Maecenas libero mauris, vestibulum commodo consequat vitae,
        malesuada ac arcu.
      </p>
      <p>
        In commodo condimentum fermentum. Aliquam et turpis ac nunc dignissim laoreet at in tellus.
        Ut at arcu nec felis hendrerit malesuada. Proin et turpis et lorem scelerisque convallis et
        et libero. Sed quis urna vel ligula rhoncus luctus in nec lacus. Nulla facilisi. Praesent
        dolor nunc, pellentesque et nunc vitae, bibendum gravida lectus.
      </p>
      <p>
        Curabitur interdum pellentesque arcu, at dictum augue mattis vel. Donec faucibus elit sit
        amet mi consequat, quis vestibulum mauris pharetra. Duis et ipsum diam. In condimentum
        sodales eros suscipit ultricies.
      </p>
    </article>
    <section>
      <h2>Skills</h2>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
.about-section-container {
  background-color: #ff6352;
  margin: 1em;
  padding: 4em 1em;
  text-align: center;
  color: #ffffff;
}

h2,
p {
  padding: 1em;
}

@media screen and (min-width: 768px) {
  .about-section-container {
    padding: 2em;
  }
}

@media screen and (min-width: 1024px) {
  .about-section-container {
    margin: 1em 2em;
    padding: 4em 8em;
  }
}
</style>

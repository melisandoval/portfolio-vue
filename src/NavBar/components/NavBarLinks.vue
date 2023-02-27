<template>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</template>

<script setup></script>

<style scoped>
ul {
  display: none;
}

li {
  font-size: calc(1rem + 0.390625vw);
}

@media screen and (min-width: 768px) {
  ul {
    display: flex;
    flex-direction: row;
    gap: 1em;
    padding: 0.5em 1em;
  }
}

@media screen and (min-width: 1440px) {
  ul {
    gap: 2em;
    padding: 0.5em 2em;
  }

  li {
    font-size: calc(0.9rem + 0.390625vw);
  }
}

@media screen and (min-width: 2560px) {
  ul {
    gap: 3em;
    padding: 2em 3em;
  }

  li {
    font-size: calc(1.4rem + 0.390625vw);
  }
}
</style>

<template>
  <ul>
    <li><a href="#">About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</template>

<script setup></script>

<style scoped>
ul {
  display: none;
}

@media screen and (min-width: 768px) {
  ul {
    display: flex;
    flex-direction: row;
    gap: 1em;
    padding: 0 1em;
  }
}
</style>

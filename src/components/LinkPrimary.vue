<template>
  <a :href="href" class="black-link" :target="target">{{ text }}</a>
</template>

<script setup>
const props = defineProps(['href', 'text', 'target'])
</script>

<style scoped>
a {
  padding: 1em;
  border-radius: 0.3em;
  font-size: calc(0.7rem + 0.390625vw);
  font-weight: bold;
}

a:hover {
  text-decoration: none;
}

.black-link {
  background-color: #2d2d2d;
  color: white;
  border: 2px solid #2d2d2d;
}

.black-link:hover {
  background-color: #f3afa8;
  color: white;
  font-weight: bold;
  border: 2px solid #f3afa8;
}

@media screen and (min-width: 768px) {
  a {
    font-size: calc(0.7rem + 0.390625vw);
    text-align: center;
  }
}

@media screen and (min-width: 2560px) {
  a {
    font-size: calc(1.6rem + 0.390625vw);
  }
}
</style>

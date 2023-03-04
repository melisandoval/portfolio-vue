<template>
  <a :href="props.href" class="pink-link" :target="props.target">{{ text }}</a>
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

.pink-link {
  background-color: #ffffff;
  color: #f3afa8;
  border: 2px solid #f3afa8;
}

.pink-link:hover {
  background-color: #f3afa8;
  color: #ffffff;
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

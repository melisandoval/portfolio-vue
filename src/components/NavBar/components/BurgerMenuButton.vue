<template>
  <button @click="$emit('onBurgerMenuClicked')" class="burger-menu">
    <svg
      width="25px"
      height="25px"
      stroke-width="2.06"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M3 5h18M3 12h18M3 19h18"
        stroke="#000000"
        stroke-width="2.06"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
</template>

<script setup></script>

<style scoped>
.burger-menu {
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .burger-menu {
    display: none;
  }
}
</style>

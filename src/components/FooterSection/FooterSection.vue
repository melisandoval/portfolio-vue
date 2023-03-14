<template>
  <div class="footer-container">
    <footer>
      <p>
        © 2023
        <a href="https://github.com/melisandoval" target="_blank"> Melisa Sandoval</a>
      </p>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
.footer-container {
  background-color: #ff6352;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 50px;
}

footer {
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
}

p,
p a {
  font-size: calc(0.5rem + 0.390625vw);
  color: white;
}
</style>

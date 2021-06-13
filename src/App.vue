<template>
  <div id="app">
    <div class="container">
      <app-converter/>
    </div>
  </div>
</template>

<script>
import AppConverter from '../src/components/AppConverter.vue'

export default {
  name: 'App',
  components: {
    AppConverter
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: 3rem 1rem auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>

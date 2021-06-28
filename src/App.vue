<template>
  <div id="app">
    <div class="container">
      <app-converter/>
      <h3 class="comment">  Made with ❤️ by Salem</h3>
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
  font-family: "Audiowide", sans-serif;
  font-size: 30px;
  text-shadow: 3px 3px 3px #ababab;
  line-height: 1.6;
  background-color: #def3ff;
  background-color: #D9AFD9;
background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);

  background-attachment: fixed;
  background-size: cover;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
}
.comment {
  color: #172886;
  font-size: 1.4rem;
}
</style>

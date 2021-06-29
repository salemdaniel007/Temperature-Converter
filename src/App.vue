<template>
  <div id="app">
    <div class="container">
      <app-converter/>
      <div class="comment_container">
      <p class="comment">  Made with ❤️ by Salem</p>
      </div>
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
  font-family: 'Indie Flower',cursive;
  font-size: 20px;
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
  width: 50%;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
}

.comment_container {
  display: flex;
}

.comment {
  color: #172886;
  font-size: 1.4rem;
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .container {
      height: 50vh;
      width: 50%;
    }
}
</style>

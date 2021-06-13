<template>
    <div class="container">
        <div class="card">
            <label for="Temperature">Temperature</label>
            <input type="text">
        </div>
    </div>
</template>

<script>
export default {
    name:'AppConverter'

}
</script>

<style scoped>

.container {
    display: grid;
    padding: 2px 16px;
    height: 200px;
    justify-content: center;
}


.card {
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
@media (max-width: 500px) {
  .converter {
    grid-template-columns: 5fr;
  }
}

</style>
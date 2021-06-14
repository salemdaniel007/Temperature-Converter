<template>
    <div class="card">
        <div class="temperature">
            <div class="degrees">
                <label for="degrees">Degrees</label>
                <input type="text">
            </div>
            <div class='type'>
                <label for="type">Type</label>
                <select name="Temperatures" id="Temperature">
                    <option value="Farenheit">Farenheit</option>
                    <option value="Celsius">Celsius</option>
                </select>
            </div>
            <button class="convert">convert</button>
        </div>
        <div class="result">
            <p>Result</p>
            <h2></h2>
        </div>
    </div>
</template>

<script>
export default {
    name:'AppConverter'

}
</script>

<style scoped>

.card {
    padding: 2px 16px;
    margin: auto;
    align-content: center;
    width: 400px;    
    height: 200px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}
.degrees {
    margin: auto;
    margin-bottom: 2rem;
    margin-left: 1rem;
}

.result {
    margin: 12px;
    margin-bottom: 20rem;
}

.temperature {
    display: grid;
    height: 5rem;
    margin-top: 25px;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto;
    
}


p {
    color: rgb(133, 124, 118);
    font-size: 0.8rem;
    margin-left: 5px;
}

label {
    font-size: 0.7rem;
    color: rgb(133, 124, 118);
}

.temperature select {
    padding: 11px 5px;
    border: 1px solid #92a3dd;
}

.type {
    margin-left: 13px;
}

input[type="text"] {
  padding: 12px;
  border: 1px solid #92a3dd;
  outline: 0;
  grid-column: 1 / 2;
}

.convert {
    height: 2.6rem;
    margin: 12px;
    margin-top: 24px;
    border-radius: 3px;
    background: #7491f0;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
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
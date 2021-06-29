<template>
    <div>
        <h1>A Temperture Converter That Doesn't Stink!</h1>
        <div class="card">
            <div >
                <form  class="temperature">
                    <label for="degrees">Degrees</label>
                    <input type="text" v-model="temperature">
                        <label for="type">From</label>
                        <select name="Temperatures" id="Temperature" @change="changeTemp">
                            <option v-for='type in selected' :key='type'>{{ type }}</option>
                        </select>
                        <button  @click.prevent="cToF" class="convert" value="submit" type="submit">Convert</button>
                </form>
                <div class="result">
                    <p>Result</p>
                    <h2 class="inset"> {{ result }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
// import { mapFields } from 'vuex-map-fields';
export default {
    name:'AppConverter',
    methods: {
        ...mapActions(['cToF']),
        changeTemp: function(e){
            console.log("Show "+e.target.value+ " fields")
            if (e.target.value == 'Farenheit'){
              this.$store.commit('fTrue');
              this.$store.commit('cFalse');
            }else if (e.target.value == 'Celsius') {
              this.$store.commit('cTrue');
              this.$store.commit('fFalse');
            }
        },
        storeTemp: function(e) {
            this.$store.getters.temp = e.target.value
        }
    },
    computed: {
        selected () {
            return this.$store.getters.selected
        },
        result () {
            return this.$store.getters.result
        },
        temp () {
            return this.$store.getters.temp
        },
        temperature: {
            get () {
            return this.$store.getters.temperature
            },
            set (value) {
            this.$store.commit('updateTemp', value);
            }
        }
    }
    

}
</script>

<style scoped>

.card {
    padding: 2px 16px;
    margin: auto;
    width: 500px;    
    height: 400px;
    transition: 0.3s;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    border-radius: 5px;
    z-index: 1;
    background: inherit;
    overflow: hidden;
}

.card:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  filter: blur(10px);
  margin: -20px;
}
.result {
    display: flex;
    margin: auto;
    margin-top: 6rem;
}

.result p {
     margin-bottom: 1px;
}

.result h2 {
    margin: auto;
    margin-bottom: 1rem;
    margin-left: .4rem;
}

.temperature {
    display: flex;
    justify-content: space-around;
    height: 3rem;
    margin-top: 2rem;
    flex-flow: row nowrap;
}


p {
    color: rgb(133, 124, 118);
    font-size: 1rem;
    color: rgb(34, 52, 112);
    margin-left: 5px;
}

label {
    font-size: 1rem;
    color: rgb(34, 52, 112);
}

.temperature select {
    padding: 11px 5px;
    background-color: #959fd4;
    color: rgb(239, 236, 243);
    border: 1px solid #959fd4;
    font-weight: 750;
    border-radius: 5px;
}


h1 {
    text-align: center;
    margin: auto;
    margin-top: 2rem;
    padding: 2rem;
    color: rgb(53, 85, 172);
}

h3 {
    margin-top: 17rem;
    text-align: center;
    color: rgb(54, 50, 54);
    
}

input[type="text"] {
  padding: 12px;
  border: 1px solid #eef0f5;
  outline: 0;
  border-radius: 5px;
  border-style: inset;
  background: rgb(247, 245, 242);
  color: rgb(80, 78, 80);
}

.convert {
    background: #8d97ca;
    color: #fff;
    padding: 11px 5px;
    background-color: #959fd4;
    color: rgb(239, 236, 243);
    border: 1px solid #959fd4;
    font-weight: 750;
    border-radius: 5px;
    cursor: pointer;
}

h2.inset {
    border-radius: 5px;
    border-style: inset;
    width: 300px;
    height: 3rem;
    padding: 4px;
    background: rgb(247, 245, 242);
    color: #303a6d;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

</style>
<template>
    <div>
        <h1>A Temperture Converter That Doesn't Stink!</h1>
        <div class="card">
        <div >
            <form class="temperature" @submit.prevent="cToF">
                <div class="degrees">
                <label for="degrees">Degrees</label>
                <input @change="validateForm" type="text" v-model="temperature">
            </div>
            <div class='type'>
                <label for="type">Type</label>
                <select name="Temperatures" id="Temperature" @change="changeTemp">
                    <option v-for='type in selected' :key='type'>{{ type }}</option>
                </select>
            </div>
            <button class="convert">convert</button>
            </form>
        </div>
        <div class="result">
            <p>Result</p>
            <h2 class="inset">{{ result }}</h2>
        </div>
        </div>
        <h3 class="comment">  Made with ❤️ by Salem</h3>
        
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
        validateForm: function(e) {
            if(isNaN(e.target.value)) {
               this.$toasted.show('ogaa... warn yourself!')
            }
        }
    },
    computed: {
        selected () {
            return this.$store.getters.selected
        },
        result () {
            return this.$store.getters.result
        },
        temperature: {
            get () {
            return this.$store.state.temperature
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

h1 {
    text-align: center;
    margin: auto;
    margin-top: 2rem;
    padding: 2rem;
    color: rgb(133, 214, 177);
}

h3 {
    margin-top: 17rem;
    text-align: center;
    color: rgb(54, 50, 54);
    
}

input[type="text"] {
  padding: 12px;
  border: 1px solid #92a3dd;
  outline: 0;
  grid-column: 1 / 2;
  border-radius: 5px;
    border-style: inset;
    height: 2rem;
    padding: 4px;
    background: rgb(247, 245, 242);
    color: rgb(80, 78, 80);
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

h2.inset {
    border-radius: 5px;
    border-style: inset;
    width: 43%;
    height: 2rem;
    padding: 4px;
    background: rgb(247, 245, 242);
    color: rgb(80, 78, 80);
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
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"



const state = {
    temperature: '',
    result: '',
    selected: ['Farenheit', 'Celsius'],
    options: {
        Farenheit: true,
        Celsius: false
    },
    disable: false
};

const getters = {
    temperature: state => state.temperature,
    result: state => state.result,
    selected: state => state.selected,
    Farenheit: state => state.options.Farenheit,
    Celsius: state => state.options.Celsius,
    disable: state => state.disable
};

const actions = {
    cToF({ commit }, celsius) {
        const option = state.options.Farenheit
        const anotherOption = state.options.Celsius
        if(state.temperature === '') {
            state.disable = true;
        } else if(isNaN(state.temperature)) {
            state.disable = false; 
            return Toastify({
                text: "Oga input number!",
                backgroundColor: "linear-gradient(to right, #bd792b, #d12417)",
                duration: 3000
                }).showToast(); 
         } else if(option) {
             state.disable = false;
            celsius = state.temperature;
            state.result  = Math.round(celsius * 9 / 5 + 32) +'\xB0C.';
            commit('celsiusToFahrenheit', state.result);
            console.log(state.temperature);
        } else if (anotherOption) {
            state.disable = false;
            celsius = state.temperature;
            state.result  = Math.round((celsius - 32) * 5 / 9)+'\xB0F';
            commit('fahrenheitToCelsius', state.result); 
            console.log(state.temperature);
        }
    } 
};

const mutations = {
    updateTemp (state, temperature) {
        state.temperature = temperature
    },
    fTrue (state) {
        state.options.Farenheit = true
    },
    fFalse (state) {
        state.options.Farenheit = false
    },
    cTrue (state) {
        state.options.Celsius = true
    },
    cFalse (state) {
        state.options.Celsius = true
    },
    updateSelected (state, message) {
        state.selected = message
    },
    celsiusToFahrenheit: (state, convertedTemp) => (state.result = convertedTemp),
    fahrenheitToCelsius: (state, convertedTemp) => (state.result = convertedTemp)
};

export default {
    state,
    getters,
    actions,
    mutations
};
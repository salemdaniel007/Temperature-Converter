// import { getField, updateField } from 'vuex-map-fields';

const state = {
    temperature: 0,
    result: '',
    selected: ['Farenheit', 'Celsius'],
    options: {
        Farenheit: true,
        Celsius: false
    }
};

const getters = {
    temp: state => state.temperature,
    result: state => state.result,
    selected: state => state.selected,
    Farenheit: state => state.options.Farenheit,
    Celsius: state => state.options.Celsius
};

const actions = {
    cToF({ commit }, celsius) {
        const option = state.options.Farenheit
        const anotherOption = state.options.Celsius
        if(option) {
            celsius = state.temperature;
            console.log(celsius)
            state.result  = Math.round(celsius * 9 / 5 + 32) +'\xB0C.';
            console.log(state.result);
            var firstMessage = celsius +'\xB0C is ' + state.result + ' \xB0F.';
            console.log(firstMessage);
            commit('celsiusToFahrenheit', state.result);
        } else if (anotherOption) {
            celsius = state.temperature;
            console.log(celsius)
            state.result  = Math.round((celsius - 32) * 5 / 9)+'\xB0F';
            var message = celsius +'\xB0F is ' + state.result + '\xB0C.';
            console.log(message);
            commit('fahrenheitToCelsius', state.result);
        }
        
    }
    
};

const mutations = {
    updateTemp (state, message) {
        state.temperature = message
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
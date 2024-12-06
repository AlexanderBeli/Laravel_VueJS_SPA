import { createStore } from 'vuex'
import Person from './modules/person.js'


// Create a new store instance.
const store = createStore({
    modules: {
        Person
    }
})


export default store;


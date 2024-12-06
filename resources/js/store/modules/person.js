import router from "../../router.js";

const state = {
    person: null,
    people: null
} //просто так не обратимся, нужны setters and getters

const getters = {
    person: state => state.person,
    people: state => state.people
}

const actions = {
    getPersonById({commit, state}, id){
        axios.get(`/api/people/${id}`)
            .then(response => {
                commit('setPerson', response.data.data)
            })
    },
    getPeople({commit, state}){
        axios.get("/api/people").then(response => {
            commit('setPeople', response.data.data);
        })
    },
    deletePerson({dispatch}, id){
        axios.delete(`/api/people/${id}`).then(response => {
            dispatch('getPeople');
        })
    },
    update({}, data){
        axios.patch(`/api/people/${data.id}`, {
            name: data.name,
            age: data.age,
            job: data.job
        }).then(response => {
                router.push({name: 'person.show', params: {id: data.id}});
            })
    },
    async store({}, data){
        await axios.post('/api/people', {name: data.name, age: data.age, job: data.job}).then((response) => {
            router.push({name: 'person.index'});
        })
    }
}

const mutations = {
    setPerson (state, person) {
        state.person = person
    },
    setPeople (state, people) {
        state.people = people
    }
} // это setters на языке vuex

export default {
    state, mutations, getters, actions
}

<script>
import person from "../../store/modules/person.js";

export default {
    name: "Edit",


    mounted() {
        this.id = this.$route.params.id;
        this.$store.dispatch("getPersonById", this.id);
    },

    methods: {

    },

    computed: {
        isDisabled(){
            return this.person.name && this.person.age && this.person.job
        },
        person() {
            return this.$store.getters.person;
        }
    }

}
</script>

<template>
    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" v-model="person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" @click.prevent="$store.dispatch('update', {id: person.id, name: person.name, age: person.age, job: person.job})" type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<style scoped>

</style>

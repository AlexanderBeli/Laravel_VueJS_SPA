<script>
export default {
    name: "Show",

    mounted() {
        this.id = this.$route.params.id;
        this.$store.dispatch("getPersonById", this.id);
    },

    computed: {
        person() {
            return this.$store.getters.person;
        }
    } //не data, так как импортируем из другого файла, динамичный тип данных
}
</script>

<template>
    <div v-if="person">
        <div>
            Name: {{ person.name }}
        </div>
        <div>
            Name: {{ person.age }}
        </div>
        <div>
            Name: {{ person.job }}
        </div>
        <router-link :to="{name: 'person.edit', params: {id: person.id}}">Edit</router-link>
    </div>
</template>

<style scoped>

</style>

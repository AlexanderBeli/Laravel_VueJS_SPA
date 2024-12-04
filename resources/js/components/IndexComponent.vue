<script>
import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";
export default {
    name: "IndexComponent",

    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null,
        }
    },

    mounted() {
        this.getPeople();
        // this.updatePerson();
        // this.$parent.parentLog();
    },

    components: {
        EditComponent,
        ShowComponent
    },

    methods: {
        getPeople() {
            axios.get("/api/people").then((response) => {
                this.people = response.data;
            })
        },

        updatePerson(id) {
            this.editPersonId = null;
            // console.log(this.name, this.age, this.job);
            axios.patch(`/api/people/${id}`,{name: this.name, age: this.age, job: this.job}).then((response) => {
                this.getPeople();
                // console.log(response);
            })
        },

        deletePerson(id) {
            // console.log(this.name, this.age, this.job);
            axios.delete(`/api/people/${id}`).then((response) => {
                this.getPeople();
                // console.log(response);
            })
        },

        changeEditPersonId(id, name, age, job) {

            this.editPersonId = id;
            let editName = `edit_${id}`;
            let fullEditName = this.$refs[editName][0];
            fullEditName.name = name;
            fullEditName.age = age;
            fullEditName.job = job;
        },

        isEdited(id) {
            return this.editPersonId === id;
        },

        indexLog(){
            console.log('This is index component');
        }
    }

}
</script>

<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <ShowComponent :person="person"></ShowComponent>
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>


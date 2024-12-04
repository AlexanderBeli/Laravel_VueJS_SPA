<script>
export default {
    name: "ShowComponent",

    data() {
        return {

        }
    },

    props: [
        'person'
    ],

    mounted() {

    },

    methods: {
        deletePerson(id) {
            // console.log(this.name, this.age, this.job);
            axios.delete(`/api/people/${id}`).then((response) => {
                this.$parent.getPeople();
                // console.log(response);
            })
        },

        changeEditPersonId(id, name, age, job) {

            this.$parent.editPersonId = id;
            let editName = `edit_${id}`;
            let fullEditName = this.$parent.$refs[editName][0];
            fullEditName.name = name;
            fullEditName.age = age;
            fullEditName.job = job;
        }

    }

}
</script>

<template>
        <tr :class="this.$parent.isEdited(person.id) ? 'd-none' : ''">
            <th scope="row">{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
            <td><a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-success">Edit</a></td>
            <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
        </tr>
</template>

<style scoped>

</style>


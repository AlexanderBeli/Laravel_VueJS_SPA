<script>
import CreateComponent  from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";

export default {
    name: "PostComponent",

    data() {
        return {
            persons: null
        }
    },

    mounted() {
        // this.getPerson();
        console.log(this.$refs.index.indexLog());
    },

    methods: {
        // getPerson() {
        //     axios.get('/persons')
        //         .then( data => {
        //             this.persons = data.data;
        //         })
        //         .catch(error => {
        //
        //         })
        //         .finally({
        //
        //         })
        // }
        parentLog() {
            console.log('This is parent component');
        }
    },

    computed: {

    },

    components: {
        CreateComponent,
        IndexComponent
    }
}
</script>

<template>
    <div>
        <CreateComponent></CreateComponent>
        <IndexComponent ref="index"></IndexComponent>
<!--        <div>-->
<!--            <table class="table">-->
<!--                <thead>-->
<!--                <tr>-->
<!--                    <th scope="col">#</th>-->
<!--                    <th scope="col">Name</th>-->
<!--                    <th scope="col">Age</th>-->
<!--                    <th scope="col">Job</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <tr v-for="person in persons">-->
<!--                    <th scope="row">{{ person.id }}</th>-->
<!--                    <td>{{ person.name }}</td>-->
<!--                    <td>{{ person.age }}</td>-->
<!--                    <td>{{ person.job }}</td>-->
<!--                </tr>-->
<!--                </tbody>-->
<!--            </table>-->
<!--        </div>-->
    </div>
</template>

<style scoped>

</style>


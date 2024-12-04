<script>
export default {
    name: "SomeComponent",

    data() {
        return {

        }
    },

    props: [
        'obj'
    ],

    mounted() {
        this.$parent.$parent.$refs.index.indexLog();
    },

    methods: {

    }

}
</script>

<template>
    <div class="">
        <div>Color: {{ obj.color }}</div>
        <div>Number: {{ obj.number > 10 ? 'more 10' : 'less 10'}}</div>
        <div>Is Published: {{ obj.isPublished ? 'Published' : 'Not published'}}</div>
    </div>
</template>

<style scoped>

</style>


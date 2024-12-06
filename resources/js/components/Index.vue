<script>
export default {
    name: "Index",
    data() {
        return {

        }
    },
    mounted() {},
}
</script>

<template>
    <div>
        <router-link :to="{ name: 'person.index' }">People</router-link> |
        <router-link :to="{ name: 'person.create' }">Add</router-link>
        <router-view></router-view>
    </div>
</template>

<style>

</style>

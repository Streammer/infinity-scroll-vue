<template>
    <h1>Hello World</h1>
    <InfinityScroll />
</template>

<script>
import InfinityScroll from './components/InfinityScroll.vue';
export default {
    name: 'App',
    components: {
        InfinityScroll
    }
};
</script>

<style>
h1 {
    color: #42b983;
}
</style>
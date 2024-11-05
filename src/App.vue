<template>
    <Container>
        <InfinityScroll />
    </Container>
</template>

<script>
import InfinityScroll from './components/InfinityScroll.vue';
import Container from './components/Container.vue';
export default {
    name: 'App',
    components: {
        InfinityScroll,
        Container
    }
};
</script>

<style>
h1 {
    color: #42b983;
}
</style>
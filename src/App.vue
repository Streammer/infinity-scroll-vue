<template>
    <AppContainer>
        <InfinityScroll />
    </AppContainer>
</template>

<script>
import InfinityScroll from './components/InfinityScroll.vue';
import AppContainer from './components/AppContainer.vue';
export default {
    name: 'App',
    components: {
        InfinityScroll,
        AppContainer
    }
};
</script>

<style>
h1 {
    color: #42b983;
}
</style>
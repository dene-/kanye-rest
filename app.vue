<template>
    <Quote
        v-if="useKanyeRest.quote"
        :quote="useKanyeRest.quote"
        @click="useKanyeRest.getQuote()"
    />
</template>

<script lang="ts" setup>
    import { KanyeRest } from '@/adapters/KanyeRest';

    const useKanyeRest = $ref(new KanyeRest());

    onMounted(() => {
        useKanyeRest.getQuote();
    });
</script>

<style lang="scss">
    @font-face {
        font-family: Mori;
        src: url('./assets/PPMori-Variable.ttf');
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Mori, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        font-size: 18px;

        background-color: rgb(33, 33, 33);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;
    }
</style>

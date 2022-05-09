<template>
    <div class="quoteWrapper">
        <div class="quote">{{ props.quote }}</div>
        <div class="by">- ye</div>
    </div>
</template>

<script lang="ts" setup>
    interface Props {
        quote: string;
    }

    const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
    .quoteWrapper {
        cursor: pointer;

        padding: 30px;

        border-radius: 25px;

        background-color: white;

        margin: 5vw;

        //box-shadow: 0 15px 25px rgba(255, 255, 255, 0.15);

        .quote {
            font-size: 42px;
            line-height: 3rem;
        }

        .by {
            font-size: 33px;
            text-align: right;

            margin-top: 15px;
        }
    }
</style>

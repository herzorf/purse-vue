<template>
    <div class="button-wrapper">
        <button ><slot></slot></button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Button"
    };
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .button-wrapper {
        text-align: center;

        > button {
            background: $blue;
            border: none;
            color: #FFF;
            font-size: 18px;
            border-radius: 4px;
            padding: 8px 8px;
            margin-top: 2em;
        }
    }

</style>
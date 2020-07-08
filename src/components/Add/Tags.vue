<template>
    <div class="tags">
        <ul>
            <li>衣啊大大</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣啊大大</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣啊大大</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣啊大大</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣啊大大</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣啊大大</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <button>新增标签</button>
    </div>

</template>

<script lang="ts">
    export default {
        name: "Tags"
    };
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .tags {
        padding: 1em;

        > ul {
            display: flex;
            flex-wrap: wrap-reverse;
            > li {
                text-align: center;
                padding: 0.25em 1em;
                background-color: $blue;
                color: #fff;
                height: 30px;
                border-radius: 15px;
                margin-right: 1em;
                margin-top: 0.5em;
            }
        }

        > button {
            font-size: 16px;
            border: none;
            margin-top: 1em;
            background: none;
            border-bottom: 1px solid;
            padding: 0 4px;
            color: $blue;
        }

    }

</style>
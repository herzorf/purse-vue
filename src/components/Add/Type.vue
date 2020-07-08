<template>
    <div class="type">
        <ul>
            <li class="selected">支出</li>
            <li>收入</li>
        </ul>
    </div>

</template>

<script lang="ts">
    export default {
        name: "Type"
    };
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .type {

        background: $orange;

        ul {
            display: flex;
            text-align: center;
            align-items: center;
            li {
                font-size: 24px;
                color: white;
                line-height: 72px;
                width: 50%;
                position: relative;

                &.selected::before {
                    position: absolute;
                    content: "";
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: #fff;
                }
            }
        }
    }

</style>
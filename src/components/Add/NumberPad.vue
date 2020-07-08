<template>
    <div class="numberPad">
        <div class="output">100</div>
        <div class="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="OK">OK</button>
            <button class="zero">0</button>
            <button>.</button>
        </div>
    </div>

</template>

<script lang="ts">
    export default {
        name: "NumberPad"
    };
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .numberPad {
        > .output {
            @extend %innerShadow;
            font-size: 44px;
            line-height: 48px;
            font-family: Consolas, monospace;
            padding: 16px 16px;
            text-align: right;
        }

        > .numbers {
            @extend %clearFix;

            > button {
                font-size: 18px;
                float: left;
                width: 25%;
                height: 64px;

                &.OK {
                    float: right;
                    height: 128px;
                }

                &.zero {
                    width: 50%;
                }
                border-radius: 8px ;
                background-color: $blue;
                border: none;
                color: white;
                &:active{
                    background-color: #fff;
                    color: $blue;
                }
            }
        }
    }

</style>
<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="numbers" @click="padOperating">
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
    import {Component} from "vue-property-decorator";
    import Vue from "vue";

    @Component
    export default class NumberPad extends Vue {
        output = "0";

        padOperating(event: MouseEvent) {
            const button = event.target as HTMLButtonElement;
            const output = button.textContent as string;
            if (output === "OK") {
                this.$emit("update:value", this.output);
                console.log("保存成功");
                return;
            }
            if (output === "清空") {
                this.output = "0";
                return;
            }
            if (output === "删除") {
                this.output = this.output.slice(0, -1);
                if (this.output === "") {
                    this.output = "0";
                }
                return;
            }
            if (this.output.length >= 13) {
                return;
            }
            if (this.output.indexOf(".") >= 0) {
                if (output === ".") {
                    return;
                }
            }
            if (this.output === "0") {
                if ("0123456789".indexOf(output) >= 0) {
                    this.output = output;
                } else {
                    this.output += output;
                }
                return;
            } else if ("01234556789.".indexOf(output) >= 0) {
                this.output += output;
            }

        }
    }
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

                border-radius: 8px;
                background-color: $blue;
                border: none;
                color: white;

                &:active {
                    background-color: #fff;
                    color: $blue;
                }
            }
        }
    }

</style>
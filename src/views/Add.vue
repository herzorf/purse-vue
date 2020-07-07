<template>
    <div>
        <Layout classContent="prefix">
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
            <div class="notes">
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注">
                </label>
            </div>
            <div class="type">
                <ul>
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>
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
        </Layout>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Add",
    };
</script>
<style lang="scss" scoped>
    .prefix-content{
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        >.tags{
            border: 1px solid green;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;

        }
    }
</style>
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

    .notes {
        > label {
            display: flex;
            background: $blue;
            color: #fff;
            padding: 0.25em;

            > span {
                padding: 1em;
            }

            > input {
                flex-grow: 1;
                background: none;
                border: none;
                color: #ffffff;
                font-size: 16px;

                &::-webkit-input-placeholder {
                    color: white;
                }
            }
        }
    }

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
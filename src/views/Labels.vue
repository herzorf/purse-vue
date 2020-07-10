<template>
    <div>
        <Layout class="wrapper">
            <ul>
                <li>
                    <span> 衣</span>
                    <Icon name="right"/>
                </li>
                <li>
                    <span> 食</span>
                    <Icon name="right"/>
                </li>
                <li>
                    <span> 住</span>
                    <Icon name="right"/>
                </li>
                <li>
                    <span> 行</span>
                    <Icon name="right"/>
                </li>
            </ul>
            <div class="button-wrapper">
                <button>新增标签</button>
            </div>
        </Layout>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Labels",
    };
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .wrapper {
        font-size: 18px;
        ul {
            background: #fff;
            padding: 4px 0;
            > li {
                line-height: 36px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid $orange;
                padding-right: 8px;
                margin-left: 8px;

            }
        }

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


    }
</style>
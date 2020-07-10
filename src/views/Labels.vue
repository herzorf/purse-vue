<template>
    <div>
        <Layout class="wrapper">
            <div class="ul">
                <RouterLink v-for="tag in tagList" :key="tag.id"
                :to="`/editLabel/${tag.id}`">
                    <span>{{tag.name}}</span>
                    <Icon name="right"/>
                </RouterLink>

            </div>
            <Button @click.native="addTag">新增标签</Button>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {modelTagList} from "@/models/model-tagList";
    import Button from "@/components/Button.vue";
    modelTagList.read();
    @Component({
        components: {Button}
    })
    export default class Labels extends Vue {
        tagList = modelTagList.data;
        addTag(){
            const name  = window.prompt("请输入标签名:");
            if(name ){
                modelTagList.create(name);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .wrapper {
        font-size: 18px;

        .ul {
            background: #fff;
            padding: 4px 0;

            > a {
                line-height: 36px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid $orange;
                padding-right: 8px;
                margin-left: 8px;

            }
        }


    }
</style>
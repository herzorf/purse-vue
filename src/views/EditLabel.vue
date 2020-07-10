<template>
    <Layout>
        <header>
            <Icon name="left"/>
            <span>编辑标签</span>
            <Icon/>
        </header>
        <Notes fieldName="标签名" placeholder="请输入标签名"/>
        <Button>删除标签</Button>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {modelTagList} from "@/models/model-tagList";
    import Notes from "@/components/Add/InputForm.vue";
    import Button from "@/components/Button.vue";

    @Component({
        components: {Button, Notes}
    })
    export default class EditLabel extends Vue {
        created(): void {
            const id = this.$route.params.id;
            const labels = modelTagList.data;
            const label = labels.filter(item => item.id === id)[0];
            if (!label) {
                this.$router.replace("/404");
            }
        }
    }
</script>

<style scoped lang="scss">
    header {
        font-size: 16px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 1em;
        margin-bottom: 1em;
    }
</style>
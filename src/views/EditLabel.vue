<template>
    <Layout>
        <header>
            <Icon name="left" @click.native="goBack"/>
            <span>编辑标签</span>
            <Icon/>
        </header>
        <Notes fieldName="标签名" :value="label.name" @update:value="changeLabel" placeholder="请输入标签名"/>
        <Button @click.native="removeLabel">删除标签</Button>
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
        label?: label = undefined;

        created(): void {
            const id = this.$route.params.id;
            const labels = modelTagList.data;
            this.label = labels.filter(item => item.id === id)[0];
            if (!this.label) {
                this.$router.replace("/404");
            }
        }

        changeLabel(value: string) {
            this.label && modelTagList.update(this.label.id, value);
        }

        removeLabel() {
            this.label && modelTagList.remove(this.label.id);
        }
        goBack(){
            this.$router.back()
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
<template>
    <Layout>
        <header>
            <Icon name="left"/>
            <span>编辑标签</span>
        </header>
        <Notes fieldName="标签名" placeholder="请输入标签名"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {modelTagList} from "@/models/model-tagList";
    import Notes from "@/components/Add/Notes.vue";
    @Component({
        components: {Notes}
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

</style>
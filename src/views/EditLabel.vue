<template>
    <Layout>
        编辑标签
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import {modelTagList} from "@/models/model-tagList";

    @Component
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
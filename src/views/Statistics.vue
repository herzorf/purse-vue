<template>
    <Layout>
        <Tabs class-prefix="type" :data-sourse="type" :value.sync="typeValue"/>
        <Tabs class-prefix="tabs" :data-sourse="interval" :value.sync="tabsValue"/>
    </Layout>
</template>

<script lang="ts">
    import Type from "@/components/Add/Type.vue";
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Tabs from "@/components/Tabs.vue";
    import {interval} from "@/constants/interval";
    import {type} from "@/constants/type";

    @Component({
        components: {Tabs, Type},
    })
    export default class Statistics extends Vue {
        typeValue = "-";
        tabsValue = "day";
        interval = interval
        type =type
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    ::v-deep li.tabs-tabItem{
        height: 40px ;
        font-size: 20px !important;
        line-height: 32px !important;
        &.selected {
            background: $blue;
        }
    }
    ::v-deep .type-tabItem{
        &.selected {
            background: $blue;
        }
    }

</style>
<template>
    <div class="tabs">
        <ul>
            <li v-for="item in dataSourse" :key="item.value"
                :class="{selected: item.value === value,
                [classPrefix+ '-tabItem'] : classPrefix}"
            @click="selectTab(item)"
            >{{item.text}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Tabs extends Vue {
        @Prop({required: true, type: Array}) dataSourse !: tab[];
        @Prop() readonly value!: string;
        @Prop(String) classPrefix?: string;
        selectTab(item: tab){
            this.$emit("update:value",item.value)
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .tabs {

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
</style>
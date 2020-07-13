<template>
    <Layout>
        <Tabs class-prefix="type" :data-sourse="type" :value.sync="typeValue"/>
        <div class="info">
            <ol>
                <li v-for="(group ,index) in result()" :key="index">
                    <h3>{{group.title}}</h3>
                    <ol>
                        <li v-for="item in selectType(group.item)" :key="item.id">
                            <span>{{item.tags.join(",")}}</span>
                            <span class="notes">{{item.notes}}</span>
                            <span>￥{{item.amount}}</span>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    </Layout>

</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import Tabs from "@/components/Tabs.vue";
    import {type} from "@/constants/type";
    import {modelRecordsList} from "@/models/model-recordsList";

    @Component({
        components: {Tabs},
    })
    export default class Statistics extends Vue {
        typeValue = "-";
        type = type;
        recordList: RecordItem[] = [];

        selectType(array: RecordItem[]) {
            return array.filter((item) => item.type === this.typeValue);
        }

        result() {
            const hashTable: { [key: string]: { title: string; item: RecordItem[] } } = {};
            for (let i = 0; i < this.recordList.length; i++) {
                const [date, time] = this.recordList[i].createAt!.split("T");
                hashTable[date] = hashTable[date] || {title: date, item: []};
                hashTable[date].item.push(this.recordList[i]);
            }
            return hashTable;
        }

        mounted() {
            this.recordList = modelRecordsList.read().reverse();
            this.result();
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    ::v-deep li.tabs-tabItem {
        height: 40px;
        font-size: 20px !important;
        line-height: 32px !important;

        &.selected {
            background: $blue;
        }
    }

    ::v-deep .type-tabItem {
        &.selected {
            background: $blue;
        }
    }

    .info {

        > ol {

            > li {
                > h3 {
                    font-weight: normal;
                    padding: 0 16px;
                }

                > ol {
                    font-size: 16px;
                    background: #fff;
                    padding: 0 16px;

                    > li {
                        color: $blue;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 8px 0;
                        border-bottom: 1px solid $blue;

                        .notes {
                            margin-right: auto;
                            margin-left: 16px;
                            color: $orange;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div>
        <Layout classContent="prefix">
            <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
            <Notes
                    placeholder="在这里添加备注"
                    fieldName="备注" @update:value="onUpdateNote"/>
            <Tabs :data-sourse="type" :value.sync="record.type"/>
            <NumberPad @update:value="onUpdateAmount" @submit="onSubmit"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Tags from "@/components/Add/Tags.vue";
    import Notes from "@/components/Add/InputForm.vue";
    import NumberPad from "@/components/Add/NumberPad.vue";
    import {Component, Watch} from "vue-property-decorator";
    import {modelRecordsList} from "@/models/model-recordsList";
    import {modelTagList} from "@/models/model-tagList";
    import Tabs from "@/components/Tabs.vue";
    import {type} from "@/constants/type";

    @Component({
        components: {Tabs, NumberPad, Notes, Tags},
    })
    export default class Add extends Vue {
        tags = modelTagList.read();
        recordsList = modelRecordsList.read();
        record: RecordItem = {
            tags: [],
            notes: "",
            type: "-",
            amount: 0
        };
        type = type;

        onUpdateTags(tags: string[]) {
            this.record.tags = tags;
        }

        onUpdateNote(notes: string) {
            this.record.notes = notes;
        }

        onUpdateAmount(output: string) {
            this.record.amount = parseFloat(output);
        }

        onSubmit() {
            const deepCloneRecord = modelRecordsList.clone(this.record);
            deepCloneRecord.createAt = new Date().toISOString();
            this.recordsList.push(deepCloneRecord);
            console.log(this.recordsList);
        }

        @Watch("recordsList")
        onRecordsListChange() {
            modelRecordsList.write(this.recordsList);
        }
    }
</script>
<style lang="scss">
    .prefix-content {
        border: 1px solid red;
        display: flex;
        flex-direction: column;

        > .tags {
            border: 1px solid green;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
        }
    }
</style>

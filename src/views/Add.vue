<template>
    <div>
        <Layout classContent="prefix">
            {{record}}
            <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
            <Notes @update:value="onUpdateNote"/>
            <Type :value.sync="record.type"/>
            <NumberPad @update:value="onUpdateAmount" @submit="onSubmit"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Tags from "@/components/Add/Tags.vue";
    import Notes from "@/components/Add/Notes.vue";
    import Type from "@/components/Add/Type.vue";
    import NumberPad from "@/components/Add/NumberPad.vue";
    import {Component, Watch} from "vue-property-decorator";

    type Record = {
        tags: string[];
        notes: string;
        type: string;
        amount: number;
    }
    @Component({
        components: {NumberPad, Type, Notes, Tags},
    })
    export default class Add extends Vue {
        tags = ["衣", "食", "住", "行"];
        recordsList: Record[] = [];
        record: Record = {
            tags: [],
            notes: "",
            type: "-",
            amount: 0
        };

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
            const deepCloneRecord = JSON.parse(JSON.stringify(this.record));
            this.recordsList.push(deepCloneRecord)
            console.log(this.recordsList);
        }
        @Watch("recordsList")
        onRecordsListChange(){
            window.localStorage.setItem("recordsList",JSON.stringify(this.recordsList));
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

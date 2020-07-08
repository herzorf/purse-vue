<template>
    <div>
        <Layout classContent="prefix">
            <Tags/>
            <Notes/>
            <Type/>
            <NumberPad/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Tags from "@/components/Add/Tags.vue";
    import Notes from "@/components/Add/Notes.vue";
    import Type from "@/components/Add/Type.vue";
    import NumberPad from "@/components/Add/NumberPad.vue";
    export default {
        name: "Add",
        components: {NumberPad, Type, Notes, Tags},
    };
</script>
<style lang="scss" scoped>
    .prefix-content{
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        >.tags{
            border: 1px solid green;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
        }
    }
</style>

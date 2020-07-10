<template>
    <div class="tags">
        <ul>
            <li v-for="tag in dataSource"
                @click="toggle(tag.id)"
                :class="{selected: selectedTags.indexOf(tag.id) >= 0}"
                :key="tag.id"
            >{{tag.name}}</li>
        </ul>
        <button @click="addLabels">新增标签</button>
    </div>

</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import {modelTagList} from "@/models/model-tagList";

    @Component
    export default class Tags extends Vue {
        @Prop() dataSource: label[] |  undefined;
        selectedTags: string[] = [];
        toggle(tag: string){
            const index = this.selectedTags.indexOf(tag);
            if(index >= 0){
                this.selectedTags.splice(index,1);
            }else{
                this.selectedTags.push(tag);
            }
            this.$emit("update:selected", this.selectedTags)
        }
        addLabels(){
            const name = window.prompt("请输入标签名");
            if(name && name !== ""){
                modelTagList.create(name);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .tags {
        padding: 1em;

        > ul {
            display: flex;
            flex-wrap: wrap-reverse;

            > li {
                text-align: center;
                padding: 0.25em 1em;
                background-color: $blue;
                color: #fff;
                height: 30px;
                border-radius: 15px;
                margin-right: 1em;
                margin-top: 0.5em;
                &.selected{
                    background: $orange;
                }
            }
        }

        > button {
            font-size: 16px;
            border: none;
            margin-top: 1em;
            background: none;
            border-bottom: 1px solid;
            padding: 0 4px;
            color: $blue;
        }

    }

</style>
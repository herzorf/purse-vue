<template>
    <div class="tags">
        <ul>
            <li v-for="tag in dataSource"
                @click="toggle(tag)"
                :class="{selected: selectedTags.indexOf(tag) >= 0}"
                :key="tag"
            >{{tag}}</li>
        </ul>
        <button @click="addLabels">新增标签</button>
    </div>

</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Tags extends Vue {
        @Prop() dataSource: string[] |  undefined;
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
                if(this.dataSource){
                    this.$emit("update:dataSource",[...this.dataSource,name])
                }
            }else{
                return;
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
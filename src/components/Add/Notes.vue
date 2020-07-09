<template>
    <div class="notes">
        <label>
            <span>备注</span>
            <input type="text"
                   v-model="value"
                   placeholder="在这里添加备注" />
        </label>
    </div>

</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Watch} from "vue-property-decorator";
    @Component
    export default class Notes extends Vue{
        value = "";
        @Watch("value")
        onUpdateNotes(value: string){
            this.$emit("update:value",value);
        }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .notes {
        > label {
            display: flex;
            background: $blue;
            color: #fff;
            padding: 0.25em;

            > span {
                padding: 1em;
            }

            > input {
                flex-grow: 1;
                background: none;
                border: none;
                color: #ffffff;
                font-size: 16px;

                &::-webkit-input-placeholder {
                    color: white;
                }
            }
        }
    }

</style>
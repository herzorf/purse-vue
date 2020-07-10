<template>
    <div class="notes">
        <label>
            <span>{{fieldName}}</span>
            <input type="text"
                   :value="value"
                   @input="onUpdateNotes(value)"
                   :placeholder="placeholder"/>
        </label>
    </div>

</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";

    @Component
    export default class Notes extends Vue {
        @Prop({default: ""}) readonly value !: string;
        @Prop({required: true}) fieldName !: string;
        @Prop() placeholder?: string;

        onUpdateNotes(value: string) {
            this.$emit("update:value", value);
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
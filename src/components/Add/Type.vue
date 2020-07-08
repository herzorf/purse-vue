<template>
    <div class="type">
        <ul>
            <li :class="type === '-' && 'selected' " @click="selectType('-')">支出</li>
            <li :class="type === '+' && 'selected' " @click="selectType('+')">收入</li>
        </ul>
    </div>

</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import Vue from 'vue';

    @Component
   export default class Type extends Vue{
       type =  "-";
       selectType(type: string){
           if(type !== "-" && type !== "+"){
               throw new Error("type is not unknown")
           }
           this.type = type;
       }
       mounted(): void {
           console.log(this.type);
       }
    }
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";

    .type {

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
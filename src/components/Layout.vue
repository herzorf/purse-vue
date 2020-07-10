<template>
    <div class="layout">
        <div class="content" :class=" classContent && `${classContent}-content`">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        props:["classContent"],
        name: "Layout",
    };
</script>

<style scoped lang="scss">
 .layout{
     height: 100vh;
     display: flex;
     flex-direction: column;
     >.content{
         flex-grow: 1;
     }

 }
</style>
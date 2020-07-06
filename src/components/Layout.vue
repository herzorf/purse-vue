<template>
    <div class="layout">
        <div class="content">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Layout"
    };
</script>

<style scoped lang="scss">
 .layout{
     height: 100vh;
     display: flex;
     flex-direction: column;
     border: 1px solid red;
     >.content{
         flex-grow: 1;
     }

 }

</style>
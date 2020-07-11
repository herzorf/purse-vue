<template>
    <nav>
        <router-link to="/labels" class="nav-item" active-class="active">
            <Icon name="label"/>
            标签
        </router-link>
        <router-link to="/add" class="nav-item" active-class="active">
            <Icon name="add"/>
            记账
        </router-link>
        <router-link to="/statistics" class="nav-item" active-class="active">
            <Icon name="statistics"/>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    };
</script>

<style scoped lang="scss">
    @import "~@/assets/helper.scss";
    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        @extend %outerShadow;
        >.nav-item{
            width: 33.3333%;
            font-size: 20px;
            padding: 16px;
            color: $orange;
            >.icon{
                height: 22px;
                width: 22px;
            }
        }
        .active{
            color:#fff;
            background-color: $blue;
            .icon{
                color: white;
            }
        }
    }
</style>


<template>
    <router-link :to="prop.path">
        <button class="f-btn">
            <slot></slot>
        </button>
    </router-link>
</template>

<script setup>
import { onMounted } from "vue";


const prop = defineProps(["path"])
onMounted(() => {
    console.log(prop.path)
})
</script>

<style >
.f-btn{
    width: fit-content;
    height: fit-content;
    padding: 7px 20px;
    background: transparent;
    border: 2px solid #B3BAC1;
    border-radius: 2px;
    font-size: 16px;
    cursor: pointer;
    color: #122947;
    font-weight: 500;
}


</style>
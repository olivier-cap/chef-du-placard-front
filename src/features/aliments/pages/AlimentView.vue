<script setup lang="ts">
import Aliments from "@/features/aliments/components/Aliments.vue"
import { useGetAliments } from "../composables/useGetAliments";
import { onMounted } from "vue";

const {
    aliments,
    getAliments,
} = useGetAliments()

onMounted(() => getAliments())

</script>

<template>
    <h1> Aliments </h1>
    <Aliments :aliments="aliments"/>

</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useGetStock } from '../composables/useGetStock';
import Stock from '@/features/stock/components/Stock.vue'

/**
 * Page principale de l'affichage du stock.
 * Permet la visualisation de l'état du stock: aliments présents, quantités.
 */

const {
    stockLines,
    getStockUser
} = useGetStock();



onMounted(
    async () =>  await getStockUser("stock principal")
)

</script>

<template>
    <Stock :stock="stockLines"/>
</template>
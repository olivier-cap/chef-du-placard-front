<script setup lang="ts">
import Stock from '@/components/stock/Stock.vue';
import { useStockStore } from '@/stores/useStockStore';
import { onMounted } from 'vue';

/**
 * Page principale de l'affichage du stock.
 * Permet la visualisation de l'état du stock: aliments présents, quantités.
 */

const store = useStockStore();

onMounted( async () => await store.getStockUser(1));

</script>

<template>
    <Stock />
</template>
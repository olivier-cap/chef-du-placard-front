<script setup lang="ts">
import Stock from '@/components/stock/Stock.vue';
import StockTable from '@/components/stock/StockTable.vue';
import { useStockStore } from '@/stores/useStockStore';
import { onMounted, ref } from 'vue';

const store = useStockStore();

onMounted(async () => {
  await store.getStockUser(1);
});

const vueTable = ref(true);

</script>

<template>
  <q-page class="p-4 sm:p-6 lg:p-8">

    <div class="max-w-6xl mx-auto">
      <header class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
          Mon stock
        </h1>
        <p class="mt-2 text-slate-600 dark:text-slate-300">
          Consultez les aliments actuellement disponibles dans votre placard.
        </p>
      </header>
    </div>

    <q-btn v-if="vueTable" icon="grid_view" @click="vueTable=false"/>
    <q-btn v-if="!vueTable" icon="view_list" @click="vueTable=true"/>

    <StockTable v-if="vueTable"/>

    <Stock v-if="!vueTable"/>
  </q-page>
</template>
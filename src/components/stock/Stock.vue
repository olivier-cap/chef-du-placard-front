<script setup lang="ts">
import { useStockStore } from '@/stores/useStockStore';
import { storeToRefs } from 'pinia';

const store = useStockStore();

const {stockLines} = storeToRefs(store)

</script>


<template>

    <h1> Stock </h1>

    <div class="flex gap-10">
        <q-card v-for="aliment in stockLines" :key="aliment.id" class ="w-30">
            <q-card-section>
                {{ aliment.alimentName }}
            </q-card-section>
            <q-img src="/banane.jpg" class="w-25" />
            <q-card-section>
                {{ aliment.quantity }} {{ aliment.unitSymbol }}
            </q-card-section>
        </q-card>
    </div>


</template>
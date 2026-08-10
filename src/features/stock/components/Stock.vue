<script setup lang="ts">

import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card'
import type { StockLine } from '../models/getStockModel';


/**
 * Page gérant l'affichage des aliments dans un stock, associé à StockView.vue
 */

const props = defineProps<{
    stock: StockLine[]
}>()

</script>

<template>

    <h1> Stock </h1>

    <div class="flex gap-10">
    <Card v-for="aliment in stock" :key="aliment.alimentName" class ="w-30">
        <CardTitle>
            {{ aliment.alimentName }}
        </CardTitle>
        <img src="/banane.jpg" class="w-25">
        <CardContent>
            {{ aliment.quantity }} {{ aliment.unitSymbol }}
        </CardContent>
    </Card>
    </div>



</template>
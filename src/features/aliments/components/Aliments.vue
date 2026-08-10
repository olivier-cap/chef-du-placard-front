<script setup lang="ts">

import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card'
import type { alimentViewModel } from '../models/alimentsModel';


const props = defineProps<{
    aliments:alimentViewModel[]
}>()


</script>

<template>

    <div class="flex gap-10">
    <Card v-for="aliment in aliments" :key="aliment.alimentName" class ="w-25">
        <CardTitle>
            {{ aliment.alimentName }}
        </CardTitle>
        <img src="/banane.jpg" class="w-full">
        <CardContent>
            {{ aliment.alimentDescription }}
        </CardContent>
    </Card>
    </div>



</template>
<script setup lang="ts">
import type { Recipe } from '../models/RecipeSummary';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import router from '@/router';
import { Duration } from 'luxon';


const props = defineProps<{
    recipe: Recipe
}>()

function openRecipe(id: string) {
    router.push({
        name:'recipe',
        params: { id }
    })
}


</script>


<template>

    <Card @click="openRecipe(recipe.name)">
        <CardTitle>
            {{ recipe.name }}
        </CardTitle>
        <CardContent>
            durée : {{ Duration.fromISO(recipe.duration).toHuman() }}
            difficulté : {{ recipe.difficulty }}
        </CardContent>
    </Card>


</template>
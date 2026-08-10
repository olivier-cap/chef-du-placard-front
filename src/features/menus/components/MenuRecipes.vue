<script setup lang="ts">
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import router from '@/router';
import { Duration } from 'luxon';
import type { RecipeViewModel } from '../models/cookableMenuModels';


const props = defineProps<{
    recipe: RecipeViewModel
}>()

function openRecipe(id: string) {
    router.push({
        name:'recipe',
        params: { id }
    })
}


</script>


<template>

    <div>
        <Card @click="openRecipe(recipe.recipeName)">
            <CardTitle>
                {{ recipe.recipeName }}
            </CardTitle>
            <CardContent>
                durée : {{ Duration.fromISO(recipe.duration).toHuman() }}
                difficulté : {{ recipe.difficulty }}
            </CardContent>
        </Card>
    </div>


</template>
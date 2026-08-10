<script setup lang="ts">
import { onMounted } from 'vue';
import { useRecipeDetail } from '../composables/useRecipeDetail';
import { useRoute } from 'vue-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Duration } from 'luxon';
import { Badge } from '@/components/ui/badge'


const route = useRoute()

//const recipeId = route.params.id
const recipeId = route.params.id as string


const{recipe, loadRecipe} = useRecipeDetail();

onMounted(() => {
        loadRecipe(recipeId)
    }
)

</script>

<template>

    <Card>
    <CardHeader>
        <CardTitle class="text-3xl">
        {{ recipe?.name }}
        </CardTitle>

        <CardDescription class="flex gap-2">
        <Badge variant="secondary">
            ⏱ {{ Duration.fromISO(recipe?.duration).toHuman() }}
        </Badge>

        <Badge class="bg-green-600">
            👨‍🍳 {{ recipe?.difficulty }}
        </Badge>
        </CardDescription>
    </CardHeader>
    </Card>

    <Card>
        <CardTitle>
            Ingrédients
        </CardTitle>

        <CardContent>
            <div
                v-for="ingredient in recipe?.ingredients"
                :key="ingredient.alimentName"
            class="flex items-center gap-2 py-1"
            >
            <span class="text-green-600">✓</span>
            <span>{{ ingredient.alimentName }}</span>
            </div>
        </CardContent>
    </Card>

    <Card>
        <CardTitle>
            Instructions
        </CardTitle>

        <CardContent>
            {{ recipe?.instructions }}
        </CardContent>
    </Card>


</template>
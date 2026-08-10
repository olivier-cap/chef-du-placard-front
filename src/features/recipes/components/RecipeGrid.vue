<script setup lang="ts">
import type { Recipe } from '../models/RecipeSummary.ts';
import RecipeCard from './RecipeCard.vue';


const { recipes } = defineProps<{
    recipes: Recipe[]
}>()

</script>

<template>


    <div class = "grid grid-cols-1 md: grid-cols-2 xl:grid-cols-3 gap-6">
        <RecipeCard 
        v-for="recipe in recipes" :key="recipe.name"
        :recipe = "recipe"
        />
    </div>

</template>
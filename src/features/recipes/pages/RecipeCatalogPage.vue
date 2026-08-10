<script setup lang="ts">
import { onMounted } from 'vue';
import { useRecipeCatalog } from '../composables/useRecipeCatalog';
import RecipeGrid from '../components/RecipeGrid.vue';

const {recipes, loadRecipes} = useRecipeCatalog();

onMounted(() => {
        loadRecipes()
    }
)

</script>


<template>

    <h1> ET LA VERSION TABLEAU ! </h1>

    <RecipeGrid :recipes = "recipes"/>


</template>
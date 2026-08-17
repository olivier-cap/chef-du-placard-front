import type { RecipeModel, RecipeSummaryModel } from "@/models/recipeModels";
import { findAllRecipesSummary, findOneRecipe} from "@/services/recipeApi";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useRecipeStore = defineStore('recipe', () => {
    const recipesSummary = ref<RecipeSummaryModel[]>([]);
    const recipe = ref<RecipeModel>();

    async function loadRecipesSummary() {
        try {
            recipesSummary.value = await findAllRecipesSummary()
        } catch {
            console.log("erreur impossible charger summary recettes")
        }
    }


    async function loadRecipe(recipeId: number) {

        try {
            const data:RecipeModel = await findOneRecipe(recipeId);
            recipe.value = data;
        } catch {
            console.log("Impossible de charger la recette");
        } 
    }


    return  {
        recipesSummary,
        recipe,
        loadRecipesSummary,
        loadRecipe,
    }



})
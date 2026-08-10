
import { ref } from "vue"
import { findAllRecipes } from "../api/recipeApi";
import type { RecipeSummary } from "../models/RecipeSummary";

export function useRecipeCatalog() {
    const recipes = ref<RecipeSummary[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);


    async function loadRecipes() : Promise<void> {
        isLoading.value = true;
        error.value = null;

        try {
            recipes.value = (await findAllRecipes()).recipes
        } catch {
            error.value = 'Impossible de charger les recettes.';
        } finally {
            isLoading.value = false;
        }
    }

    return {
        recipes,
        isLoading,
        error,
        loadRecipes
    }
}
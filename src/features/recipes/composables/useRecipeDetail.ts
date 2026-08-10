import { ref } from "vue";
import type { Recipe } from "../models/RecipeDetail";
import { findOneRecipe } from "../api/recipeApi";


//export function useRecipeDetail() {
export function useRecipeDetail() {
    const recipe = ref<Recipe>();
    const isLoading = ref(false);
    const error = ref<string | null>(null);


    //async function loadRecipe(recipeId : number)
    async function loadRecipe(recipeName: string): Promise<void> {
        isLoading.value = true;
        error.value = null;
        

        try {
            //const data = await findOneRecipe(recipeId);
            const data = await findOneRecipe(recipeName);

            recipe.value = {
                name: data.name,
                difficulty: data.difficulty,
                duration: data.duration,
                instructions: data.instructions,
                ingredients: data.ingredients.map(i => ({
                    alimentName: i.aliment.name,
                    quantity: i.quantity,
                    unitSymbol: i.unit.symbol
                }))
            };
        } catch {
            error.value = "Impossible de charger la recette";
        } finally {
            isLoading.value = false;
        }
    }

    return {
        recipe,
        isLoading,
        error,
        loadRecipe
    }
}
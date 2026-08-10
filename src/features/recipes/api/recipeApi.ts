import { api } from "@/services/api"
import type {  GetRecipeListViewModel } from "../models/RecipeSummary";
import type { GetOneRecipeViewModel } from "../models/RecipeDetail";


/** 
 * Fonction appelle le back pour récupérer toutes les recettes.
 * Renvoie les données sous la forme d'un tableau de RecipePage
*/
export async function findAllRecipes() :
Promise<GetRecipeListViewModel> {
    const response = await api.get<GetRecipeListViewModel>('/getRecipeList');
    return response.data;
}

//export async function findOneRecipe(recipeId: number)
export async function findOneRecipe(recipeName: string) :
Promise<GetOneRecipeViewModel> {
    const response = await api.get<GetOneRecipeViewModel>('/getOneRecipe',
        {
            params: {
                recipeName: recipeName
            }
        }
    );
    return response.data;
}
import { api } from "@/boot/axios";




/** 
 * Fonction appelle le back pour récupérer toutes les recettes.
 * Renvoie les données sous la forme d'un tableau de RecipePage
*/
export async function findAllRecipesSummary() {
    const response = await api.get('/getRecipeList');
    return response.data.recipes;
}

//export async function findOneRecipe(recipeId: number)
export async function findOneRecipe(recipeId: number) {
    const response = await api.get('/getOneRecipe',
        {
            params: {
                recipeId: recipeId
            }
        }
    );
    return response.data;
}
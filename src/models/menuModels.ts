import type { RecipeModel } from "./recipeModels"

export interface CookableMenusSummaryModel {
    id:number,
    covered: boolean ,
    recipes: RecipeModel[]
    message: string
}


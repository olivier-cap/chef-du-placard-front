import type { AlimentModel } from "./alimentModel"
import type { UnitModel } from "./unitModel"

export interface RecipeModel{
    id:number,
    name: string,
    instructions: string, 
    duration: string,
    difficulty: string,
    ingredients: IngredientModel[]
}


export interface IngredientModel{
    id:number,
    quantity: number,
    aliment: AlimentModel,
    unit: UnitModel
}


export interface RecipeSummaryModel {
    id:number,
    name: string,
    duration : string,
    difficulty: string
}
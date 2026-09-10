
export interface CookableMenusSummaryModel {
    id:number,
    covered: boolean ,
    recipes: MenuCookableRecipeModel[]
    message: string
}

export interface MenuCookableRecipeModel {
    id:number,
    name: string,
    instructions: string ,
    duration: string,
    difficulty: string ,
    ingredients: MenuCookableIngredientModel[] 
}

export interface MenuCookableIngredientModel {
    id:number,
    quantity: number,
    name: string,
    symbol: string
}
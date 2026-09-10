
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

export interface AlimentModel {
    id:number,
    name: string,
    description: string,
    isActive: boolean
}

export interface UnitModel {
    id:number,
    name: string,
    symbol: string
}

export interface RecipeSummaryModel {
    id:number,
    name: string,
    duration : string,
    difficulty: string
}
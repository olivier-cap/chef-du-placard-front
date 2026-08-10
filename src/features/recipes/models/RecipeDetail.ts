
export interface GetOneRecipeViewModel{
    name: string,
    instructions: string, 
    duration: string,
    difficulty: string,
    ingredients: IngredientViewModel[]
}


export interface IngredientViewModel{
    quantity: number,
    aliment: AlimentViewModel,
    unit: UnitViewModel
}

export interface AlimentViewModel {
    name: string,
    description: string,
    isActive: boolean
}

export interface UnitViewModel {
    name: string,
    symbol: string
}

export interface Recipe {
    name: string,
    instructions: string,
    duration: string,
    difficulty: string,
    ingredients: Ingredient[]
}

export interface Ingredient {
    quantity: number,
    alimentName: string,
    unitSymbol: string
}

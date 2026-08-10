export interface CookableMenusViewModel {
    covered: boolean ,
    recipes: RecipeViewModel[]
    message: String
}

export interface RecipeViewModel {
    recipeName: string,
    recipeInstructions: string ,
    duration: string,
    difficulty: string ,
    ingredients: IngredientViewModel[] 
}

export interface IngredientViewModel {
    quantityPerPerson: number,
    alimentName: string,
    unitSymbol: string
}


export interface MenuSave {
    menuName: string,
    menuLines: MenuLine[]
}

export interface MenuLine {
    nbPerson: string,
    recipeName: string
}


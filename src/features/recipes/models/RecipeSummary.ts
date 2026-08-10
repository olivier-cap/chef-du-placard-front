

/**
 * Format des données adaptées au front.
 */
export interface RecipeSummary {
    name: string,
    duration : string,
    difficulty: string
}

export interface Recipe{
    name: string,
    duration : string,
    difficulty: string
}

export interface GetRecipeListViewModel {
    recipes: RecipeSummary[]
}



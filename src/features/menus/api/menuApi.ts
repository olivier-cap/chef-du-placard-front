import axios from "axios";
import type { MenuSave } from "../models/cookableMenuModels";
import type { IngredientViewModel } from "@/features/recipes/models/RecipeDetail";

/**
 * Recherche le menu (l'ensemble de recettes) réalisables pour nbPeople et nbMeal avec le stock
 * @param nbPeople 
 * @param nbMeal 
 * @param stockName 
 * @returns 
 */
export async function getCookableMenus(
    nbPeople: number,
    nbMeal: number,
    stockName: string
) {
    const response = await axios.post(
        '/api/cookableMenus',
        {
            nbPeople: nbPeople,
            nbMeal: nbMeal,
            stockName: stockName

        }
    )
    
    return response.data
}


/**
 * Sauvegarde un nouveau menu (= ensemble de recettes)
 * @param newMenu 
 * @returns 
 */
export async function saveNewMenu(
    newMenu:MenuSave
) {
    const response = await axios.post(
        '/api//saveNewMenu',
        newMenu
    )

    return response.data
}


/**
 * Mise à jour du stock manuelle
 * @param stockName 
 * @param updateStockAlimentList 
 * @returns 
 */
export async function updateStockManually(
    stockName: string,
    updateStockAlimentList: IngredientViewModel
) {
    const response = await axios.post(
        '/api/updateStockManually',
        {
            stockName,
            updateStockAlimentList
        }
    )
    
    return response.data
}
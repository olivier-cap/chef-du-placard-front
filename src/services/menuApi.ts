import { api } from "@/boot/axios"

/**
 * Recherche le menu (l'ensemble de recettes) réalisables pour nbPeople et nbMeal avec le stock
 * @param nbPeople 
 * @param nbMeal 
 * @param stockId 
 * @returns 
 */
export async function getCookableMenus(
    nbPeople: number,
    nbMeal: number,
    stockId: number
) {
    const response = await api.post(
        '/cookableMenus',
        {
            nbPeople: nbPeople,
            nbMeal: nbMeal,
            stockId: stockId

        }
    )
    
    return response.data
}
import { api } from "@/boot/axios"
import type { CookableMenuCalculatedModel } from "@/models/menuModels"

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
):Promise<CookableMenuCalculatedModel> {
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


export async function saveNewMenuApi(
    userId:number,
    menuName: string,
    menuLines: {
            nbPerson: number
            recipeId: number
    }[]
    ) {
        const response = await api.post("/savenewmenu",
            {
                userId:userId,
                menuName: menuName,
                menuLines: menuLines
            }
        )

        return response.data
    }
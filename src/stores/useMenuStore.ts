import type { CookableMenuCalculatedModel } from "@/models/menuModels";
import { getCookableMenus, saveNewMenuApi } from "@/services/menuApi";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore('menu', () => {

    const cookableMenus = ref<CookableMenuCalculatedModel>()
    const nbPerson = ref()
    const menuId = ref();

    /**
     * Recherche des recettes réalisables pour n personnes et r repas, sélection parmi propositions
     * @param nbPeople nb de personnes qui mangent au menu
     * @param nbMeal nb de repas demandés
     * @param stockId id du stock
     */
    async function findCookableMenus(
        nbPeople: number,
        nbMeal: number,
        stockId: number
    ) {
        try {
            const result = await getCookableMenus(
                nbPeople,
                nbMeal,
                stockId
            )
            cookableMenus.value = result
            nbPerson.value = nbPeople
        } catch {
            console.log("erreur durant la recherche des menus réalisables")
        }
    }




async function saveNewMenu(
    userId: number,
    menuName: string,
    cookableMenu: CookableMenuCalculatedModel
) {
    try {

        const allRecipes = [
            ...cookableMenu.recipes,
            ...cookableMenu.proposal
        ]

        const menuLines = allRecipes.map(recipe => ({
            nbPerson: nbPerson.value,
            recipeId: recipe.id
        }))

        const response = await saveNewMenuApi(
            userId,
            menuName,
            menuLines
        )

        menuId.value = response;
        return response

    } catch (error) {
        console.error("error save new menu", error)
    }
}
    return {
        cookableMenus,
        nbPerson,
        saveNewMenu,
        findCookableMenus,
    }
})
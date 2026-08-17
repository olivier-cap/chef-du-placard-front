import type { CookableMenusSummaryModel } from "@/models/menuModels";
import { getCookableMenus } from "@/services/menuApi";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore('menu', () => {

    const cookableMenus = ref<CookableMenusSummaryModel>()

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
        } catch {
            console.log("erreur durant la recherche des menus réalisables")
        }
    }

    return {
        cookableMenus,
        findCookableMenus,
    }
})
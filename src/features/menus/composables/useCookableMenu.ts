import { ref } from "vue";
import { getCookableMenus } from "../api/menuApi";
import type { CookableMenusViewModel } from "../models/cookableMenuModels";

const cookableMenus = ref<CookableMenusViewModel>()

export function useCookableMenu() {

    async function findCookableMenus(
        nbPeople: number,
        nbMeal: number,
        stockName: string
    ) {

        try {
            const result = await getCookableMenus(
                nbPeople,
                nbMeal,
                stockName
            )
            console.log(result)
            cookableMenus.value = result
        } catch {
            console.log("erreur durant la recherche des menus réalisables")
        }
    }

    return {
        cookableMenus,
        findCookableMenus,
    }


}
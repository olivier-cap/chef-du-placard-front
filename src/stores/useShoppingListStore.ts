import type { ShoppingListSummaryModel } from "@/models/shoppingListModel";
import { shoppingListFromMenuApi } from "@/services/shoppingListApi";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useShoppingListStore = defineStore('shoppingList', () => {
    
    const shoppingList = ref<ShoppingListSummaryModel>();


    async function shoppingListFromMenu(
            userId: number,
            menuId: number,
            stockId: number,
            pantryStaplesId: number
    ) {

        try {
            const response = await shoppingListFromMenuApi(
                userId,
                menuId,
                stockId,
                pantryStaplesId
            )
            shoppingList.value = response;
            return response
        } catch (error) {
            console.log(error);
        }
    }


    return {
        shoppingList,
        shoppingListFromMenu,
    }
})
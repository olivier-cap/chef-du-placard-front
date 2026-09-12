import { api } from "@/boot/axios";


export async function shoppingListFromMenuApi(
    userId: number,
    menuId: number,
    stockId: number,
    pantryStaplesId: number
) {
const response = await api.get("/shoppinglistmenu", {
    params: {
        userId,
        menuId,
        stockId,
        pantryStaplesId
    }
})
    return response.data
}
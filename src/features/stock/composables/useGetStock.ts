import { ref } from "vue"
import { getStock } from "../api/stockApi"
import type { StockLine } from "@/features/stock/models/getStockModel";


/**
 * Fonctions pour afficher le stock
 */
export function useGetStock() {


    //Lignes du stock
    const stockLines = ref<StockLine[]>([])

    /**
     * Recherche du stock pour un utilisateur donné (=> un stock donné)
     * @param stockName id du stock
     */
    async function getStockUser(
        //userId: number
        stockName: string
    ) {
        try {
            const result = await getStock(stockName);
            stockLines.value = result
            
        } catch {
            console.log("erreur durant le chargement du stock")
        }
    }


    return {
        stockLines,
        getStockUser
    }

}
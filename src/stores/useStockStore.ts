import type { StockLine } from "@/models/stockModels";
import { getStockSummaryApi } from "@/services/stockApi";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useStockStore = defineStore('stock', () => {


    //Lignes du stock
    const stockLines = ref<StockLine[]>([])

    /**
     * Recherche du stock pour un utilisateur donné (=> un stock donné)
     * @param stockName id du stock
     */
    async function getStockById(
        //userId: number
        stockId: number
    ) {
        try {
            const result = await getStockSummaryApi(stockId);
            stockLines.value = result
            
        } catch {
            console.log("erreur durant le chargement du stock")
        }
    }

    return {
        stockLines,
        getStockUser: getStockById,
    }


})
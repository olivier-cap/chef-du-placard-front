import axios from "axios"
import type { UpdateStockManuallyRequestModel } from "../models/modifyStockModel"


/**
 * Récupère tout le stock d'un utilisateur
 * @param stockName 
 * @returns lignes (simplifiées) du stock : [alimentName, quantité, symboleUnité]
 */
//export async function getStock(stockId: number) {
export async function getStock(stockName: string) {
    const result = await axios.get(
        "/api/getStock",
         {params:{stockName : stockName}}
        )
    
    
    return result.data.stockLineViewModelList
}



/**
 * Modification manuelle du stock: envoi liste d'aliments et nouvelles quantités
 * @param modifiedStock 
 */
export async function modifyStock(
    modifiedStock: UpdateStockManuallyRequestModel
) {
    
}

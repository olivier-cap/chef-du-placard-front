import { api } from "@/boot/axios"

/**
 * Récupère tout le stock d'un utilisateur
 * @param stockId 
 * @returns lignes (simplifiées) du stock : [alimentName, quantité, symboleUnité]
 */


//export async function getStock(stockId: number) {
export async function getStock(stockId: number) {
    const result = await api.get(
        "/getStock",
         {params:{stockId : stockId}}
        )
    
    
    return result.data.stockLineViewModelList
}



export interface UpdateStockManuallyRequestModel {
        stockName: string,
        updateStockAliments: UpdateStockAliment[]
}

export interface UpdateStockAliment
 {
    alimentName: string,
    newQuantity: number,
    unitName: string
}

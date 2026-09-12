
export interface ShoppingListSummaryModel {
    id: number,
    shoppingListLines: ShoppingListLineSummaryModel[]
}

export interface ShoppingListLineSummaryModel {
    alimentName: string,
    unitSymbol: string,
    quantity: number
}

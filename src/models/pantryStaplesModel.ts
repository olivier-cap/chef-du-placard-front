import type {AlimentModel} from "./alimentModel"
import type {UnitModel} from "./unitModel"



export interface PantryStapleStateModel {
    lines: PanstryStapleStateLineModel[]
}

export interface PanstryStapleStateLineModel {
    panstryStapleId: number,
    alimentName: string,
    unitCode: string,
    minimalQuantity: number,
    actualQuantity: number,
    isSufficient: boolean
}

export interface PantryStapleModel {
    id: number,
    userId: number,
    is_default: boolean,
    pantryStaplesLines: PantryStapleLineModel[]
}


export interface PantryStapleLineModel{
    id: number,
    aliment: AlimentModel,
    unit: UnitModel,
    quantity: number
}
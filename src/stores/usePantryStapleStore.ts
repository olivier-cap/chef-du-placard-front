import { getPantryStaplesStateApi } from "@/services/pantryStaplesApi";
import { defineStore } from "pinia";


export const usePantryStaplesStore = defineStore('pantryStaples', () => {


    async function getPantryStaplesState(
        stockId: number|undefined,
        pantryStaplesId: number|undefined
    ) {
        try {
            if(stockId && pantryStaplesId) {
                const response = await getPantryStaplesStateApi(
                    stockId,
                    pantryStaplesId
                )

                return response;
            }
            else {
                console.error("stockid or pantrystaplesid undefined")
            }

        } catch (error) {
            console.error("error get pantry staple state", error);
        }
    }



    return {
        getPantryStaplesState,
    }
})


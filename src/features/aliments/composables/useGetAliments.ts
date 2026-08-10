import { ref } from "vue";
import type { alimentViewModel } from "../models/alimentsModel";
import { getAllAliments } from "../api/alimentApi";


export function useGetAliments() {
    
    const aliments = ref<alimentViewModel[]>([])

   /**
    * Recherche et renvoie tous les aliments de la base
    */
    async function getAliments() {
        try {
            const result = await getAllAliments();
            aliments.value = result;
        } catch {
            console.log("error get all aliments");
        }
    }


    return  {
        aliments,
        getAliments,
    }


}
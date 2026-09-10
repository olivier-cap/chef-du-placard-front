import { defineStore } from "pinia";
import { ref } from "vue";



export const useUserStore = defineStore('user', () => {

    const userId = ref<number>();
    const stockId = ref<number>();
    const pantryStapleId = ref<number>();

    //Temporaire - tests avant implémentation user
    userId.value = 1;
    stockId.value = 1;
    pantryStapleId.value = 1;



    return {
        userId,
        stockId,
        pantryStapleId
    }
})
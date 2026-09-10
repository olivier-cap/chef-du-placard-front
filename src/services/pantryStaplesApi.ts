import { api } from "@/boot/axios";


export async function getPantryStaplesStateApi(stockId: number, pantryStaplesId: number) {
    const response = await api.get("/getpantrystaplesstate",
        {params:{
            stockId: stockId,
            pantryStaplesId: pantryStaplesId
        }}
    )

    return response.data;    
}


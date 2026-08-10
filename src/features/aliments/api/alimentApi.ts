import axios from "axios";


/**
 * Récupère la liste de tous les ingrédients en base
 * @returns 
 */
export async function getAllAliments() {
    const response = await axios.get('/api/getAliments')
    return response.data.alimentViewModelList
}
import api from "./http";

export async function getImage(width: number, height: number): Promise<any> {
    const response = await api.get(`?width=${width}&height=${height}`);
    return response.data;
}
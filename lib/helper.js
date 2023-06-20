const BASE_URL = "http://localhost:3000"

// todas matrizes
export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/api/matrizes`)
    const json = await response.json()

    return json;
}

// unica matriz
export const getUser = async (matrizId) => {
    const response = await fetch(`${BASE_URL}api/users/${matrizId}`)
    const json = await response.json()

    if (json) return json;
    return {}
}

//POST nova matriz
export async function addMatriz(formData) {
    try {
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}api/users`, Options)
        const json = await response.json()

        return json;
    } catch (error) {
        return error;
    }
}


//UPDATE nova matriz
export async function updateMatriz(userId, formData) {
    try {
        const Options = {
            method: 'PUT',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}api/users/${userId}`, Options)
        const json = await response.json()

        return json;
    } catch (error) {

    }
}

//DELETE nova matriz
export async function deleteMatriz(userId) {
    try {
        const Options = {
            method: 'DELETE',
            headers: { 'Content-Type': "application/json" },
        }

        const response = await fetch(`${BASE_URL}api/users/${userId}`, Options)
        const json = await response.json()

        return json;
    } catch (error) {

    }
}
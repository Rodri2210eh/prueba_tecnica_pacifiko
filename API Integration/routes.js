export const seconds = 1000;
// URL de la API
const url = "http://dummy.restapiexample.com/api/v1/employees";

// Realizar una solicitud GETAll
export async function getAllInfo() {
    try {
        const response = await fetch(url);

        await delay(seconds);

        if (!response.ok) {
            throw new Error(`La solicitud GET no fue exitosa. Código de estado: ${response.status}`);
        }
        const data = await response.json();
        return data; // Retorna los datos obtenidos
    } catch (error) {
        console.error("Error al realizar la solicitud GET:", error);
        throw error;
    }
}

export async function getByIdInfo(id) {
    // URL de la API con el ID dinámico
    const urlId = `http://dummy.restapiexample.com/api/v1/employee/${id}`;

    try {
        const response = await fetch(urlId);

        await delay(seconds);

        // Verificar si la respuesta fue exitosa (código de estado 200)
        if (!response.ok) {
            throw new Error(`La solicitud GET no fue exitosa. Código de estado: ${response.status}`);
        }

        // Convertir la respuesta a JSON y retornar los datos
        data = await response.json();
        return data
    } catch (error) {
        console.error("Error al realizar la solicitud GET:", error);
        throw error;
    }
}

export async function postInfo(data, urlPost) {
    try {
        // Options for the POST request
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        // Make a POST request
        const response = await fetch(urlPost, options);

        // Introduce a delay (e.g., 1000 milliseconds)
        await delay(seconds);

        // Check if the response was successful (status code 200)
        if (!response.ok) {
            throw new Error(`La solicitud POST no fue exitosa. Código de estado: ${response.status}`);
        }

        // Convert the response to JSON and return the data
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error al realizar la solicitud POST:", error);
        throw error;
    }
}

// Delay function
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
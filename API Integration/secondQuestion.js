import { postInfo } from "./routes.js";

// URL de la API
const urlPost = "https://dummy.restapiexample.com/api/v1/create";

// Datos que deseas enviar en la solicitud POST (en este ejemplo, un objeto JSON)
const postData = { "name": "Rodrigo Espinach", "salary": "1230000", "age": "23" }

//Create a record with your name. You can use fake data for the other attributes.

postInfo(postData, urlPost)
    .then((data) => {
        console.log("New employeed added")
        const myId = data.data.id
        //What’s your user id?
        console.log(`My ID is ${myId}`);
    });

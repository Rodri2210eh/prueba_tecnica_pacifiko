import { seconds, getAllInfo, delay } from "./routes.js";
//How many employees earn more than $300,000.00?

var numberOfHighEmployees = 0

// Add a delay before making the request
getAllInfo()
    .then((data) => {
        const employees = data.data;
        const highEmployees = employees.filter(employee => {
            const salary = parseFloat(employee.employee_salary);
            return salary > 300000;
        });

        //Realiza un delay para evitar error 429
        delay(seconds)

        // Obtiene la cantidad de empleados que ganan más de $300,000.00
        numberOfHighEmployees = highEmployees.length;
        console.log(`Number of employees earning more than $300,000.00: ${numberOfHighEmployees}`);
    })
    .catch((error) => {
        console.error("Error al obtener los datos:", error);
    });
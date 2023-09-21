import express from 'express';
import bodyParser from 'body-parser';
import pgp from 'pg-promise';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Obtener la ruta del directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));

const pgPromise = pgp();
const db = pgPromise('postgres://postgres:password1234@localhost:5432/prueba_pacifiko');

const app = express();

app.use(bodyParser.json());

// Configura el tipo MIME para archivos CSS
app.use('/css', express.static(__dirname + '/css', {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    },
}));

app.use(express.urlencoded({ extended: true }));

// Configurar Express para usar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Menu principal
app.get('/', async (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener pagina principal' });
    }
});

// Obtener lista de productos y sus cantidades en stock
app.get('/products', async (req, res) => {
    try {
        const products = await db.any('SELECT * FROM Product');
        console.log(products)
        res.render('products', { products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
});

// Buscar productos por nombre
app.get('/products/search', async (req, res) => {
    const { searchTerm } = req.query;
    try {
        const products = await db.any('SELECT * FROM Product WHERE product_name ILIKE $1', [`%${searchTerm}%`]);
        res.render('products', { products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar productos' });
    }
});

app.get('/orders', async (req, res) => {
    try {
        const products = await db.any('SELECT * FROM Product');
        const customers = await db.any('SELECT * FROM Customer');
        res.render('formOrders', {products, customers});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener pagina principal' });
    }
});

// Crear un nuevo pedido
app.post('/orders', async (req, res) => { // Cambié la ruta a '/api/orders' para que coincida con la estructura de tus rutas
    console.log(req);
    const { customer_id, product_id, quantity, subtotal, order_items } = req.body;

    try {
        // Crear un nuevo pedido en la tabla "Orders"
        const newOrder = await db.one('INSERT INTO Orders (customer_id, order_date) VALUES ($1, CURRENT_DATE) RETURNING order_id', [customer_id]);

        if (product_id != ''){
            await db.none('INSERT INTO OrderItem (order_id, product_id, quantity, subtotal) VALUES ($1, $2, $3, $4)',
                [newOrder.order_id, product_id, quantity, subtotal]);
        }

        // Insertar elementos de pedido en la tabla "OrderItem" (plural)
        for (const item of order_items) {
            await db.none('INSERT INTO OrderItem (order_id, product_id, quantity, subtotal) VALUES ($1, $2, $3, $4)',
                [newOrder.order_id, item.product_id, item.quantity, item.subtotal]);
        }

        // Redirigir al usuario a la página principal con un mensaje de éxito
        res.redirect('/?success=Pedido%20creado%20exitosamente'); // Agregamos un parámetro "success" para el mensaje
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al realizar el pedido' });
    }
});

app.listen(3000, () => {
    console.log('Runing on port 3000');
});

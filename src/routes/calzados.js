const express = require("express")
const router = express.Router();
const calzadosModel = require("../models/calzados")

/**
 * @swagger
 * components:
 *  schemas:
 *      calzados:
 *            type: object
 *            properties:
 *              precio:
 *                    type: integer
 *                    description: precio del producto
 *   
 *              id:
 *                type: integer
 *                description: id para iterar
 *    
 *              title:
 *                   type: string
 *                   description: nombre del producto
 *    
 *              marca:
 *                   type: string
 *                   description: marca del producto
 *    
 *              color: 
 *                   type: string
 *                   description: color del producto
 *              talla:
 *                   type: integer
 *                   description: talla del producto
 *              thumbnailUrl:
 *                          type: string
 *                          description: enlace de imagen

 *                
 *            required:
 *                - precio
 *                - id
 *                - title
 *                - marca
 *                - color
 *                - talla
 *            example:
 *                precio: 40
 *                id: 1
 *                title: pantalon
 *                marca: algosada
 *                color: negro
 *                tallas: m
 *                enlace: hhtp/
 */
/**
 * @swagger
 * /api/calzados:
 *  get:
 *     summary: lista de calzado
 *     tags: [calzados]
 *     responses:
 *          200:
 *              description: calzado mostrados correctamente         
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/calzados'
 *  
 *  
 *  
 *  post:
 *     summary: Crear un nuevo usuario
 *     tags: [calzados]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/calzados'
 *     responses:
 *      201:
 *        description: elemento creado correctamente
 *        content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/calzados'
 */  

/**
 * @swagger
 * components:
 *   schemas:
 *     calzados:
 *       type: object
 *       properties:
 *         precio:
 *           type: integer
 *           description: Precio del calzado
 *         id:
 *           type: integer
 *           description: ID para iterar
 *         title:
 *           type: string
 *           description: Nombre del calzado
 *         marca:
 *           type: string
 *           description: Marca del calzado
 *         color:
 *           type: string
 *           description: Color del calzado
 *         talla:
 *           type: string
 *           description: Talla del calzado
 *         thumbnailUrl:
 *           type: string
 *           description: Enlace de imagen
 *       required:
 *         - precio
 *         - id
 *         - title
 *         - marca
 *         - color
 *         - talla
 *       example:
 *         precio: 40
 *         id: 1
 *         title: zapatilla
 *         marca: algunaMarca
 *         color: negro
 *         talla: 40
 *         thumbnailUrl: http://example.com/image.jpg
 */

/**
 * @swagger
 * /api/calzados:
 *   get:
 *     summary: Lista de calzado
 *     tags: [calzados]
 *     responses:
 *       200:
 *         description: calzado mostrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/calzados'
 *  
 *   post:
 *     summary: Crear un nuevo calzado
 *     tags: [calzados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/calzados'
 *     responses:
 *       201:
 *         description: calzado creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/calzados'
 */

/**
 * @swagger
 * /api/calzados/{productoId}:
 *   put:
 *     summary: Actualizar un calzado existente por ID
 *     tags: [calzados]
 *     parameters:
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/calzados'
 *     responses:
 *       200:
 *         description: calzado actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/calzados'
 * 
 *   delete:
 *     summary: Eliminar un calzado existente por ID
 *     tags: [calzados]
 *     parameters:
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: calzado eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/calzados'
 *       404:
 *         description: calzado no encontrado
 *         content:
 *           application/json:
 *             example:
 *               mensaje: calzado no encontrado   
 */ 

/**
 * @swagger
 * /api/calzados:
 *   get:
 *     summary: Buscar calzados por varios parámetros
 *     tags: [calzados]
 *     parameters:
 *       - in: query
 *         name: marca
 *         schema:
 *           type: string
 *         description: Marca del calzado
 *       - in: query
 *         name: color
 *         schema:
 *           type: string
 *         description: Color del calzado
 *       - in: query
 *         name: talla
 *         schema:
 *           type: string
 *         description: Talla del calzado
 *     responses:
 *       200:
 *         description: calzados encontrados correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/calzados'
 *       500:
 *         description: Error en la consulta
 *         content:
 *           application/json:
 *             example:
 *               mensaje: Error en la consulta
 */

//get
router.get("/calzados", (req, res) => { 
    calzadosModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje: error}))
});


//get con productoproductoId
router.get("/calzados", async (req, res) => {
    try {
    const { marca, color, talla } = req.query;
    const criterio = {};
    if (marca) criterio.marca = marca;
    if (color) criterio.color = color;
    if (talla) criterio.talla = talla;
    const calzados = await calzadosModel.find(criterio);
    res.json(calzados);
    } catch (error) {
    res.status(500).json({ mensaje: "Error en la consulta", error: error.message });
    }
});


//post
router.post("/calzados", (req, res) => { 
    const venta = calzadosModel(req.body);
    venta.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});

//put
router.put("/calzados/:productoId", (req, res) => { 
    const {productoId} = req.params;
    const {precio, id, title, marca, color, talla } = req.body;
    calzadosModel.updateOne({_id:productoId}, {$set:{precio, id, title, marca, color, talla }})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


//delete
router.delete("/calzados/:productoId", (req, res) => { 
    const {productoId} = req.params;
    calzadosModel.deleteOne({_id:productoId})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.json({mensaje: error}))
});


module.exports = router;
const express = require("express")
const router = express.Router();
const polosModel = require("../models/polos")

/**
 * @swagger
 * components:
 *  schemas:
 *      polos:
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
 *                   type: string
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
 * /api/polos:
 *  get:
 *     summary: lista de elementos
 *     tags: [polos]
 *     responses:
 *          200:
 *              description: elementos mostrados correctamente         
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/polos'
 *  
 *  
 *  
 *  post:
 *     summary: Crear un nuevo usuario
 *     tags: [polos]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/polos'
 *     responses:
 *      201:
 *        description: elemento creado correctamente
 *        content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/polos'
 */  

/**
 * @swagger
 * /api/polos/{productoId}:
 *  put:
 *     summary: Actualizar un elemento existente
 *     tags: [polos]
 *     parameters:
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/polos'
 *     responses:
 *      200:
 *        description: elemento actualizado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/polos'
 * 
 * 
 *  delete:
 *     summary: Eliminar un elemento existente
 *     tags: [polos]
 *     parameters:
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: elemento eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/polos'
 *       404:
 *          description: elemento no encontrado
 *          content:
 *           application/json:
 *             example:
 *               mensaje: elemento no encontrado   
 *  get:
 *     summary: Obtner un elemento existente por id
 *     tags: [polos]
 *     parameters:
 *       - in: path
 *         name: productoId
 *         required: true
 *         schema:
 *           type: string
 *     
 *     responses:
 *      200:
 *        description: elemento encontrado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/polos'
 *      404:
 *        description: elemento no encontrado
 *        content:
 *          application/json:
 *            example:
 *              mensaje: elemento no encontrado
 */ 
/** 
* @swagger
 * paths:
 *   /api/polos/{title}:
 *     get:
 *       summary: Obtener un elemrnto existente por nombre
 *       tags: [polos]
 *       parameters:
 *         - in: path
 *           name: title
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: elemento encontrado correctamente
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/polos'
 *         '404':
 *           description: elemento no encontrado
 *           content:
 *             application/json:
 *               example:
 *                 mensaje: elemento no encontrado
 */

//get
router.get("/polos", (req, res) => { 
    polosModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});

//get con productoproductoId

router.get("/polos/:title", (req, res) => { 
    const { title } = req.params;
    polosModel.findOne({ title: title })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});
//post
router.post("/polos", (req, res) => { 
    const venta = polosModel(req.body);
    venta.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});

//put
router.put("/polos/:productoId", (req, res) => { 
    const {productoId} = req.params;
    const {precio, id, title, marca, color, talla } = req.body;
    polosModel.updateOne({_id:productoId}, {$set:{precio, id, title, marca, color, talla }})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


//delete
router.delete("/polos/:productoId", (req, res) => { 
    const {productoId} = req.params;
    polosModel.deleteOne({_id:productoId})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.json({mensaje: error}))
});


module.exports = router;
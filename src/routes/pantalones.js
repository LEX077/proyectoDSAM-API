const express = require("express")
const router = express.Router();
const pantalonesModel = require("../models/pantalones")

/**
 * @swagger
 * components:
 *  schemas:
 *      pantalones:
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
 * /api/pantalones:
 *  get:
 *     summary: lista de pantalones
 *     tags: [pantalones]
 *     responses:
 *          200:
 *              description: pantalones mostrados correctamente         
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/pantalones'
 *  
 *  
 *  
 *  post:
 *     summary: Crear un nuevo usuario
 *     tags: [pantalones]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pantalones'
 *     responses:
 *      201:
 *        description: elemento creado correctamente
 *        content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/pantalones'
 */  

/**
 * @swagger
 * /api/pantalones/{productoId}:
 *  put:
 *     summary: Actualizar un elemento existente
 *     tags: [pantalones]
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
 *            $ref: '#/components/schemas/pantalones'
 *     responses:
 *      200:
 *        description: elemento actualizado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pantalones'
 * 
 * 
 *  delete:
 *     summary: Eliminar un elemento existente
 *     tags: [pantalones]
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
 *               $ref: '#/components/schemas/pantalones'
 *       404:
 *          description: elemento no encontrado
 *          content:
 *           application/json:
 *             example:
 *               mensaje: elemento no encontrado   
 *  get:
 *     summary: Obtner un elemento existente por id
 *     tags: [pantalones]
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
 *              $ref: '#/components/schemas/pantalones'
 *      404:
 *        description: elemento no encontrado
 *        content:
 *          application/json:
 *            example:
 *              mensaje: elemento no encontrado
 */ 
//get
router.get("/pantalones", (req, res) => { 
    pantalonesModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});

//get con productoproductoId
router.get("/pantalones/:productoId", (req, res) => { 
    const {productoId} = req.params;
    pantalonesModel.findById(productoId)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});

//post
router.post("/pantalones", (req, res) => { 
    const venta = pantalonesModel(req.body);
    venta.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});

//put
router.put("/pantalones/:productoId", (req, res) => { 
    const {productoId} = req.params;
    const {precio, id, title, marca, color, talla } = req.body;
    pantalonesModel.updateOne({_id:productoId}, {$set:{precio, id, title, marca, color, talla }})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


//delete
router.delete("/pantalones/:productoId", (req, res) => { 
    const {productoId} = req.params;
    pantalonesModel.deleteOne({_id:productoId})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.json({mensaje: error}))
});


module.exports = router;
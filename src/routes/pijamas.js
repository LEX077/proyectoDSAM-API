const express = require("express")
const router = express.Router();
const pijamasModel = require("../models/pijamas")

/**
 * @swagger
 * components:
 *  schemas:
 *      pijamas:
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
 * /api/pijamas:
 *  get:
 *     summary: lista de pijamas
 *     tags: [pijamas]
 *     responses:
 *          200:
 *              description: pijamas mostrados correctamente         
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/pijamas'
 *  
 *  
 *  
 *  post:
 *     summary: Crear un nuevo usuario
 *     tags: [pijamas]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pijamas'
 *     responses:
 *      201:
 *        description: elemento creado correctamente
 *        content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/pijamas'
 */  

/**
 * @swagger
 * /api/pijamas/{productoId}:
 *  put:
 *     summary: Actualizar un elemento existente
 *     tags: [pijamas]
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
 *            $ref: '#/components/schemas/pijamas'
 *     responses:
 *      200:
 *        description: elemento actualizado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/pijamas'
 * 
 * 
 *  delete:
 *     summary: Eliminar un elemento existente
 *     tags: [pijamas]
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
 *               $ref: '#/components/schemas/pijamas'
 *       404:
 *          description: elemento no encontrado
 *          content:
 *           application/json:
 *             example:
 *               mensaje: elemento no encontrado   
 *  get:
 *     summary: Obtner un elemento existente por id
 *     tags: [pijamas]
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
 *              $ref: '#/components/schemas/pijamas'
 *      404:
 *        description: elemento no encontrado
 *        content:
 *          application/json:
 *            example:
 *              mensaje: elemento no encontrado
 */ 
//get
router.get("/pijamas", (req, res) => { 
    pijamasModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});

//get con productoproductoId
router.get("/pijamas/:productoId", (req, res) => { 
    const {productoId} = req.params;
    pijamasModel.findById(productoId)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});

//post
router.post("/pijamas", (req, res) => { 
    const venta = pijamasModel(req.body);
    venta.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});

//put
router.put("/pijamas/:productoId", (req, res) => { 
    const {productoId} = req.params;
    const {precio, id, title, marca, color, talla } = req.body;
    pijamasModel.updateOne({_id:productoId}, {$set:{precio, id, title, marca, color, talla }})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


//delete
router.delete("/pijamas/:productoId", (req, res) => { 
    const {productoId} = req.params;
    pijamasModel.deleteOne({_id:productoId})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.json({mensaje: error}))
});


module.exports = router;
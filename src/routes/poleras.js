const express = require("express")
const router = express.Router();
const polerasModel = require("../models/poleras")

/**
 * @swagger
 * components:
 *  schemas:
 *      poleras:
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
 * /api/poleras:
 *  get:
 *     summary: lista de poleras
 *     tags: [poleras]
 *     responses:
 *          200:
 *              description: poleras mostrados correctamente         
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                      items:
 *                          $ref: '#components/schemas/poleras'
 *  
 *  
 *  
 *  post:
 *     summary: Crear un nuevo elemento
 *     tags: [poleras]
 *     requestBody:
 *       required: true
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/poleras'
 *     responses:
 *      201:
 *        description: elemento creado correctamente
 *        content:
 *          application/json:
 *           schema:
 *             $ref: '#/components/schemas/poleras'
 */  

/**
 * @swagger
 * /api/poleras/{productoId}:
 *  put:
 *     summary: Actualizar un elemento existente
 *     tags: [poleras]
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
 *            $ref: '#/components/schemas/poleras'
 *     responses:
 *      200:
 *        description: elemento actualizado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/poleras'
 * 
 * 
 *  delete:
 *     summary: Eliminar un elemento existente
 *     tags: [poleras]
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
 *               $ref: '#/components/schemas/poleras'
 *       404:
 *          description: elemento no encontrado
 *          content:
 *           application/json:
 *             example:
 *               mensaje: elemento no encontrado   
 *  get:
 *     summary: Obtner un elemento existente por id
 *     tags: [poleras]
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
 *              $ref: '#/components/schemas/poleras'
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
 *   /api/poleras/{title}:
 *     get:
 *       summary: Obtener un elemrnto existente por nombre
 *       tags: [poleras]
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
 *                 $ref: '#/components/schemas/poleras'
 *         '404':
 *           description: elemento no encontrado
 *           content:
 *             application/json:
 *               example:
 *                 mensaje: elemento no encontrado
 */
//get
router.get("/poleras", (req, res) => { 
    polerasModel.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});
router.get("/poleras/:title", (req, res) => { 
    const { title } = req.params;
    polerasModel.findOne({ title: title })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});
//get con productoproductoId
router.get("/poleras/:productoId", (req, res) => { 
    const {productoId} = req.params;
    polerasModel.findById(productoId)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
});

//post
router.post("/poleras", (req, res) => { 
    const venta = polerasModel(req.body);
    venta.save()
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});

//put
router.put("/poleras/:productoId", (req, res) => { 
    const {productoId} = req.params;
    const {precio, id, title, marca, color, talla } = req.body;
    polerasModel.updateOne({_id:productoId}, {$set:{precio, id, title, marca, color, talla }})
    .then((data) => res.json({mensaje: "Objeto guardado correctamente"}))
    .catch((error) => res.json({mensaje: error}))
});


//delete
router.delete("/poleras/:productoId", (req, res) => { 
    const {productoId} = req.params;
    polerasModel.deleteOne({_id:productoId})
    .then((data) => res.json({mensaje: "Objeto eliminado"}))
    .catch((error) => res.json({mensaje: error}))
});


module.exports = router;
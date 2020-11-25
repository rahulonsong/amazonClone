const router = require('express').Router()
const Product = require('../models/product')

const upload = require('../middlewares/upload-photo')
// POST request for a new product
router.post('/products', upload.single('photo'), async (req, res) => {
  try {
    const product = new Product()
    product.title = req.body.title
    product.description = req.body.description
    product.photo = req.file.location
    product.stockQuantity = req.body.stockQuantity

    await product.save()
    res.json({
      status: true,
      message: 'Successfully saved!'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
})

// GET request - get all products

// GET request - get q single product

// PUT request - update a single product

// DELETE request - delete a single product

module.exports = router

const router = require('express').Router()
const Product = require('../models/product')

const upload = require('../middlewares/upload-photo')
// POST request for a new product
router.post('/products', upload.single('photo'), async (req, res) => {
  try {
    const product = new Product()
    product.ownerID = req.body.ownerID
    product.categoryID = req.body.categoryID
    product.price = req.body.price
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
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find()
    res.json({
      success: true,
      products: products
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})
// GET request - get a single product
router.get('/product/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id })
    res.json({
      success: true,
      product: product
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})
// PUT request - update a single product
router.put('/product/:id', upload.single('photo'), async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          category: req.body.category,
          photo: req.body.photo,
          description: req.body.description,
          owner: req.body.owner
        }
      },
      {
        upsert: true
      }
    )
    res.json({
      success: true,
      updatedProduct: product
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})
// DELETE request - delete a single product
router.delete('/product/:id', async (req, res) => {
  try {
    const deleteedProduct = await Product.findOneAndDelete({ _id: req.params.id })
    if (deleteedProduct) {
      res.json({
        status: true,
        message: 'successfully deleted!'
      })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
})
module.exports = router

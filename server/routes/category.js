const router = require('express').Router()
const Category = require('../models/category')

// POST request

router.post('/categories', async (req, res) => {
  try {
    const category = new Category()
    category.name = req.body.name
    category.about = req.body.about
    category.photo = req.body.photo

    await category.save()

    res.json({
      success: true,
      message: 'Successfully created a new category'
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

// GET request

router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find()
    res.json({
      success: true,
      categories: categories
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

module.exports = router

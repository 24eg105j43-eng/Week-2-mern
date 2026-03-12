import exp from 'express'

export const productApp = exp.Router()

let products = []

// Get all products
productApp.get('/products', (req, res) => {
    res.json({
        message: "products",
        payload: products
    })
})


// Get product by brand
productApp.get('/products/:brand', (req, res) => {

    let b = req.params.brand

    let p = products.filter(product => product.brand === b)

    if (p.length === 0) {
        return res.json({ msg: "no products with specified brand" })
    }

    res.json({ payload: p })
})


// Add new product
productApp.post('/products', (req, res) => {

    const newProduct = req.body

    products.push(newProduct)

    res.json({ msg: "new product is added" })
})


// Update product
productApp.put('/products', (req, res) => {

    let modifiedproduct = req.body

    let index = products.findIndex(product => product.id === modifiedproduct.id)

    if (index === -1) {
        return res.json({ msg: "product not found" })
    }

    products.splice(index, 1, modifiedproduct)

    res.json({ msg: "product modified" })
})


// Delete product
productApp.delete('/products/:id', (req, res) => {

    let idOfUrl = Number(req.params.id)

    let ind = products.findIndex(product => product.id === idOfUrl)

    if (ind === -1) {
        return res.json({ msg: "product not found to delete" })
    }

    products.splice(ind, 1)

    res.json({ msg: "Product removed" })
})
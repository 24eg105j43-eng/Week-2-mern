import exp from 'express'
import { productApp } from './API/productApi.js'

const app = exp()

// middleware
app.use(exp.json())

// route
app.use('/product-api', productApp)

// port
const port = 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
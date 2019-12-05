const express = require( 'express' )
const app = express()
const request = require('request')
const path = require('path')


app.use(express.static(path.join(__dirname, '.', 'dist')))
app.use(express.static(path.join(__dirname,'.','node_modules')))





app.get('/sanity/', (req, res) => {
    
    res.send('ok')

})


app.get('/recipes/:ingredient', (req, res) => {
    request.get(`https://recipes-goodness.herokuapp.com/recipes/${req.params.ingredient}`, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send(JSON.parse(body).results.map(recipeArray =>{
                return {title:recipeArray.title, thumbnail:recipeArray.thumbnail ,href:recipeArray.href}
            })
        )}
    })
})
    









const port = 8080
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

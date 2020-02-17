const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.send(`Server is running on Port ${PORT}`)
    
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
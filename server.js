const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const path = require('path')

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html')); // relative path
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3001

app.use(express.static( 'client/dist' ));

app.get("/api", (req, res)=>{
    res.send("Hello")
})

app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, './client/dist/index.html')); // relative path
  });


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
const express = require("express")
const app = express()

const fs = require("fs")

const getHtmlString = () => {
    return fs.readFileSync("index.html").toString()
}

app.get("/", (req, res) => {
    res.send(getHtmlString())
})

app.listen(3000)
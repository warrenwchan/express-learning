const express = require('express')
const app = express()



app.listen(3000, function (err) {
    err && console.log(err);
    console.log('Example app listening on port 3000!')
})

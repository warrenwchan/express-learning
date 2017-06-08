const express = require('express')
const app = express()
const pgp = require('pg-promise')({
    // Initialization Options
});
const cors = require('cors')

var cn = {
    host: 'localhost',
    port: 5432,
    database: 'newtest',
    user: 'warrenchan',
    password: 'keys'
};

var db = pgp(cn);

app.use(express.static(__dirname + '/public/build'));

app.get('/players', cors(), (req, res) => {
    db.any('SELECT * FROM players')
    .then(function(players) {
        res.json(players)
    })
    .catch(function(error){
        console.log('Error', error)
        res.status(500).end();
    })
})

app.listen(3000, function (err) {
    err && console.log(err);
    console.log('Example app listening on port 3000!')
})

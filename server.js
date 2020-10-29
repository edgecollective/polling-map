 var express = require("express")
var app = express()

var HTTP_PORT = 8100

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.use(express.static('public'))

app.get('/mapdata', (req, res) => {
    
    console.log('yeah');
    res.json({ username: 'Flavio' });

});

/*
app.get("/api/users", (req, res, next) => {
    
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            //"message":"success",
            "data":32
            //rows
        })
      });
});
*/
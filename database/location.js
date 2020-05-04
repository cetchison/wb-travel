var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) {
        throw err;
    }

    var dbo = db.db("data");

    dbo.createCollection("locations", function (err, res) {
        if (err) {
            throw err;
        }
        console.log("locations Collection created!");
        db.close();
    });
});

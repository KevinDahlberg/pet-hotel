var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {
  host: 'localhost',
  port: 5432,
  database: 'chi',
  max: 20,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

router.get('/', function(req, res){
  pool.connect(function(errorConnectingToDB, db, done) {
    if (errorConnectingToDB) {
      console.log('ERROR CONNECTING TO DATABASE');
      res.send(500);
    } else {
      db.query('SELECT * FROM "owners"', function(queryError, result) {
        done();
        if (queryError) {
          console.log("ERROR MAKING QUERY");
          res.send(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
});

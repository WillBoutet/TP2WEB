var express = require("express");

var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/evenements", (req, res, next) => {
    res.json(
        [
        { title: 'event 1', date: '2020-11-20' },
        { title: 'event 2', date: '2020-11-05' }
      ]
      )
   });
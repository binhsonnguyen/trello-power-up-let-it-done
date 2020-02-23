const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*'}));
app.use(express.static('public'));
app.get("*", function (request, response) {
    response.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT, function () {
    console.log('Listening on port ' + listener.address().port);
});

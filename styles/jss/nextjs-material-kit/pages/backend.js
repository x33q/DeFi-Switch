const truliooMiddleware = require('trulioo-embedid-middleware')({
apiKey: “1ee3ce8b16d7539bb8773ea7e6df28e0” });
const express = require('express');
const app = express();
const port = 8080;

app.use(truliooMiddleware)
app.listen(port, () => console.log('Example app listening on port ${port}!'));

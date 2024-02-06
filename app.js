const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Practicing a commnit in git and linking to jira ticket'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

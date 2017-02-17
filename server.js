// where all the logic living on the server side of our app lives

const express = require('express');

const app = express();

app.listen(4000, () => {
  console.log('Listening');
});
// where all the logic living on the server side of our app lives

const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();

// we want to let our app know that everytime we hit the url /graphQL to use expressGraphQL
// graphiql is used to query our development env server
app.use('/graphQL', expressGraphQL({
  graphiql: true
}))

app.listen(4000, () => {
  console.log('Listening');
});
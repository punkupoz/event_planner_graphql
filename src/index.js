import express from "express";
import gql from "graphql-tag";

const { createApolloFetch } = require('apollo-fetch');

const app = express();

const fetch = createApolloFetch({
  uri: 'http://localhost:4000'
})

app.get('/', (req, res) => {
  fetch({
    query: `
      query {
        users{
          id
          email
        }
      }
    `
  }).then(data => {
    console.log(data)
    res.send(data.data);
  })
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
});
// responsible for telling graphQL what your application data looks like
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = graphql;

// tells graphQL what a User Object looks like
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});
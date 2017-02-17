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

// root query lets us jump in our graph of data. here we are saying if you give me id of User 
// you are looking for, I will return that User to you

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString} },
      resolve(parentValue, args) {
        //we go in our DB and actually find that data.
      }
    }
  }
})
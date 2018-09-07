import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'

import { users } from './resolvers/queries'
import { createUser } from './resolvers/mutations'

const resolvers = {
  Query: {
    users
  },
  Mutation: {
    createUser
  }
}

const prisma = new Prisma({
  typeDefs: 'api/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
})

const server = new GraphQLServer({
  typeDefs: 'api/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma
  }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))
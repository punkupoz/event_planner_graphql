const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    users: (_, args, context, info) => {
      return context.prisma.query.users(
          {},
          info
        );
    }
  },
  Mutation: {
    createUser: (_, args, context, info) => {
      return context.prisma.mutation.createUser(
          {
            data: {
              username: args.username,
              password: args.password,
              realName: args.realName,
              phone: args.phone,
              email: args.email
            },
          },
          info
        )
    }
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))
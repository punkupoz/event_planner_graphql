exports.createUser = (_, args, context, info) => {
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
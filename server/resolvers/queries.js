exports.users = (_, args, context, info) => {
  return context.prisma.query.users(
      {},
      info
    );
}
//In my resolvers: Query.js and Mutation.js, I write all the logic that needs to happen

const { forwardTo } = require("prisma-binding");

const Query = {
  // I CAN USE forwardTo  when I  do not need custom logic or aunthentification between Graphql Yoga server and my Prisma database
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  me(parent, args, ctx, info) {
    // Check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
  },
};

module.exports = Query;

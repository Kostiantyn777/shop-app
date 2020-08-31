//In my resolvers: Query.js and Mutation.js, I write all the logic that needs to happen

const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

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

  async users(parent, args, ctx, info) {
    // 1.Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in");
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);

    //3.If they do, query all the users
    return ctx.db.users({}, info);
  },
};

module.exports = Query;

//In my resolvers: Query.js and Mutation.js, I write all the logic that needs to happen

const { forwardTo } = require("prisma-binding");

const Query = {
  // I CAN USE forwardTo  when I  do not need custom logic or aunthentification between Graphql Yoga server and my Prisma database
  items: forwardTo("db"),
  //async items(parent, args, ctx, info) {
  //const items = await ctx.db.query.items();
  //return items;
  //},
};

module.exports = Query;

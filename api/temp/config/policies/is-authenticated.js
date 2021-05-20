module.exports = async (ctx, next) => {
  console.log(ctx.state);
  if (ctx.state.user) {
    // Go to next policy or will reach the controller's action.
    return await next();
  }

  ctx.unauthorized(`You're not logged in!`);
};

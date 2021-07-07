module.exports = (req, res, next) => {
  console.log("this is test for the middleware");

  const { authorization } = req.headers;
  console.log(authorization);
  next();
};

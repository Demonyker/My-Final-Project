const responseWrapper = (result, res, next) => {
  if (result instanceof Error) {
    next(result);
  } else {
    res.send(result);
  }
};

module.exports = responseWrapper;

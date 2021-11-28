// while using async await use try catch or use this
module.exports = (func) => (req, res, next) =>
  Promise.resolve(func(req, res, next)).catch(next);

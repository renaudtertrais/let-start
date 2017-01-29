export default (test, ...use) => ({
  module: {
    rules: [{ test, use }],
  },
});

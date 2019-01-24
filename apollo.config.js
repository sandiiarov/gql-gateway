module.exports = {
  client: {
    service: {
      url: 'http://localhost:4000/graphql',
    },
    includes: ['packages/app/**/*.graphql'],
  },
};

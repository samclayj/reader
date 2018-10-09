const feed = require('./feed/feed.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(feed);
};

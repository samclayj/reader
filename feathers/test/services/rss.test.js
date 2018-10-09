const assert = require('assert');
const app = require('../../src/app');

describe('\'rss\' service', () => {
  it('registered the service', () => {
    const service = app.service('rss');

    assert.ok(service, 'Registered the service');
  });
});

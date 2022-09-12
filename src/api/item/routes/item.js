'use strict';

/**
 * item router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::item.item', {
  config: {
    create: {
      policies: ["valid-input"]
    }
  }
});

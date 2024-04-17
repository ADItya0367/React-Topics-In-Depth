'use strict';

/**
 * strapi-setup router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::strapi-setup.strapi-setup');

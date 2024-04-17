'use strict';

/**
 * strapi-setup controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::strapi-setup.strapi-setup');

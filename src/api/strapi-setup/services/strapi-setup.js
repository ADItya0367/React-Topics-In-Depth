'use strict';

/**
 * strapi-setup service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-setup.strapi-setup');

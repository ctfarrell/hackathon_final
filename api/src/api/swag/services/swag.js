'use strict';

/**
 * swag service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::swag.swag');

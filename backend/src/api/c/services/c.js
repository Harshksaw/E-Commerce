'use strict';

/**
 * c service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::c.c');

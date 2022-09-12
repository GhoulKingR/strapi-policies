'use strict';
const Joi = require('joi');

/**
 * `valid input` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  
  // Get request body data
  const requestData = policyContext.request.body["data"];

  // Create a schema to validate request body data
  const schema = Joi.object({
    name: Joi.string(),
    code: Joi.string()
          .pattern(/^[A-Z]\-[0-9][0-9][0-9][A-Z]$/), // "A-NNNA" format ( A - Alphabet, N - Number )
    price: Joi.number(),
  });

  // Validate the request body data
  const { error } = schema.validate(requestData);
  
  if (error) {
    strapi.log.info(error);

    // Stop request from proceeding if request body data isn't valid
    return false;
  } else {
    
    // Allow request to proceed if requst body data is valid
    return true;
  }

};
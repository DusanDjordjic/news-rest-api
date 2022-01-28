const { QueryParams } = require("../models/query-params");
const definedCountries = require("../utils/defined-countries");
const definedCategories = require("../utils/defined-categories");
module.exports.queryParamsMiddleware = (req, res, next) => {
  const myParams = new QueryParams(req.query);
  const { country, page, pageSize, category, skip } = myParams;

  // Country validators
  /**
   * If not defined return all countries;
   * if it`s defined it must be a string and
   * exist in definedCountries array
   */
  if (country) {
    if (!isNaN(country)) {
      throw {
        statusCode: 400,
        message: `Country must be a string`,
      };
    } else if (!definedCountries.includes(country)) {
      throw {
        statusCode: 400,
        message: `Country ${country} is not allowed`,
      };
    }
  }
  // Category validators
  /**
   * If not defined return all categories;
   * if it`s defined it must be a string and
   * exist in definedCategories array
   */
  if (category) {
    if (!isNaN(category)) {
      throw {
        statusCode: 400,
        message: `Category must be a string`,
      };
    } else if (!definedCategories.includes(category)) {
      throw {
        statusCode: 400,
        message: `Category ${category} is not allowed`,
      };
    }
  }
  // Page validators
  /**
   * Must be defined and must be a positive number
   * It will always be defined all always be a number that is not 0
   * because of the way we implemented QueryParams function
   */
  if (page) {
    if (page <= 0) {
      throw {
        statusCode: 400,
        message: `Page must be positive value`,
      };
    }
  } else {
    throw {
      statusCode: 400,
      message: `Page must be defined`,
    };
  }

  // PageSize validators
  /**
   * Can be null
   * If defined it will always be a number that is not 0
   * because of the way we implemented QueryParams function
   */
  if (pageSize) {
    if (pageSize <= 0) {
      throw {
        statusCode: 400,
        message: `PageSize must be positive value`,
      };
    }
  }
  // Skip validators
  /**
   * Can be null
   * If defined it will always be a number that is not 0
   * because of the way we implemented QueryParams function
   */
  if (skip) {
    if (skip <= 0) {
      throw {
        statusCode: 400,
        message: `Skip must be positive value`,
      };
    }
  }
  console.log(myParams);
  req.myParams = myParams;

  next();
};

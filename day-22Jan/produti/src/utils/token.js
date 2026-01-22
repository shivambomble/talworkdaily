const { DateTime } = require('luxon');

const generateExpiry = () => DateTime.now().plus({ minutes: 15 }).toISO();

module.exports = { generateExpiry };

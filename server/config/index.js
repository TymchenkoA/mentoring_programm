'use strict';

const path = require('path');

module.exports = {
  ROOT: path.join(__dirname, '..', 'public'),

  session: {
    secret: 'love'
  }
};

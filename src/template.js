'use strict';

const templates = {
  'react-component-lib-template': './templates/react-component-lib-template/',
};

function getTemplatePath(templateName) {
  return templates[templateName];
}

module.exports = {
  getTemplatePath,
};

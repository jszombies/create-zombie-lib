'use strict'

const templates = {
  'react-component-lib-template': './templates/react-component-lib-template/',
  'react-nextjs-app': './templates/react-nextjs-app/'
}

function getTemplatePath (templateName) {
  return templates[templateName]
}

module.exports = {
  getTemplatePath
}

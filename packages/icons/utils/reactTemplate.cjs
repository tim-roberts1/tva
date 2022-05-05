function defaultTemplate(variables, { tpl }) {
  return tpl`
import React from 'react';
import type { SVGProps } from 'react';

${variables.interfaces};

function ${variables.componentName}(${variables.props}) {
  ${variables.jsx}
}

${variables.exports};
`
}

module.exports = defaultTemplate

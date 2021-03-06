import OpenAPISecuritySchema from './OpenAPISecuritySchema';

export default {
  name: 'OpenAPISecuritySchemaMap',
  properties(node) {
    const props = {};
    Object.keys(node).forEach((k) => {
      props[k] = OpenAPISecuritySchema;
    });
    return props;
  },
};

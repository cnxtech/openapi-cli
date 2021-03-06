import { OpenAPIInfo } from './OpenAPIInfo';
import { OpenAPIPaths } from './OpenAPIPaths';
import OpenAPIComponents from './OpenAPIComponents';
import OpenAPIServer from './OpenAPIServer';
// import OpenAPISecurityRequirement from './OpenAPISecurityRequirement';
import OpenAPITag from './OpenAPITag';
import OpenAPIExternalDocumentation from './OpenAPIExternalDocumentation';

export const OpenAPIRoot = {
  name: 'OpenAPIRoot',
  isIdempotent: true,
  properties: {
    openapi: null,
    security: null,
    info: OpenAPIInfo,
    paths: OpenAPIPaths,
    servers: OpenAPIServer,
    components: OpenAPIComponents,
    // security: OpenAPISecurityRequirement,
    tags: OpenAPITag,
    externalDocs: OpenAPIExternalDocumentation,
  },
};


export default OpenAPIRoot;

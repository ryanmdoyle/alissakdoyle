// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// custom types
import directing from './directing';
import quote from './quote';
import show from './show';
import bio from './bio';
import settings from './settings';
import img from './img';
import resume from './resume';
import gallery from './gallery';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    show,
    directing,
    quote,
    bio,
    settings,
    img,
    resume,
    gallery,
  ])
})

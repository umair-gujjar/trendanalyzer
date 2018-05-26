import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend( DS.EmbeddedRecordsMixin, {
  primaryKey: 'title',
  attrs: {
    posts: { embedded: 'always' }
  }
});
/**
 * Municipio model
 */

import DS from 'ember-data';

export default DS.Model.extend({
  published: DS.attr('boolean', {
    defaultValue: true
  }),
  highlighted: DS.attr('number', {
    defaultValue: 0
  }),
  showInLists: DS.attr('boolean', {
    defaultValue: true
  }),

  name: DS.attr('string'),
  about: DS.attr('string'),
  body: DS.attr('string'),
  creator: DS.belongsTo('user', {
    async: true
  }),

  editors: DS.hasMany('user', {
    async: true,
    inverse: 'municipiosEditorIn'
  }),

  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  publishedAt: DS.attr('date'),
  tags: DS.attr(),
  category: DS.attr(),
  featuredImage: DS.attr('array'),
  images: DS.attr('array'),
  setAlias: DS.attr('string'),
  linkPermanent: DS.attr('string')
});
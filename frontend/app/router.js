import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('imprint');
  this.route('about');
  this.route('tags', function(){
    this.route('tag', {path: '/:tag_title'});
  });

});

export default Router;

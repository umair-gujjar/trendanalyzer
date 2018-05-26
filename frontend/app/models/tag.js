import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title:           DS.attr('string'),
  posts:           DS.hasMany('post', {async: true}),

  today:           '26. Mai',
  yesterday:       '25. Mai',
  yesteryesterday: '24. Mai',

  is_favorite:     DS.attr('boolean', { defaultValue: false }),
  post_count:      DS.attr('number'),
  retweet_count:   DS.attr('number'),
  like_count:      DS.attr('number'),
  popularity:      DS.attr('number'),
  contains_twitter:   DS.attr('boolean'),
  contains_instagram: DS.attr('boolean'),




  data_post_count:  computed('post_count', function(){
    return [
      ['Days', 'Post Count'],
      [this.get('today'), this.get('post_count')],
      [this.get('yesterday'), this.get('post_count')],
      [this.get('yesteryesterday'), this.get('post_count')],
    ];
  }),
  data_like_count:  computed('like_count', function(){
    return [
      ['Days', 'Like Count'],
      [this.get('today'), this.get('like_count')],
      [this.get('yesterday'), this.get('like_count')],
      [this.get('yesteryesterday'), this.get('like_count')],
    ];
  }),
  data_retweet_count:  computed('retweet_count', function(){
    return [
      ['Days', 'Retweet Count'],
      [this.get('today'), this.get('retweet_count')],
      [this.get('yesterday'), this.get('retweet_count')],
      [this.get('yesteryesterday'), this.get('retweet_count')],
    ];
  }),

  retweet_options: computed(function() {
    return {
        title: 'Retweet Count',
        height: 300,
        legend: {position: 'none'},
        vAxis: {
        viewWindow: {
            min:0
          }
        },
        colors: 'blue',

        animation: {
          startup: true,
          easing: 'inAndOut',
        },
      };
    }),
  like_options: computed(function() {
    return {
        title: 'Like Count',
        height: 300,
        legend: {position: 'none'},
        vAxis: {
        viewWindow: {
            min:0
          }
        },
        colors: 'green',

        animation: {
          startup: true,
          easing: 'inAndOut',
        },
      };
    }),
  post_options: computed(function() {
    return {
        title: 'Post Count',
        height: 300,
        legend: {position: 'none'},
        vAxis: {
        viewWindow: {
            min:0
          }
        },
        colors: 'red',

        animation: {
          startup: true,
          easing: 'inAndOut',
        },
      };
    }),
});

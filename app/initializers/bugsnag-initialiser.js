import Ember  from 'ember';
import config from '../config/environment';

var currentEnv = config.environment;

export default {
  name: 'bugsnag-error-service',

  initialize: function(container) {

      Ember.onerror = function (error) {
        console.error('Error');
      };

      Ember.RSVP.on('error', function(error) {
        console.error('Error');
      });

      Ember.Logger.error = function (message, cause, stack) {
        console.error('Error');
      };
    }
  }
};
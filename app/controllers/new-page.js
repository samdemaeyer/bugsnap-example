import Ember from 'ember';

export default Ember.Controller.extend({
  someValue: Ember.computed(function(){
    return 'Some value.';
  }),

  actions: {
    test() {
      this.set('someValue', 'Another Value!');
      return true;
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addProportion(){
      this.get('model.proportions').createRecord({})
    },
    submit(){
      this.get('model').save().then((cocktail) => {
        this.transitionToRoute("cocktails.cocktail", cocktail)
      }).catch((reason) =>{
        alert('boop')
      })
    }
  }
});

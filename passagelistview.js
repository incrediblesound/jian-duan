var passageListView = Backbone.View.extend({
  tagName: 'li',
  template: _.template(''
    +'<a href="#passages/<%= ID %>">'
    +'<%= title %>'),
  render: function(){
    console.log(this.model);
    this.$el.html(this.template(this.model.attributes));
  }
});
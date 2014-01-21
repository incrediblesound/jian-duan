var passageListView = Backbone.View.extend({
  tagName: 'li',
  template: _.template(''
    +'<a href="#passages/<%= ID %>">'
    +'<%= title %></a>'),
  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});
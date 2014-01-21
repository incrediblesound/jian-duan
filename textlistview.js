var textListView = Backbone.View.extend({
	tagName: 'li',
	template: _.template(''
		+'<a href="#texts/<%= text %>">'
		+'<%= text %></a>'),
	render: function(){
		this.$el.html(this.template(this.model.attributes));
	}
});
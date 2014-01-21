var homeView = Backbone.View.extend({
	el: '.list',
	listEl: '.text-list',
	template: _.template('<ol class="text-list">\
	</ol>'),
	initialize: function(){
			
   },
	render: function(){
		this.$el.html(''); // empty the html
     this.$el.html(this.template()); //you want to call teh template so it return a string
		this.collection.each(function(text){
			var textSubView = new textListView({model: text});
			textSubView.render();
			this.$el.find(this.listEl).append(textSubView.$el);
		}, this);
	}
});

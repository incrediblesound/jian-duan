var router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'texts/:textName': 'loadText'
	},
	initialize: function(){
		var passages = new Passages();
		passages.reset(passageData);
		this.homeView = new homeView({ collection: passages });
		this.textView = new textView({ collection: passages });
	},
	home: function(){
		this.homeView.render();
	},
	loadText: function(textName){
		this.textView.render(textName);
	}
});
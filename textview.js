var textView = Backbone.View.extend({
  el: '.info',  
  listEl: '.pass',
	template: _.template('<h2 attributes.text %></h1>\
		<p><%= attributes.info %></p>\
     <ul class="pass"></ul>\
  '),
	render: function(textName){
		var textModel = this.collection.where({
			text: textName
		})[0];
		var passageHtml = this.template(textModel);
		$('.info').html(passageHtml);
     var passage = textModel.attributes.passages;
     var This = this;
    _.each(passage, function(text) {
      passage = new Passage({
        ID: text.ID,
        title: text.title,
        trans: text.trans
      });
      var passageSubView = new passageListView({model: passage});
          passageSubView.render();
      This.$el.find(This.listEL).append(passageSubView.$el)
    });
  }
});
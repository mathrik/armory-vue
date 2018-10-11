new Vue({
  el: '.app-container',
  data: {
    message: 'Hello Vue.js!',
	posts: [
		{title: "My very first Vue.js post", body: "lorem ipsum some test dimpsum"},
		{title: "My second Vue.js post", body: "lorem ipsum some test dimpsum"},
		{title: "My third Vue.js post", body: "lorem ipsum some test dimpsum"}
	]
  },
  methods: {
	getPostsViaREST: function() {
		axios.get("https://jsonplaceholder.typicode.com/posts")
			.then(response => {this.posts = response.data})
	}
  }
})  


// https://render-us.worldofwarcraft.com/
// https://us.api.battle.net/wow/character/wyrmrest-accord/Daokou?locale=en_US&apikey=xd6kggq2jgkb29d2db7t548j2dtp8r7d
// https://us.api.battle.net/wow/character/wyrmrest-accord/Gromdrek?fields=pets&locale=en_US&apikey=xd6kggq2jgkb29d2db7t548j2dtp8r7d
// https://us.api.battle.net/wow/character/wyrmrest-accord/Gromdrek?fields=reputation&locale=en_US&apikey=xd6kggq2jgkb29d2db7t548j2dtp8r7d
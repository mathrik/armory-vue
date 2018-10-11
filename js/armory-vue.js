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
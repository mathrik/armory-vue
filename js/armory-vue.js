var landingpage = new Vue({
  el: '.app-container',
  data: {
  	apiData: {},
    avatar: 'https://render-us.worldofwarcraft.com/character/wyrmrest-accord/157/137192861-avatar.jpg',
    character: 'Daokou',
    characterName: 'Daokou',
    characterRace: 'Pandaren',
    characterClass: 'Warrior',
    charclasses: {},
    charraces: {},
    realm: 'wyrmrest-accord',
    showCharSelector: true,
	posts: [
		{title: "My very first Vue.js post", body: "lorem ipsum some test dimpsum"},
		{title: "My second Vue.js post", body: "lorem ipsum some test dimpsum"},
		{title: "My third Vue.js post", body: "lorem ipsum some test dimpsum"}
	],

  },
  created: function() {
  	axios.get('https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=xd6kggq2jgkb29d2db7t548j2dtp8r7d')
  		.then(response => {
  			this.charraces = response.data.races;
  		})
	axios.get('https://us.api.battle.net/wow/data/character/classes?locale=en_US&apikey=xd6kggq2jgkb29d2db7t548j2dtp8r7d')
  		.then(response => {
  			this.charclasses = response.data.classes;
  		})
  },
  methods: {
	fetchCharacter: function() {
		var url = 'https://us.api.battle.net/wow/character/' +
			this.realm + '/' + this.character + '?locale=en_US&apikey=xd6kggq2jgkb29d2db7t548j2dtp8r7d';
		axios.get(url).then(response => {
			this.apiData = response.data;
			this.avatar = 'https://render-us.worldofwarcraft.com/character/' + this.apiData.thumbnail;
			this.characterName = this.apiData.name;
			this.showCharSelector = false;
			var myclass = this.getClass(this.apiData.class);
			console.log(myclass);
			var race = this.getRace(this.apiData.race);
			this.characterRace = race.name;
			this.characterClass = myclass.name;
		})
	},
	getClass: function(id) {
		console.log('fetch class', this.charclasses);
		for (var i = 0; i < this.charclasses.length; i++) {
			if (this.charclasses[i].id === id) {
				return this.charclasses[i];
			}
		}
	},
	getRace: function(id) {
		for (var i = 0; i < this.charraces.length; i++) {
			if (this.charraces[i].id === id) {
				return this.charraces[i];
			}
		}
	},
	pickNewCharacter: function() {
		this.showCharSelector = true;
	}
  }
})  
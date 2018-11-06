var landingpage = new Vue({
  el: '.app-container',
  data: {
  	achievesVisible: false,
  	apiData: {},
    avatar: 'https://render-us.worldofwarcraft.com/character/wyrmrest-accord/157/137192861-avatar.jpg',
    apiDataLocation: 'https://us.api.battle.net/wow',
    battlePetsVisible: false,
    character: 'Daokou',
    characterName: 'Daokou',
    characterRace: 'Pandaren',
    characterClass: 'Warrior',
    charclasses: {},
    charraces: {},
    mountsVisible: false,
    profileVisible: false,
    realm: 'wyrmrest-accord',
    reputationVisible: false,
    showCharSelector: true,
	posts: [
		{title: "My very first Vue.js post", body: "lorem ipsum some test dimpsum"},
		{title: "My second Vue.js post", body: "lorem ipsum some test dimpsum"},
		{title: "My third Vue.js post", body: "lorem ipsum some test dimpsum"}
	],

  },
  created: function() {
  	axios.get(this.apiDataLocation + '/data/character/races?locale=en_US&apikey=xd6kggq2jgkb29d2db7t548j2dtp8r7d')
  		.then(response => {
  			this.charraces = response.data.races;
  		})
	axios.get(this.apiDataLocation + '/data/character/classes?locale=en_US&apikey=xd6kggq2jgkb29d2db7t548j2dtp8r7d')
  		.then(response => {
  			this.charclasses = response.data.classes;
  		})
  },
  methods: {
	fetchCharacter: function() {
		var url = this.apiDataLocation + '/character/' +
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
	},
	showAchievements: function() {
		this.achievesVisible = true;
		this.battlePetsVisible = false;
		this.mountsVisible = false;
		this.profileVisible = false;
		this.reputationVisible = false;
	},
	showBattlePets: function() {
		this.achievesVisible = false;
		this.battlePetsVisible = true;
		this.mountsVisible = false;
		this.profileVisible = false;
		this.reputationVisible = false;
	},
	showMounts: function() {
		this.achievesVisible = false;
		this.battlePetsVisible = false;
		this.mountsVisible = true;
		this.profileVisible = false;
		this.reputationVisible = false;
	},
	showProfile: function() {
		this.achievesVisible = false;
		this.battlePetsVisible = false;
		this.mountsVisible = false;
		this.profileVisible = true;
		this.reputationVisible = false;
	},
	showReputation: function() {
		this.achievesVisible = false;
		this.battlePetsVisible = false;
		this.mountsVisible = false;
		this.profileVisible = false;
		this.reputationVisible = true;
	}
  }
})  
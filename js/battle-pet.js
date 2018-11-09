Vue.component('battle-pet',{
	props: ['pet'],
	template: `
		<div class="battle-pet">
			<h3>{{ pet.creatureName }}</h3>
			<p>Favorite: {{ pet.isFavorite }}</p>
			<p>Name: {{ pet.name }}</p>
			<p>Quality: {{ pet.qualityId }}</p>
			<img v-bind:src="iconUrl" alt="pet icon" />
		</div>
		`,
	computed: {
		iconUrl: function() {
			return 'https://render-us.worldofwarcraft.com/icons/56/' + this.pet.icon + '.jpg';
		}
	}
})